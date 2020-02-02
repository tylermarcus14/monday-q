// Dependencies
var mongojs = require("mongojs");
// Require axios and cheerio. This makes the scraping possible
var axios = require("axios");
var cheerio = require("cheerio");


// Database configuration
var databaseUrl =  process.env.MONGODB_URI || "golf-scrape";
var collections = ["results"];

// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});


axios.get("https://gapga.bluegolf.com/bluegolf/gapga19/event/gapga1949/contest/1/leaderboard.htm").then(function(response) {
    // Load the html body from axios into cheerio
    var $ = cheerio.load(response.data);

    // An empty array to save the data that we'll scrape

        $("tr").each(function(i, element) {
            var position = $(element).find("td.pos").slice(0).eq(0).text();
            var name = $(element).find("span.d-none.d-md-inline").slice(0).eq(0).text();
            var thru = $(element).find("td").slice(2).eq(0).text();
            var score = $(element).find("td").slice(3).eq(0).text();

      if (position) {
        // Insert the data in the scrapedData db
        db.scrapedData.insert({
            position: position,
            name: name,
            thru: thru,
            score: score      
          },
        function(err, inserted) {
          if (err) {
            // Log the error if one is encountered during the query
            console.log(err);
          }
          else {
            // Otherwise, log the inserted data
            console.log(inserted);
          }
        });
      }
    });
  });

