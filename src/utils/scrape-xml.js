// Dependencies
var mongojs = require("mongojs");
// Require axios and cheerio. This makes the scraping possible
var axios = require("axios");
var cheerio = require("cheerio");


var url = "http://results.swingthought.com/index.html?tourID=961";


axios.get(url).then(function(response) {
  // Load the html body from axios into cheerio
  var $ = cheerio.load(response.data);
  // An empty array to save the data that we'll scrape

  $("tbody>tr").each(function(i, element) {

    var position = $(element).find("td").text().trim();
    var name = $(element).find("td").slice(1).eq(0).text().trim();
    var thru = "18";
    var score = $(element).find("td").slice(4).eq(0).text().trim();

    if (thru) {
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