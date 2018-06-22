const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var hooksAndRodsSchema = new Schema({
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

const hooksAndRods = module.exports = mongoose.model ('hooksAndRods', hooksAndRodsSchema);

module.exports = {
  // get all HooksRods Furniture
  getHooksRods: function(req, res){
    hooksAndRods
      .find(req.query)
        .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
  },
  // Add new HookRod Furniture
  addHookRod: function(req, res){
    hooksAndRods
      .create(req.body)
        .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err))
  },
    getHookRodById: function(req, res) {
      hooksAndRods
        .findById(req.params._id)
          .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
  },
    updateHookRod: function(req, res) {
      hooksAndRods
        .findOneAndUpdate({ _id: req.params._id }, req.body)
          .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
  },
    deleteHookRod: function(req, res) {
      hooksAndRods
        .findById({ _id: req.params._id })
          .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
              .catch(err => res.status(422).json(err));
  }
};
