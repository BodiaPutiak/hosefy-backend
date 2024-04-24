const mongoose = require('mongoose');
require('dotenv').config();



const uri = process.env.MONGO_DB_URI;

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(uri)
        console.log(`MongoDb Connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;