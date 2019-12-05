import React from "react";
import PropTypes from "prop-types";
import RatingSummary from "./RatingSummary.jsx";
import RatingFilter from "./RatingFilter.jsx";
import RecommendationDonut from "./RecommendationDonut.jsx";


const ReviewSummary = props => {
    return (
        <div className="review-summary-container">
            <RatingSummary avgRating={props.reviewSummaryData.avg_rating} reviewCount={props.reviewSummaryData.review_count} />
            {/* <RatingFilter />
            <RecommendationDonut /> */}
        </div>
    );
};

ReviewSummary.propTypes = {
    reviewSummaryData: PropTypes.object
}

export default ReviewSummary;
