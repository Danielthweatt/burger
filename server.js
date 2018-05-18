// Modules
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const routes = require("./controllers/catsController.js");

// App Setup
const PORT = process.env.PORT || 3000;
const app = express();