const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var beautySchema = new Schema({
    category_type : {type: String },
    name: {type: String},
    sku: {type: String},
    shipping_weight : {type: Number },
    product_weight : {type: Number },
    package_type: {type: String},
    pkg_width : {type: Number },
    pkg_height : {type: Number },
    pkg_depth : {type: Number },
    actual_width : {type: Number },
    actual_height : {type: Number },
    actual_depth : {type: Number },
    led : {type: String},
    uv : {type: String},
    battery_included : {type: String},
    battery_type : {type: String},
    product_description: {type: String},
    features: {type: Array},
    Warranty : {type: String }
})

const beauty = module.exports = mongoose.model ('beauty', beautySchema);

module.exports = {
  // get all Beauty Furniture
  getBeautys: function(req, res){
    beauty
      .find(req.query)
        .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
  },
  // Add new Beauty Furniture
  addBeauty: function(req, res){
    beauty
      .create(req.body)
        .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err))
  },
    getBeautyById: function(req, res) {
      beauty
        .findById(req.params._id)
          .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
  },
    updateBeauty: function(req, res) {
      beauty
        .findOneAndUpdate({ _id: req.params._id }, req.body)
          .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
  },
    deleteBeauty: function(req, res) {
      beauty
        .findById({ _id: req.params._id })
          .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
              .catch(err => res.status(422).json(err));
  }
};
