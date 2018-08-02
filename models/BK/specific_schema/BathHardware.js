const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var bathHardwareSchema = new Schema({
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
    care_instructions : {type: String },
    assembly_required : {type: String },
    Warranty : {type: String }
})

const bathHardware = module.exports = mongoose.model ('bathHardware', bathHardwareSchema);

module.exports = {
  // get all HooksRods Furniture
  getBathHardwares: function(req, res){
    bathHardware
      .find(req.query)
        .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
  },
  // Add new BathHardware Furniture
  addBathHardware: function(req, res){
    bathHardware
      .create(req.body)
        .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err))
  },
    getBathHardwareById: function(req, res) {
      bathHardware
        .findById(req.params._id)
          .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
  },
    updateBathHardware: function(req, res) {
      bathHardware
        .findOneAndUpdate({ _id: req.params._id }, req.body)
          .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
  },
    deleteBathHardware: function(req, res) {
      bathHardware
        .findById({ _id: req.params._id })
          .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
              .catch(err => res.status(422).json(err));
  }
};
