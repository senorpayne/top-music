const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const musiccompilation = new Schema({
  songTitle: { type: String, required: true },
  songArtist: { type: String, required: true },
  Img_url: { type: String, required: false },
  song_url: { type: String, required: false },
  
});

const Musiccompilation = mongoose.model("Musiccompilation", musiccompilation);

module.exports = Musiccompilation;