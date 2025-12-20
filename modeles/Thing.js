const mongoose = require('mongoose');
const auth = require('../middleware/auth');
const thingSchema = mongoose.Schema({
id: { type: String, required: true },
userId: { type: String, required: true },
title: { type: String, required: true },
author: { type: String, required: true },
ImageUrl: { type: String, required: true },
year: { type: Number, required: true },
genre: { type: String, required: true },
ratings: { type: [Number], required: true}
});

module.exports = mongoose.model('Thing', thingSchema);
