// Dependencies
var mongojs = require("mongojs");
// Require axios and cheerio. This makes the scraping possible
var axios = require("axios");
var cheerio = require("cheerio");


var url = "http://www.westfloridagolftour.com/TournamentResult.aspx?TournamentID=2075";


axios.get(url).then(function(response) {
  // Load the html body from axios into cheerio
  var $ = cheerio.load(response.data);

  // An empty array to save the data that we'll scrape

  $("#ctl00_MainContent_gvPursePlayersResults>tbody>tr").each(function(i, element) {
    if (i === 0) return true;
    var position = $(element).find("td").slice(0).eq(0).text().trim();
    var name = $(element).find("td").slice(1).eq(0).text().trim();
    var thru = "18";
    var score = $(element).find("td").slice(4).eq(0).text().trim();

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