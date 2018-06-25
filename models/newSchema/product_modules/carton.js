const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartonSchema = new Schema({
  carton_number: Number,
  package_length: Number,
  pakcage_width: Number,
  pakcage_height: Number,
  package_weight: Number
})


module.exports = CartonSchema; 
