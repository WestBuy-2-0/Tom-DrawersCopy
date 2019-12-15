import React from "react";
import PropTypes from "prop-types";
import ReviewItem from "./ReviewItem.jsx";
import Button from "react-bootstrap/Button";

export default class ReviewList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMoreDisplay: "inline-block",
      seeAllDisplay: "none"
    };

    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    this.props.extendReviews();
    this.setState({showMoreDisplay: "none", seeAllDisplay: "inline-block"});
  }

  render() {
    return (
      <div className="review-list-container">
        <div className="review-list-info">
          Showing <strong>1-{this.props.reviewData.length}</strong> of{" "}
          {this.props.totalReviews} reviews
        </div>
        <ul className="review-list">
          {this.props.reviewData.map((review, index) => (
            <ReviewItem reviewInfo={review} key={index} />
          ))}
        </ul>
        <div className="see-all-reviews-btn-container">
          <Button
            variant="outline-primary"
            className="show-more-btn"
            style={{"display": this.state.showMoreDisplay}}
            onClick={this.showMore}
          >
            Show More
          </Button>
          <Button
            variant="outline-primary"
            className="show-more-btn"
            style={{"display": this.state.seeAllDisplay}}
          >
            See All Customer Reviews
          </Button>
          <Button variant="primary" className="write-review-btn">
            Write a Review
          </Button>
        </div>
      </div>
    );
  }
}

ReviewList.propTypes = {
  reviewData: PropTypes.array,
  totalReviews: PropTypes.number,
  extendReviews: PropTypes.func
};
