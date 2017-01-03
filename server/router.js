const express = require('express');
const request = require('request');
const router = express.Router();
const Yelp = require('yelp');
require('dotenv').config();
const user = require('./users/users-controller');

const yelp = new Yelp({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  token: process.env.TOKEN,
  token_secret: process.env.TOKEN_SECRET
});

router.post('/signup', user.signup.post);

router.post('/signin', user.signin.post);

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
