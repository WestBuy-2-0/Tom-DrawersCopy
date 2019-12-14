import React from "react";

import Overview from "./overview/Overview.jsx";
import Specs from "./specs/Specs.jsx";
import ReviewDrawer from "./reviews/ReviewDrawer.jsx";

import "../assets/styles/Drawers.scss";


export default class Drawers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: 10
    };
  }

  componentDidMount() {
    /* Reads current pages URL and gets product id */
    const getProductID = () => {
      let productUrl = "http://www.westbuy.org/products/45/";
      let { pathname } = new URL(productUrl);
      return pathname.split("/")[2];
    };
    let productId = Number(getProductID());

    this.setState({productId}, () => {
      console.log("Product ID updated in state: ", this.state.productId)
    });
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
