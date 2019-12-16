import React from "react";
// import "jquery";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import DrawerHeader from "../DrawerHeader.jsx";
import ReviewBody from "./ReviewBody.jsx";
import axios from "axios";

export default class ReviewDrawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      reviewData: {
        count: 0,
        reviews: [],
        reviewSummaryData: {
          product_id: 0,
          review_count: 0,
          average_rating: 0,
          five_star: 0,
          four_star: 0,
          three_star: 0,
          two_star: 0,
          one_star: 0,
          would_recommend_pct: 0
        }
      },
      filters: {
        vp: false,
        five_star: false,
        four_star: false,
        three_star: false,
        two_star: false,
        one_star: false
      },
      listExtended: false,
      renderedReviews: [],
      vpReviews: [],
      vpCount: 0
    };

    this.toggle = this.toggle.bind(this);
    this.truncateReviews = this.truncateReviews.bind(this);
    this.extendReviews = this.extendReviews.bind(this);
    this.getVPReviews = this.getVPReviews.bind(this);
    this.renderVPReviews = this.renderVPReviews.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
  }

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  componentDidMount() {
    //query for review data here
    axios
      .get(
        `http://west-buy-drawers.us-east-2.elasticbeanstalk.com/reviews/${this.props.productId}`
      )
      .then(data => {
        if (data.data.count > 0) {
          this.setState({ reviewData: data.data }, () => {
            this.setState({ renderedReviews: this.truncateReviews(8) });
          });
        }
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.productId != this.props.productId) {
      axios
        .get(
          `http://west-buy-drawers.us-east-2.elasticbeanstalk.com/reviews/${this.props.productId}`
        )
        .then(data => {
          if (data.data.count > 0) {
            this.setState({ reviewData: data.data }, () => {
              this.setState({ renderedReviews: this.truncateReviews(8) });
            });
          }
        });
    }
  }

  truncateReviews(num, r = this.state.reviewData.reviews) {
    let reviews = r.slice();
    return reviews.filter((review, index) => {
      return index < num;
    });
  }

  extendReviews() {
    //right now only checks for VP filter
    if (this.state.filters.vp) {
      this.setState({
        renderedReviews: this.truncateReviews(16, this.state.vpReviews),
        listExtended: true
      });
    } else {
      this.setState({
        renderedReviews: this.truncateReviews(16),
        listExtended: true
      });
    }
  }

  addFilter(filter) {}

  getVPReviews() {
    let vpReviews = this.state.reviewData.reviews.filter((review, index) => {
      return review.verified_purchase;
    });
    return vpReviews;
  }

  renderVPReviews() {
    let vpReviews = this.getVPReviews();
    let vpCount = vpReviews.length;
    this.setState(state => {
      let filters = { ...this.state.filters };
      filters.vp = true;
      return {
        renderedReviews: this.truncateReviews(8, vpReviews),
        vpReviews,
        vpCount,
        filters
      };
    });
  }

  removeFilter(filter) {
    //only works for verified filter right now because truncateReviews will always reset to initial 8 reviews as it is, with no filters
    let filters = { ...this.state.filters };
    filters[filter] = false;
    this.setState({ renderedReviews: this.truncateReviews(8), filters, listExtended: false});
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
            avgRating={this.state.reviewData.reviewSummaryData.average_rating}
            reviewCount={this.state.reviewData.count}
            label="Reviews"
          />
        </Card.Header>
        <Collapse in={this.state.open}>
          <Card.Body>
            <ReviewBody
              productId={this.props.productId}
              reviewSummaryData={this.state.reviewData.reviewSummaryData}
              reviewData={this.state.renderedReviews}
              filters={this.state.filters}
              vpCount={this.state.vpCount}
              extendReviews={this.extendReviews}
              renderVPReviews={this.renderVPReviews}
              removeFilter={this.removeFilter}
              extended={this.state.listExtended}
            />
          </Card.Body>
        </Collapse>
      </Card>
    );
  }
}

ReviewDrawer.propTypes = {
  productId: PropTypes.number
};
