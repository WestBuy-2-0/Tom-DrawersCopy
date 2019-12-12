const { Pool } = require("pg");

const pool = new Pool({
    user: 'postgres',
    host: 'west-buy-drawers.cuigt8x5y4kt.us-east-2.rds.amazonaws.com',
    database: 'drawers',
    password: 'js9dH-usHHS8-Jh',
    port: 5432
});

module.exports = {
    query: (qStr, qParams) => pool.query(qStr, qParams)
}