const fs = require('fs');
const path = require('path');

const combinedGenerator = require('./combinedGenerator');

let specsCSV = 'product_id, key_specs, general, warranty, other\n';
let reviewMetricSummariesCSV = 'product_id, count, summary/review_count, summary/average_rating, summary/five_star, summary/four_star, summary/three_star, summary/two_star, summary/one_star, summary/would_recommend_pct\n';
let reviewsOnlyCSV = `product_id, submitter, submission_date, rating, title, text, verified_purchase, would_recommend, helpful_count, unhelpful_count, rated_features, quality_rating, value_rating, ease_of_use_rating\n`;

let randomStart = 3;
let targetCount = 10000000;
let batchSize = 400000;

const writeOverviewCSV = (last, batch, target, random, currentBatch = 1) => {
  let overviewCSV = 'product_id, description, features, whats_included\n';
  console.time('Write time');
  if (last === target) {
    setTimeout(() => console.log('Completed writing overviews.'), 1200);
    return;
  }

  let stop = last + batch;

  for (let i = last + 1; i <= stop; i++) {
    let overview = combinedGenerator.createOverview(i, random++);

    overviewCSV += `${i},${
      overview.description},${
        JSON.stringify(overview.features)},${
        JSON.stringify(overview.whats_included)}\n`;
  };

  fs.writeFile(
    path.join(__dirname, `data/csv/overviews/overviewsData${currentBatch}.csv`),
    overviewCSV,
    (err) => {
      if (err) throw err;

      setTimeout(() => writeOverviewCSV(stop, batch, target, random, currentBatch + 1), 10);

      console.log(`Wrote overview CSVs, batch of ${batch}. Current total is ${stop} out of ${target}`);
      console.timeEnd('Write time');
    }
  );
}

writeOverviewCSV(0, batchSize, targetCount, randomStart); // 400000 max batch size

const writeSpecsCSV = (last, batch, target, random, currentBatch = 1) => {
  console.time('Write time');
  if (last === target) {
    setTimeout(() => console.log('Completed writing specs.'), 2000);
    return;
  }

  let stop = last + batch;

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
    path.join(__dirname, `data/csv/specs/specsData${currentBatch}.csv`),
    specsCSV,
    (err) => {
      if (err) throw err;

      setTimeout(() => writeSpecsCSV(stop, batch, target, random, currentBatch + 1), 10);

      console.log(`Wrote specs CSV, batch of ${batch}. Current total is ${stop} out of ${target}.`);
      console.timeEnd('Write time');
    }
  );
}

// writeSpecsCSV(0, batchSize, targetCount, randomStart);

const writeReviewMetricsCSV = (last, batch, target, currentBatch = 1) => {  
  console.time('Write time');
  if (last === target) {
    setTimeout(() => console.log('Completed writing review metrics.'), 2000);
    return;
  }

  let stop = last + batch;

  for (let i = last + 1; i <= last + batch; i++) {
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
    path.join(__dirname, `data/csv/reviews/reviewMetricsData${currentBatch}.csv`),
    reviewMetricSummariesCSV,
    (err) => {
      if (err) throw err;

      setTimeout(() => writeReviewMetricsCSV(stop, batchSize, target, currentBatch + 1), 10);

      console.log(`Wrote review metrics CSV, batch of ${batch}. Current total is ${stop} out of ${target}.`);
      console.timeEnd('Write time');
    }
  );
}

// writeReviewMetricsCSV(0, batchSize, targetCount, randomStart);

const writeReviewsCSV = (last, batch, currentBatch = 1) => {
  console.time('Write time');
  if (lastIndex === target) {
    setTimeout(() => console.log('Completed writing reviews.'), 2000);
    return;
  }

  let stop, lastIndex = last + batch;

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
    path.join(__dirname, `data/csv/reviews/reviewsOnly${currentBatch}.csv`),
    reviewsOnlyCSV,
    (err) => {
      if (err) throw err;

      setTimeout(() => writeReviewsCSV(stop, batchSize, currentBatch + 1), 10);

      console.log(`Wrote reviews CSV, batch of ${batch}. Current total is ${stop} out of ${target}.`);
      console.timeEnd('Write time');
    }
  );
}

// writeReviewsCSV(0, batchSize, targetCount, randomStart);
