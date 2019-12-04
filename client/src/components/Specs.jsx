import React from "react";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import DrawerHeader from "./DrawerHeader.jsx";

export default class Specs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
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
          <DrawerHeader isOpen={this.state.open} label="Specifications" />
        </Card.Header>
        <Collapse in={this.state.open}>
          <Card.Body>
            This is where the product specifications will go.
          </Card.Body>
        </Collapse>
      </Card>
    );
  }
}
