import React from "react";
import PropTypes from "prop-types";
import VerifiedPurchaseFilter from "../../components/reviews/VerifiedPurchaseFilter.jsx";
import ReviewFilterSelector from "../../components/reviews/ReviewFilterSelector.jsx";

// import styles from "./ReviewFilters.css";

const ReviewFilters = props => {
  return (
    <div className="review-filters-container">
      <VerifiedPurchaseFilter />
      <ReviewFilterSelector />
    </div>
  );
};

export default ReviewFilters;
