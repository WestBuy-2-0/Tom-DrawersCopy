import React from "react";
import PropTypes from "prop-types";
import $ from "jquery";

import "./RatingBar.css";
import { thisExpression } from "@babel/types";

export default class RatingBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      progressBarPct: 0
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log("I'm mounting!!");
    console.log(
      "On mount, this is rating count: ",
      this.props.ratingCount,
      " and total count: ",
      this.props.totalReviews
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.totalReviews !== prevProps.totalReviews) {
      this.setState((state, props) => {
        return {
          progressBarPct:
            (parseInt(props.ratingCount) / parseInt(props.totalReviews)) * 100
        };
      });
    }
  }

  handleChange() {
    this.setState(
      state => {
        return { checked: !state.checked };
      },
      () => {
        console.log("is checked: ", this.state.checked);
        if (this.state.checked === true) {
          $(`#${this.props.starRating}-checkmark`).css(
            "display",
            "inline-block"
          );
          $(`#${this.props.starRating}-fancy-checkbox`).addClass("checked");
        } else if (this.state.checked === false) {
          $(`#${this.props.starRating}-checkmark`).css("display", "none");
          $(`#${this.props.starRating}-fancy-checkbox`).removeClass("checked");
        }
      }
    );
  }

  render() {
    console.log(
      "Rendering RatingBar - ",
      "rating count: ",
      this.props.ratingCount,
      "total reviews: ",
      this.props.totalReviews
    );
    console.log("ProgressBarPct: ", this.state.progressBarPct);

    return (
      <div
        className="rating-bar-container"
        onMouseEnter={() =>
          $($(`#${this.props.starRating}-fancy-checkbox`).addClass("checked"))
        }
        onMouseLeave={() =>
          $(`#${this.props.starRating}-fancy-checkbox`).removeClass("checked")
        }
      >
        <div className="checkbox-container">
          <input
            type="checkbox"
            id={this.props.starRating + "-checkbox"}
            name={this.props.starRating + "-checkbox"}
            checked={this.state.checked}
            onChange={this.handleChange}
          ></input>
          <i
            className="fancy-checkbox"
            id={this.props.starRating + "-fancy-checkbox"}
          >
            <i
              className="checkmark"
              id={this.props.starRating + "-checkmark"}
            ></i>
          </i>
        </div>
        <div className="star-rating">
          <span className="star">{this.props.starRating}</span>
          <i className="gold-star"></i>
        </div>
        <div className="progress-bar">
          <span
            className="progress-bar-filled"
            style={{ width: this.state.progressBarPct }}
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
