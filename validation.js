//joi import
const Joi = require('@hapi/joi');

//Register Validation
const registerValidation = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required(),
		lastName: Joi.string().required(),
		username: Joi.string().alphanum().min(3).max(50).required(),
		email: Joi.string().email().required(),
		password: Joi.string().min(8).max(250).required(),
	});
	return schema.validate(data);
};

//Login Validation
const loginValidation = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required(),
		password: Joi.string().min(8).max(250).required(),
	});
	return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
