const { Pool } = require('pg')
 const pool = new Pool({
 host: 'postgresql-dev-mt.alwaysdata.net', //'postgresql-dev-mt.alwaysdata.net',
 user: 'dev-mt',
 password: 'Desafiolatam123',
 database: 'dev-mt_likeme',
 port:5432,
 allowExitOnIdle: true
}) 

module.exports=pool;