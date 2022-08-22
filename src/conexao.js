const { Pool } = require('pg');
const config = {
    host: 'localhost',
    user: '******',
    database: '******',
    password: '******',
    port: 5432
}
const pool = new Pool(config);

const query = (text, params) => {
    return pool.query(text, params);
}

module.exports = { query }