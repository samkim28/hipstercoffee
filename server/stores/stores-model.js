const mongoose = require('mongoose');
const mongo = require('../db');

const storesSchema = mongoose.Schema({
  name: String,
  yelp_id: String,
  likes: Number,
  reviews: []
});

const Stores = mongoose.model('Stores', storesSchema);

module.exports = Stores;
