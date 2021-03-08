// Express declarations
const express = require("express");
const app = express();

// Imports
const cors = require("cors");
const routes = require("./src/routes/routes");
const path = require("path");

// Variables
const PORT = 4000;

// Middleware
app.use(cors());
app.set("view engine", "ejs");
// Used to update path to find views while in src folder
app.set("views", path.resolve("./src/views"));
app.use(express.static(__dirname + "/public"));

// Router import
app.use("/", routes);

// Listening method
app.listen(PORT, () => {
    console.log(`Server listening at: http://localhost:${PORT}/`);
});
