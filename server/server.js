const express = require("express");
const mountRoutes = require("./routes");
const writeReviews = require("./dataGenerators/reviewDataGenerator.js");
const writeOverview = require("./dataGenerators/overviewDataGenerator.js");
const writeSpecs = require("./dataGenerators/specsDataGenerator.js");
const axios = require("axios");
const port = 3333;

// writeReviews.writeReviews();
// writeOverview.writeOverviewData();
// writeSpecs.writeSpecs();

const app = express();

app.use(express.static(__dirname + "/../client/dist"));
app.use(express.json());

mountRoutes(app);

app.get("/description", (req, res) => {
  res.send("Received your get request for overviews");
});

app.get("/features", (req, res) => {
  res.send("Received your get request for features");
});

app.get("/included", (req, res) => {
  res.send("Received your get request for features");
});

app.get("/specifications", (req, res) => {
  res.send("Received your get request for features");
});

app.get("/reviews", (req, res) => {
  res.send("Received your get request for reviews");
});

app.listen(port, () => {
  console.log("Now listening on port " + port + "!");
});
