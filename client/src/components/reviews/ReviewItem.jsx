import React from "react";
import PropTypes from "prop-types";

import styles from "./ReviewItem.css";

const ReviewItem = props => {
  const wouldRecommendText = props.reviewInfo.would_recommend
    ? "I would recommend this to a friend"
    : "";

  const wouldRecommendIcon = props.reviewInfo.would_recommend
    ? "inline-block"
    : "none";

  const starClasses = ` stars stars-small stars-small-${props.reviewInfo.rating}-0`;

  const submissionDate = props.reviewInfo.submission_date;

  const bodyText = props.reviewInfo.text;

  return (
    <li className="review-item">
      <div className="review-item-header">
        <div className="review-author-container">AuthorName</div>
        <div className="feature-ratings">
          <h4 className="feature-header">Features</h4>
          <div className="feature-rating-bars">
            <div className="quality-rating-group">
              <div className="rating-description">Quality</div>
            </div>
            <div className="value-rating-group">
              <div className="rating-description">Value</div>
            </div>
            <div className="ease-of-use-rating-group">
              <div className="rating-description">Ease of Use</div>
            </div>
          </div>
        </div>
      </div>
      <div className="review-item-body">
        <div className="review-heading">
          <i className={"review-rating" + starClasses}></i>
          <h4 className="review-title">{props.reviewInfo.title}</h4>
        </div>
        <div className="review-info">
          <span className="verified-purchase">
            <i class="far fa-check-circle"></i>
            Verified Purchase
          </span>
          <span className="review-info-divider">|</span>
          <span className="post-date">
            Posted {submissionDate.toLocaleString()}
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
          <span className="helpful">
            <a href="#">Helpful ({props.reviewInfo.helpful_count})</a>
          </span>
          <span className="feedback-spacer"></span>
          <span className="unhelpful">
            <a href="#">Unhelpful ({props.reviewInfo.unhelpful_count})</a>
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
