const express = require("express");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
app.use(session({
    secret: "swordfish",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
require("./server/config/mongoose");
require("./server/config/routes")(app);
app.listen(8000);