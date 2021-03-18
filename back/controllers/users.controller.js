const User = require("../models/user.model");

module.exports = class UserController {
  create(req, res) {
    console.log(object);
    res.send("Create user");
    // Check if user exist
    // Return error if exist
    // Check requiered data
    // Return error if requierement not fullfiled
    // Save User
    // Return error if problem
    // Return Created
  }
  get(req, res) {
    res.send("Get a user");
  }
  list(req, res) {
    res.send("Get all users");
  }
};
