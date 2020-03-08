// Dependencies
var mongojs = require("mongojs");
// Require axios and cheerio. This makes the scraping possible
var axios = require("axios");
var cheerio = require("cheerio");


var url = "https://agpts.bluegolf.com/bluegolf/agws19/event/agws199/contest/1/leaderboard.htm";


axios.get(url).then(function(response) {
    // Load the html body from axios into cheerio
    var $ = cheerio.load(response.data);
    // An empty array to save the data that we'll scrape

    $("tr").each(function(i, element) {
      var position = $(element).find("td.pos").slice(0).eq(0).text();
      var name = $(element).find("td.name>a>span.d-none.d-md-inline").slice(0).eq(0).text();
      var thru = $(element).find("td.thru").slice(0).eq(0).text();
      var score = $(element).find("td").slice(4).eq(0).text();

      if (position) {
        // Insert the data in the scrapedData db
        console.log(position,name,thru,score),
        function(err, inserted) {
          if (err) { defaultStatus
            // Log the error if one is encountered during the query
            console.log(err);
          }
          else {
            // Otherwise, log the inserted data
            console.log("Scraped");
          }
        };
      }
    });
  });
