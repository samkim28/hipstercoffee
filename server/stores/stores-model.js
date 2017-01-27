const mongoose = require('mongoose');
const mongo = require('../db');
const Review = require('../reviews/reviews-model');
const Schema = mongoose.Schema;

const storesSchema = mongoose.Schema({
  name: String,
  yelp_id: String,
  likes: Number,
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Review'
  }]
});

const Stores = mongoose.model('Stores', storesSchema);

module.exports = Stores;
