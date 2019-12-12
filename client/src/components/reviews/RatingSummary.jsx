import React from "react";
import PropTypes from "prop-types";

import styles from "./RatingSummary.css";

const RatingSummary = props => {
  const rating = props.avgRating;
  console.log("Rating summary rating: ", rating);
  const starClasses = `stars stars-medium stars-medium-${
    rating.toFixed(1)[0]
  }-${rating.toFixed(1)[2]}`;
  return (
    <div className="rating-summary-container">
      <h3 className="customer-rating-heading">Customer Rating</h3>
      <span className="overall-rating"><span className="inner-overall-rating">{props.avgRating}</span></span>
      <div className="stars-and-ratings">
        <i className={starClasses}></i>
        <span className="total-reviews">({props.reviewCount} Reviews)</span>
      </div>
      {/* <div className="recommend-pct"><strong>{props.recPct}%</strong> would recommend to a friend.</div> */}
      <a href="#" className="all-reviews-link">See all customer reviews</a>
    </div>
  );
};

RatingSummary.propTypes = {
  avgRating: PropTypes.number,
  reviewCount: PropTypes.number,
  recPct: PropTypes.number
};

export default RatingSummary;
