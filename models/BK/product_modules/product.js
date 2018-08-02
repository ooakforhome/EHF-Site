const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ImageSchema = require('./image');


const ProductSchema = new Schema({
  name: String,
  sku: String,
  upc: String,
  color: String,
  images: [ImageSchema],
  product_size: {
    product_length: Number,
    product_width: Number,
    product_height: Number
  },
  product_actual_weight: Number,
  cubic_feet: Number,
  care_instructions: String,
  assembly_required: Boolean,
  warranty: Boolean,
  product_description: String,
  product_specifications: String,
  cartons: {
    carton1: {
      package_length: Number,
      pakcage_width: Number,
      pakcage_height: Number,
      package_weight: Number
    },
    carton2: {
      package_length: Number,
      pakcage_width: Number,
      pakcage_height: Number,
      package_weight: Number
    }
  },
  materials: {material: String},
  features: {
    feature1: String,
    feature2: String,
    feature3: String,
    feature4: String,
    feature5: String,
    feature6: String,
    feature7: String,
    feature8: String
  },
  price: {
    retail: Number,
    wholesale: Number
  }
})

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;
