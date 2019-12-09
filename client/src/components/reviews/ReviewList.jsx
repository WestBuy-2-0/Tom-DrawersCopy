import React from "react";
import PropTypes from "prop-types";
import ReviewItem from "./ReviewItem.jsx";
import Button from "react-bootstrap/Button";

import styles from "./ReviewList.css";

const ReviewList = props => {
    return (<div className="review-list-container">
        <ul className="review-list">
            {props.reviewData.map((review, index) => <ReviewItem reviewInfo={review} key={index} />)}
        </ul>
        <div className="see-all-reviews-btn-container">
            <Button variant="outline-primary" className="show-more-btn">Show More</Button>
            <Button variant="primary" className="write-review-btn">Write a Review</Button>
        </div>
    </div>)
}

ReviewList.propTypes = {
    reviewData: PropTypes.array
}

export default ReviewList;