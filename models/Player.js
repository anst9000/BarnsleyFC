// Schema for players
let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let PlayerSchema = new Schema({
  team: {
    type: String,
    required: true
  },
  shirt: String,
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  birthday: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  }
});

module.exports = Player = mongoose.model("player", PlayerSchema);
