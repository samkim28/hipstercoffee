const express = require('express');
const request = require('request');
const router = express.Router();
const Yelp = require('yelp');
require('dotenv').config();
const user = require('./users/users-controller');
const stores = require('./stores/stores-controller');
const reviews = require('./reviews/reviews-controller');

const yelp = new Yelp({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  token: process.env.TOKEN,
  token_secret: process.env.TOKEN_SECRET
});

router.post('/signup', user.signup.post);
router.post('/signin', user.signin.post);
router.post('/addstore', stores.addstore.post);
router.post('/addreview', reviews.addreview.post);
router.get('/fetchstores', stores.fetchstores.get);
router.get('/fetchreviews', reviews.fetchreviews.get);

router.get('/search', (req, res) => {
  yelp.search({
    term: 'hipster coffee',
    radius_filter: '20000',
    limit: '5',
    location: req.query.input
  })
  .then((data) => {
    res.status(200).json(data);
  })
  .catch((err) => {
    console.error(err);
  });
})

module.exports = router;
