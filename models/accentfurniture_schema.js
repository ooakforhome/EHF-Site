const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accentfurnitureSchema = new Schema({
  Product_Name: {type: String},
  category_type: { type: String, default: "Accent Furniture" },
  SKU: {type: String},
  images: {type: String},
  Product_Shipping_Weight: {type: Number},
  Product_Weight: {type: Number},
  UPC: {type: String},
  Color: {type: String},
  Number_of_Cartons: {type: Number},
  Cuft: {type: Number},
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
  Inches_in_between_shelf: {type: Number},
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
  Care_Instructions: {type: String},
  Assembly_required: {type: String},
  Product_Shipping_Method: {type: String},
  Wholesale_Price: {type: String},
  Retail: {type: String},
  Warranty: {type: String}
})

const Accentfurniture = module.exports = mongoose.model ('Accentfurniture', accentfurnitureSchema);

module.exports= {
    getAccentfurnitures: function(req, res) {
      Accentfurniture
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      },
    // add
    addAccentfurniture: function(req, res) {
      Accentfurniture
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      },
    getAccentfurnituresById: function(req, res) {
      Accentfurniture
        .findById(req.params._id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      },
    updateAccentfurniture: function(req, res) {
      Accentfurniture
        .findOneAndUpdate({ _id: req.params._id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      },
    deleteAccentfurniture: function(req, res) {
      Accentfurniture
        .findById({ _id: req.params._id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      }
};
