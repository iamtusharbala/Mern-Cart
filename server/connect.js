const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/mern-cart').then(() => {
        console.log('Database connected successfully.....');
    }).catch((e) => {
        console.error('Error connecting to DB.....', e);
    })
}

module.exports = connectDB