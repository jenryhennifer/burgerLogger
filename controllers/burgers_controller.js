var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

//GET

router.get('/', (req, res) => {
    burger.all(function(data){
        console.log(data)
        var obj = {
            burgers: data
        };
        console.log(obj);
        res.render('index',obj);
    })
});

//POST
router.post('/api/burgers', function(req,res){
    burger.create([req.body.burger_name, req.body.devoured], function(result){
        res.json({id: result.insertId})
    })

})

//PUT
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    cat.update(
      {
        sleepy: req.body.sleepy
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
  });
  

//DELETE


module.exports = router;
