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
        res.send(newUser);
      })
    }
  },
  'signin': {
    'post': (req, res) => {
      User.findOne({ 'username': req.body.username }, 'username password _id', (err, user) => {
        if(err) {
          console.error(err);
        } else {
          if(user.password === req.body.password){
            res.send({
              user: {id: user._id, username: user.username}
            })
          } else {
            res.send({
              msg: 'Incorrect Password'
            })
          }
        }
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
