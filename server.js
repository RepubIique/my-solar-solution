require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// CHANGE TO FALSE BEFORE UPLOADING
var syncOptions = { force: false };

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );

    // db.solar.bulkCreate([
    //   {
    //     brand: 'Sony',
    //     output: 3.4,
    //     cost: 2.0,
    //     life: 1,
    //   },
    //   {
    //     brand: 'Sony',
    //     output: 3.4,
    //     cost: 2.0,
    //     life: 1,
    //   },
    //   {
    //     brand: 'Sony',
    //     output: 3.4,
    //     cost: 2.0,
    //     life: 1,
    //   },
    //   {
    //     brand: 'Sony',
    //     output: 3.4,
    //     cost: 2.0,
    //     life: 1,
    //   },
    //   {
    //     brand: 'Sony',
    //     output: 3.4,
    //     cost: 2.0,
    //     life: 1,
    //   },
    //   {
    //     brand: 'Sony',
    //     output: 3.4,
    //     cost: 2.0,
    //     life: 1,
    //   },
    //   {
    //     brand: 'Sony',
    //     output: 3.4,
    //     cost: 2.0,
    //     life: 1,
    //   },
    //   {
    //     brand: 'Sony',
    //     output: 3.4,
    //     cost: 2.0,
    //     life: 1,
    //   },
    //   {
    //     brand: 'Sony',
    //     output: 3.4,
    //     cost: 2.0,
    //     life: 1,
    //   },
    //   {
    //     brand: 'Sony',
    //     output: 3.4,
    //     cost: 2.0,
    //     life: 1,
    //   },
    // ]);
  });
});

module.exports = app;
