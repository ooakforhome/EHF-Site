const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//----database model-----
var CartonsSchema = new Schema({
  number: {type: Number},
  pkg_width : {type: String },
  pkg_height : {type: String },
  pkg_depth : {type: String },
  shipping_weight : {type: String }
})

var CartonsInfo = mongoose.model('CartonsInfo', CartonsSchema);
