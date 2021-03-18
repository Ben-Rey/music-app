const Sound = require("../models/sound.model");

module.exports = class SoundController {
  add(req, res) {
    res.send("create Sound");
  }

  get(req, res) {
    res.send("Get a specific Sound");
  }

  list(req, res) {
    res.send("Get all sounds");
  }
};
