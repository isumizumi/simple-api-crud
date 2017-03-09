'use strict'

const mongoose = require('mongoose')

var restaurantSchema = mongoose.Schema({
  name: String,
  owner: String,
  address: String,
  open_status: Boolean
}, {timestamps: true})

var resto = mongoose.model('Restaurant', restaurantSchema)

module.exports = resto
