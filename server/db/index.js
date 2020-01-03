// ============= MONGODB CONNECTION =================== //

// const MongoClient = require('mongodb').MongoClient;

// const db = new MongoClient('mongodb://localhost:27017/WestBuyDrawers', { useUnifiedTopology: true });

// db.connect(err => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log('Connected to the MongoDB...');
//   }
// });

// module.exports = db.db('WestBuyDrawers').collection('WestBuyDrawers');

// ============= PSQL DB CONNECTION =================== //

const { Pool } = require('pg');
const { user, password, host, database, port } = require('./data/pgConfig.js');

const pool = new Pool({
  user,
  password,
  host,
  database,
  port,
});

module.exports = pool;

pool.connect(err => {
  if(err) console.log(err);
  else {
    console.log(`Connected to Postgres DB ${database} on port ${port}...`);
  }
});
