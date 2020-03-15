const passport = require("passport");
const User = require("../models/user");
const bcrypt = require('bcryptjs');
const {
    check,
    validationResult
} = require('express-validator');

exports.newUserSignIn = (req,res, next)=> {
        var errors = validationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            for (var key in errors.errors) {
                req.flash('error', errors.errors[key].msg);
            }
            return res.redirect("/signup");
        } else {
            var newUser = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                username: req.body.username,
                email: req.body.email,
                created: req.body.created
            });
            User.register(newUser, req.body.password, function (err, user) {
                if (err) {
                    req.flash("error", err.message);
                    return res.redirect("signup");
                }
                passport.authenticate("local")(req, res, function () {
                    req.flash("success", "Welcome to Doctor's Advice LLC " +
                        req.body.firstName + " please log in");
                    res.redirect("/");
                });
            });
        }
    }