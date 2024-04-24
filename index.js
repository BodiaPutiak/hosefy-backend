const express = require('express');
const connectDB = require('./db.js');
const cors = require('cors');
const path = require('path')

const houseInfoRouter = require('./routes/markers');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.json());
app.use(cors());
connectDB();

app.use('/', houseInfoRouter);

app.listen(port, () => {
  console.log('app is running');
});
