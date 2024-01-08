require('dotenv').config();
const express = require('express')
const app = express();

// env file
const portno = process.env.PORT_NO
const serverLink = `http://localhost:${portno}`
app.get('/',(req,res)=>{
    res.send("hello")
})






app.listen(portno,()=> console.log(`server is start \n${serverLink}`))