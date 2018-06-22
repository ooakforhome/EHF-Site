const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var otdSchema = new Schema({
    category_type : {type: String },
    name: {type: String},
    sku: {type: String},
    shipping_weight : {type: Number },
    product_weight : {type: Number },
    color : {type: String },
    materials : {type: String },
    pkg_width : {type: Number },
    pkg_height : {type: Number },
    pkg_depth : {type: Number },
    actual_width : {type: Number },
    actual_height : {type: Number },
    actual_depth : {type: Number },
    product_description: {type: String},
    features: {type: Array},
    Warranty : {type: String }
})

const otd = module.exports = mongoose.model ('otd', otdSchema);

module.exports = {
  // get all HooksRods Furniture
  getOtds: function(req, res){
    otd
      .find(req.query)
        .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
  },
  // Add new Otd Furniture
  addOtd: function(req, res){
    otd
      .create(req.body)
        .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err))
  },
    getOtdById: function(req, res) {
      otd
        .findById(req.params._id)
          .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
  },
    updateOtd: function(req, res) {
      otd
        .findOneAndUpdate({ _id: req.params._id }, req.body)
          .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
  },
    deleteOtd: function(req, res) {
      otd
        .findById({ _id: req.params._id })
          .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
              .catch(err => res.status(422).json(err));
  }
};
