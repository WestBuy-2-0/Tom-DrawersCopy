import React from "react";
import PropTypes from "prop-types";

//styles are necessary to render the correct star rating in the stars <i> tag below

import styles from "./StarGraphic.css";

//The "stars-small" component size must stay 90x18px
//The stars-bby.png background image asset is required to render star ratings - customize local path in Reviews.css
const StarGraphic = props => {
  const rating = props.avgRating;
  const starClasses = `stars stars-small stars-small-${rating.toFixed(1)[0]}-${
    rating.toFixed(1)[2]
  }`;
  return (
    <div className="star-graphic-container">
      <span className="star-graphic">
        <i className={starClasses}></i>
        <span className="star-graphic-review-count">
          <span className="star-graphic-total-reviews">
            ({props.reviewCount} Reviews)
          </span>
        </span>
      </span>
    </div>
  );
};

StarGraphic.propTypes = {
  productId: PropTypes.number,
  avgRating: PropTypes.number,
  reviewCount: PropTypes.number
};

export default StarGraphic;
