const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//----database model-----
var ClientProductSchema = new Schema({
  company_name: {type: String},
  name: {type: String},
  sku: {type: String},
  upc: {type: String},
  wholesale_price: {type: Number},
  retail_price: {type: Number},
  product_info: [{type: Schema.Types.ObjectId, ref:'ProductInfo'}]
})

var ProductInfo = mongoose.model('ProductInfo', ProductInfoSchema );

const ClientProduct = module.exports = mongoose.model ('ClientProduct', ClientProductSchema);

module.exports = {
        getClientProducts: function(req, res) {
          ClientProduct
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        // add
        addClientProduct: function(req, res) {
          ClientProduct
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        getClientProductById: function(req, res) {
          ClientProduct
            .findById(req.params._id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        updateClientProduct: function(req, res) {
          ClientProduct
            .findOneAndUpdate({ _id: req.params._id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        deleteClientProduct: function(req, res) {
          ClientProduct
            .findById({ _id: req.params._id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
