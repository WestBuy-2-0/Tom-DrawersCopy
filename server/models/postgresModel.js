const postgres = require('../db/index');

module.exports.findOverview = ({ id }) => {
  const sqlString = `SELECT * FROM overviews WHERE product_id = $1;`;
  return postgres.query(sqlString, [id]);
};

module.exports.findSpecs = ({ id }) => {
  const sqlString = `SELECT * FROM specs WHERE product_id = $1;`;
  return postgres.query(sqlString, [id]);
};

module.exports.findReviewMetrics = ({ id }) => {
  const sqlString = `SELECT * FROM review_metrics WHERE product_id = $1;`;
  return postgres.query(sqlString, [id]);
};

module.exports.findReviews = ({ id }) => {
  const sqlString = `SELECT * FROM reviews WHERE product_id = $1;`;
  return postgres.query(sqlString, [id]);
};