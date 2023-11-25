
const mongoose = require('mongoose');
require('dotenv').config();

const connection = async () =>{

    const URL =process.env.MONGODB_URI;g
    console.log("Database connected successfully");
    try {

     await   mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true})
        
    } catch (error) {
        console.log('Error while connecting the database',error);
    }
}

module.exports = connection