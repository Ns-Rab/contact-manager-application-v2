const mongoose = require('mongoose');
const { db } = require('../models/userModel');

const db_connection = async () => {


mongoose.Promise = global.Promise;

const MONGO_URI = process.env.MONGO_URI;
// Connect MongoDB at default port 27017.

    try {
        const res = await mongoose.connect(MONGO_URI);
        if (res) {
            console.log('MongoDB Connection Successful.');
        }
    } catch (error) {
        console.log('Error in DB connection: ' + error);
    }
};


module.exports = db_connection;