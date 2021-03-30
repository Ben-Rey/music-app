const SoundModel = require("../models/sound.model"),
  path = require("path"),
  fs = require("fs");

module.exports = class SoundController {
  /* ---------------------------- Save a new sound ---------------------------- */

  async add(req, res) {
    const fileToUpload = req?.files?.sound;

    if (!fileToUpload || !fileToUpload.mimetype.includes("audio"))
      return res.status(400).send("No files were uploaded.");

    fileToUpload.name = fileToUpload.name.replace(/\s/g, "");

    const sound = await SoundModel.find({ name: fileToUpload.name });

    if (sound.length) return res.status(401).send("Sound already exists");

    try {
      await SoundModel.create({
        name: fileToUpload.name,
        size: fileToUpload.size,
        room: req.body.room,
        key: req.body.key,
        keyCode: req.body.keyCode,
      });
    } catch (error) {
      return res.status(401).send("Error Database");
    }

    fs.writeFile(
      path.join(__dirname, "../public", `sounds/${fileToUpload.name}`),
      fileToUpload.data,
      err => {
        if (err) {
          SoundModel.deleteOne({ name: fileToUpload.name });
          return res.send("File not supported");
        }
      }
    );

    return res.send("Sound Created");
  }

  /* ----------------------------- Get Sound file ----------------------------- */

  async get(req, res) {
    const sound = await SoundModel.find({ name: req.params.soundName });

    if (sound.length) {
      res.sendFile(path.join(__dirname, "../public", `sounds/${req.params.soundName}`));
    } else {
      res.status(404).send("File not found");
    }
  }

  /* ------------------------------ Get Sounds list ----------------------------- */

  async list(req, res) {
    let room = req.params.room ? req.params.room : "main";
    const sounds = await SoundModel.find({ room: room });
    res.send(sounds);
  }

  /* ------------------------------ Get Sounds list ----------------------------- */

  async delete(req, res) {
    console.log(req.params.soundName);
    try {
      let value = await SoundModel.deleteOne({ name: req.params.soundName });
      if (value.deletedCount > 0) return res.send("Deleted");
      return res.status(404).send("Not found");
    } catch (error) {
      console.log(error);
    }
  }
};
