const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beautyDeviceSchema = new Schema({
  Product_Name: {type: String},
  category_type: { type: String, default: "Beauty Device" },
  SKU: {type: String},
  Product_Shipping_Weight_kg: {type: String},
  Product_Weight_kg: {type: String},
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
  Feature_1: { type: String, default:""},
  Feature_2: { type: String, default:""},
  Feature_3: { type: String, default:""},
  Feature_4: { type: String, default:""},
  Feature_5: { type: String, default:""},
  Feature_6: { type: String, default:""},
  Feature_7: { type: String, default:""},
  Feature_8: { type: String, default:""},
  Feature_9: { type: String, default:""},
  Care_Instructions: {type: String},
  Assembly_required: {type: String},
  Product_Shipping_Method: {type: String},
  Wholesale_Price: {type: String},
  Retail: {type: String},
  Warranty: {type: String}
})

const BeautyDevice = module.exports = mongoose.model('BeautyDevice', beautyDeviceSchema);

module.exports= {
    getBeautyDevices: function(req, res) {
      BeautyDevice
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      },
    // add
    addBeautyDevice: function(req, res) {
      BeautyDevice
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      },
    getBeautyDeviceById: function(req, res) {
      BeautyDevice
        .findById(req.params._id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      },
    updateBeautyDevice: function(req, res) {
      BeautyDevice
        .findOneAndUpdate({ _id: req.params._id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      },
    deleteBeautyDevice: function(req, res) {
      BeautyDevice
        .findById({ _id: req.params._id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      }
};
