require('newrelic');
const express = require("express");
const cors = require("cors");
const port = 3030;
// const port = process.env.PORT;

const mongo = require('./models/mongoModel');
const postgres = require('./models/postgresModel');

const isMongo = false;

const app = express();

app.use(express.static(__dirname + "/../client/dist"));
app.use(express.json());
app.use(cors());

// ROUTES FOR MONGO
if (isMongo) {
  app.get('/overview', async (req, res) => { // true endpoint needs to be overview/:id **
    const product_id = {
      id: ~~(Math.random() * 1000000) + 9000001,
    }
    const data = await mongo.findProduct(product_id);
    res.send(data.overview);
  });

  app.post('/overview', (req, res) => {
    res.send('You hit the overview post endpoint.');
  });

  app.get('/specs/:id', async (req, res) => {
    const product_id = {
      id: ~~(Math.random() * 1000000) + 9000001
    };
    const data = await mongo.findProduct(product_id);
    res.send(data.specData);
  });

  app.post('/specs', (req, res) => {
    res.send('You hit the specs post endpoint.');
  });

  app.get('/reviews/:id', async (req, res) => {
    const product_id = {
      id: ~~(Math.random() * 1000000) + 9000001
    };
    const data = await mongo.findProduct(product_id);
    data.reviewData.reviewSummaryData.average_rating = Number(data.reviewData.reviewSummaryData.average_rating);
    res.send(data.reviewData);
  });

  app.post('/reviews', (req, res) => {
    res.send('You hit the reviews post endpoint.')
  });
} 

// ROUTES FOR POSTGRES 
else {
  app.get('/overview', (req, res) => { // change back to overview/:id for actual front end connection
    const product_id = {
      id: ~~(Math.random() * 1000000) + 9000001
    };
    postgres.findOverview(product_id)
      .then((data) => {
        let overview = data.rows[0];
        overview.features = JSON.parse(overview.features);
        overview.whats_included = JSON.parse(overview.whats_included);
        res.send(overview);
      })
      .catch(err => console.log(err));
  });

  app.post('/overview', (req, res) => {
    res.send('You hit the overview post endpoint.');
  });

  app.get('/specs/:id', (req, res) => {
    postgres
      .findSpecs(req.params)
      .then((data) => {
        let specData = data.rows[0];
        specData.key_specs = JSON.parse(specData.key_specs);
        specData.general = JSON.parse(specData.general);
        specData.warranty = JSON.parse(specData.warranty);
        specData.other = JSON.parse(specData.other);
        res.send(specData);
      })
      .catch((err) => console.log(err));
  });

  app.post('/specs', (req, res) => {
    res.send('You hit the specs post endpoint.');
  });

  app.get('/reviews/:id', (req, res) => {
    const promises = [];
    promises.push(postgres.findReviewMetrics(req.params));
    promises.push(postgres.findReviews(req.params));

    Promise.all(promises)
      .then((data) => {
        const metrics = data[0].rows[0];
        const reviews = data[1].rows;

        const reviewData = {
          count: reviews.length,
          reviews,
          reviewSummaryData: metrics,
        }

        res.send(reviewData);
      })
      .catch((err) => console.log('Error', err));
  });

  app.post('/reviews', (req, res) => {
    res.send('You hit the reviews post endpoint.');
  });
}

app.listen(port, () => {
  console.log("Listening on port " + port + "...");
});
