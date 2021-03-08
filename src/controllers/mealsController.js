const mealModel = require("../models/mealModel");

exports.getMenuController = (req, res, next) => {
    const meals = mealModel.getMeals();

    console.log("Controller", meals);

    res.render("home", { meals });
};
