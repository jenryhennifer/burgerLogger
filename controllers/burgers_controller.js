var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

//GET

router.get('/', (req, res) => {
    burger.all(function(data){
        var obj = {
            burgers: data
        };
        console.log(obj);
        res.render('index',obj);
    })
});

//POST
router.post('/api/burgers', function(req,res){
    burger.create(['burger_name'],[req.body.burger_name], function(result){
        res.json({id: result.insertId})
    })

})

//PUT
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log('put')
    console.log("condition", condition);
    console.log(req.body.devoured)
    burger.update(
      {
        devoured: req.body.devoured
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
  });
  

//DELETE


module.exports = router;
