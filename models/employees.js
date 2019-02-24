var  mongoose    = require("mongoose");
var  passportLocalMongoose= require("passport-local-mongoose");
//Schema setup
var docAdvSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    password: String,
    retypePassword: String,
    State: String,
    zipCode: String,
    created: {type: Date, default: Date.now}
});

docAdvSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Employee", docAdvSchema);
