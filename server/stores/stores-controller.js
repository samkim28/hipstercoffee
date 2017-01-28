const Stores = require('./stores-model');

const stores = {
  'addstore': {
    'post': (req, res) => {

      Stores.findOneAndUpdate({
        yelp_id: req.body.yelp_id},
      {$inc: {likes: 1},
       $set: {name: req.body.name}
      }, {new: true, upsert: true}, (err, doc) => {
        if(err){
          console.error(err);
        }
    res.send(doc);
    });
    }
  },
  'fetchallstores': {
    'get': (req, res) => {
      Stores.find({}, (err, storeslist) => {
        if(err) {
          console.error(err);
        }
        res.send(storeslist);
      })
    }
  },
  'fetchstore': {
    'get': (req, res) => {
      Stores.findById(req.query.store_id, (err, store) => {
        if(err) {
          return console.error(err);
        } else {
          console.log('store: ', store)
          res.send(store);
        }
      });
    }
  }
}

module.exports = stores;
