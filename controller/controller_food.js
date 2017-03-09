'use strict'
let Food      = require('../models/food.js');

module.exports = {
  seedFood : (req, res, next) => {
    var newfoods = [
      {
        name: 'Cumi-cumi rica-rica',
        price: 20000,
        expired_date: '2017-03-10 07:00:00'
      },
      {
        name: 'Roti Tawar',
        price: 10000,
        expired_date: '2017-03-15 07:00:00'
      }]

    Food.create(newfoods, (err, data) => {
      if (err) {
        res.send(err)
      } else {
        res.send(data)
      }
    })
  },

  getFoods : (req, res, next) => {
    Food.find({}, (err, foods) => {
      if (err) {
        res.send(err)
      } else {
        res.send(foods)
      }
    })
  },

  findById : (req, res, next) => {
    Food.find(
      {
        _id: req.query.id
      }, (err, foods) => {
        if (err) {
          res.send(err)
        } else {
          res.send(foods);
        }
    })
  },

  createFood : (req, res, next) => {
    var newFood = Food(
      {
        name: req.body.name,
        price: req.body.price,
        expired_date: Date.parse(req.body.expired_date)
      })

    newFood.save(function(err){
      if (err) {
        res.send(err)
      } else {
        res.send(`${req.body.name} has been created`)
      }
    })
  },

  updateFood : (req, res, next) => {
    Food.findOneAndUpdate(
      {
        _id: req.params.id
      }, req.body, {new: true}, (err, foods) => {
        if (err) {
          res.send(err)
        } else {
          res.send(foods)
        }
      })
  },

  deleteFood : (req, res, next) => {
    Food.findOneAndRemove(
      {
        _id: req.params.id
      }, function(err) {
        if(err) {
          res.send(err)
        } else {
          res.send(`Food: ${req.params.id} has been removed`)
        }
      })
  }
}
