var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var bcrypt = require('bcryptjs');
//Schema setup
var userSchema = new mongoose.Schema({
    firstName: { type: String, default: '', required: true },
    lastName: { type: String, default: '', required: true },
    username: { type: String, default: '', required: true },
    email: { type: String, default: '' },
    password: { type: String, default: ''},
    created: { type: Date, default: Date }
});

// userSchema.virtual('password')
//     .get(function () { return null; })
//     .set(function (value) {
//         const hash = bcrypt.hashSync(value, 12);
//         this.passwordHash = hash;
//     });

// userSchema.methods.authenticate = function (password) {
//     return bcrypt.compare(password, this.passwordHash);
// };

// userSchema.statics.authenticate = function (email, password, done) {
//     this.findOne({ email: email }, function (err, user) {
//         if (err) {
//             console.log('error authnticate');
//             done(err);
//         }
//         else if (user && user.authenticate(password)) {
//             console.log('good user');
//             done(null, user);
//         }
//         else {
//             console.log('wrong user or password');
//             done(null, false);
//         }
//     });
// };
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
