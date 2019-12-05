import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import "../styles/SpecsBody.css";

export default class SpecsBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: 1
    };
  }

  render() {
    return (
      <div className="drawer-content">
        <div className="specs-content-container key-specs-container">
          <div className="category-title-container">
            <h3 className="category-title">Key Specs</h3>
          </div>
          <table className="category-table">
            <tbody>
              <tr>
                <td className="spec-name">Animal</td>
                <td className="spec-value">Horsies</td>
              </tr>
              <tr>
                <td className="spec-name">Legs</td>
                <td className="spec-value">4 each</td>
              </tr>
              <tr>
                <td className="spec-name">Colored Mane</td>
                <td className="spec-value">Yes</td>
              </tr>
              <tr>
                <td className="spec-name">Fun Value</td>
                <td className="spec-value">Off the charts!</td>
              </tr>
            </tbody>
          </table>
        </div>
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
