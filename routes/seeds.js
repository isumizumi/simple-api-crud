var express         = require('express');
var router          = express.Router();
var controllerFoods = require('../controller/controller_food')

/* GET home page. */
router.get('/foods', controllerFoods.seedFood);

module.exports = router;
