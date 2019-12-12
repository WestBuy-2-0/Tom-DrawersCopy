const { Pool } = require("pg");

const types = require("pg").types;

const pool = new Pool({
    user: 'postgres',
    host: 'west-buy-drawers.cuigt8x5y4kt.us-east-2.rds.amazonaws.com',
    database: 'drawers',
    password: 'js9dH-usHHS8-Jh',
    port: 5432
});

types.setTypeParser(20, (val) => parseInt(val));
types.setTypeParser(23, (val) => parseInt(val));
types.setTypeParser(1700, (val) => parseInt(val));

module.exports = {
  query: (qStr, qParams) => pool.query(qStr, qParams)
};
