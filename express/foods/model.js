'use strict';

const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Food', foodSchema);
