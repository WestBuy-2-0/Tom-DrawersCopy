import React from "react";
import PropTypes from "prop-types";

//styles are necessary to render the correct star rating in the stars <i> tag below

import styles from "./RatingHeader.css";

//The "stars-small" component size must stay 90x18px
//The stars-bby.png background image asset is required to render star ratings - customize local path in Reviews.css
const RatingHeader = props => {
  if (!props.isReviewDrawer || props.isOpen) {
    return <span></span>;
  } else {
    const rating = props.avgRating;
    const starClasses = `stars stars-small stars-small-${rating.toFixed(1)[0]}-${rating.toFixed(1)[2]}`;
    return (
      <span className="drawer-header-rating">
        <i className={starClasses}></i>
        <span className="drawer-header-review-count">
          <span className="drawer-header-total-reviews">({props.reviewCount})</span>
        </span>
      </span>
    );
  }
};

RatingHeader.propTypes = {
  isReviewDrawer: PropTypes.bool,
  isOpen: PropTypes.bool,
  productId: PropTypes.number,
  avgRating: PropTypes.number,
  reviewCount: PropTypes.number
};

export default RatingHeader;
