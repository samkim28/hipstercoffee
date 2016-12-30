const User = require('./users-model');

const user = {
  'signup': {
    'post': (req, res) => {
      User.create({
        username: req.body.username,
        password: req.body.password
      }, (err, newUser) => {
        if(err) {
          return console.error(err);
        }
        console.log('new user: ', newUser);
        res.send(newUser);
      })
    }
  }
}

// user.save(function(err, user) {
//   if (err) {
//     return console.error(err);
//   }
//   else {
//     console.log('user: ', user);
//   }
// });
//
// User.find({ name: /^test/}, function(err, resp){
//   console.log('resp:',  resp);
// });

module.exports = user;
