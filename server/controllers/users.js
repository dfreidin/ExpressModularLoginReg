const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
require("../config/mongoose");
var User = mongoose.model("User");
module.exports = {
    success: function(req, res){
        if(req.session.user_id) {
            User.findOne({_id: req.session.user_id}, function(err, user){
                if(err) {
                    res.redirect("/");
                }
                else {
                    res.render("show", {user: user});
                }
            });
        }
        else {
            res.redirect("/");
        }
    },
    create: function(req, res){
        var user = new User();
        var user_fields = ["email", "first_name", "last_name", "birthday"];
        for(var i=0; i<user_fields.length; i++) {
            user[user_fields[i]] = req.body[user_fields[i]];
        }
        bcrypt.hash(req.body.password, 10, function(err, hash){
            if(err) {
                res.redirect("/");
            }
            else {
                user.password = hash;
                user.save(function(err){
                    if(err) {
                        res.redirect("/");
                    }
                    else {
                        req.session.user_id = user._id;
                        res.redirect("/success");
                    }
                });
            }
        });
    }
}