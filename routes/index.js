
var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");

router.get("/", function(req, res){
   res.render("index"); 
});



router.get("/index", function(req, res){
    
   res.render("index"); 
});

router.get("/Careers", function(req, res){
   res.render("careers"); 
});

router.get("/Training", function(req, res){
   res.render("training"); 
});

router.get("/About", function(req, res){
   res.render("about"); 
});

router.get("/Contact", function(req, res){
   res.render("contact"); 
});

//Auth routes, sigup routes, register forms and register routes
router.get("/secret",isLoggedIn, function(req, res){
   res.render("secret"); 
});

router.get("/signup", function(req, res){
    res.render("signUp");
})
router.post("/signup", function(req, res){
    User.register(new User({username: req.body.username}), req.body.password, function(err,user) {
        if(err){
            console.log(err);
            return res.render('signup');
        } else{ 
            passport.authenticate("local")(req, res, function(){
                res.redirect("/secret");
            });
        }
    });
});
//login logic

// LOGIN ROUTES
//render login form
router.get("/login", function(req, res){
   res.render("login"); 
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}) ,function(req, res){
});

router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});


//middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/secret");
}

module.exports = router;
