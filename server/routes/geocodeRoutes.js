const express = require("express");
const router = express.Router();
const geocodeController = require("../controllers/geocodeController");

router.get("/autocomplete", geocodeController.autocompleteCities);

module.exports = router;
