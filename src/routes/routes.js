// Express declarations
const express = require("express");
const router = express.Router();

// MealsController
const mealsController = require("../controllers/mealsController");

router.get("/", mealsController.getMenuController);

module.exports = router;
