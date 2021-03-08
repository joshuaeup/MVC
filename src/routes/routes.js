// Express declarations
const express = require("express");
const router = express.Router();

// import controller
const mealsController = require("../controllers/mealsController");

// Create a get method for the root url that utilizes the controller method
router.get("/", mealsController.getMenuController);

module.exports = router;
