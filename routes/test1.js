var express = require('express');
var router = express.Router();

/* API to return 'hello world'*/ 
router.get('/', function(req, res, next) {
  res.json('hello world');
});

module.exports = router;
