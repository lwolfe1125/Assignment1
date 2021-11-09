var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

/* API to return a collection from mongodb*/
router.get('/', function(req, res, next) {
  // res.json({foo:"bar"});
  
  //verify connection to mongodb
  var url = "mongodb://localhost:27017/local";
  
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  console.log('db connected');
  
  // fetch collection 

  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("local");
    dbo.collection("startup_log").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result.name);
      db.close();
    });
  });

  });
});

module.exports = router;




