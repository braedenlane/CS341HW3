// Braeden Lane

var express = require('express');
var router = express.Router();
var orderArray = 
    {"data" : [
        {"zer" : {"topping" : "cherry", "quantity" : 2}},
        {"one" : {"topping" : "plain", "quantity" : 6}},
        {"two" : {"topping" : "chocolate", "quantity" : 3}},
    ]};

/* GET orders listing. */
router.get('/', function(req, res, next) {
    res.json(orderArray);
});

router.post('/', function(req, res, next) {
    res.json(orderArray);
});

module.exports = router;
