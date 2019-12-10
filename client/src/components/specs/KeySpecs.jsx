import React from "react";
import PropTypes, { string } from "prop-types";
import OneSpec from "./OneSpec.jsx";

import styles from "./KeySpecs.css";

const KeySpecs = props => {
  return (
    <div className="specs-content-container">
      <div className="category-title-container">
        <h3 className="category-title">{props.category}</h3>
      </div>
      <table className="category-table">
        <tbody>
          {/* <tr>
            <td className="spec-name">Animal</td>
            <td className="spec-value">Horsies</td>
          </tr>
          <tr>
            <td className="spec-name">Colored Mane</td>
            <td className="spec-value">Yes</td>
          </tr>
          <tr>
            <td className="spec-name">Fun Value</td>
            <td className="spec-value">Off the charts!</td>
          </tr> */}
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
