const express = require("express");
const router = express.Router();
const weatherController = require("../controllers/weatherController");

router.get("/current-weather", weatherController.getCurrentWeather);

module.exports = router;
