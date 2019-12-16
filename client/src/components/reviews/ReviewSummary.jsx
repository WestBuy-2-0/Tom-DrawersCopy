import React from "react";
import PropTypes from "prop-types";
import RatingSummary from "./RatingSummary.jsx";
import RatingFilter from "./RatingFilter.jsx";
import RecommendationDonut from "./RecommendationDonut.jsx";

// import styles from "./ReviewSummary.css";

const ReviewSummary = props => {
  const ratingCounts = [
    [5, props.reviewSummaryData["five_star"]],
    [4, props.reviewSummaryData["four_star"]],
    [3, props.reviewSummaryData["three_star"]],
    [2, props.reviewSummaryData["two_star"]],
    [1, props.reviewSummaryData["one_star"]]
  ];

  return (
    <div className="review-summary-container">
      <RatingSummary
        avgRating={props.reviewSummaryData.average_rating}
        reviewCount={props.reviewSummaryData.review_count}
        recPct={props.reviewSummaryData.would_recommend_pct}
      />
      <span className="spacer-column"></span>
      <RatingFilter
        totalReviews={props.reviewSummaryData.review_count}
        ratingCounts={ratingCounts}
        toggleRatingFilter={props.toggleRatingFilter}
      />
      <span className="spacer-column"></span>
      <RecommendationDonut
        pctRec={props.reviewSummaryData.would_recommend_pct}
      />
    </div>
  );
};

ReviewSummary.propTypes = {
  reviewSummaryData: PropTypes.object,
  toggleRatingFilter: PropTypes.func
};

export default ReviewSummary;
