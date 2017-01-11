const Reviews = require('./reviews-model');

const reviews = {
  'addreview': {
    'post': (req, res) => {
      Reviews.create({
        review: req.body.review,
        user_id: req.body.user_id,
        store_id: req.body.store_id
      }, (err, newReview) => {
        if(err) {
          return console.error(err);
        }
        res.send(newReview);
      })
    }
  }
}

module.exports = reviews;
