"use strict";

const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
	
	title: 	String,
	author: String,
	body: 	String,
	comments: [{
		body: String,
		date: { type: Date, default: Date.now }
	}],
	date: { type: Date, default: Date.now },
	hidden: Boolean,
	meta: {
		votes: 	Number,
		favs: 	Number
	}
});

module.exports = mongoose.model('Post', postSchema);