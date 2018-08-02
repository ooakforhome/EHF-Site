const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Upload = new Schema({
  _id : {type: String},
  file : [{
    type : Schema.Types.ObjectId,
    ref : 'file'
  }],
  chunk : [{
    type : Schema.Types.ObjectId,
    ref : 'chunk'
  }]
})
