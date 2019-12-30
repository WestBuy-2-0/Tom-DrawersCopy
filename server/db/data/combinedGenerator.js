const faker = require('faker');

module.exports = createProduct = (_id, randomizer) => {
  const overview = module.exports.createOverview(_id, randomizer);
  const reviewData = module.exports.createReviews(_id, randomizer);
  const specData = module.exports.createSpecs(_id, randomizer);

  const productEntry = {
    _id,
    overview,
    specData,
    reviewData,
  }

  randomizer += 5;

  return productEntry;
}

module.exports.createOverview = (id, random) => {
  const description = faker.lorem.sentences(5);

  const features = [];
  const count = random % 3 + 1;

  for (let i = 0; i < count; i++) {
    features.push({
      feature_id: i,
      feature_name: faker.company.catchPhrase(),
      feature_description: faker.lorem.sentence(),
    });
  }

  const whats_included = [];
  const addons = random % 3 + 1;

  for (let i = 0; i < addons; i++) {
    whats_included.push(faker.lorem.sentence());
  }

  const overview = {
    // product_id: id,
    description,
    features,
    whats_included,
  };

  return overview;
}

  // CREATING SPEC DATA //
module.exports.createSpecs = (id, random) => {
  let count = 0;

  const key_specs = [];
  const keyCount = random % 3 + 1;

  for (let i = count; i < keyCount; i++, count++) {
    key_specs.push({
      spec_id: count,
      spec_name: faker.company.catchPhrase(),
      spec_value: faker.lorem.sentence(),
      has_more_info: (random + 3) % 2 === 0,
      more_info_text: (random + 1) % 2 === 0 ? faker.lorem.sentence() : null
    });
  }

  const general = [];
  const genCount = random % 3 + 1 + count;
  for (let i = count; i < genCount; i++, count++) {
    general.push({
      spec_id: count,
      spec_name: faker.company.catchPhrase(),
      spec_value: faker.lorem.sentence(),
      has_more_info: (random + 4) % 2 === 0,
      more_info_text: (random + 1) % 2 === 0 ? faker.lorem.sentence() : null
    });
  }

  const warranty = [];
  const warrCount = random % 3 + 1 + count;
  for (let i = count; i < warrCount; i++, count++) {
    warranty.push({
      spec_id: count,
      spec_name: `WARRANTY: ${faker.company.bs()}`,
      spec_value: faker.lorem.sentence(),
      has_more_info: (random + 1) % 2 === 0,
      more_info_text: (random + 3) % 2 === 0 ? faker.lorem.sentence() : null
    }); 
  }

  const other = [];
  const otherCount = random % 3 + count;
  for (let i = count; i < otherCount; i++) {
    other.push({
      spec_id: count,
      spec_name: `${faker.company.bs()}`,
      spec_value: faker.lorem.sentence(),
      has_more_info: (random + 2) % 2 === 0,
      more_info_text: (random + 1) % 2 === 0 ? faker.lorem.sentence() : null,
    });
  }

  const specs = {
    // product_id: id,
    key_specs,
    general,
    warranty,
    other,
  };

  return specs;
}

  // CREATING REVIEW DATA //
module.exports.createReviews = ( id, random) => {
  const count = random % 5;
  const reviews = [];
  const ratingTotals = {};
  let totalRating = 0;

  for (let i = 0; i < count; i++) {
    const rating = random % 5 + 1;
    totalRating += rating;
    ratingTotals[rating] = ratingTotals[rating] ? ratingTotals[rating] + 1 : 1;

    reviews.push({
      product_id: id,
      submitter: `${faker.name.firstName()} ${faker.name.lastName()}`,
      submission_date: faker.date.past(),
      rating,
      title: faker.lorem.sentence(),
      text: faker.lorem.sentences(5),
      verified_purchase: (random + 1) % 3 === 0,
      would_recommend: (random + 2) % 3 === 0,
      helpful_count: (random - 2) % 10,
      unhelpful_count: (random + 3) % 10,
      rated_features: (random + 1) % 2 === 0,
      quality_rating: (random + 2) % 5 || 3,
      value_rating: (random + 3) % 5 || 2,
      ease_of_use_rating: (random + 3) % 5 || 4
    });

    random += 1;
  }


  const average_rating =  count ? (totalRating / count).toFixed(1) : 0;
  const would_recommend = Number(average_rating * 20 + 5).toFixed(0);

  const reviewSummaryData = {
    product_id: id,
    review_count: count,
    average_rating,
    five_star: ratingTotals[5] || 0,
    four_star: ratingTotals[4] || 0,
    three_star: ratingTotals[3] || 0,
    two_star: ratingTotals[2] || 0,
    one_star: ratingTotals[1] || 0,
    would_recommend_pct: 
      count && would_recommend > 100 
        ? 100 : !count ? 0 : would_recommend,
  };

  const reviewData = {
    // product_id: id,
    count,
    reviews,
    reviewSummaryData
  };

  return reviewData;
  // return reviewSummaryData;
  // return reviews;
};

// let temp;

// console.time('Creation time');
// for (let i = 0; i < 1; i++) {
//   temp = createProduct();
//   console.log(temp);
// }
// console.timeEnd('Creation time');
