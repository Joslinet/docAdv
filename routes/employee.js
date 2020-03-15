
const express = require("express");
const router = express.Router({
    mergeParams: true
});
const passport = require("passport");
const Employee = require("../models/employees");
const User = require("../models/user");
mongoose = require('mongoose').set('debug', true);
//INDEX show all employees
router.get("/", function(req, res){
    Employee.find({}, function(err, allEmployees){
    if(err){
        console.log(err);
    } else {
        res.render("employee/index",{employees:allEmployees});
    }
  });
});

//CREATE create new employee
router.post("/", function(req, res){
//    Employee.create(req.body, function(err, newlyCreated){
//        if(err){
//            console.log(err);
//        } else {
//            //redirect back to employees page
//            res.redirect("/employees");
//        }
//    });
});

// NEW Form for new employee
router.get("/new", function(req, res){
    // res.render("application1");
    res.render("employees/new");
});
// NEW Form for new employee
router.get("/application", function(req, res){
    // res.render("application1");
    res.render("employee/application");
});

// NEW Form for new employee
router.post("/application", function(req, res){

	//new and save
	    Employee.create(req.body, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to employees page
            console.log(newlyCreated);
            res.redirect("/employee");
        }
});
});


// SHOW - shows more info about one employee
router.get("/:id", function(req, res){
    //find the emplyee with provided ID
    console.log("params._id is %s \n", req.params.id);
    Employee.findById({_id:req.params.id}, function(err, foundEmployee){
        console.log(foundEmployee);
        if(err){
            console.log(err);
        } else {
            console.log(Object.keys(foundEmployee));
            //render show template with that campground
            res.render("employee/show", {employee: foundEmployee});
        }
    });
});

// //Create Employee
// router.get("/new", function(req, res){
//     res.render("application1");
// });
// //Update Employee
// router.post("/new", function(req, res){
//     console.log("here we are4");
//     res.render("application1");
// });

module.exports = router;