const sessions = require("../controllers/sessions");
const users = require("../controllers/users")
module.exports = function(app) {
    app.get("/", sessions.index);
    app.get("/success", users.success);
    app.post("/users", users.create);
    app.post("/sessions", sessions.create);
}