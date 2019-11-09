const mongoose = require('mongoose');

const podcastSchema = new mongoose.Schema({
	userEmail: String,
	userName: String,
	category: String,
	title: String,
	article: String,
	imageURL: { type: String, default: 'https://www.swopememorialgolfcourse.com/images/slider-2.jpg' },
	dateAdded: Date,
	featured: { type: Boolean, default: false },
	snipet: String,
	storeHash: String
});

const Podcast = mongoose.model('Podcast', podcastSchema);
module.exports = Podcast;
