const mongoose = require('mongoose');

const resultsEntrySchema = new mongoose.Schema({
	category: String,
	title: String,
	imageURL: { type: String, default: 'https://www.swopememorialgolfcourse.com/images/slider-2.jpg' },
	scrapeSite: String,
	scrapeURL: String,
	dateAdded: Date
});

const ResultsEntry = mongoose.model('ResultsEntry', resultsEntrySchema);
module.exports = ResultsEntry;