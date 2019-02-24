
var express = require("express");
var router  = express.Router({mergeParams: true});
var passport = require("passport");
var User = require("../models/employees");

//INDEX show all employees
router.get("/employees", function(req, res){
//Get all employees    
//    console.log(Employee)
    Employee.find({}, function(err, employee){
    if(err){
        console.log(err);
    } else {
          res.render("employees",{employees:employee});
    }
  });
});

//CREATE create new employee
router.post("/employees", function(req, res){
    Employee.create(req.body, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to campgrounds page
            res.redirect("/employees");
        }
    });
});

//Show sign up form to create new employee
router.get("/employees/signup", function(req, res){
   res.render("signup.ejs"); 
});
// SHOW - shows more info about one campground
router.get("/employees/:id", function(req, res){
    //find the campground with provided ID
    Employee.findById(req.params.id, function(err, foundEmployee){
        if(err){
            console.log(err);
        } else {
            //render show template with that campground
            res.render("show", {employees: foundCampground});
        }
    });
})


router.get("/application", function(req, res){
    res.render("application1");
});

module.exports = router;