const { Pool } = require('pg')

// salus database URI from ElephantSQL
const pg_URI = 'postgres://wlyeaigg:Dc0iODAWlPjbEjnCn0d656u7msIB3hwQ@kashin.db.elephantsql.com/wlyeaigg';

//creates pool using connection string
const pool = new Pool({
  connectionString: pg_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}