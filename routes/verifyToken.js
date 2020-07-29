//Const imports
const jwt = require('jsonwebtoken');

//Function to test and verify that the user is properly verified with a JWT
module.exports = function (req, res, next) {
	const token = req.header('auth-token');
	if (!token) return res.status(401).send('Access Denied');

	try {
		const verified = jwt.verify(token, process.env.TOKEN_SECRET);
		req.user = verified;
		next();
	} catch (error) {
		res.status(400).send('An error occurred');
		console.log(error);
	}
};
