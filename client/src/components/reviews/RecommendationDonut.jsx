import React from "react";
import PropTypes from "prop-types";

import styles from "./RecommendationDonut.css";

const RecommendationDonut = props => {
  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians)
    };
  };

  const describeArc = (x, y, radius, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    const d = [
      "M",
      start.x,
      start.y,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
      "L",
      60,
      60
    ].join(" ");

    return d;
  };

  const pctDeg = (props.pctRec * 350) / 100;

  return (
    <div className="donut-container">
      <div className="donut-graphic">
        <svg width="100" height="100" viewBox="0 0 120 120">
          <path fill="#e0e6ef" d={describeArc(60, 60, 50, 5, 355)}></path>
          <path fill="#0046BE" d={describeArc(60, 60, 50, 5, pctDeg)}></path>
          <circle cx="60" cy="60" r="42" fill="#fff"></circle>
        </svg>
        <span className="donut-percent">{props.pctRec}%</span>
      </div>
      <p className="recommend-text">would recommend to a friend</p>
    </div>
  );
};

RecommendationDonut.propTypes = {
  pctRec: PropTypes.number
};

export default RecommendationDonut;
