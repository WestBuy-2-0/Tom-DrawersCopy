import React from "react";
import PropTypes from "prop-types";
import ReviewSummary from "./ReviewSummary.jsx";
import ReviewList from "./ReviewList.jsx";

const ReviewBody = props => {
    return (
        <div className="drawer-content">
            <ReviewSummary reviewSummaryData={props.reviewSummaryData} />
            {/* <ReviewList /> */}
        </div>
    )
}

ReviewBody.propTypes = {
    productId: PropTypes.number,
    reviewSummaryData: PropTypes.object,
    reviewData: PropTypes.array
}

export default ReviewBody;