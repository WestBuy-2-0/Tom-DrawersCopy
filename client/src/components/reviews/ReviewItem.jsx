import React from "react";
import PropTypes from "prop-types";
import $ from "jquery";
import Button from "react-bootstrap/Button";
import FeatureRatingBar from "./FeatureRatingBar.jsx";
import VerifiedPurchaseIcon from "./VerifiedPurchaseIcon.jsx";

// import styles from "./ReviewItem.css";

const ReviewItem = props => {
  const wouldRecommendText = props.reviewInfo.would_recommend
    ? "I would recommend this to a friend"
    : "";
  const wouldRecommendIcon = props.reviewInfo.would_recommend
    ? "inline-block"
    : "none";
  const starClasses = ` stars stars-small stars-small-${props.reviewInfo.rating}-0`;
  const submissionDate = new Date(props.reviewInfo.submission_date);
  const featuresDisplay = props.reviewInfo.rated_features ? "block" : "none";
  const helpfulId = `${props.reviewInfo.id}-helpful`;
  const unhelpfulId = `${props.reviewInfo.id}-unhelpful`;
  const thankyouId = `${props.reviewInfo.id}-thankyou`;

  const sayThankYou = () => {
    $(`#${helpfulId}`).css("display", "none");
    $(`#${unhelpfulId}`).css("display", "none");
    $(`#${thankyouId}`).css("display", "inline-block");
  }

  return (
    <li className="review-item">
      <div className="review-item-header">
        <div className="author-name">
          <a href="#">{props.reviewInfo.submitter}</a>
        </div>
        <div className="feature-ratings" style={{ display: featuresDisplay }}>
          <h4 className="feature-header">Features</h4>
          <div className="feature-rating-bars">
            <FeatureRatingBar
              feature="Quality"
              featureRating={props.reviewInfo.quality_rating}
            />
            <FeatureRatingBar
              feature="Value"
              featureRating={props.reviewInfo.value_rating}
            />
            <FeatureRatingBar
              feature="Ease of Use"
              featureRating={props.reviewInfo.ease_of_use_rating}
            />
          </div>
        </div>
      </div>
      <div className="review-item-body">
        <div className="review-heading">
          <i className={"review-rating" + starClasses}></i>
          <h4 className="review-title">{props.reviewInfo.title}</h4>
        </div>
        <div className="review-info">
          <VerifiedPurchaseIcon
            isVerified={props.reviewInfo.verified_purchase}
          />
          <span className="post-date">
            Posted {submissionDate.toLocaleDateString()}
          </span>
        </div>
        <div className="review-content">{props.reviewInfo.text}</div>
        <div className="recommendation">
          <i
            style={{ display: wouldRecommendIcon }}
            class="fas fa-check-circle"
          ></i>
          {wouldRecommendText}
        </div>
        <div className="feedback-options">
          <span className="helpfulness-feedback">
            <Button variant="outline-primary" className="helpful" id={helpfulId} onClick={sayThankYou}>
              Helpful ({props.reviewInfo.helpful_count})
            </Button>
            <span className="unhelpful" id={unhelpfulId} onClick={sayThankYou}>
              <a>Unhelpful ({props.reviewInfo.unhelpful_count})</a>
            </span>
            <span className="thankyou" id={thankyouId}>
            <i class="fas fa-check thankyou-checkmark"></i>
              Thanks for your feedback!
            </span>
          </span>
          <span className="feedback-spacer"></span>
          <span className="report">
            <a href="#">Report</a>
          </span>
          <span className="feedback-spacer"></span>
          <span className="post-comment">
            <a href="#">Post comment</a>
          </span>
        </div>
      </div>
    </li>
  );
};

ReviewItem.propTypes = {
  reviewInfo: PropTypes.object
};

export default ReviewItem;
