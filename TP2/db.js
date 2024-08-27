// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    if (!mongoose.connection.readyState) {
        await mongoose.connect('mongodb://localhost:27017/contacts', {
            
        });
    }
};

module.exports = connectDB;
