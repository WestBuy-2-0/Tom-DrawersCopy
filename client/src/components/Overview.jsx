import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import DrawerHeader from "./DrawerHeader.jsx";
import OverviewBody from "./OverviewBody.jsx";

import '../styles/Overview.css';

export default class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(state => {
      return { open: !state.open };
    });
  }

  render() {
    return (
      <Card>
        <Card.Header onClick={this.toggle}>
          <DrawerHeader isOpen={this.state.open} label="Overview" />
        </Card.Header>
        <Collapse in={this.state.open}>
          <Card.Body>
            <OverviewBody />
          </Card.Body>
        </Collapse>
      </Card>
    );
  }
}
