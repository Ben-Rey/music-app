const mongoose = require("mongoose");

const SoundSchema = new mongoose.Schema({
  title: {
    type: String,
    index: { unique: true },
    required: [true, "Sound Title required"],
    minlength: 4,
    maxlength: 30,
  },
  url: {
    type: String,
    required: [true, "Sound Url required"],
  },
});

SoundSchema.set("toJSON", {
  transform: (doc, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject._v;
  },
});

module.exports = mongoose.model("Sound", SoundSchema);
