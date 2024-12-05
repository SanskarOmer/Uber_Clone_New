const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

const express = require('express');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/home',(req, res)=>{
    res.send("This will be the home page");
})

module.exports = app;
