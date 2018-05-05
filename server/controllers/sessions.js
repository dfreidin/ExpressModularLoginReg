const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
require("../config/mongoose");
var User = mongoose.model("User");
module.exports = {
    index: function(req, res){
        res.render("index");
    },
    create: function(req, res){
        User.findOne({email: req.body.email}, function(err, user){
            if(err) {
                res.redirect("/");
            }
            else {
                console.log("found user with email " + user.email);
                bcrypt.compare(req.body.password, user.password, function(err, result){
                    if(result) {
                        req.session.user_id = user._id;
                        res.redirect("/success");
                    }
                    else {
                        res.redirect("/");
                    }
                });
            }
        });
    }
}