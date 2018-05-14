const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//----database model-----
var EhfSchema = new Schema({
  name: {type: String},
  sku: {type: String},
  upc: {type: String},
  product_description: {type: String},
  product_specification: {type: String},
  wholesale_price: {type: Number},
  retail_price: {type: Number},
  product_info: [{type: Schema.Types.ObjectId, ref:'ProductInfo'}],
  client_product_info: [{type: Schema.Types.ObjectId, ref:'ClientProduct'}]
})

const ClientProduct = mongoose.model('ClientProduct', ClientProductSchema );
const ProductInfo = mongoose.model('ProductInfo', ProductInfoSchema );

const Ehf = module.exports = mongoose.model ('Ehf', EhfSchema);

module.exports = {
        getEhfs: function(req, res) {
          Ehf
            .find(req.query)
            .populate('ProductInfo')
            .populate('ClientProduct')
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        // add
        addEhf: function(req, res) {
          Ehf
            .create(req.body)
            .populate('ProductInfo')
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        getEhfById: function(req, res) {
          Ehf
            .findById(req.params._id)
            .populate('ProductInfo')
            .populate('ClientProduct')
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        updateEhf: function(req, res) {
          Ehf
            .findOneAndUpdate({ _id: req.params._id }, req.body)
            .populate('ProductInfo')
            .populate('ClientProduct')
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        deleteEhf: function(req, res) {
          Ehf
            .findById({ _id: req.params._id })
            .populate('ProductInfo')
            .populate('ClientProduct')
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
