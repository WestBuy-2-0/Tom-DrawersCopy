import React from "react";
import PropTypes from "prop-types";

import "./RatingBar.css";
import { thisExpression } from "@babel/types";

export default class RatingBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };

    this.progressBarPct = `${(this.props.ratingCount /
      this.props.totalReviews) *
      100}%`;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState(state => {
      return { checked: !state.checked };
    });
  }

  render() {
    return (
      <div className="rating-bar-container">
        <div className="checkbox-container">
          <input
            type="checkbox"
            id={this.props.starRating + "-checkbox"}
            name={this.props.starRating + "-checkbox"}
            checked={this.state.checked}
            onChange={this.handleChange}
          ></input>
          <i className="fancy-checkbox"></i>
          <div className="fancy-checkbox"></div>
        </div>
        <div className="star-rating">
          <span className="star">{this.props.starRating}</span>
          <i className="gold-star"></i>
        </div>
        <div className="progress-bar">
          <span
            className="progress-bar-filled"
            style={{ width: this.progressBarPct }}
          ></span>
        </div>
        <div className="rating-count">{this.props.ratingCount}</div>
      </div>
    );
  }
}

RatingBar.propTypes = {
  starRating: PropTypes.number,
  ratingCount: PropTypes.number,
  totalReviews: PropTypes.number
};
