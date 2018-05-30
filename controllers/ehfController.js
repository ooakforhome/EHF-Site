const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("express").Router();

//Models
const Company = require('../models/Companies_model');
const Product = require('../models/Products_model');
const Pet = require('../models/Pets_model');
const Note = require('../models/Notes');


//router
router.get('/', function(req,res){
  res.send("company api/users");
});

// router.route("/api/files")
//     .then()

router.route("/api/users")
    .get(Company.getCompanies)
    .post(Company.addCompany);

router.route("/api/users/:_id")
    .get(Company.getCompaniesById)
    .put(Company.updateCompany)
    .delete(Company.deleteCompany);

router.route("/api/pets")
    .get(Pet.getPets)
    .post(Pet.addPet);

router.route("/api/pets/:_id")
    .get(Pet.getPetsById)
    .put(Pet.updatePet)
    .delete(Pet.deletePet);

router.route("/api/products")
    .get(Product.getProducts)
    .post(Product.addProduct);

router.route("/api/products/:_id")
    .get(Product.getProductsById)
    .put(Product.updateProduct)
    .delete(Product.deleteProduct);

router.route("/api/notes")
    .get(Note.getNotes)
    .post(Note.addNote);

router.route("/api/notes/:_id")
    .get(Note.getNotesById)
    .put(Note.updateNote)
    .delete(Note.deleteNote);

module.exports = router;
