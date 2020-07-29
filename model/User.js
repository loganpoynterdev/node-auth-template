// MongoDB Users Schema
const mongoose = require('mongoose');
const { string } = require('@hapi/joi');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String, 
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        max: 255,
    },
    password: {
        type: String,
        required: true,
        max: 240,
        min: 10
    },
})

module.exports = mongoose.model('User', userSchema);