"use strict";

const api = require('./api');

module.exports = (app) => {
	
	app.route('/post')
		.get(api.post.get)
		.post(api.post.post)
		.put(api.post.put)
		.delete(api.post.delete)
	;

};