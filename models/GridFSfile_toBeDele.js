var MongoClient = require('mongodb').MongoClient,
  Grid = mongo.Grid;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
  if(err) return console.dir(err);

  var grid = new Grid(db, 'fs');
  var buffer = new Buffer("Hello world");
  grid.put(buffer, {metadata:{category:'text'}, content_type: 'text'}, function(err, fileInfo) {
    if(!err) {
      console.log("Finished writing file to Mongo");
    }
  });
});

var grid = new Grid(db, 'fs');

var buffer = new Buffer("Hello world");
grid.put(buffer, {metadata:{category:'text'}, content_type: 'text'}, function(err, fileInfo) {
  if(!err) {
    console.log("Finished writing file to Mongo");
  }
});
