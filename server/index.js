const express = require('express');
const connectDB = require('./connect');
const app = express()

const PORT = 3000;


// Connect to Database
connectDB()

app.get('/', (req, res) => {
    res.send('Hello world..')
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}....`);
})