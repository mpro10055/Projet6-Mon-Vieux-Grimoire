const express = require('express');
const mongoose = require('mongoose');
const stuffRoutes = require('./Routes/Stuff');
const userRoutes = require('./Routes/user');

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
 
.then(() => console.log('Connected to MongoDB!'))
.catch(error => {
  console.log('MongoDB connection error:', error);
console.error(error);
});
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/books', stuffRoutes);
app.use('/api/auth', userRoutes);


module.exports = app;