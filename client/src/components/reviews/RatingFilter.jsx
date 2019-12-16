import React from "react";
import PropTypes from "prop-types";
import RatingBar from "./RatingBar.jsx";

// import styles from "./RatingFilter.css";

const RatingFilter = props => {
    return (
        <div className="rating-filter-container">
            <fieldset>
                {props.ratingCounts.map((tuple, index) => <RatingBar starRating={tuple[0]} ratingCount={tuple[1]} totalReviews={props.totalReviews} toggleRatingFilter={props.toggleRatingFilter} key={index} />)}
            </fieldset>
        </div>
    )
}

RatingFilter.propTypes = {
    totalReviews: PropTypes.number,
    ratingCounts: PropTypes.array,
    toggleRatingFilter: PropTypes.toggleRatingFilter
}

export default RatingFilter;