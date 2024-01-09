const pgp = require('pg-promise')();

// db 
const db = pgp('postgresql://postgres:dhineshkumar@db.tbdkpgnorufculvvpvds.supabase.co:5432/postgres');

db.any('SELECT 1').then(()=>{
    console.log("connecting the databse")
})

.catch(err=>{
    console.log('error to connecting database', err);
})

export default db;