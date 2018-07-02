const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeatureSchema = new Schema({
  feature: String
})

module.exports = FeatureSchema;
