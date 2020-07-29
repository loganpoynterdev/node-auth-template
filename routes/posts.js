//Const imports
const router = require('express').Router();
const verify = require('./verifyToken');

//Users model import
const User = require('../model/User');

//Route for posts and JWT verification
router.get('/', verify, async (req, res) => {
    const authedUser = await User.findOne({_id: req.user}) 
    res.json(authedUser);
});


module.exports = router;