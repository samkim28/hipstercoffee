const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', function() {
  console.log('Connected to Mongo');
});

var usersSchema = mongoose.Schema({
  username: String,
  password: String
});

usersSchema.methods.speak = function () {
  var greeting = this.username ? 'Meow name is ' + this.username : 'I dont have a name';
    console.log('greeting', greeting);
}
var User = mongoose.model('User', usersSchema);

var test = new User({
  username: 'testUser',
  password: '12345'
});

test.save(function(err, test) {
  if (err) {
    return console.error(err);
  }
  else {
    console.log('test: ', test);
    test.speak();
  }
});

User.find({ name: /^test/}, function(err, resp){
  console.log('resp:',  resp);
});

module.exports = db;
// var MongoClient = require('mongodb').MongoClient
//   , assert = require('assert');
//
//
//
// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//
//   insertDocuments(db, function() {
//     findDocuments(db, function() {
//       db.close();
//     });
//   });
// });
//
// var insertDocuments = function(db, callback) {
//   // Get the documents collection
//   var collection = db.collection('documents');
//   // Insert some documents
//   collection.insertMany([
//     {a : 1}, {a : 2}, {a : 3}
//   ], function(err, result) {
//     assert.equal(err, null);
//     assert.equal(3, result.result.n);
//     assert.equal(3, result.ops.length);
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// }
//
// var findDocuments = function(db, callback) {
//   // Get the documents collection
//   var collection = db.collection('documents');
//   // Find some documents
//   collection.find({}).toArray(function(err, docs) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(docs)
//     callback(docs);
//   });
// }
