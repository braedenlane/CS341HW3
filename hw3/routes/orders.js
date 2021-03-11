// Braeden Lane
// Collaborated with Josh Henderson and Phuocan Nguyen

var express = require('express');
var router = express.Router();
var dbms = require('./dbms.js');
var orderArray = 
    {
        data : [
            {topping : "cherry", quantity : 2},
            {topping : "plain", quantity : 6},
            {topping : "chocolate", quantity : 3},
    ]};

var orderObj = 
    {
        error:null,
        data : [
            {TOPPING:"cherry",QUANTITY:0},
            {TOPPING:"plain",QUANTITY:0},
            {TOPPING:"chocolate",QUANTITY:0},
    ]};

function cherryFunction(error, results) {
    orderObj.data = results;
    orderObj.error = error;
    console.log(orderObj.data);
    orderArray.data[0].quantity = orderObj.data[0].count;
}

function plainFunction(error, results) {
    orderObj.data = results;
    orderObj.error = error;
    console.log(orderObj.data);
    orderArray.data[1].quantity = orderObj.data[0].count;
}

function chocolateFunction(error, results) {
    orderObj.data = results;
    orderObj.error = error;
    console.log(orderObj.data);
    orderArray.data[2].quantity = orderObj.data[0].count;
}

router.post('/', function(req, res, next) {

    dbms.dbquery("SELECT SUM(QUANTITY) AS count FROM ORDERS WHERE MONTH='" + req.body.month + "' AND TOPPING='cherry';", function(error, results) {
        cherryFunction(error, results);
        dbms.dbquery("SELECT SUM(QUANTITY) AS count FROM ORDERS WHERE MONTH='" + req.body.month + "' AND TOPPING='plain';", function(error, results) {
            plainFunction(error, results);
            dbms.dbquery("SELECT SUM(QUANTITY) AS count FROM ORDERS WHERE MONTH='" + req.body.month + "' AND TOPPING='chocolate';", function(error, results) {
                chocolateFunction(error, results);
                res.json(orderArray);
            });
        });
    });
    
    
    // console.log(orderObj.data[0].count);
    // console.log(req.body.month);
    

});

module.exports = router;
