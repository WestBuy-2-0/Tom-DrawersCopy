const Router = require("express-promise-router");
const faker = require('faker');

const dummy = require('../../client/src/assets/dummyData/reviewDummyData.js');

const db = require("../db");

const router = new Router();

module.exports = router;

// router.get("/:id", async (req, res) => {
//   // const {id} = req.params;
//   // const count = await db.query({
//   //   text: "SELECT COUNT(id) FROM reviews WHERE product_id = $1",
//   //   values: [id]
//   // });
//   // const reviews = await db.query({
//   //   text: "SELECT * FROM reviews WHERE product_id = $1",
//   //   values: [id]
//   // });
//   // const reviewSummaryData = await db.query({
//   //   text: "SELECT * FROM review_summary_view WHERE product_id = $1",
//   //   values: [id]
//   // })

//   // const reviewData = {count: count.rows[0].count, reviews: reviews.rows, reviewSummaryData: reviewSummaryData.rows[0]}

//   const reviewData = dummy;
//   res.send(reviewData);
// });

router.get('/:id', (req, res) => {
  // const { id } = req.params;
  let random = 13;
  let id = 5;
  //
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
      verified_purchase: (random + 1) % 2 === 0,
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
    four_star: ratingTotals[4] || 0,
    three_star: ratingTotals[3] || 0,
    two_star: ratingTotals[2] || 0,
    one_star: ratingTotals[1] || 0,
    would_recommend_pct: (average_rating * 20 + 5).toFixed(0),
  };

  const reviewData = {
    count,
    reviews,
    reviewSummaryData
  };

  res.send(reviewData);
});