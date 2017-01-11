const Stores = require('./stores-model');

const stores = {
  'addstore': {
    'post': (req, res) => {
      Stores.create({
        name: req.body.name,
        favorites: 1
      }, (err, newStore) => {
        if(err) {
          return console.error(err);
        }
        res.send(newStore);
      })
    }
  }
  // 'addreview': {
  //   'post': (req, res) => {
  //     Stores.findByIdAndUpdate
  //   }
  // }
}

module.exports = stores;
