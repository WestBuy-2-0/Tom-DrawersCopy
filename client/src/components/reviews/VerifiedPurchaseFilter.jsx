import React from "react";
import PropTypes from "prop-types";
import $ from "jquery";

export default class VerifiedPurchaseFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //this state is currently not being used - replaced largely by ReviewDrawer state's filters.vp property
      checked: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkedClass = this.state.checked ? " checked" : "";
  }

  componentDidMount() {
    console.log(
      "current props VP filter on componentDiDMount: ",
      this.props.vpFilter
    );

    if (!this.props.vpFilter) {
      this.setState({ checked: false });
      $(".slider").removeClass("checked");
      $(".slider-toggle").removeClass("checked");
    }
  }

  componentDidUpate(prevProps) {
    console.log("prevProps VP filter: ", prevProps.vpFilter);
    console.log("current props VP filter: ", this.props.vpFilter);
    if (prevProps.vpFilter !== this.props.vpFilter) {
      if (!this.props.vpFilter) {
        this.setState({ checked: false });
        $(".slider").removeClass("checked");
        $(".slider-toggle").removeClass("checked");
      }
    }
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
          this.props.renderVPReviews();
        } else {
          $(".slider").removeClass("checked");
          $(".slider-toggle").removeClass("checked");
          this.props.removeFilter("vp");
        }
      }
    );
  }

  render() {
    console.log(
      "The current vpFilter in the VP Filter component render function: ",
      this.props.vpFilter
    );
    if (!this.props.vpFilter) {
      $(".slider").removeClass("checked");
      $(".slider-toggle").removeClass("checked");
    }

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
        <a href="#" className="learn-more">
          Learn More
        </a>
      </div>
    );
  }
}

VerifiedPurchaseFilter.propTypes = {
  renderVPReviews: PropTypes.func,
  vpFilter: PropTypes.bool
};
