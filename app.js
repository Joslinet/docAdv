var express     = require("express"),
    app         = express(),
    mongoose    = require("mongoose"),
    passport    = require("passport"),
    bodyParser  = require("body-parser"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose= require("passport-local-mongoose"),
    Employee  = require("./models/employees"),
    User      = require("./models/user")


//requring routes
var userRoutes    = require("./routes/user"),
    employeeRoutes = require("./routes/employee"),
    indexRoutes      = require("./routes/index")
//    seedDB      = require("./seeds")
//    flash       = require("connect-flash"),
//    passport    = require("passport"),
//    LocalStrategy = require("passport-local")
    
//app.use(bodyParser.json());
//Connetc to database
mongoose.connect("mongodb://localhost/docAdv_app", {
  useCreateIndex: true,
  useNewUrlParser: true});

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());

//Passport configuration
app.use(require("express-session")({
    secret:"my nursing service",
    resave: false,
    saveUninitialized: false
}));
//reading the the seesion taking encoded data uncoding it 
//desrialize
//and encoding it to put back in session
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.serializeUser(Employee.serializeUser());
passport.deserializeUser(Employee.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   next();
});

app.use("/", indexRoutes);
app.use("/employees", employeeRoutes);
app.use("/employees/:id", employeeRoutes);
app.use("/application", employeeRoutes);

//app.listen(3001, 'localhost', function() {
//  console.log("... port 3001 in %s mode", app.settings.env);
//});

app.listen(process.env.PORT, process.env.IP);
