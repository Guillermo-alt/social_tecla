/** Import modules */

const controlerUsers = require('../app/controller/controlUsers')



const validateToken = async (req, res, next) => {
	try {
		if (req.headers.authorization != undefined) {
			const token = req.headers.authorization.split(' ')[1];
			let verified = await controlerUsers.verifyUserToken(token);
			req.params.user = verified.data;
			return next();
		} else {
			throw new Error('Unauthorized request');
		}
	} catch (err) {
		console.log('Error: ' + err);
		res.status(500).send('Error: ' + err.message);
	}
};




module.exports = {
    validateToken
};
