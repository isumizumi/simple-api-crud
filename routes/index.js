var express                = require('express');
var router                 = express.Router();
let controllerFoods        = require('../controller/controller_food');
let controllerRestaurants  = require('../controller/controller_restaurant');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/foods', controllerFoods.getFoods);

router.get('/food/search', controllerFoods.findById);

router.post('/food', controllerFoods.createFood);

router.put('/food/:id', controllerFoods.updateFood);

router.delete('/food/:id', controllerFoods.deleteFood);


router.get('/restaurants', controllerRestaurants.getResto);

router.get('/restaurant/search', controllerRestaurants.findById);

router.post('/restaurant', controllerRestaurants.createResto);

router.put('/restaurant/:id', controllerRestaurants.updateResto);

router.delete('/restaurant/:id', controllerRestaurants.deleteResto);

module.exports = router;
