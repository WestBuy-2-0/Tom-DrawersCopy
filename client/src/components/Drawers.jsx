import React from "react";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";

import Overview from './Overview.jsx';
import Specs from './Specs.jsx';
import Reviews from './Reviews.jsx';
import QandA from './QandA.jsx';

import "../styles/Drawers.css";

export default class Drawers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return (
      <div className="drawers">
        <Overview />
        <Specs />
        <Reviews />
        <QandA />
      </div>
    );
  }
}
