const express = require('express');
const Database = require('./Database/Db');

const app = express();


app.use(express.json())

Database()

app.listen(8080, ()=> console.log('connected'))