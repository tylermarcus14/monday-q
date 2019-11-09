const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
	userEmail: String,
	userName: String,
	category: String,
	title: String,
	article: String,
	imageURL: String,
	dateAdded: Date,
	storeHash: String
});

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;