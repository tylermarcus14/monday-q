// Dependencies
var mongojs = require("mongojs");
// Require axios and cheerio. This makes the scraping possible
var axios = require("axios");
var cheerio = require("cheerio");


var url = "http://service.shotstat.com/Scoreboard/GetInitialScoreboard?TournamentID=13682&TournamentDivisionID=undefined&IsCominedDivision=undefined";


axios.get(url).then(function(response) {
  // Load the html body from axios into cheerio
  var $ = cheerio.load(response.data);
  // An empty array to save the data that we'll scrape
  $(response.data.Scores).each(function(i, element) {
    var position = element.Position;
    var name = element.Player;
    var thru = element.ThruHole;
    var score = element.TotalToPar;


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