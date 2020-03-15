var express = require("express");
var router = express.Router({ mergeParams: true });
var passport = require("passport");
var User = require("../models/user");

router.get("/", function (req, res) {

    res.render("index");
});

router.get("/signup", function (req, res) {

    res.render("signUp");
});



// //show login form
// router.get("/login", function (req, res) {
//     const flashMessages = res.locals.getMessages();
//     console.log('flash', flashMessages);
  
//     if (flashMessages.error) {
//       res.render('login', {
//         showErrors: true,
//         errors: flashMessages.error
//       });
//     }
//     else {
//       res.render('login');
//     }
//   });

// router.post('/login', passport.authenticate('local', {
//     successRedirect: '/home',
//     failureRedirect: '/login',
//     failureFlash: true
//   }));

// router.get("/logout", function (req, res) {
//     req.logout();
//     req.flash("success", "Logged you out!");
//     res.redirect("/");
// });


router.get("/About", function (req, res) {
    res.render("about");
});

router.get("/Contact", function (req, res) {
    res.render("contact");
});

//Auth routes, sigup routes, register forms and register routes
router.get("/secret", isLoggedIn, function (req, res) {
    res.render("secret");
});


//login logic



//middleware
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash("danger", "Please log in  or sign up");
    res.redirect("/");
}

module.exports = router;