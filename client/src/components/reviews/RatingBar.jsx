import React from "react";
import PropTypes from "prop-types";
import $ from "jquery";

// import "./RatingBar.css";
import { thisExpression } from "@babel/types";

export default class RatingBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      progressBarPct: 0,
      disabled: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.totalReviews !== prevProps.totalReviews) {
      this.setState((state, props) => {
        return {
          progressBarPct:
            (parseInt(props.ratingCount) / parseInt(props.totalReviews)) * 100
        };
      });
      if (this.props.ratingCount === 0) {
        $(`#${this.props.starRating}-fancy-checkbox`).addClass("disabled");
        $(`#${this.props.starRating}-container`).addClass("disabled-cursor");
        this.setState({ disabled: true });
      }
    }
  }

  handleChange() {
    this.setState(
      state => {
        return { checked: !state.checked };
      },
      () => {
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
    return (
      <div
        className="rating-bar-container"
        id={this.props.starRating + "-container"}
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
            disabled={this.state.disabled}
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
