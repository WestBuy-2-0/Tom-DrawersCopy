import React from "react";
import PropTypes from "prop-types";

import styles from "./RatingSummary.css";

const RatingSummary = props => {
  const rating = props.avgRating;
  const starClasses = `stars stars-medium stars-medium-${
    rating.toFixed(1)[0]
  }-${rating.toFixed(1)[2]}`;
  return (
    <div className="rating-summary-container">
      <h3 className="customer-rating-heading">Customer Rating</h3>
      <span className="overall-rating">{props.avgRating}</span>
      <div className="stars-and-ratings">
        <i className={starClasses}></i>
        <span className="total-reviews">({props.reviewCount} Reviews)</span>
      </div>
    </div>
  );
};

RatingSummary.propTypes = {
  avgRating: PropTypes.number,
  reviewCount: PropTypes.number
};

export default RatingSummary;
