const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CartonSchema = require('./carton');
const ImageSchema = require('./imageschema');
const MaterialSchema = require('./material');
const FeatureSchema = require('./feature');
const PriceSchema = require('./price');


const ProductSchema = new Schema({
  name: String,
  sku: String,
  upc: String,
  color: String,
  product_size: {
    product_length: Number,
    product_width: Number,
    product_height: Number
  },
  product_actual_weight: Number,
  cubic_feet: Number,
  care_instructions: String,
  assembly_required: BOOLEAN,
  warranty: BOOLEAN,
  product_description: String,
  product_specifications: String,
  cartons: [CartonSchema],
  images: [ImageSchema],
  materials: [MaterialSchema],
  features: [FeatureSchema],
  price: [PriceSchema]
})

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;
