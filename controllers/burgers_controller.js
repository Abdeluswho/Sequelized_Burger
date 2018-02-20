let express = require("express");
let router = express.Router();
let burger = require("../models/burger.js");

router.get('/', function(req, res){
  burger.all(function(burger_data){
    console.log(burger_data);
    res.render('index', {burger_data});  
  })
})

router.post('/burgers/create', function(req, res){
  burger.create(req.body.burger_name, function(result){
    res.redirect('/');
  })
})

router.put('/burgers/update', function(req, res){
  burger.update(req.body.burger_id, function(result){
    console.log("Put route result: " + result);
    res.redirect('/');
  })
});

router.delete('/burgers/delete', function(req, res){
  burger.delete(req.body.burger_name, function(result){
    res.redirect('/')
  })
});

module.exports = router;






// let burger = require("../models/burger.js");


// router.get("/", function(req, res) {
//   burger.all(function(data) {
//     var hbsObject = {
//       burgers: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

// //Creating a new row and post it to the server - - - - - - - -- - -  -- - 
// router.post("/api/burgers", function(req, res) {
//   burger.create([
//     "burger_name", "devoured"
//   ], [
//     req.body.burger_name, req.body.devoured
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// //Updating a particular row - - - - - - - - - - 
// router.put("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;
//   console.log("condition", condition);
//   burger.update({
//     devoured: req.body.devoured
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// //Deleting a burger
// router.delete("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;
//   burger.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// // Export routes for server.js to use.
// module.exports = router;
