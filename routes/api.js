var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var app = express();

//Technically we should create a DAO for genres and books, that's slated for Q4 2019
MongoClient.connect("mongodb://localhost:27017", (err, client)=>{
  err === null ? console.log('mongodb is the connected!') : console.error(err);
  let db = client.db("bookstore");

router.get('/books', function(req, res, next) {
  db.collection('books').find({}).toArray((err, dox)=>{
    err === null ? console.log('books!') : console.error(err);
    res.json(dox);
  });
});
});

module.exports = router;
