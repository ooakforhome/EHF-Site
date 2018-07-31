const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bathSchema = new Schema({
  Product_Name: {type: String},
  category_type: { type: String },
  SKU: {type: String},
  Product_Shipping_Weight: {type: Number},
  Product_Weight: {type: Number},
  Cubic_Feet: {type: Number},
  UPC: {type: String},
  Color: {type: String},
  Number_of_Cartons: {type: Number},
  Packing_Carton_Width: {type: Number},
  Packing_Carton_Depth: {type: Number},
  Packing_Carton_Height: {type: Number},
  Actual_Product_Length: {type: Number},
  Actual_Product_Width: {type: Number},
  Actual_Product_Height: {type: Number},
  Drawer_Length: {type: String},
  Drawer_Width: {type: String},
  Drawer_height: {type: String},
  Shelf_Length: {type: Number},
  Shelf_Width: {type: Number},
  Materials: {type: String},
  Product_Description: {type: String},
  Feature_1: {type: String},
  Feature_2: {type: String},
  Feature_3: {type: String},
  Feature_4: {type: String},
  Feature_5: {type: String},
  Feature_6: {type: String},
  Feature_7: {type: String},
  Feature_8: {type: String},
  Feature_9: {type: String},
  Maximum_Shelf_Weight_Capacity: {type: String},
  Care_Instructions: {type: String},
  Assembled: {type: String},
  Product_Shipping_Method: {type: String},
  WxDxH: {type: String},
  Billable_weight: {type: String},
  Zone_8: {type: String},
  new_wholesale_prices_from: {type: String},
  Retail: {type: String},
  Warranty: {type: String}
})

const Bath = module.exports = mongoose.model ('Bath', bathSchema);

module.exports= {
    getBaths: function(req, res) {
      Bath
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      },
    // add
    addBath: function(req, res) {
      Bath
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      },
    getBathsById: function(req, res) {
      Bath
        .findById(req.params._id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      },
    updateBath: function(req, res) {
      Bath
        .findOneAndUpdate({ _id: req.params._id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      },
    deleteBath: function(req, res) {
      Bath
        .findById({ _id: req.params._id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      }
};
