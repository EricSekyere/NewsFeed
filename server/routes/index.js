
require("dotenv").config();
var express = require('express');
var cors = require("cors");
var request = require("request");
//var  _ = require("loadash");

var router = express.Router();

var endpoints = ["/v2/top-headlines", "/v2/everything"];
/* GET home page. */
router.get('/',  function(req, res, next) {
  var apiURL = `https://newsapi.org${endpoints[1]}?sources=techcrunch&apiKey=${process.env.NEWS_API_KEY}`;
  request(apiURL, { json: true }, (err, response, body) => {
    if (err) { res.json(err); }
    else { res.json(body.articles); }
  });
  //res.send(dataObj);
});

router.get('/api/articles', (req, res) => {
  var apiURL = `https://newsapi.org${endpoints[1]}?sources=techcrunch&apiKey=${process.env.NEWS_API_KEY}`;
  request(apiURL, { json: true }, (err, response, body) => {
    if (err) { res.json(err); }
    else { res.json(body.articles); }
  });
  //res.send(dataObj);
});

//get the sources
router.get('/api/sources', (req, res) => {
  var apiURL = `https://newsapi.org/v2/sources?apiKey=${process.env.NEWS_API_KEY}`;
  request(apiURL, { json: true }, (err, response, body) => {
    if (err) { res.json(err); }
    else { res.json(body.sources); }
  });
  //res.send(dataObj);
});

//get the  specific source
router.get('/api/sources/:id', (req, res) => {
  var apiURL = `https://newsapi.org${endpoints[1]}?sources=${req.params.id}&apiKey=${process.env.NEWS_API_KEY}`;
  request(apiURL, { json: true }, (err, response, body) => {
    if (err) { res.json(err); }
    else { res.json(body.articles); }
  });
  //res.send(dataObj);
});

module.exports = router;