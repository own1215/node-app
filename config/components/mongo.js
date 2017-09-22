"use strict";

const joi = require('joi');

const envSchema = joi.object({

	MONGO_URL: joi.string()
		.required()

}).unknown()
.required();

const {error, value: envVars} = joi.validate(process.env, envSchema);

if (error) {
	throw new Error(`Configuration validate error: ${error.message}`);
}

module.exports = {
	db: {
		url: envVars.MONGO_URL
	}
}