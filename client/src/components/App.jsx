import React from "react";
import Drawers from "./Drawers.jsx";
import '../styles/App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: 1
    };
  }

  render() {
    return (
      <div className="container">
        <Drawers productId={this.state.productId} />
      </div>
    );
  }
}
