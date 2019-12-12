const express = require("express");
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

app.get('/overview', (req, res) => {
  res.send("Received your get request for overviews");
});

app.get('/features', (req, res) => {
  res.send("Received your get request for features");
});

app.get('/reviews', (req, res) => {
  res.send("Received your get request for reviews");
});

app.listen(port, () => {
  console.log("Now listening on port " + port + "!");
});
