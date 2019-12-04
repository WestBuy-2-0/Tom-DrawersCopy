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

//   toggle(e) {
//     e.preventDefault();
//     e.persist();

//     const drawer = e.currentTarget.id;

//     if (drawer === "overviewOpen") {
//       this.setState(state => {
//         return { overviewOpen: !state.overviewOpen };
//       });
//     } else if (drawer === "specsOpen") {
//       this.setState(state => {
//         return { specsOpen: !state.specsOpen };
//       });
//     } else if (drawer === "reviewsOpen") {
//       this.setState(state => {
//         return { reviewsOpen: !state.reviewsOpen };
//       });
//     } else if (drawer === "qandaOpen") {
//       this.setState(state => {
//         return { qandaOpen: !state.qandaOpen };
//       });
//     }
//   }

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
