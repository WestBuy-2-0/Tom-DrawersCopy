const fs = require('fs');
const path = require('path');

const combinedGenerator = require('./combinedGenerator');

let overviewCSV = 'product_id, description, features, whats_included\n';
let specsCSV = 'product_id, key_specs, general, warranty, other\n';
let reviewMetricSummariesCSV = 'product_id, count, summary/review_count, summary/average_rating, summary/five_star, summary/four_star, summary/three_star, summary/two_star, summary/one_star, summary/would_recommend_pct\n';
let reviewsOnlyCSV = 'product_id, submitter, submission_date, rating, title, text, verified_purchase, would_recommend, helpful_count, unhelpful_count, rated_features, quality_rating, value_rating, ease_of_use_rating\n';

let random = 3;
let count = 125000;

const writeCSV = (amount) => {
  for (let i = 1; i <= amount; i++) {
    const newProduct = combinedGenerator(i, random++);

    overviewCSV += `${i},${
      newProduct.overview.description},${JSON.stringify(
      newProduct.overview.features)},${JSON.stringify(
      newProduct.overview.whats_included)}\n`;

    specsCSV += `${i},${JSON.stringify(
      newProduct.specData.key_specs)},${JSON.stringify(
      newProduct.specData.general)},${JSON.stringify(
      newProduct.specData.warranty)},${JSON.stringify(
      newProduct.specData.other)}\n`;

    reviewMetricSummariesCSV += `${i},${
      newProduct.reviewData.count},${
      newProduct.reviewData.reviewSummaryData.review_count},${
      newProduct.reviewData.reviewSummaryData.average_rating},${
      newProduct.reviewData.reviewSummaryData.five_star},${
      newProduct.reviewData.reviewSummaryData.four_star},${
      newProduct.reviewData.reviewSummaryData.three_star},${
      newProduct.reviewData.reviewSummaryData.two_star},${
      newProduct.reviewData.reviewSummaryData.one_star},${
      newProduct.reviewData.reviewSummaryData.would_recommend_pct}\n`;

    if (newProduct.reviewData.reviews) {
      for(let z = 0; z < newProduct.reviewData.reviews.length; z++) {
        reviewsOnlyCSV += `${i},${
          newProduct.reviewData.reviews[z].submitter},${
          newProduct.reviewData.reviews[z].submission_date},${
          newProduct.reviewData.reviews[z].rating},${
          newProduct.reviewData.reviews[z].title},${
          newProduct.reviewData.reviews[z].text},${
          newProduct.reviewData.reviews[z].verified_purchase},${
          newProduct.reviewData.reviews[z].would_recommend},${
          newProduct.reviewData.reviews[z].helpful_count},${
          newProduct.reviewData.reviews[z].unhelpful_count},${
          newProduct.reviewData.reviews[z].rated_features},${
          newProduct.reviewData.reviews[z].quality_rating},${
          newProduct.reviewData.reviews[z].value_rating},${
          newProduct.reviewData.reviews[z].ease_of_use_rating}\n`;
      }
    }
  }

  fs.writeFile(
    path.join(__dirname, 'data/csv/overviews/overviewsData.csv'),
    overviewCSV,
    (err) => {
      if (err) throw err;

      console.log('Wrote overviews csv.');
    }
  );

  fs.writeFile(
    path.join(__dirname, 'data/csv/specs/specsData.csv'),
    specsCSV,
    (err) => {
      if (err) throw err;

      console.log('Wrote specs csv.');
    }
  );

  fs.writeFile(
    path.join(__dirname, 'data/csv/reviews/reviewMetricsData.csv'),
    reviewMetricSummariesCSV,
    (err) => {
      if (err) throw err;

      console.log('Wrote review summaries csv.');
    }
  );

   fs.writeFile(
     path.join(__dirname, 'data/csv/reviews/reviewsOnly.csv'),
     reviewsOnlyCSV,
     (err) => {
       if (err) throw err;

       console.log('Wrote only-reviews csv.');
     }
   );
};

writeCSV(count);
