const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PriceSchema = new Schema({
  retail: Number,
  wholesale: Number
})

module.exports = PriceSchema;
