const mongoose = require("mongoose");

const SoundSchema = new mongoose.Schema({
  name: {
    type: String,
    index: { unique: true },
    required: [true, "Sound Name required"],
    minlength: 4,
    maxlength: 60,
  },
  size: {
    type: String,
    required: [true, "Sound Size required"],
  },

  room: {
    type: String,
    required: [true, "Sound Size required"],
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
