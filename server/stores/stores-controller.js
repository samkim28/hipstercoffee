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
}

module.exports = stores;
