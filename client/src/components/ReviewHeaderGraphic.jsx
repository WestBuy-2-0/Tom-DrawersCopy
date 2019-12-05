import React from "react";
import PropTypes from "prop-types";

import "../styles/Reviews.css";

const ReviewHeaderGraphic = props => {
  if (!props.isReviewDrawer) {
    return <span></span>;
  } else {
    return (
      <span className="drawer-header-rating">
        <i className="stars stars-small stars-small-0-4"></i>
        <span className="drawer-header-review-count">
          <span className="drawer-header-total-reviews">(33)</span>
        </span>
      </span>
    );
  }
};

ReviewHeaderGraphic.propTypes = {
  isReviewDrawer: PropTypes.bool,
  isOpen: PropTypes.bool,
  productId: PropTypes.number
};

export default ReviewHeaderGraphic;
