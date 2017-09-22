"use strict";

function all (req, res) {

	res.send('post - get');
};

function create (req, res) {

	res.send('post - post');
};

function edit (req, res) {

	res.send('post - put');
};

function del (req, res) {

	res.send('post - delete');
};


module.exports = {

	post: {
		get: all,
		post: create,
		put: edit,
		delete: del,
	}	

}