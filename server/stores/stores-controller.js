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

    console.log(doc);
    res.send(doc);
});



      // Stores.create({
      //   name: req.body.name,
      //   yelp_id: req.body.yelp_id,
      //   likes: 1
      // }, (err, newStore) => {
      //   if(err) {
      //     console.error(err);
      //   }
      //   res.send(newStore);
      // })
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
