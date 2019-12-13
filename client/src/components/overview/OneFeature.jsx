import React from "react";
import PropTypes from "prop-types";

// import styles from "./OneFeature.css";

const OneFeature = props => {
  return (
    <div className="features-list-row">
      <h4 className="feature-title body-copy">
        {props.featureData.feature_name}
      </h4>
      <p className="feature-copy">{props.featureData.feature_description}</p>
    </div>
  );
};

OneFeature.propTypes = {
  featureData: PropTypes.object
};

export default OneFeature;
