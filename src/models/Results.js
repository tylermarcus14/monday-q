const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
	position: String,
	name: String,
	thru: String,
	score: String,
	dateAdded: Date,
});

const Result = mongoose.model('Result', resultSchema);
module.exports = Result;