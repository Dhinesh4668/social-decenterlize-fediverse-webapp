const mongoose = require('mongoose')
const uri = "localhost:27017";


const newConnectionParams = {
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
}

const Database = () =>{
    mongoose.connect(uri);
    const databse = mongoose.connection;

    databse.on('error', err => console.error(err));
    databse.on('open', ()=> console.log("database connected...."))
}


module.exports = Database