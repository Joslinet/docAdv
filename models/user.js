var  mongoose              = require("mongoose");
var  passportLocalMongoose = require("passport-local-mongoose");

//Schema setup
var UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    phone: String,
    password: String,
    retypePassword: String,
    State: String,
    zipCode: String,
    created: {type: Date, default: Date.now}
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
