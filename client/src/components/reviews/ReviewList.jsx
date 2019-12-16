import React from "react";
import PropTypes from "prop-types";
import ReviewItem from "./ReviewItem.jsx";
import Button from "react-bootstrap/Button";

const ReviewList = props => {
  let reviewCountDisplay;
  let activeFilters = Object.keys(props.activeFilters);

  if (props.ratingFiltersActive) {
    reviewCountDisplay = props.filteredCount;
  } else if (props.filters.vp) {
    reviewCountDisplay = props.vpCount;
  } else {
    reviewCountDisplay = props.totalReviews;
  }

  
  return (
    <div className="review-list-container">
      <div className="review-list-info">
        <div className="number-of-reviews">
          Showing <strong>1-{props.reviewData.length}</strong> of
          {" " + reviewCountDisplay} reviews
        </div>
        <div className="active-filters">
          <strong>Filters: </strong>
          {props.filters.vp ? <Button variant="outline-primary">Verified Purchase<i class="fas fa-times btn-close-x"></i></Button> : <></>}
          {activeFilters.map((filter, index) => <Button variant="outline-primary" key={index}>{filter} Star<i class="fas fa-times btn-close-x"></i></Button>)}
          <Button variant="link" id="clear-all-btn">Clear All</Button>
        </div>
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
};

ReviewList.propTypes = {
  productId: PropTypes.number,
  reviewData: PropTypes.array,
  totalReviews: PropTypes.number,
  extendReviews: PropTypes.func,
  filters: PropTypes.object,
  vpCount: PropTypes.number,
  extended: PropTypes.bool,
  ratingFiltersActive: PropTypes.bool,
  filteredCount: PropTypes.number,
  activeFilters: PropTypes.object
};

export default ReviewList;
