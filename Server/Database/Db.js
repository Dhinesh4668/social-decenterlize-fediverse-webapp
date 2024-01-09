const pgp = require('pg-promise')();

// db 
const db = pgp(process.env.SUPABASE_DB_URL);

db.any('SELECT 1').then(()=>{
    console.log("connecting the databse")
})

.catch(err=>{
    console.log('error to connecting database', err);
})

export default db;