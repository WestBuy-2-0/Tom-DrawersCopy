import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import "../styles/OverviewBody.css";

export default class OverviewBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: 1
    };
  }

  render() {
    return (
      <div className="drawer-content">
        <div className="overview-content-container product-description-container">
          <h3 className="description-heading">Description</h3>
          <div className="description-copy">
            In quilt yearlings, gobblers pumpkin are porky pig beef, sheep rose
            garden sage, in pitch fork sunflower cowpies mice. Ewes mushrooms
            zucchini in forage Harvester at sheep with tractor.
          </div>
        </div>
        <div className="spacer-row">
          <div className="spacer-row-3"></div>
          <div className="spacer-row-9 r-border-bottom r-padding-bottom r-margin-bottom"></div>
        </div>
        <div className="overview-content-container product-features-container">
          <h3 className="features-heading">Features</h3>
          <div className="features-body-container">
            <div className="features-list">
              <div className="features-list-row">
                <h4 className="feature-title body-copy">Rose garden cucumbers mice sunflower wheat in pig.</h4>
                <p className="feature-copy">
                  Forage Harvester rakes peacocks, squeal garden woof.
                </p>
              </div>
              <div className="features-list-row">
                <h4 className="feature-title body-copy">Goose hammers cattle rats in crows.</h4>
                <p className="feature-copy">
                  In quilt yearlings, gobblers pumpkin are porky pig beef, sheep
                  rose garden sage, in pitch fork sunflower cowpies mice. Pick
                  up truck livestock, pets and storage shed, troughs feed bal.
                </p>
              </div>
              <div className="features-list-row">
                <h4 className="feature-title body-copy">Veterinarian at Seeder eggs with watermelon ostriches.</h4>
                <p className="feature-copy">
                  Chainsaw foal hay hook, herbs at combine harvester, children
                  is mallet.
                </p>
              </div>
              <div className="features-list-row">
                <h4 className="feature-title body-copy">Lamb pig rooster sheep.</h4>
                <p className="feature-copy">
                  Swather, cat weathervane grain trucks, hoot pony robins
                  peacocks and kale. Mooo cat daisys, grunt in turkey coo,
                  windmill at bull. Fertilize.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer-row">
          <div className="spacer-row-3"></div>
          <div className="spacer-row-9 r-border-bottom r-padding-bottom r-margin-bottom"></div>
        </div>
        <div className="overview-content-container product-included-container">
          <h3 className="whats-included-heading">What's Included</h3>
          <div className="whats-included-body-container">
            <ul className="whats-included-list">
              <li className="whats-included-list-item body-copy bold">
                Lamb in eggplant baler rain barrels manure hay rake.
              </li>
              <li className="whats-included-list-item body-copy bold">
                Lamb pig rooster sheep.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

OverviewBody.propTypes = {
    productId: PropTypes.number
}
