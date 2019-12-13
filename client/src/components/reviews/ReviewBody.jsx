import React from "react";
import PropTypes from "prop-types";
import ReviewSummary from "./ReviewSummary.jsx";
import ReviewList from "./ReviewList.jsx";
import VerifiedPurchaseFilter from "./VerifiedPurchaseFilter.jsx";
import ReviewFilterSelector from "./ReviewFilterSelector.jsx";

import "./ReviewBody.scss";

const ReviewBody = props => {
  return (
    <div className="drawer-content" id="review-drawer-content">
      <ReviewSummary reviewSummaryData={props.reviewSummaryData} />
      <div className="review-filters-container">
        <VerifiedPurchaseFilter />
        <ReviewFilterSelector />
      </div>
      <ReviewList
        reviewData={props.reviewData}
        totalReviews={props.reviewSummaryData.review_count}
      />
    </div>
  );
};

ReviewBody.propTypes = {
  productId: PropTypes.number,
  reviewSummaryData: PropTypes.object,
  reviewData: PropTypes.array
};

export default ReviewBody;
