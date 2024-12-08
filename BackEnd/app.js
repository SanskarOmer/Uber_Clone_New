const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

const express = require('express');
const app = express();

const userRoutes = require('./routes/user.routes');
const connectToDB = require('./db/db');
connectToDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());




app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app;
