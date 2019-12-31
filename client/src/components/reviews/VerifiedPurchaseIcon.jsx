import React from "react";
import PropTypes from "prop-types";

const VerifiedPurchaseIcon = props => {
  const isVP = props.isVerified ? "inline-block" : "none";
  return (
    <div style={{ display: isVP }}>
      <span className="verified-purchase">
        <i className="far fa-check-circle"></i>
        Verified Purchase
      </span>
      <span className="review-info-divider">|</span>
    </div>
  );
};

VerifiedPurchaseIcon.propTypes = {
    isVerified: PropTypes.bool
}

export default VerifiedPurchaseIcon;
