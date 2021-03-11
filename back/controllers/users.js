const User = require("../models/user");

module.exports = class UserController {
  create(req, res) {
    console.log("create User");
  }
  get(req, res) {
    res.send("Get a user");
  }
};
