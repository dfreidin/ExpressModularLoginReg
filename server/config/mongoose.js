const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/login_reg_1");
require("../models/user");