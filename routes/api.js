var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;

//Technically we should create a DAO for genres and books, that's slated for Q4 2019

MongoClient.connect("mongodb://localhost:27017", (err, client)=>{
  err === null ? console.log('mongodb is the connected!') : console.error(err);
  let db = client.db("bookstore");

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
});

module.exports = router;
