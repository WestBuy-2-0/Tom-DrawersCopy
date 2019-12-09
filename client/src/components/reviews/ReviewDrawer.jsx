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
      open: false,
      reviewData: {
        count: 0,
        reviews: [],
        reviewSummaryData: [
          {
            product_id: 0,
            review_count: 0,
            avg_rating: 0,
            5: 0,
            4: 0,
            3: 0,
            2: 0,
            1: 0,
            would_recommend_pct: 0
          }
        ]
      }
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    //query for review data here?
    this.setState({ reviewData: dummyReviews }, ()=> {
      console.log('review state updated');
      console.log(this.state.reviewData.reviewSummaryData[0].review_count);
    });
  }

  toggle() {
    this.setState(state => {
      return { open: !state.open };
    });
  }

  render() {
    console.log("Rendering ReviewDrawer");
    return (
      <Card>
        <Card.Header onClick={this.toggle}>
          <DrawerHeader
            isOpen={this.state.open}
            productId={55}
            avgRating={this.state.reviewData.reviewSummaryData[0].avg_rating}
            reviewCount={this.state.reviewData.count}
            label="Reviews"
          />
        </Card.Header>
        <Collapse in={this.state.open}>
          <Card.Body>
            <ReviewBody
              productId={55}
              reviewSummaryData={this.state.reviewData.reviewSummaryData[0]}
              reviewData={this.state.reviewData.reviews}
            />
          </Card.Body>
        </Collapse>
      </Card>
    );
  }
}
