import React from "react";
import PropTypes from "prop-types";
import VerifiedPurchaseFilter from "./VerifiedPurchaseFilter.jsx";
import ReviewFilterSelector from "./ReviewFilterSelector.jsx";

import styles from "./ReviewFilters.css";

const ReviewFilters = props => {
  return (
    <div className="review-filters-container">
      <VerifiedPurchaseFilter />
      <ReviewFilterSelector />
    </div>
  );
};

export default ReviewFilters;
