var express = require('express');
var router = express.Router();
// var product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
	Product.find(function(err, docs){
 res.render('shop/index', { title: 'shopping cart', products: docs });
	}); 
});

module.exports = router;
