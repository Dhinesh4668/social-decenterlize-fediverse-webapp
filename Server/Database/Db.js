const {Pool} = require('pg');

// env
const HOST_PORT = process.env.PORT_NO;
const data_host = process.env.DB_HOST;
const data_port = process.env.DB_PORT;
const data_user = process.env.DB_USER;
const data_database = process.env.DB_DATABASE;
const data_pass = process.env.DB_PASS;

// db config 
const database = new Pool({
    user: data_user,
    host: data_host,
    database: data_database,
    port: data_port,
    password: data_pass
})


module.exports = database;