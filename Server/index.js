const express = require('express');
// const DataBase = require('./Database/Db');
const database = require('./Database/Db');
require('dotenv').config();
const app = express();
const HOST_PORT = process.env.PORT_NO;

// database
database.connect((err)=>{
    if(err) console.log(err);
    console.log("connected :)")
})

// restAPI
app.get('/',(req, res)=>{
    res.send("this root page")
})

app.listen(HOST_PORT ,()=> console.log(`server start`))