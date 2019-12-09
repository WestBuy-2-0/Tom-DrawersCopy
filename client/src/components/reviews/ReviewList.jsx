import React from "react";
import PropTypes from "prop-types";
import ReviewItem from "./ReviewItem.jsx";
import Button from "react-bootstrap/Button";

const ReviewList = props => {
    return (<div className="review-list-container">
        <ul className="review-list">
            {props.reviewData.map((review, index) => <ReviewItem reviewInfo={review} key={index} />)}
        </ul>
        <div className="see-all-reviews-btn-container">
            <Button variant="outline-primary">Show More</Button>
            <Button variant="primary">Write a Review</Button>
        </div>
    </div>)
}

ReviewList.propTypes = {
    reviewData: PropTypes.array
}

export default ReviewList;