var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json('express server running!');
});

module.exports = router;
// save the file
// restart server with npm start 
//reload localhost 3000
