const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// var FileSchema = new Schema({}, { strict: false, collection: 'uploads.files' });

//----database model-----
var productSchema = new Schema({
  category_type: {type: String},
  Product_Name: {type: String},
  SKU: {type: String},
  images: {type: String},
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
  Shelf_Length: { type: String },
  Shelf_Width: { type: String },
  Materials: { type: String },
  Product_Description: { type: String },
  Feature_1: { type: String, default:""},
  Feature_2: { type: String, default:""},
  Feature_3: { type: String, default:""},
  Feature_4: { type: String, default:""},
  Feature_5: { type: String, default:""},
  Feature_6: { type: String, default:""},
  Feature_7: { type: String, default:""},
  Feature_8: { type: String, default:""},
  Feature_9: { type: String, default:""},
  Maximum_Shelf_Weight_Capacity: { type: Number },
  Care_Instructions: { type: String },
  Assembly_required: { type: String },
  Product_Shipping_Method: { type: String },
  WxDxH: { type: String },
  Billable_weight: { type: Number },
  Zone_8: { type: String },
  wholesale_price: { type: Number },
  Retail: { type: Number },
  Warranty: { type: String },
  Capacity: { type: Number },
  Product_Shipping_Weight_kg: { type: Number },
  Product_Weight_kg: { type: Number },
  Quantity_in_box: { type: Number },
  Package: { type: String },
  Inches_in_between_shelf: { type: Number },
  Mirror_size: { type: String },
  LED: { type: String },
  UV: { type: String },
  Battery_included: { type: String },
  Battery_type: { type: String },
  Wholesale_5_Pad: { type: String },
  Wholesale_10_Pad: { type: String },
  Delivered_Price: { type: String },
  Product_Diameter: { type: Number}
})

const Product = module.exports = mongoose.model ('Product', productSchema);

module.exports = {
        getProducts: function(req, res) {
          Product
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        // add
        addProduct: function(req, res) {
          Product
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        getProductsById: function(req, res) {
          Product
            .findById(req.params._id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        updateProduct: function(req, res) {
          Product
            .findOneAndUpdate({ _id: req.params._id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        deleteProduct: function(req, res) {
          Product
            .findById({ _id: req.params._id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        findCategory: function(req, res) {
          Product
            .find({category_type: "Accent Furniture"})
              .then(dbModel => res.json(dbModel))
              .catch(err => res.status(422).json(err));
        }
};
