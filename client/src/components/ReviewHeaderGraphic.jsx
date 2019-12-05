import React from "react";
import PropTypes from "prop-types";

//styles are necessary to render the correct star rating in the stars <i> tag below

import "../styles/Reviews.css";

//The "stars-small" component size must stay 90x18px
//The stars-bby.png background image asset is required to render star ratings - customize local path in Reviews.css
const ReviewHeaderGraphic = props => {
  if (!props.isReviewDrawer || props.isOpen) {
    return <span></span>;
  } else {
    return (
      <span className="drawer-header-rating">
        <i className="stars stars-small stars-small-4-6"></i>
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
