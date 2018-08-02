const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//----database model-----
var productSchema = new Schema({
    cattype : {type: String },
    image : {type: String },
    name: {type: String },
    shipping_weight : {type: String },
    product_weight : {type: String },
    color : {type: String },
    cartons : {type: String },
    pkg_width : {type: String },
    pkg_height : {type: String },
    pkg_depth : {type: String },
    actual_width : {type: String },
    actual_height : {type: String },
    actual_depth : {type: String },
    materials : {type: String },
    care_instructions : {type: String },
    assembly_required : {type: String },
    Warranty : {type: String },
    detail_measurement : {type: String },
    features : {type: String },
    shelf_length : {type: String },
    shelf_width : {type: String },
    inches_btw_shelf : {type: String },
    drawer_length : {type: String },
    drawer_width : {type: String },
    drawer_height : {type: String },
    shelf_weight_capacity : {type: String },
    solar_panel : {type: String },
    led_color : {type: String },
    led : {type: String },
    uv : {type: String },
    battery_included : {type: String },
    battery_type : {type: String },
    capacity : {type: String }
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
    }
};
