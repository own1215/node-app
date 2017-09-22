"use strict";

const express 		= require('express');
const mongoose 		= require('mongoose')
const config 		= require('./config');
const cookieParser 	= require('cookie-parser');
const bodyParser 	= require('body-parser');
const session 		= require('express-session');
const flash			= require('connect-flash');
const app 			= express();

// db connect
mongoose.connect(config.db.url);

// middleware
app.use(cookieParser()); // read cookies (need for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
	secret: 'api-secter-key', // session secret
	resave: true,
	saveUninitialized: true
}));

app.use(flash()); // use connect-flash for flashmessages stored in session

// router
require('./web/router')(app);

// listener
app.listen(config.server.port, () => {
	console.log('Server start. PORT: ' + config.server.port);
});