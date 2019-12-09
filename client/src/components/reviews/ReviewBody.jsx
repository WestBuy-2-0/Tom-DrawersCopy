import React from "react";
import PropTypes from "prop-types";
import ReviewSummary from "./ReviewSummary.jsx";
import ReviewList from "./ReviewList.jsx";
import ReviewFilters from "./ReviewFilters.jsx";

const ReviewBody = props => {

    console.log("Rendering ReviewBody");
    return (
        <div className="drawer-content">
            <ReviewSummary reviewSummaryData={props.reviewSummaryData} />
            <ReviewFilters />
            <ReviewList reviewData={props.reviewData} totalReviews={props.reviewSummaryData.reviewCount}/>
        </div>
    )
}

ReviewBody.propTypes = {
    productId: PropTypes.number,
    reviewSummaryData: PropTypes.object,
    reviewData: PropTypes.array
}

export default ReviewBody;