// Dependencies
var mongojs = require("mongojs");
// Require axios and cheerio. This makes the scraping possible
var axios = require("axios");
var cheerio = require("cheerio");


var url = "http://golfstatresults.com/webservices/swt.cfc?method=getPlayerLeaderBoardSinglesXML&UID=swtdc&pwd=swtdc2015&tournament_id=961";


axios.get(url).then(function(response) {
  // Load the html body from axios into cheerio
  var $ = cheerio.load(response.data);

  // An empty array to save the data that we'll scrape

  $("player").each(function(i, element) {
    var position = $(element).find("current_position").text().trim();
    var name = $(element).find("player_name").text().trim();
    var thru = $(element).find("today_thru").text().trim();
    var score = $(element).find("current_to_par").text().trim();


    if (position) {
      // Insert the data in the scrapedData db
      console.log(position,name,thru,score),
      function(err, inserted) {
        if (err) {
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