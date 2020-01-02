// CSV INSERTIONS //

// OVERVIEWS
const importOverviews = (currentFile = 1) => {
  if (currentFile > 25) {
    setTimeout(() => console.log('Finished all overviews insertions.'), 1500);
    return;
  }
  console.time('Insertion time');
  let filePath = path.join(
    __dirname,
    `/data/csv/overviews/overviewsData${currentFile}.csv`
  );
  pool
    .query(`COPY overviews FROM '${filePath}' DELIMITER ';' CSV HEADER QUOTE '#';`)
    .then(() => {
      console.log(`Imported CSV ${currentFile}.`);
      console.timeEnd('Insertion time');
      setTimeout(() => importOverviews(currentFile + 1), 10);
    })
    .catch((err) => console.log(err));
};

// // importOverviews(); FINISHED

// SPECS
const importSpecs = (currentFile = 1) => {
  if (currentFile > 50) {
    setTimeout(() => console.log('Finished all specs insertions.'), 1500);
    return;
  }
  console.time('Insertion time');
  let filePath = path.join(
    __dirname,
    `/data/csv/specs/specsData${currentFile}.csv`
  );
  pool
    .query(`COPY specs FROM '${filePath}' DELIMITER ';' CSV HEADER;`)
    .then(() => {
      console.log(`Imported specs CSV ${currentFile} out of 50.`);
      console.timeEnd('Insertion time');
      setTimeout(() => importSpecs(currentFile + 1), 10);
    })
    .catch((err) => console.log(err));
};

// // importSpecs();  // FINISHED

// REVIEW METRICS

const importReviewMetrics = (currentFile = 1) => {
  if (currentFile > 5) {
    setTimeout(
      () => console.log('Finished all review metrics insertions.'),
      1500
    );
    return;
  }
  console.time('Insertion time');
  let filePath = path.join(
    __dirname,
    `/data/csv/reviewMetrics/reviewsData${currentFile}.csv`
  );
  pool
    .query(`COPY review_metrics FROM '${filePath}' DELIMITER ';' CSV HEADER;`)
    .then(() => {
      console.log(`Imported review metrics CSV ${currentFile} out of 5.`);
      console.timeEnd('Insertion time');
      setTimeout(() => importReviewMetrics(currentFile + 1), 10);
    })
    .catch((err) => console.log(err));
};

// // importReviewMetrics(); // FINISHED

// REVIEWS

const importReviews = (currentFile = 1) => {
  if (currentFile > 40) {
    setTimeout(() => console.log('Finished all reviews insertions.'), 1500);
    return;
  }
  console.time('Insertion time');
  let filePath = path.join(
    __dirname,
    `/data/csv/reviews/reviewsOnly${currentFile}.csv`
  );

  pool
    .query(
      `COPY reviews (product_id, submitter, submission_date, rating, title, text, verified_purchase, would_recommend, helpful_count, unhelpful_count, rated_features, quality_rating, value_rating, ease_of_use_rating) FROM '${filePath}' DELIMITER ';' CSV HEADER;`
    )
    .then(() => {
      console.log(`Imported reviews CSV ${currentFile} out of 40.`);
      console.timeEnd('Insertion time');
      setTimeout(() => importReviews(currentFile + 1), 10);
    })
    .catch((err) => console.log(err));
};

// importReviews();  // FINISHED
