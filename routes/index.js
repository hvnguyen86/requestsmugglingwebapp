var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader("Cache-Control","no-store, no-cache, max-age=0")
  res.render('index', { title: 'Express' });
});

module.exports = router;
