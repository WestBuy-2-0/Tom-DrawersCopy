import React from "react";
// import "jquery";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import DrawerHeader from "../DrawerHeader.jsx";
import ReviewBody from "./ReviewBody.jsx";
import dummyReviews from "../../assets/reviewDummyData.js";

export default class ReviewDrawer extends React.Component {
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
          <DrawerHeader
            isOpen={this.state.open}
            productId={55}
            avgRating={dummyReviews.reviewSummaryData[0].avg_rating}
            reviewCount={dummyReviews.count}
            label="Reviews"
          />
        </Card.Header>
        <Collapse in={this.state.open}>
          <Card.Body>
            <ReviewBody
              productId={55}
              reviewSummaryData={dummyReviews.reviewSummaryData[0]}
              reviewData={dummyReviews.reviews}
            />
          </Card.Body>
        </Collapse>
      </Card>
    );
  }
}
