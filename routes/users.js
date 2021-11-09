var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({foo:"bar"});
});

module.exports = router;
//paste code from test2,js in express_app
  //return var with json 