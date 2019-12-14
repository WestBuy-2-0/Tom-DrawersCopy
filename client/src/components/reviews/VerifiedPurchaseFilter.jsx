import React from "react";
import PropTypes from "prop-types";
import $ from "jquery";

export default class VerifiedPurchaseFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkedClass = this.state.checked ? " checked" : "";
  }

  handleChange() {
    this.setState(
      state => {
        return { checked: !state.checked };
      },
      () => {
        if (this.state.checked) {
          $(".slider").addClass("checked");
          $(".slider-toggle").addClass("checked");
        } else {
          $(".slider").removeClass("checked");
          $(".slider-toggle").removeClass("checked");
        }
      }
    );
  }

  render() {
    return (
      <div className="vp-filter-container">
        <div className="switch-label">
          <div className="switch">
            <span className="slider"></span>
            <span className="slider-toggle"></span>
            <input
              type="checkbox"
              name="vp"
              id="vp"
              onChange={this.handleChange}
              checked={this.state.checked}
            ></input>
          </div>
          <div className="slider-label">
            Show only <i class="far fa-check-circle"></i>
            <span className="verified-purchases">Verified Purchases</span>
          </div>
        </div>
        <a href="#" className="learn-more">Learn More</a>
      </div>
    );
  }
};
