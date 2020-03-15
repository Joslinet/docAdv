/*jshint esversion: 6 */
const express = require("express");
const router = express.Router({
    mergeParams: true
});
const passport = require("passport");
const User = require("../models/user");
const bcrypt = require('bcryptjs');
const {
    check,
    validationResult
} = require('express-validator');
userController = require("../controllers/user");

router.get("/", function (req, res) {

    res.render("index");
});

router.get("/signup", function (req, res) {
    res.render("signUp");
});

router.post("/signup",
    [
        check('firstName').not().isEmpty().withMessage('Enter First Name')
        .isLength({
            min: 1
        }).trim()
        .withMessage('Username cannot be empty.')
        .matches(/^[a-zA-Z0-9_]+$/, 'i').withMessage('Username must be alphanumeric, and can contain underscores'),
        check('lastName').not().isEmpty().withMessage('Enter Last Name').isLength({
            min: 1
        }).trim()
        .withMessage('Username cannot be empty.')
        .matches(/^[a-zA-Z0-9_]+$/, 'i').withMessage('Username must be alphanumeric, and can contain underscores'),
        // Form field: 'email'
        check('email')
        .isEmail().withMessage('It must be an email')
        .isLength({
            min: 4,
            max: 100
        })
        .withMessage('Email address must be between 4-100 characters long, please try again.')
        .trim()
        .normalizeEmail(),
        check('password')
        .isLength({
            min: 8,
            max: 100
        })
        .withMessage('Password must be between 8-100 characters long.'),
        check('password')
        .matches('[0-9]').withMessage('Password must contain at least 1 number.')
        .matches('[a-z]').withMessage('Password must contain at least 1 lowercase letter.')
        .matches('[A-Z]').withMessage('Password must contain at least 1 uppercase letter.'),
        check('retypePassword')
        .exists()
        .withMessage('Please retype password')
        .custom((value, {
            req,
            loc,
            path
        }) => {
            if (value !== req.body.password) {
                return false;
            } else {
                return value;
            }
        }).withMessage("Passwords don't match.")
    ], userController.newUserSignIn
    // function (req, res) {
    //     var errors = validationResult(req);
    //     console.log(errors);
    //     if (!errors.isEmpty()) {
    //         for (var key in errors.errors) {
    //             req.flash('error', errors.errors[key].msg);
    //         }
    //         return res.redirect("/signup");
    //     } else {
    //         var newUser = new User({
    //             firstName: req.body.firstName,
    //             lastName: req.body.lastName,
    //             username: req.body.username,
    //             email: req.body.email,
    //             created: req.body.created
    //         });
    //         User.register(newUser, req.body.password, function (err, user) {
    //             if (err) {
    //                 req.flash("error", err.message);
    //                 return res.redirect("signup");
    //             }
    //             passport.authenticate("local")(req, res, function () {
    //                 req.flash("success", "Welcome to Doctor's Advice LLC " +
    //                     req.body.firstName + " please log in");
    //                 res.redirect("/");
    //             });
    //         });
    //     }
    // }
    );

//show login form
router.get("/login", function (req, res) {
    res.render('login');
});

// Login Process
router.post('/login', function (req, res, next) {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
});

router.get("/logout", function (req, res) {
    req.logout();
    req.flash("success", "Logged you out!");
    res.redirect("/");
});


router.get("/About", function (req, res) {
    res.render("about");
});

router.get("/Contact", function (req, res) {
    res.render("contact");
});

// //Auth routes, sigup routes, register forms and register routes
// router.get("/secret", isLoggedIn, function (req, res) {
//     res.render("secret");
// });


// //login logic



//middleware
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/");
}

module.exports = router;