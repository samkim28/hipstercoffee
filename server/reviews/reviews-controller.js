const Reviews = require('./reviews-model');
const Stores = require('../stores/stores-model');

const reviews = {
  'addreview': {
    'post': (req, res) => {
      Reviews.create({
        review: req.body.review,
        username: req.body.username,
        user_id: req.body.user_id,
        store_id: req.body.store_id
      }, (err, newReview) => {
        if(err) {
          return console.error(err);
        } else {
          Stores.findById(req.body.store_id, (err, store) => {
            if(err) {
              return console.error(err);
            }
            store.reviews.push(newReview);
            store.save((err) => {
              if(err) {
                return console.error(err);
              } else {
                res.send(store);
              }
            });
          });
        }
      });
    }
  },
  'fetchreviews': {
    'get': (req, res) => {
      Stores.findById(req.query.store_id, (err, store) => {
        if(err) {
          return console.error(err);
        }
        Reviews.find({
          _id: {$in: store.reviews}
        }, (err, allReviews) => {
          res.send(allReviews)
        })
      })
    }
  }
}

module.exports = reviews;
