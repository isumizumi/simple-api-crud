var express               = require('express');
var router                = express.Router();
var controllerFoods       = require('../controller/controller_food')
var controllerRestaurants = require('../controller/controller_restaurant')

/* GET home page. */
router.get('/foods', controllerFoods.seedFood);

router.get('/restaurants', controllerRestaurants.seedResto);

module.exports = router;
