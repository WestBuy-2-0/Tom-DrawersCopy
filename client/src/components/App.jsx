import React from "react";
import Drawers from "./Drawers.jsx";


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: 1
    }
  }

  render() {
    return <Drawers productId={this.state.productId} />;
  }
}
