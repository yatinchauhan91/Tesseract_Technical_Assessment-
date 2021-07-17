var MongoClient = require('mongodb').MongoClient;
var url = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`;

MongoClient.connect(url, function(err, db) {
  if (err) {
    console.log('Unable to connect mongo db.'); 
    throw err;
  }
  
  global.mongoConnection = db.db(process.env.DB_NAME);
  console.log("Database Connected!");
});
