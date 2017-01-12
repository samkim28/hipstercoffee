const mongoose = require('mongoose');
const mongo = require('../db');
const User = require('../users/users-model');
const Store = require('../stores/stores-model');
const Schema = mongoose.Schema;

const reviewsSchema = mongoose.Schema({
  review: String,
  username: String,
  user_id: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  store_id: [{
    type: Schema.Types.ObjectId,
    ref: 'Store'
  }]
});

const Reviews = mongoose.model('Reviews', reviewsSchema);

module.exports = Reviews;
