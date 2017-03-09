'use strict'
let Resto      = require('../models/restaurant.js');

module.exports = {
  seedResto : (req, res, next) => {
    var newresto = [
      {
        name: 'Cumi Resto',
        owner: 'Isumi Karina',
        address: 'Menteng',
        open_status: true
      },
      {
        name: 'Alibaba Resto',
        owner: 'Karina',
        address: 'PIM',
        open_status: true
      }]

    Resto.create(newresto, (err, data) => {
      if (err) {
        res.send(err)
      } else {
        res.send(data)
      }
    })
  },

  getResto : (req, res, next) => {
    Resto.find({}, (err, resto) => {
      if (err) {
        res.send(err)
      } else {
        res.send(resto)
      }
    })
  },

  findById : (req, res, next) => {
    Resto.find(
      {
        _id: req.query.id
      }, (err, resto) => {
        if (err) {
          res.send(err)
        } else {
          res.send(resto);
        }
    })
  },

  createResto : (req, res, next) => {
    var newresto = Resto(
      {
        name: req.body.name,
        owner: req.body.owner,
        address: req.body.address,
        open_status: req.body.open_status
      })

    newresto.save(function(err){
      if (err) {
        res.send(err)
      } else {
        res.send(`${req.body.name} has been created`)
      }
    })
  },

  updateResto : (req, res, next) => {
    Resto.findOneAndUpdate(
      {
        _id: req.params.id
      }, req.body, {new: true}, (err, resto) => {
        if (err) {
          res.send(err)
        } else {
          res.send(resto)
        }
      })
  },

  deleteResto : (req, res, next) => {
    Resto.findOneAndRemove(
      {
        _id: req.params.id
      }, function(err) {
        if(err) {
          res.send(err)
        } else {
          res.send(`Resto: ${req.params.id} has been removed`)
        }
      })
  }
}
