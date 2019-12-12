import React from "react";
import PropTypes from "prop-types";
import RatingSummary from "./RatingSummary.jsx";
import RatingFilter from "./RatingFilter.jsx";
import RecommendationDonut from "./RecommendationDonut.jsx";

import styles from "./ReviewSummary.css";

const ReviewSummary = props => {
  const ratingCounts = [
    [5, props.reviewSummaryData[5]],
    [4, props.reviewSummaryData[4]],
    [3, props.reviewSummaryData[3]],
    [2, props.reviewSummaryData[2]],
    [1, props.reviewSummaryData[1]]
  ];

  return (
    <div className="review-summary-container">
      <RatingSummary
        avgRating={props.reviewSummaryData.avg_rating}
        reviewCount={props.reviewSummaryData.review_count}
        recPct={props.reviewSummaryData.would_recommend_pct}
      />
      <span className="spacer-column"></span>
      <RatingFilter
        totalReviews={props.reviewSummaryData.review_count}
        ratingCounts={ratingCounts}
      />
      <span className="spacer-column"></span>
      <RecommendationDonut
        pctRec={props.reviewSummaryData.would_recommend_pct}
      />
    </div>
  );
};

ReviewSummary.propTypes = {
  reviewSummaryData: PropTypes.object
};

export default ReviewSummary;
