//dotenv require
require('dotenv').config();

//Const imports
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

//Init DB
mongoose.connect(
	process.env.MONGO_URL,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => console.log('connected to db')
);

//Middleware
app.use(express.json());

//Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

//Set port and listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
