import React from "react";
import PropTypes, { string } from "prop-types";
import OneSpec from "./OneSpec.jsx";

import styles from "./SpecCategoryRow.css";

const KeySpecs = props => {
  return (
    <div className="specs-content-container">
      <div className="category-title-container">
        <h3 className="category-title">{props.category}</h3>
      </div>
      <table className="category-table">
        <tbody>
          {props.specData.map((spec, index) => <OneSpec specData={spec} key={index} />)}
        </tbody>
      </table>
    </div>
  );
};

KeySpecs.propTypes = {
    category: PropTypes.string,
    specData: PropTypes.array
}

export default KeySpecs;
