var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var bcrypt = require('bcryptjs');
//Schema setup
var commentSchema = new mongoose.Schema({
    text: String,
    author: String
});
 

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Comment", commentSchema);
