import React from "react";
import PropTypes from "prop-types";
import $ from "jquery";
import Card from "react-bootstrap/Card";
import SpecCategoryRow from "./SpecCategoryRow.jsx";
import "../../assets/styles/SpecsBody.scss";

const SpecsBody = props => {
    return (
      <div className="drawer-content" id="specs-drawer-content">
        <SpecCategoryRow
          category="Key Specs"
          specData={props.specsData.key_specs}
        />
        <div className="spacer-row">
          <div className="spacer-row-1 r-border-bottom r-padding-bottom r-margin-bottom"></div>
        </div>
        <SpecCategoryRow category="General" specData={props.specsData.general} />
        <div className="spacer-row">
          <div className="spacer-row-3"></div>
          <div className="spacer-row-9 r-border-bottom r-padding-bottom r-margin-bottom"></div>
        </div>
        <SpecCategoryRow
          category="Warranty"
          specData={props.specsData.warranty}
        />
        <div className="spacer-row">
          <div className="spacer-row-3"></div>
          <div className="spacer-row-9 r-border-bottom r-padding-bottom r-margin-bottom"></div>
        </div>
        <SpecCategoryRow
          category="Other"
          specData={props.specsData.other}
        />
      </div>
    );
  };

SpecsBody.propTypes = {
  specsData: PropTypes.object
};

export default SpecsBody;
