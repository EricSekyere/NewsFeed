var httpretreiver = require("./scripts");
var apikeys= require("./assets");
var express = require('express');
var cors = require("cors");
var request = require("request");
//var  _ = require("loadash");

var router = express.Router();

var endpoints = ["/v2/top-headlines", "/v2/everything"];
/* GET home page. */
router.get('/',  function(req, res, next) {
  var apiURL = `https://newsapi.org${endpoints[1]}?sources=techcrunch&apiKey=${apikeys.newsAPIKey}`;
  request(apiURL, { json: true }, (err, response, body) => {
    if (err) { res.json(err); }
    else { res.json(body.articles); }
  });
  //res.send(dataObj);
});

router.get('/api/articles', (req, res) => {
  var apiURL = `https://newsapi.org${endpoints[1]}?sources=techcrunch&apiKey=${apikeys.newsAPIKey}`;
  request(apiURL, { json: true }, (err, response, body) => {
    if (err) { res.json(err); }
    else { res.json(body.articles); }
  });
  //res.send(dataObj);
});

//get the sources
router.get('/api/sources', (req, res) => {
  var apiURL = `https://newsapi.org/v2/sources?apiKey=${apikeys.newsAPIKey}`;
  request(apiURL, { json: true }, (err, response, body) => {
    if (err) { res.json(err); }
    else { res.json(body.sources); }
  });
  //res.send(dataObj);
});

//get the  specific source
router.get('/api/sources/:id', (req, res) => {
  var apiURL = `https://newsapi.org${endpoints[1]}?sources=${req.params.id}&apiKey=${apikeys.newsAPIKey}`;
  request(apiURL, { json: true }, (err, response, body) => {
    if (err) { res.json(err); }
    else { res.json(body.articles); }
  });
  //res.send(dataObj);
});

module.exports = router;