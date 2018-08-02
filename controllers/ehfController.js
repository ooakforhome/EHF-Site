const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("express").Router();

//Models
const Product = require('../models/Products_model');
const Bath = require('../models/Bath_model');
const Accent = require('../models/AccentFurniture_model');
const Pet = require('../models/Pet_model');
const BathAccessorie = require('../models/BathAccessorie_model');
const BathHardware = require('../models/BathHardware_model');
const BookCase = require ('../models/Book_Case_model');
const HookNRod = require('../models/Hook_and_Rod_model');
const OTD = require('../models/OTD_model');
const WindowHardware = require('../models/Window_Hardware_model');
const WindowPanel = require('../models/Window_panel_model');
const ShowerCurtain = require('../models/Shower_Curtain_model');
const BeautyDevice = require('../models/Beauty_device_model');
const Garden = require('../models/Garden_model');
const OutdoorLighting = require('../models/Outdoor_lighting_model');

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
    .get(Accent.getAccents)
    .post(Accent.addAccent);

router.route("/api/accent/:_id")
    .get(Accent.getAccentsById)
    .put(Accent.updateAccent)
    .delete(Accent.deleteAccent);

router.route("/api/pets")
    .get(Pet.getPets)
    .post(Pet.addPet);

router.route("/api/pet/:_id")
    .get(Pet.getPetById)
    .put(Pet.updatePet)
    .delete(Pet.deletePet);

router.route("/api/bathaccessories")
    .get(BathAccessorie.getBathAccessories)
    .post(BathAccessorie.addBathAccessorie);

router.route("/api/bathaccessorie/:_id")
    .get(BathAccessorie.getBathAccessorieById)
    .put(BathAccessorie.updateBathAccessorie)
    .delete(BathAccessorie.deleteBathAccessorie);

router.route("/api/bathhardwares")
    .get(BathHardware.getBathHardwares)
    .post(BathHardware.addBathHardware);

router.route("/api/bathhardware/:_id")
    .get(BathHardware.getBathHardwareById)
    .put(BathHardware.updateBathHardware)
    .delete(BathHardware.deleteBathHardware);

router.route("/api/bookcases")
    .get(BookCase.getBookCases)
    .post(BookCase.addBookCase);

router.route("/api/bookcase/:_id")
    .get(BookCase.getBookCaseById)
    .put(BookCase.updateBookCase)
    .delete(BookCase.deleteBookCase);

router.route("/api/hooknrods")
    .get(HookNRod.getHookNRods)
    .post(HookNRod.addHookNRod);

router.route("/api/hooknrod/:_id")
    .get(HookNRod.getHookNRodById)
    .put(HookNRod.updateHookNRod)
    .delete(HookNRod.deleteHookNRod);

router.route("/api/otds")
    .get(OTD.getOTDs)
    .post(OTD.addOTD);

router.route("/api/otd/:_id")
    .get(OTD.getOTDById)
    .put(OTD.updateOTD)
    .delete(OTD.deleteOTD);

router.route("/api/windowhardwares")
    .get(WindowHardware.getWindowHardwares)
    .post(WindowHardware.addWindowHardware);

router.route("/api/windowhardware/:_id")
    .get(WindowHardware.getWindowHardwareById)
    .put(WindowHardware.updateWindowHardware)
    .delete(WindowHardware.deleteWindowHardware);

router.route("/api/windowpanels")
    .get(WindowPanel.getWindowPanels)
    .post(WindowPanel.addWindowPanel);

router.route("/api/windowpanel/:_id")
    .get(WindowPanel.getWindowPanelById)
    .put(WindowPanel.updateWindowPanel)
    .delete(WindowPanel.deleteWindowPanel);

router.route("/api/showercurtains")
    .get(ShowerCurtain.getShowerCurtains)
    .post(ShowerCurtain.addShowerCurtain);

router.route("/api/showercurtain/:_id")
    .get(ShowerCurtain.getShowerCurtainById)
    .put(ShowerCurtain.updateShowerCurtain)
    .delete(ShowerCurtain.deleteShowerCurtain);
//
router.route("/api/beautydevices")
    .get(BeautyDevice.getBeautyDevices)
    .post(BeautyDevice.addBeautyDevice);

router.route("/api/beautydevice/:_id")
    .get(BeautyDevice.getBeautyDeviceById)
    .put(BeautyDevice.updateBeautyDevice)
    .delete(BeautyDevice.deleteBeautyDevice);

router.route("/api/gardens")
    .get(Garden.getGardens)
    .post(Garden.addGarden);

router.route("/api/garden/:_id")
    .get(Garden.getGardenById)
    .put(Garden.updateGarden)
    .delete(Garden.deleteGarden);

router.route("/api/outdoorlightings")
    .get(OutdoorLighting.getOutdoorLightings)
    .post(OutdoorLighting.addOutdoorLighting);

router.route("/api/outdoorlighting/:_id")
    .get(OutdoorLighting.getOutdoorLightingById)
    .put(OutdoorLighting.updateOutdoorLighting)
    .delete(OutdoorLighting.deleteOutdoorLighting);

module.exports = router;
