import React from "react";
import PropTypes from "prop-types";
import ReviewSummary from "./ReviewSummary.jsx";
import ReviewList from "./ReviewList.jsx";
import VerifiedPurchaseFilter from "./VerifiedPurchaseFilter.jsx";
import ReviewFilterSelector from "./ReviewFilterSelector.jsx";

import "../../assets/styles/ReviewBody.scss";

const ReviewBody = props => {
  console.log("In reviewBody, this is vpCount: ", props.vpCount);
  return (
    <div className="drawer-content" id="review-drawer-content">
      <ReviewSummary reviewSummaryData={props.reviewSummaryData} toggleRatingFilter={props.toggleRatingFilter} ratingFiltersActive={props.ratingFiltersActive} />
      <div className="review-filters-container">
        <VerifiedPurchaseFilter
          renderVPReviews={props.renderVPReviews}
          removeFilter={props.removeFilter}
        />
        <ReviewFilterSelector />
      </div>
      <ReviewList
        productId={props.productId}
        reviewData={props.reviewData}
        totalReviews={props.reviewSummaryData.review_count}
        vpCount={props.vpCount}
        extendReviews={props.extendReviews}
        filters={props.filters}
        extended={props.extended}
        ratingFiltersActive={props.ratingFiltersActive}
        filteredCount={props.filteredCount}
        activeFilters={props.activeFilters}
        removeFilter={props.removeFilter}
        toggleRatingFilter={props.toggleRatingFilter}
        restoreReviews={props.restoreReviews}
      />
    </div>
  );
};

ReviewBody.propTypes = {
  productId: PropTypes.number,
  reviewSummaryData: PropTypes.object,
  reviewData: PropTypes.array,
  extendReviews: PropTypes.func,
  renderVPReviews: PropTypes.func,
  filters: PropTypes.object,
  vpCount: PropTypes.number,
  removeFilter: PropTypes.func,
  extended: PropTypes.bool,
  toggleRatingFilter: PropTypes.func,
  ratingFiltersActive: PropTypes.bool,
  filteredCount: PropTypes.number,
  activeFilters: PropTypes.object,
  restoreReviews: PropTypes.func
};

export default ReviewBody;
