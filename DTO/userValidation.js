const Joi = require('joi');

module.exports = {
	loginModel: Joi.object().keys(
		{
			email: Joi.string().email().required(),
			role: Joi.string().alphanum().required(),//se valida role, useName no se usa
			password: Joi.string().regex(/^[a-zA-Z0-9]{4,16}$/).min(4).required()
		}).with('email', 'password'),
	registerModel: Joi.object().keys(
		{
			names: Joi.string().regex(/^[a-zA-Z\s]*$/).min(6).required(),
			last_names: Joi.string().regex(/^[a-zA-Z\s]*$/).min(6).required(),
			email: Joi.string().email().required(),
			userName: Joi.string().alphanum().min(6).max(16).required(),
			phone: Joi.string().length(10).required(),
			date_of_birth: Joi.string().regex(/^[a-zA-Z\s]*$/).min(6).required(),
			password: Joi.string().regex(/^[a-zA-Z0-9]{4,16}$/).min(4).required(),
			address: Joi.string().regex(/^[a-zA-Z\s]*$/).min(6).required(),
			About_me: Joi.string().regex(/^[a-zA-Z\s]*$/).min(4).required(),
		}).with('userName', 'password'),

        changePassInfor: Joi.object().keys(
            {
            id_user:Joi.number().integer().required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{4,16}$/).min(4).required(),
        }).with('id_user', 'password'),

		registerSkill: Joi.object().keys(
            {
			id_user:Joi.number().integer().required(),
            nameSkill: Joi.string().alphanum().min(1).max(16).required(),
        }).with('id_user', 'nameSkill'),

		registerSocialNet: Joi.object().keys(
            {
			id_user:Joi.number().integer().required(),
            newtwork: Joi.string().min(1).max(80).required(),
        }).with('id_user', 'newtwork'),

		registerStudies: Joi.object().keys(
            {
			id_user:Joi.number().integer().required(),
            institution: Joi.string().min(1).max(50).required(),
			period: Joi.string().min(1).max(16).required(),
        }).with('id_user', 'institution')

        
};