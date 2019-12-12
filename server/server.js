const express = require("express");
const mountRoutes = require("./routes");
const cors = require("cors");
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
app.use(cors());

mountRoutes(app);

app.listen(port, () => {
  console.log("Now listening on port " + port + "!");
});
