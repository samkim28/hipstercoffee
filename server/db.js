const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL);

const mongo = mongoose.connection;
mongo.on('error', console.error.bind(console, 'Connection error: '));
mongo.once('open', function() {
  console.log('Connected to Mongo');
});

module.exports = mongo;
