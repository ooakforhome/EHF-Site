const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var featuresSchema = new Schema ({
  feature: {type: String},
  feature1: {type: String},
  feature2: {type: String},
  feature3: {type: String},
  feature4: {type: String},
  feature5: {type: String},
  feature6: {type: String},
  feature7: {type: String},
  feature8: {type: String},
  feature9: {type: String},
  feature10: {type: String}
})

const features = module.exports = mongoose.model('features', featureSchema);

module.exports = {
  // get all Features Furniture
  getFeatures: function(req, res){
    features
      .find(req.query)
        .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
  },
  // Add new Features Furniture
  addFeature: function(req, res){
    features
      .create(req.body)
        .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err))
  },
    getFeatureById: function(req, res) {
      features
        .findById(req.params._id)
          .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
  },
    updateFeature: function(req, res) {
      features
        .findOneAndUpdate({ _id: req.params._id }, req.body)
          .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
  },
    deleteFeature: function(req, res) {
      features
        .findById({ _id: req.params._id })
          .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
              .catch(err => res.status(422).json(err));
  }
};
