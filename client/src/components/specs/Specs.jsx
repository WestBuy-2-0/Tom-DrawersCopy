import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import DrawerHeader from "../DrawerHeader.jsx";
import SpecsBody from "./SpecsBody.jsx";

export default class Specs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
      //cache overview info for given productId here
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(state => {
      return { open: !state.open };
    });
  }

  //query server/db for Overview data for this.props.productId

  render() {
    return (
      <Card>
        <Card.Header onClick={this.toggle}>
          <DrawerHeader isOpen={this.state.open} label="Specifications" />
        </Card.Header>
        <Collapse in={this.state.open}>
          <Card.Body>
            <SpecsBody productId={this.props.productId} />
          </Card.Body>
        </Collapse>
      </Card>
    );
  }
}

Specs.propTypes = {
  productId: PropTypes.number
}
