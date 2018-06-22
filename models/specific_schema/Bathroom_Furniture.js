const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var bathroomFurnitureSchema = new Schema({
    category_type : {type: String },
    name: {type: String},
    sku: {type: String},
    shipping_weight : {type: Number },
    product_weight : {type: Number },
    color : {type: String },
    cartons : {type: String },
    materials : {type: String },
    pkg_width : {type: Number },
    pkg_height : {type: Number },
    pkg_depth : {type: Number },
    actual_width : {type: Number },
    actual_height : {type: Number },
    actual_depth : {type: Number },
    drawer_length : {type: Number },
    drawer_width : {type: Number },
    drawer_height : {type: Number },
    shelf_length : {type: Number },
    shelf_width : {type: Number },
    inches_btw_shelf : {type: Number },
    product_description: {type: String},
    features: {type: Array},
    care_instructions : {type: String },
    assembly_required : {type: String },
    Warranty : {type: String }
})

const bathroomFurniture = module.exports = mongoose.model ('bathroomFurniture', bathroomFurnitureSchema);

module.exports = {
  // get all Bathroom Furniture
  getBathroom: function(req, res){
    bathroomFurniture
      .find(req.query)
        .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
  },
  // Add new Bathroom Furniture
  addBathroom: function(req, res){
    bathroomFurniture
      .create(req.body)
        .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err))
  },
    getBathroomById: function(req, res) {
      bathroomFurniture
        .findById(req.params._id)
          .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
  },
    updateBathroom: function(req, res) {
      bathroomFurniture
        .findOneAndUpdate({ _id: req.params._id }, req.body)
          .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
  },
    deleteBathroom: function(req, res) {
      bathroomFurniture
        .findById({ _id: req.params._id })
          .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
              .catch(err => res.status(422).json(err));
  }
};
