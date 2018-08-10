const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
  Product_Name : { type: String },
  category_type: { type: String, default: "Pet Product" },
  SKU : { type: String },
  Product_Shipping_Weight: {type: Number},
  Product_Weight: {type: Number},
  images: {type: String, default: "null" },
  Cubic_Feet: {type: Number},
  UPC : { type: String },
  Color : { type: String },
  Packing_Carton_Width: {type: Number},
  Packing_Carton_Length: {type: Number},
  Packing_Carton_Height: {type: Number},
  Actual_Product_Length: {type: Number},
  Actual_Product_Width: {type: Number},
  Actual_Product_Height: {type: Number},
  Materials : { type: String },
  Product_Description : { type: String },
  Feature_1: { type: String, default:""},
  Feature_2: { type: String, default:""},
  Feature_3: { type: String, default:""},
  Feature_4: { type: String, default:""},
  Feature_5: { type: String, default:""},
  Feature_6: { type: String, default:""},
  Feature_7: { type: String, default:""},
  Feature_8: { type: String, default:""},
  Feature_9: { type: String, default:""},
  Care_Instructions : { type: String },
  Assembly_required : { type: String },
  Product_Shipping_Method : { type: String },
  WxDxH : { type: String },
  Billable_weight: { type: Number },
  Zone_8 : { type: String },
  wholesale_price: { type: Number },
  Retail: { type: Number },
  Warranty : { type: String }
})

const Pet = module.exports = mongoose.model('Pet', petSchema);

module.exports = {
  // read all pet items
  getPets: function(req, res){
    Pet
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // add new pet items
  addPet: function(req, res){
    Pet
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // read one pet product
  getPetById: function(req, res){
    Pet
      .findById(req.params._id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Update pet product by ID
  updatePet: function(req, res){
    Pet
      .findOneAndUpdate({ _id: req.params._id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Delete specific pet item by ID
  deletePet: function(req, res){
    Pet
      .findById({ _id: req.params._id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
