var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

//GET

router.get('/', (req, res) => {
    burger.selectAll(function(data){
        var obj = {
            burgers: data
        };
        console.log(obj)
        res.render('index',obj)
    })

});

//POST
router.post('/api/burgers')

//PUT

//DELETE
