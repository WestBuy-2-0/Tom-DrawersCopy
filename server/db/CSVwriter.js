const fs = require('fs');
const path = require('path');

const combinedGenerator = require('./combinedGenerator');

let randomStart = 3;
let targetCount = 10000000;
let batchSize = 250000;

const writeOverviewCSV = (last, batch, target, random, currentBatch = 1) => {
  let overviewCSV = 'product_id;description;features;whats_included\n';
  console.time('Write time');
  if (last === target) {
    setTimeout(() => console.log('Completed writing overviews.'), 1200);
    return;
  }

  let stop = last + batch;

  for (let i = last + 1; i <= stop; i++) {
    let overview = combinedGenerator.createOverview(i, random++);

    overviewCSV += `${i};${
      overview.description};${
        JSON.stringify(overview.features)};${
        JSON.stringify(overview.whats_included)}\n`;
  };

  fs.writeFile(
    path.join(__dirname, `data/csv/overviews/overviewsData${currentBatch}.csv`),
    overviewCSV,
    (err) => {
      if (err) throw err;

      setTimeout(() => writeOverviewCSV(stop, batch, target, random, currentBatch + 1), 100);

      console.log(`Wrote overview CSVs, batch of ${batch}. Current total is ${stop} out of ${target}`);
      console.timeEnd('Write time');
    }
  );
}

// writeOverviewCSV(0, batchSize, targetCount, randomStart); // 400000 max batch size

const writeSpecsCSV = (last, batch, target, random, currentBatch = 1) => {
  let specsCSV = 'product_id;key_specs;general;warranty;other\n';

  console.time('Write time');
  if (last === target) {
    setTimeout(() => console.log('Completed writing specs.'), 2000);
    return;
  }

  let stop = last + batch;

  for (let i = last + 1; i <= stop; i++) {
    let specsData = combinedGenerator.createSpecs(i, random++);

    // if(i % 1000 === 0) console.log('Made it to', i);
    
    specsCSV += `${i};${
      JSON.stringify(specsData.key_specs)
    };${
      JSON.stringify(specsData.general)
    };${
      JSON.stringify(specsData.warranty)
    };${
      JSON.stringify(specsData.other)
    }\n`
  }

  fs.writeFile(
    path.join(__dirname, `data/csv/specs/specsData${currentBatch}.csv`),
    specsCSV,
    (err) => {
      if (err) throw err;

      setTimeout(() => writeSpecsCSV(stop, batch, target, random, currentBatch + 1), 100);

      console.log(`Wrote specs CSV, batch of ${batch}. Current total is ${stop} out of ${target}.`);
      console.timeEnd('Write time');
    }
  );
}

// writeSpecsCSV(0, batchSize, targetCount, randomStart); // 200,000 max clean batch size

const writeReviewMetricsCSV = (last, batch, target, random, currentBatch = 1) => {
  let reviewMetricSummariesCSV = 'product_id;review_count;average_rating;five_star;four_star;three_star;two_star;one_star;would_recommend_pct\n';
  
  console.time('Write time');
  if (last === target) {
    setTimeout(() => console.log('Completed writing review metrics.'), 2000);
    return;
  }

  let stop = last + batch;

  for (let i = last + 1; i <= stop; i++) {
    let reviewSummaryData = combinedGenerator.createReviews(i, random++);

    // if(i % 10000 === 0) console.log('Made it to', i);

    reviewMetricSummariesCSV += `${i};${
      reviewSummaryData.review_count};${
      reviewSummaryData.average_rating};${
      reviewSummaryData.five_star};${
      reviewSummaryData.four_star};${
      reviewSummaryData.three_star};${
      reviewSummaryData.two_star};${
      reviewSummaryData.one_star};${
      reviewSummaryData.would_recommend_pct}\n`;
  }

  fs.writeFile(
    path.join(__dirname, `data/csv/reviewMetrics/reviewsData${currentBatch}.csv`),
    reviewMetricSummariesCSV,
    (err) => {
      if (err) throw err;

      setTimeout(() => writeReviewMetricsCSV(stop, batchSize, target, random, currentBatch + 1), 100);

      console.log(`Wrote review metrics CSV, batch of ${batch}. Current total is ${stop} out of ${target}.`);
      console.timeEnd('Write time');
    }
  );
}

// writeReviewMetricsCSV(0, batchSize, targetCount, randomStart); // 2,000,000 max clean batch size

const writeReviewsCSV = (last, batch, target, random, currentBatch = 1) => {
  let reviewsOnlyCSV = 
    `product_id;submitter;submission_date;rating;title;text;verified_purchase;would_recommend;helpful_count;unhelpful_count;rated_features;quality_rating;value_rating;ease_of_use_rating\n`;

  console.time('Write time');
  if (last === target) {
    setTimeout(() => console.log('Completed writing reviews.'), 2000);
    return;
  }

  let stop = last + batch;

  for (let i = last + 1; i <= stop; i++) {
    let reviews = combinedGenerator.createReviews(i, random);

    // if(i % 10000 === 0) console.log('Made it to', i);    

    for(let z = 0; z < reviews.length; z++) {
      reviewsOnlyCSV += `${i};${
        reviews[z].submitter};${
        reviews[z].submission_date};${
        reviews[z].rating};${
        reviews[z].title};${
        reviews[z].text};${
        reviews[z].verified_purchase};${
        reviews[z].would_recommend};${
        reviews[z].helpful_count};${
        reviews[z].unhelpful_count};${
        reviews[z].rated_features};${
        reviews[z].quality_rating};${
        reviews[z].value_rating};${
        reviews[z].ease_of_use_rating}\n`;
    }

    random++;
  }

  fs.writeFile(
    path.join(__dirname, `data/csv/reviews/reviewsOnly${currentBatch}.csv`),
    reviewsOnlyCSV,
    (err) => {
      if (err) throw err;

      setTimeout(() => writeReviewsCSV(stop, batchSize, target, random, currentBatch + 1), 100);

      console.log(`Wrote reviews CSV, batch of ${batch}. Current total is ${stop} out of ${target}.`);
      console.timeEnd('Write time');
    }
  );
}

// writeReviewsCSV(0, batchSize, targetCount, randomStart);
