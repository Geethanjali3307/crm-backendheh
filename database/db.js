
const mongoose = require('mongoose');

const connection = async (userName,password) =>{

    const URL =`mongodb+srv://user11:user11@cluster0.i5zxo3y.mongodb.net/`
    console.log("Database connected successfully");
    try {

     await   mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true})
        
    } catch (error) {
        console.log('Error while connecting the database',error);
    }
}

module.exports = connection