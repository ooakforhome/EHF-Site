const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//----database model-----
var ProductInfoSchema = new Schema({
  cattype: {type: String},
  image: {type: Buffer},
  product_weight: {type: Number},
  color: {type: String},
  actual_width: {type: Number},
  actual_height: {type: Number},
  actual_depth: {type: Number},
  materials: {type: String},
  care_instructions: {type: Boolean},
  assembly_required: {type: String},
  Warranty: {type: Boolean},
  detail_measurement: {type:Buffer},
  features: {type: Array},
  shelf_length: {type: Number},
  shelf_width: {type: Number},
  inches_btw_shelf: {type: Number},
  drawer_length: {type: Number},
  drawer_width: {type: Number},
  drawer_height: {type: Number},
  shelf_weight_capacity: {type: Number},
  solar_panel: {type: String},
  led_color: {type: String},
  led: {type: String},
  uv: {type: String},
  battery_included: {type: String},
  battery_type: {type: String},
  capacity: {type: Number},
  cartons: [{type: Schema.Types.ObjectId, ref: "Cartons"}]
})

const ProductInfo = module.exports = mongoose.model ('ProductInfo', ProductInfoSchema);

module.exports = {
        getProductInfo: function(req, res) {
          ProductInfo
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        // add
        addProductInfo: function(req, res) {
          ProductInfo
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        getProductInfoById: function(req, res) {
          ProductInfo
            .findById(req.params._id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        updateProductInfo: function(req, res) {
          ProductInfo
            .findOneAndUpdate({ _id: req.params._id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        deleteProductInfo: function(req, res) {
          ProductInfo
            .findById({ _id: req.params._id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
