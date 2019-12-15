import React from "react";
import Drawers from "./Drawers.jsx";
import '../assets/styles/App.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="collin-drawers-app-container">
        <Drawers productId={this.state.productId} />
        <div className="icon-credit">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </div>
    );
  }
}
