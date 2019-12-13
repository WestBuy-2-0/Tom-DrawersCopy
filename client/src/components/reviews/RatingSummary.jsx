import React from "react";
import PropTypes from "prop-types";

// import styles from "./RatingSummary.css";

const RatingSummary = props => {
  const rating = props.avgRating;
  console.log("Rating summary rating: ", rating);
  const starClasses = `stars stars-medium stars-medium-${
    rating.toFixed(1)[0]
  }-${rating.toFixed(1)[2]}`;
  return (
    <div className="rating-summary-container">
      <h3 className="customer-rating-heading">Customer Rating</h3>
      <span className="overall-rating"><span className="inner-overall-rating">{rating.toFixed(1)}</span></span>
      <div className="stars-and-ratings">
        <i className={starClasses}></i>
        <span className="total-reviews">({props.reviewCount} Reviews)</span>
      </div>
    
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
