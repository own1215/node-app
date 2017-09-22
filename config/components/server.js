"use strict";

require('dotenv').config();

const joi = require('joi');

const envSchema = joi.object({

	PORT: joi.number()
		.required()

}).unknown()
.required();

const {error, value: envVars} = joi.validate(process.env, envSchema);

if (error) {
	throw new Error(`Configurate error: ${error.message}`);
}

module.exports = {
	server: {
		port: envVars.PORT
	}
};