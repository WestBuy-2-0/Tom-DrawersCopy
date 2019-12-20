const faker = require('faker');
var product_id = 1;
let randomizer = 0;

const createProduct = () => {
  let currentID = product_id;
  const overview = createOverview(currentID, randomizer);
  const reviewData = createReviews(currentID, randomizer);
  const specData = createSpecs(currentID, randomizer);

  const productEntry = {
    product_id,
    overview,
    specData,
    reviewData,
  }

  product_id++;
  randomizer += 5;

  return productEntry;
}

const createOverview = (id, random) => {
  const description = faker.lorem.sentences(5);

  const features = [];
  const count = random % 3 + 1;

  for (let i = 0; i < count; i++) {
    features.push({
      feature_id: i,
      feature_name: faker.company.catchPhrase(),
      feature_description: faker.lorem.sentence()
    });
  }

  const whats_included = [];
  const addons = random % 3 + 3;

  for (let i = 0; i < addons; i++) {
    whats_included.push(faker.lorem.sentence());
  }

  const overview = {
    description,
    features,
    whats_included
  };

  return overview;
}

  // CREATING SPEC DATA //
const createSpecs = (id, random) => {
  let count = 0;

  const key_specs = [];
  const keyCount = random % 3 + 2;

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
  const genCount = random % 3 + 2 + count;
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
  const otherCount = random % 5 + count;
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
    product_id: id,
    key_specs,
    general,
    warranty,
    other,
  };

  return specs;
}

  // CREATING REVIEW DATA //
const createReviews = (id, random) => {
  const count = 5;
  const reviews = [];
  const ratingTotals = {};
  let totalRating = 0;

  for (let i = 0; i < count; i++) {
    const rating = (random + 1) % 6;
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

    random += 3;
  }

  const average_rating = totalRating / count;

  const reviewSummaryData = {
    product_id: id,
    review_count: count,
    average_rating,
    five_star: ratingTotals[5] || 0,
    four_star: ratingTotals[4] || 2,
    three_star: ratingTotals[3] || 2,
    two_star: ratingTotals[2] || 0,
    one_star: ratingTotals[1] || 1,
    would_recommend_pct: (average_rating * 20 + 5).toFixed(0),
  };

  const reviewData = {
    count,
    reviews,
    reviewSummaryData
  };

  return reviewData;
};

let temp;

console.time('Creation time');
for (let i = 0; i < 1; i++) {
  temp = JSON.stringify(createProduct());
  temp = JSON.parse(temp);
  console.log(temp);
}
console.timeEnd('Creation time');
