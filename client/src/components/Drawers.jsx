import React from "react";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";

import Overview from './overview/Overview.jsx';
import Specs from './specs/Specs.jsx';
import ReviewDrawer from './reviews/ReviewDrawer.jsx';
import QandA from './qanda/QandA.jsx';

import styles from "./Drawers.css";

export default class Drawers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: 10
    };

  }

  render() {
    return (
      <div className="drawers">
        <Overview productId={this.state.productId} />
        <Specs productId={this.state.productId} />
        <ReviewDrawer productId={this.state.productId} />
      </div>
    );
  }
}
