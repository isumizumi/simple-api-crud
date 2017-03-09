var express = require('express');
var router = express.Router();
var Food = require('../models/food')
// var Restaurant = require('../models/restaurant')

/* GET home page. */
router.get('/foods', function(req, res, next) {
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

  Food.create(newfoods, function (err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
});

module.exports = router;
