const express = require('express');
const mongoose = require('mongoose');
const stuffRoutes = require('./Routes/Stuff');

mongoose.connect('mongodb+srv://userbackend:test12345@cluster0.c9nyq6k.mongodb.net/monVieuxGrimoire?retryWrites=true&w=majority')
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((err) => console.error('Connexion à MongoDB échouée !', err));


const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/stuff', stuffRoutes);


module.exports = app;