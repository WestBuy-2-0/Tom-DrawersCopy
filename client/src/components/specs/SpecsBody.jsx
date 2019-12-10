import React from "react";
import PropTypes from "prop-types";
import $ from "jquery";
import Card from "react-bootstrap/Card";
import SpecCategoryRow from "./SpecCategoryRow.jsx";
import specsDummyData from "../../assets/specsDummyData.js";
import "./SpecsBody.css";

export default class SpecsBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: 1
    };
  }

  //render data based on State data passed down from component above - refactor this component into functional
  render() {
    return (
      <div className="drawer-content">
        <SpecCategoryRow
          category="Key Specs"
          specData={specsDummyData.key_specs}
        />
        <div className="spacer-row">
          <div className="spacer-row-1 r-border-bottom r-padding-bottom r-margin-bottom"></div>
        </div>
        <SpecCategoryRow category="General" specData={specsDummyData.general} />
        <div className="spacer-row">
          <div className="spacer-row-3"></div>
          <div className="spacer-row-9 r-border-bottom r-padding-bottom r-margin-bottom"></div>
        </div>
        <SpecCategoryRow
          category="Warranty"
          specData={specsDummyData.warranty}
        />
        <div className="spacer-row">
          <div className="spacer-row-3"></div>
          <div className="spacer-row-9 r-border-bottom r-padding-bottom r-margin-bottom"></div>
        </div>
        <SpecCategoryRow
          category="Other"
          specData={specsDummyData.other}
        />
      </div>
    );
  }
}

SpecsBody.propTypes = {
  productId: PropTypes.number
};
