import React from "react";
import PropTypes from "prop-types";
import ReviewItem from "./ReviewItem.jsx";
import Button from "react-bootstrap/Button";

const ReviewList = props => {
  return (
    <div className="review-list-container">
      <div className="review-list-info">
        Showing <strong>1-{props.reviewData.length}</strong> of{" "}
        {props.filters.vp ? props.vpCount : props.totalReviews} reviews
      </div>
      <ul className="review-list">
        {props.reviewData.map((review, index) => (
          <ReviewItem reviewInfo={review} key={index} />
        ))}
      </ul>
      <div className="see-all-reviews-btn-container">
        <Button
          variant="outline-primary"
          className="show-more-btn"
          style={{ display: props.extended ? "none" : "inline-block" }}
          onClick={props.extendReviews}
        >
          Show More
        </Button>
        <Button
          variant="outline-primary"
          className="show-more-btn"
          style={{ display: props.extended ? "inline-block" : "none" }}
        >
          See All Customer Reviews
        </Button>
        <Button variant="primary" className="write-review-btn">
          Write a Review
        </Button>
      </div>
    </div>
  );
}

ReviewList.propTypes = {
  productId: PropTypes.number,
  reviewData: PropTypes.array,
  totalReviews: PropTypes.number,
  extendReviews: PropTypes.func,
  filters: PropTypes.object,
  vpCount: PropTypes.number,
  extended: PropTypes.bool
};



export default ReviewList;
