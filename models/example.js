const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Bath = require('./Bath_model');
const Pet = require('./Pet_model');

const AllProductsSchema = new Schema({
  baths: [Bath],
  pets: [Pet]
})

const AllProduct = module.exports = mongoose.model('AllProduct', AllProductsSchema);

module.exports = {
  getAllProducts: function(req, res){
    AllProductPage
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
