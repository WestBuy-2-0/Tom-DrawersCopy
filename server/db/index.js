const mongo = require('mongodb').MongoClient;

// const writeCSV = require('./CSVwriter.js');

module.exports = mongo.connect('mongodb://localhost:27017/WestBuyDrawers', { useUnifiedTopology: true } ,(err, client) => {
  if(err) {
    throw err;
  } else {
    console.log("Connected to the MongoDB...");
  }
  return client.db('WestBuyDrawers');
});
