'use strict';

const server = require('./components/server');
const db = require('./components/mongo');

module.exports = Object.assign({}, server, db);