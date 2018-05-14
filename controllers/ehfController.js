const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("express").Router();

//Models
const Product = require('../models/products_model');
const ProductInfo = require('../models/ProductInfo_model');
const ClientProduct = require('../models/ClientProduct_model');
const Ehf = require('../models/Ehf_model');
const Note = require('../models/Notes');

//router
router.get('/', function(req,res){
  res.send("ehf api/ehfs");
});

router.route("/api/ehfs")
    .get(Ehf.getEhf)
    .post(Ehf.addEhf);

router.route("/api/ehf/:_id")
    .get(Ehf.getEhfById)
    .put(Ehf.updateEhf)
    .delete(Ehf.deleteEhf);

router.route("/api/products")
    .get(Product.getProducts)
    .post(Product.addProduct);

router.route("/api/products/:_id")
    .get(Product.getProductsById)
    .put(Product.updateProduct)
    .delete(Product.deleteProduct);

router.route("/api/productinfos")
    .get(ProductInfo.getProductInfo)
    .post(ProductInfo.addProductInfo);

router.route("/api/productinfo/:_id")
    .get(ProductInfo.getProductInfoById)
    .put(ProductInfo.updateProductInfo)
    .delete(ProductInfo.deleteProductInfo);

router.route("/api/clientProducts")
    .get(ClientProduct.getClientProduct)
    .post(ClientProduct.addClientProduct);

router.route("/api/clientProduct/:_id")
    .get(ClientProduct.getClientProductById)
    .put(ClientProduct.updateClientProduct)
    .delete(ClientProduct.deleteClientProduct);

router.route("/api/notes")
    .get(Note.getNotes)
    .post(Note.addNote);

router.route("/api/notes/:_id")
    .get(Note.getNotesById)
    .put(Note.updateNote)
    .delete(Note.deleteNote);

module.exports = router;
