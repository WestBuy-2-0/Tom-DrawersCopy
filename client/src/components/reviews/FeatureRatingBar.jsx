import React from "react";
import PropTypes from "prop-types";

const FeatureRatingBar = props => {
  const className = `${props.feature}-rating-group`;
  const ratingTileClasses = [];

  for (let i = 0; i < 5; i++) {
    if (i === 0) {
      ratingTileClasses.push(" filled first");
    } else if (i === 4 && i <= props.featureRating) {
      ratingTileClasses.push(" filled last");
    } else if (i === 4) {
      ratingTileClasses.push(" last");
    } else if (i <= props.featureRating) {
      ratingTileClasses.push(" filled");
    } else {
      ratingTileClasses.push("");
    }
  };

  return (
    <div className={className}>
      <p className="rating-description">{props.feature}</p>
      <div className="rating-bar-group">
        {ratingTileClasses.map((tile, index) => (
          <div className={"rating-tile" + tile} key={index}></div>
        ))}
      </div>
    </div>
  );
};

FeatureRatingBar.propTypes = {
  feature: PropTypes.string,
  featureRating: PropTypes.number
};

export default FeatureRatingBar;
