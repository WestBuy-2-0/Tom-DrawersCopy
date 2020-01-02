const postgres = require('../db/index');

module.exports.findOverview = ({ id }) => {
  const sqlString = `SELECT * FROM overviews WHERE product_id = $1;`;
  
  return postgres.query(sqlString, [id]);
};

module.exports.findSpecs = ({ id }) => {
  const sqlString = `SELECT * FROM specs WHERE product_id = $1;`;

  return postgres.query(sqlString, [id]);
};

// module.exports.findReviewData = async ({ id }) => {
//   let reviewData = await this.findReviewMetrics(id)
//     .then((data) => {
//       rawData = data.rows;
//       console.log('THE REVIEW METRICS:', data.rows);

//       reviewData.reviewSummaryData = data.rows;
//       return this.findReviews(id);
//     })
//     .then((reviews) => {
//       console.log('THE REVIEWS:', reviews.rows);
//       reviewData.reviews = reviews.rows;
//       return reviewData;
//     });
//   reviewData.count = reviewData.reviews.length;
//   return reviewData;
// };

module.exports.findReviewMetrics = ({ id }) => {
  const sqlString = `SELECT * FROM review_metrics WHERE product_id = $1;`;

  return postgres.query(sqlString, [id]);
};

module.exports.findReviews = ({ id }) => {
  const sqlString = `SELECT * FROM reviews WHERE product_id = $1;`;

  return postgres.query(sqlString, [id]);
};