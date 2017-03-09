'use strict'

const mongoose = require('mongoose')

var foodSchema = mongoose.Schema({
  name: String,
  price: Number,
  expired_date: Date
}, {timestamps: true})

var food = mongoose.model('Food', foodSchema)

module.exports = food
