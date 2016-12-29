const express = require('express');
const request = require('request');
const router = express.Router();
require('dotenv').config();

// router.get('/random', (req, res) => {
//   const url = 'https://api.giphy.com/v1/gifs/random';
//   const qs = {
//     api_key: api_key,
//     tag: 'cat'
//   }
//
//   request.get({url, qs}, (error, response, body) => {
//     body = JSON.parse(body);
//     if (error) {
//         res.status(400).send(error);
//     } else {
//         res.status(200).json(body);
//     }
//   });
// });
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
