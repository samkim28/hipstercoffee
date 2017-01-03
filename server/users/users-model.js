const mongoose = require('mongoose');
const mongo = require('../db');

const usersSchema = mongoose.Schema({
  username: String,
  password: String
});

const User = mongoose.model('User', usersSchema);

module.exports = User;
