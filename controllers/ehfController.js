const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("express").Router();

//Models
const Product = require('../models/Products_model');
const Bath = require('../models/Bath_model');
const Accentfurniture = require('../models/accentfurniture_schema');
const Pet = require('../models/Pet_model');

//router
router.route("/api/products")
    .get(Product.getProducts)
    .post(Product.addProduct);

router.route("/api/products/:_id")
    .get(Product.getProductsById)
    .put(Product.updateProduct)
    .delete(Product.deleteProduct);

router.route("/api/baths")
    .get(Bath.getBaths)
    .post(Bath.addBath);

router.route("/api/bath/:_id")
    .get(Bath.getBathsById)
    .put(Bath.updateBath)
    .delete(Bath.deleteBath);

router.route("/api/accents")
    .get(Accentfurniture.getAccentfurnitures)
    .post(Accentfurniture.addAccentfurniture);

router.route("/api/accent/:_id")
    .get(Accentfurniture.getAccentfurnituresById)
    .put(Accentfurniture.updateAccentfurniture)
    .delete(Accentfurniture.deleteAccentfurniture);

router.route("/api/pets")
    .get(Pet.getPets)
    .post(Pet.addPet);

router.route("/api/pet/:_id")
    .get(Pet.getPetById)
    .put(Pet.updatePet)
    .delete(Pet.deletePet);

module.exports = router;
