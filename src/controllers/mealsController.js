// Import model
const mealModel = require("../models/mealModel");

// Create methods for routes instead of creating an anonymous function within routes file
exports.getMenuController = (req, res) => {
    // Create a variable to hold result of model's get method
    const meals = mealModel.getMeals();

    // Render the home.ejs file and pass in meals data
    res.render("home", { meals });
};
