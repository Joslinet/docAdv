const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy,
  passportLocalMongoose = require("passport-local-mongoose"),
  Employee = require("./models/employees"),
  User = require("./models/user"),
  session = require("express-session"),
  flash = require("connect-flash"),
  path=require('path');	  

const { check, validationResult } = require('express-validator');

//requring routes
var employeeRoutes = require("./routes/employee"),
  indexRoutes = require("./routes/index");



mongoose.connect("mongodb://localhost/docAdvapp", {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true
});

 

   app.set('views', path.join(__dirname, 'views'));
//                      path.join(__dirname, 'views/employees/'), 
//                      path.join(__dirname, 'views/partials/')]);
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))
// app.use(expressValidator());
app.use(session({ secret: 'max', saveUninitialized: false, resave: false }));


// app.use(cookieParser());
app.use(session({
  secret: "my nursing service",
  resave: true,
  saveUninitialized: true,
}));

app.use(flash());

app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});
// app.use(function (req, res, next) {
//   res.locals.message = req.flash();
//   next();
// });


//Passport configuration
app.use(passport.initialize());
app.use(passport.session());

// passport.use(new LocalStrategy({
//   usernameField: 'email',
//   passwordField: 'password',
//   passReqToCallback : 'true'
// }, User.authenticate()));

// passport.use(new LocalStrategy({usernameField: 'email',
// passwordField: 'password',
// passReqToCallback : true}, User.authenticate()));
passport.use( User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});


app.use("/", indexRoutes);

app.use("/employee", employeeRoutes);

// app.use("/employees/:id", employeeRoutes);
// debugger;

// app.use("/application", employeeRoutes);

app.listen(3001, 'localhost', function () {
  console.log("... port 3001 in %s mode", app.settings.env);
});

// app.listen(process.env.PORT, process.env.IP);
