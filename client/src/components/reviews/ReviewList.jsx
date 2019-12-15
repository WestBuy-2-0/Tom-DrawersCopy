import React from "react";
import PropTypes from "prop-types";
import ReviewItem from "./ReviewItem.jsx";
import Button from "react-bootstrap/Button";

export default class ReviewList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      extended: false
    };

    // this.totalReviews = this.props.filters.vp
    //   ? this.props.vpCount
    //   : this.props.totalReviews;

    this.showMore = this.showMore.bind(this);
  }

  componentDidMount() {
    // this.setState({ totalReviews: this.props.totalReviews }, () => {
    //   console.log("ReviewList Total Reviews state on mounting: ", this.state.totalReviews)
    console.log("In reviewList, this is vpCount: ", this.props.vpCount)
    if (this.props.totalReviews <= 8) {
      this.setState({
        extended: false
      });
    }
    // });
  }

  componentDidUpdate(prevProps) {
    console.log("ReviewList component updating");
    console.log("After ReviewList updates, this is vpCount: ", this.props.vpCount);
    console.log("After ReviewList updates, this is vp filter: ", this.props.filters.vp);

  
    // if (prevProps.productId !== this.props.productId) {
    //   this.setState((state, props) => {
    //     console.log("ReviewList Total Reviews state on updating: ", this.state.totalReviews)
    //     let totalReviews = props.filters.vp
    //       ? props.vpCount
    //       : props.totalReviews;
    //     return { totalReviews };
    //   });
    // }
    // this.totalReviews = this.props.filters.vp
    //   ? this.props.vpCount
    //   : this.props.totalReviews;
  }

  showMore() {
    this.props.extendReviews();
    this.setState({
      extended: true,
      showMoreDisplay: "none",
      seeAllDisplay: "inline-block"
    });
  }

  render() {
    return (
      <div className="review-list-container">
        <div className="review-list-info">
          Showing <strong>1-{this.props.reviewData.length}</strong> of{" "}
          {this.props.filters.vp ? this.props.vpCount : this.props.totalReviews} reviews
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
            style={{ display: this.state.extended ? "none" : "inline-block" }}
            onClick={this.showMore}
          >
            Show More
          </Button>
          <Button
            variant="outline-primary"
            className="show-more-btn"
            style={{ display: this.state.extended ? "inline-block" : "none" }}
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
  productId: PropTypes.number,
  reviewData: PropTypes.array,
  totalReviews: PropTypes.number,
  extendReviews: PropTypes.func,
  filters: PropTypes.object,
  vpCount: PropTypes.number
};
