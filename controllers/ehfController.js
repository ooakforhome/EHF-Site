const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("express").Router();

//Models
const Product = require('../models/Products_model');
const AccentFurniture = require('../models/Accent_Furniture_model');
// const UploadImg = require('../models/imageSchema');
// const Company = require('../models/Companies_model');
// const Pet = require('../models/Pets_model');
// const Note = require('../models/Notes');


//router
// router.route("/api/uploadImg")
//     .get(UploadImg.getImgs)
//     .post(UploadImg.addImg);

router.route("/api/accentFurniture")
    .get(AccentFurniture.getAccent)
    .post(AccentFurniture.addAccent);

router.route("/api/accentFurniture/:_id")
    .get(AccentFurniture.getAccentById)
    .put(AccentFurniture.updateAccent)
    .delete(AccentFurniture.deleteAccent);

router.route("/api/products")
    .get(Product.getProducts)
    .post(Product.addProduct);

router.route("/api/products/:_id")
    .get(Product.getProductsById)
    .put(Product.updateProduct)
    .delete(Product.deleteProduct);
//
// router.route("/api/notes")
//     .get(Note.getNotes)
//     .post(Note.addNote);
//
// router.route("/api/notes/:_id")
//     .get(Note.getNotesById)
//     .put(Note.updateNote)
//     .delete(Note.deleteNote);

// router.get('/', function(req,res){
//   res.send("company api/users");
// });
//
// router.route("/api/users")
//     .get(Company.getCompanies)
//     .post(Company.addCompany);
//
// router.route("/api/users/:_id")
//     .get(Company.getCompaniesById)
//     .put(Company.updateCompany)
//     .delete(Company.deleteCompany);
//
// router.route("/api/pets")
//     .get(Pet.getPets)
//     .post(Pet.addPet);
//
// router.route("/api/pets/:_id")
//     .get(Pet.getPetsById)
//     .put(Pet.updatePet)
//     .delete(Pet.deletePet);
module.exports = router;
