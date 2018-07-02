const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
  category_type : {type: String },
  name: String,
  sku: String,
  upc: String,
  color: String,
  images: [{
    type: Schema.Types.ObjectId,
    ref: 'image'
  }],
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

const Product = module.exports = mongoose.model('product', ProductSchema);

module.exports = {
  getProducts: function(req, res){
    Product.find(req.query)
      .populate('image')
        .then(model => res.json(model))
          .catch(err => res.status(422).json(err));
  },

  saveProducts: function(req, res){
    Product.create(req.body)
        .then((res) => res.save())
          .catch(err => res.status(422).json(err));
  }
}
