const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beerSchema = new Schema({
  name: String,
  type: String,
  brewery: String,
  tried: Boolean
});

module.exports = mongoose.model('Beer', beerSchema);