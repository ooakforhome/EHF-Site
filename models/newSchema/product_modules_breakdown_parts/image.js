const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  image: Buffer
})

const Image = module.exports = mongoose.model('image', ImageSchema);
