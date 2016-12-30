const mongoose = require('mongoose');
const mongo = require('../db');

const usersSchema = mongoose.Schema({
  username: String,
  password: String
});

// usersSchema.methods.speak = function () {
//   var greeting = this.username ? 'Meow name is ' + this.username : 'I dont have a name';
//     console.log('greeting', greeting);
// }

const User = mongoose.model('User', usersSchema);

module.exports = User;
