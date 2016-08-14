var express = require('express');
var router = express.Router();
var path = require('path');
var mongojs = require('mongojs');

/* sample db created on https://mlab.com/home */
var db = mongojs('mongodb://admin:admin@ds055782.mlab.com:55782/meanstack2-starter-db', ['title']);

/* GET config file from root dir */
router.get('/systemjs.config.js', function(req, res) { 
  res.sendFile(path.join(__dirname, '../', 'systemjs.config.js')); 
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});


router.get('/title', function(req, res, next) {
  db.title.find(function(err, title) {
    if (err) {
      res.send(err);
    } else {
      res.json(title);
    }
  });
});  

module.exports = router;