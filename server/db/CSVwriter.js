const fs = require('fs');
const path = require('path');

const combinedGenerator = require('./combinedGenerator');

let overviewCSV = 'product_id, description, features, whats_included\n';
let specsCSV = 'product_id, key_specs, general, warranty, other\n';
let reviewMetricSummariesCSV = 'product_id, count, summary/review_count, summary/average_rating, summary/five_star, summary/four_star, summary/three_star, summary/two_star, summary/one_star, summary/would_recommend_pct\n';
let reviewsOnlyCSV = `product_id, submitter, submission_date, rating, title, text, verified_purchase, would_recommend, helpful_count, unhelpful_count, rated_features, quality_rating, value_rating, ease_of_use_rating\n`;

let random = 3;
let target = 100;
let batchSize = 10;
let lastIndex = 0;

const writeOverviewCSV = (last, batch) => {
  console.time('Write time');
  if (lastIndex === target) {
    setTimeout(() => console.log('Completed generating overviews.'), 2000);
    return;
  }

  const stop, lastIndex = last + batch;

  for (let i = last + 1; i <= stop; i++) {
    let overview = combinedGenerator.createOverview(i, random++);

    overviewCSV += `${i},${
      overview.description},${JSON.stringify(
      overview.features)},${JSON.stringify(
      overview.whats_included)}\n`;
  };

  fs.writeFile(
    path.join(__dirname, 'data/csv/overviews/overviewsData.csv'),
    overviewCSV,
    (err) => {
      if (err) throw err;

      console.log(`Wrote overviews CSV batch. Current total is ${stop} out of ${target}`);
      console.timeEnd('Write time');
    }
  );
}

const writeSpecsCSV = (last, batch) => {
  if (lastIndex === target) {
    setTimeout(() => console.log('Completed generating overviews.'), 2000);
    return;
  }

  const stop, lastIndex = last + batch;

  for (let i = last + 1; i <= last + batch; i++) {
    let specsData = combinedGenerator.createSpecs(i, random++);

    specsCSV += `${i},${
      JSON.stringify(specsData.key_specs)
    },${
      JSON.stringify(specsData.general)
    },${
      JSON.stringify(specsData.warranty)
    },${
      JSON.stringify(specsData.other)
    }\n`
  }

  fs.writeFile(
    path.join(__dirname, 'data/csv/specs/specsData.csv'),
    specsCSV,
    (err) => {
      if (err) throw err;

      console.log(`Wrote specs CSV batch.  Current total is ${stop} out of ${target}.`);
      console.timeEnd('Write time');
    }
  );
}



const writeReviewMetricsCSV = (last, batch) => {  
  if (lastIndex === target) {
    setTimeout(() => console.log('Completed generating overviews.'), 2000);
    return;
  }

  const stop, lastIndex = last + batch;

  for (let i = last + 1; i <= last + batchSize; i++) {
    let metrics = combinedGenerator.createReviews(product_id, random);

    reviewMetricSummariesCSV += `${i},${
      metrics.count},${
      metrics.reviewSummaryData.review_count},${
      metrics.reviewSummaryData.average_rating},${
      metrics.reviewSummaryData.five_star},${
      metrics.reviewSummaryData.four_star},${
      metrics.reviewSummaryData.three_star},${
      metrics.reviewSummaryData.two_star},${
      metrics.reviewSummaryData.one_star},${
      metrics.reviewSummaryData.would_recommend_pct}\n`;

    random++;
  }

  fs.writeFile(
    path.join(__dirname, 'data/csv/reviews/reviewMetricsData.csv'),
    reviewMetricSummariesCSV,
    (err) => {
      if (err) throw err;

      console.log('Wrote review summaries csv.');
    }
  );
}

const writeReviewsCSV = (last) => {
  for (let i = last + 1; i <= last + batchSize; i++) {
    let reviewData = combinedGenerator.createReviews(product_id, random);

    reviewsOnlyCSV += `${i},${
      reviewData.reviews[z].submitter},${
      reviewData.reviews[z].submission_date},${
      reviewData.reviews[z].rating},${
      reviewData.reviews[z].title},${
      reviewData.reviews[z].text},${
      reviewData.reviews[z].verified_purchase},${
      reviewData.reviews[z].would_recommend},${
      reviewData.reviews[z].helpful_count},${
      reviewData.reviews[z].unhelpful_count},${
      reviewData.reviews[z].rated_features},${
      reviewData.reviews[z].quality_rating},${
      reviewData.reviews[z].value_rating},${
      reviewData.reviews[z].ease_of_use_rating}\n`;

    random++;
  }

  fs.writeFile(
    path.join(__dirname, 'data/csv/reviews/reviewsOnly.csv'),
    reviewsOnlyCSV,
    (err) => {
      if (err) throw err;

      console.log('Wrote only-reviews csv.');
    }
  );
}

// writeCSV(count);
