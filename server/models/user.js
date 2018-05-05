const mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true,
        match: [/\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i, 'Please fill a valid email address']},
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    password: {type: String, required: true},
    birthday: {type: Date, required: true}
});
mongoose.model("User", UserSchema);