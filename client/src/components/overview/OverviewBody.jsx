import React from "react";
import PropTypes from "prop-types";
import OneFeature from "./OneFeature.jsx";
import OneIncludedItem from "./OneIncludedItem.jsx";
import Card from "react-bootstrap/Card";
import styles from "./OverviewBody.css";

const OverviewBody = props => {

    return (
      <div className="drawer-content">
        <div className="overview-content-container product-description-container">
          <h3 className="description-heading">Description</h3>
          <div className="description-copy">
            {props.overviewData.description}
          </div>
        </div>
        <div className="spacer-row">
          <div className="spacer-row-3"></div>
          <div className="spacer-row-9 r-border-bottom r-padding-bottom r-margin-bottom"></div>
        </div>
        <div className="overview-content-container product-features-container">
          <h3 className="features-heading">Features</h3>
          <div className="features-body-container">
            <div className="features-list">
              {props.overviewData.features.map((feature, index) => <OneFeature featureData={feature} key={index} />)}
            </div>
          </div>
        </div>
        <div className="spacer-row">
          <div className="spacer-row-3"></div>
          <div className="spacer-row-9 r-border-bottom r-padding-bottom r-margin-bottom"></div>
        </div>
        <div className="overview-content-container product-included-container">
          <h3 className="whats-included-heading">What's Included</h3>
          <div className="whats-included-body-container">
            <ul className="whats-included-list">
              {props.overviewData.whats_included.map((item, index) => <OneIncludedItem includedItem={item} key={index} />)}
            </ul>
          </div>
        </div>
      </div>
    );
  };

OverviewBody.propTypes = {
    overviewData: PropTypes.object
}

export default OverviewBody;
