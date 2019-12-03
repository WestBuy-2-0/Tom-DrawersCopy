import React from "react";
import $ from "jquery";
// import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import "../styles/Drawers.css";

export default class Drawers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      overviewOpen: true,
      specsOpen: false,
      reviewsOpen: false,
      qandaOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  toggle(e) {
    e.preventDefault();
    e.persist();

    const drawer = e.currentTarget.id;

    if (drawer === "overviewOpen") {
      this.setState(state => {
        return { overviewOpen: !state.overviewOpen };
      });
    } else if (drawer === "specsOpen") {
      this.setState(state => {
        return { specsOpen: !state.specsOpen };
      });
    } else if (drawer === "reviewsOpen") {
      this.setState(state => {
        return { reviewsOpen: !state.reviewsOpen };
      });
    } else if (drawer === "qandaOpen") {
      this.setState(state => {
        return { qandaOpen: !state.qandaOpen };
      });
    }
  }

  render() {
    return (
      <div className="drawers">
        <Card>
          <Card.Header onClick={this.toggle} id="overviewOpen">
            Overview
          </Card.Header>
          <Collapse in={this.state.overviewOpen}>
            <Card.Body>This is where the product overview will go.</Card.Body>
          </Collapse>
        </Card>
        <Card>
          <Card.Header onClick={this.toggle} id="specsOpen">
            Specifications
          </Card.Header>
          <Collapse in={this.state.specsOpen}>
            <Card.Body>
              This is where the product specifications will go.
            </Card.Body>
          </Collapse>
        </Card>
        <Card>
          <Card.Header onClick={this.toggle} id="reviewsOpen">
            Reviews
          </Card.Header>
          <Collapse in={this.state.reviewsOpen}>
            <Card.Body>This is where the product reviews will go.</Card.Body>
          </Collapse>
        </Card>
        <Card>
          <Card.Header onClick={this.toggle} id="qandaOpen">
            Question & Answer
          </Card.Header>
          <Collapse in={this.state.qandaOpen}>
            <Card.Body>This is where the product Q&A will go.</Card.Body>
          </Collapse>
        </Card>
      </div>
    );
  }
}
