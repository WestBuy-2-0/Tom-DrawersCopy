import React from "react";
import PropTypes from "prop-types";
import ReviewItem from "./ReviewItem.jsx";

const ReviewList = props => {
    return (<div className="review-list-container">
        <ul className="review-list">
            {props.reviewData.map((review, index) => <ReviewItem reviewInfo={review} key={index} />)}
        </ul>
    </div>)
}

ReviewList.propTypes = {
    reviewData: PropTypes.array
}

export default ReviewList;