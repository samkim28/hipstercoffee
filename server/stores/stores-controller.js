const Stores = require('./stores-model');

const stores = {
  'addstore': {
    'post': (req, res) => {
      Stores.create({
        name: req.body.name,
        favorites: 1
      }, (err, newStore) => {
        if(err) {
          console.error(err);
        }
        res.send(newStore);
      })
    }
  },
  'fetchstores': {
    'get': (req, res) => {
      Stores.find({}, (err, storeslist) => {
        if(err) {
          console.error(err);
        }
        res.send(storeslist);
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
