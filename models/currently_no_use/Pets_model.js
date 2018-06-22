const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//----database model-----
var petSchema = new Schema({
  name: {type: String, required: true},
  sku: {type: String},
  price: {type: String}
})

const Pet = module.exports = mongoose.model ('Pet', petSchema);

module.exports = {
        getPets: function(req, res) {
          Pet
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        // add
        addPet: function(req, res) {
          Pet
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        getPetsById: function(req, res) {
          Pet
            .findById(req.params._id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        updatePet: function(req, res) {
          Pet
            .findOneAndUpdate({ _id: req.params._id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        deletePet: function(req, res) {
          Pet
            .findById({ _id: req.params._id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
