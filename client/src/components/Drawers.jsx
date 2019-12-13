import React from "react";

import Overview from './overview/Overview.jsx';
import Specs from './specs/Specs.jsx';
import ReviewDrawer from './reviews/ReviewDrawer.jsx';

import "./Drawers.scss";

export default class Drawers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: 10
    };

  }

  render() {
    return (
      <div className="drawers" id="drawers-container">
        <Overview productId={this.state.productId} />
        <Specs productId={this.state.productId} />
        <ReviewDrawer productId={this.state.productId} />
      </div>
    );
  }
}
