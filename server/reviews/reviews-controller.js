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
  // 'fetchreviews': {
  //   'get': (req, res) => {
  //     Reviews.
  //   //need to figure out how to fetch reviews.
    //are you going to push review id into Stores document
//exports.addFriend = function (req, res, next)
// {
// var review = {"firstName": req.body.fName, "lastName": req.body.lName};
// Stores.findOneAndUpdate({yelp_id: req.user.yelp_id}, {$push: {reviews: newReview}});
// };
  //   }
  // }
  }
}

module.exports = reviews;
