// ============= MONGODB CONNECTION =================== //

// const mongo = require('mongodb').MongoClient;

// module.exports = mongo.connect('mongodb://localhost:27017/WestBuyDrawers', { useUnifiedTopology: true } ,(err, client) => {
//   if(err) {
//     throw err;
//   } 
  
//   console.log("Connected to the MongoDB...");
  
//   return client.db('WestBuyDrawers');
// });


// ============= PSQL DB CONNECTION =================== //

const { Pool, Client } = require('pg');
const pgConfig = require('./data/pgConfig.js');

const pool = new Pool(pgConfig);

pool.connect(err => {
  if(err) console.log(err);
  else console.log(`Connected to Postgres DB ${pgConfig.database} on port ${pgConfig.port}...`);
});
