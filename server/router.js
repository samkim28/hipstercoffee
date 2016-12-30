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

router.get('/search', (req, res) => {
  yelp.search({
    term: 'hipster coffee',
    radius_filter: '20000',
    limit: '5',
    location: req.query.input
  })
  .then((data) => {
    console.log('data: ', data);
    res.status(200).json(data);
  })
  .catch((err) => {
    console.error(err);
  });
})

//
// router.get('/search', (req, res) => {
//   const url = 'https://api.giphy.com/v1/gifs/search';
//   console.log('req query: ', req.query);
//   const qs = {
//     api_key: api_key,
//     q: req.query.input,
//     limit: 10
//   }
//
//   request.get({url, qs}, (error, response, body) => {
//     body = JSON.parse(body);
//     if (error) {
//       res.status(400).send(error);
//     } else {
//       res.status(200).json(body);
//     }
//   });
// });

module.exports = router;
