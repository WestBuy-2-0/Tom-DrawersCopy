import React from "react";
import PropTypes from "prop-types";
import $ from "jquery";
import Card from "react-bootstrap/Card";
import KeySpecs from "./KeySpecs.jsx";
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
        <KeySpecs category="Key Specs" specData={specsDummyData.key_specs} />
        <div className="spacer-row">
          <div className="spacer-row-1 r-border-bottom r-padding-bottom r-margin-bottom"></div>
        </div>
        <div className="specs-content-container general-container">
          <div className="category-title-container">
            <h3 className="category-title">General</h3>
          </div>
          <table className="category-table">
            <tbody>
              <tr>
                <td className="spec-name">Lifespan</td>
                <td className="spec-value">14 years</td>
              </tr>
              <tr>
                <td className="spec-name">Color</td>
                <td className="spec-value">Pink and white</td>
              </tr>
              <tr>
                <td className="spec-name">Suitable Use</td>
                <td className="spec-value">
                  Shows, festivals, a fun Sunday outing with the family
                </td>
              </tr>
              <tr>
                <td className="spec-name">Quantity</td>
                <td className="spec-value">3</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="spacer-row">
          <div className="spacer-row-3"></div>
          <div className="spacer-row-9 r-border-bottom r-padding-bottom r-margin-bottom"></div>
        </div>
        <div className="specs-content-container warranty-container">
          <div className="category-title-container">
            <h3 className="category-title">Warranty</h3>
          </div>
          <table className="category-table">
            <tbody>
              <tr>
                <td className="spec-name">Manufacturer's Warranty - Parts</td>
                <td className="spec-value">Lifetime Limited</td>
              </tr>
              <tr>
                <td className="spec-name">Manufacturer's Warranty - Labor</td>
                <td className="spec-value">Lifetime Limited</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="spacer-row">
          <div className="spacer-row-3"></div>
          <div className="spacer-row-9 r-border-bottom r-padding-bottom r-margin-bottom"></div>
        </div>
        <div className="specs-content-container other-container">
          <div className="category-title-container">
            <h3 className="category-title">Other</h3>
          </div>
          <table className="category-table">
            <tbody>
              <tr>
                <td className="spec-name">UPC</td>
                <td className="spec-value">600662538765</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

SpecsBody.propTypes = {
  productId: PropTypes.number
};
