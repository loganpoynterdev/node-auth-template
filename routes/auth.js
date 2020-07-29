//Const imports
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Users model import
const User = require('../model/User');

//Verification imports
const { registerValidation, loginValidation } = require('../validation.js');

//Register route
router.post('/register', async (req, res) => {
	const { error } = registerValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	//verify user does not exist
	const emailExists = await User.findOne({ email: req.body.email });
	if (emailExists) return res.status(400).send('Email already exists');

	//Hash password
	const salt = await bcrypt.genSalt(15);
	const hashedPwd = await bcrypt.hashSync(req.body.password, salt);

	//Create user
	const user = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		username: req.body.username,
		password: hashedPwd,
	});

	//Try to save user
	try {
		const savedUser = await user.save();
		res.send(savedUser);
	} catch (err) {
		//Catch error
		res.status(400).send(err);
	}
});

//Login route
router.post('/login', async (req, res) => {
	const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    //Verify user does exist
	const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email does not exist');
    
    //Verify password is correct
    const validPwd = await bcrypt.compare(req.body.password, user.password)
    if (!validPwd) return res.status(400).send('Email or password is incorrect');

    //Create JWT
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token);    
});

module.exports = router;
