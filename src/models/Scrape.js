const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
	userEmail: String,
	userName: String,
	category: String,
	title: String,
	imageURL: { type: String, default: 'https://www.swopememorialgolfcourse.com/images/slider-2.jpg' },
	scrapeURL: String,
	dateAdded: Date,
	snipet: String,
	storeHash: String
});

const Results = mongoose.model('Results', resultSchema);
module.exports = Results;