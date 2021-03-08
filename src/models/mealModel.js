// Import MySQL package
const mysql = require("mysql");

// Database Parameters
const db = mysql.createConnection({
    host: "localhost",
    user: "devuser",
    password: "password",
    database: "MVC",
});

// Establish connection
db.connect((err) => {
    if (err) {
        return err;
    } else {
        console.log("MySQL Connection Established");
    }
});

// Initialize empty array
let mealsFromDB = [];

// Query DB to retrieve all rows in table
db.query("SELECT * FROM menu", (err, result) => {
    // Checks for error then responds
    if (err) {
        return err;
    }

    // Set array value to result of db query
    mealsFromDB = result;
});

// export a get method to retrieve array data
exports.getMeals = () => {
    return mealsFromDB;
};
