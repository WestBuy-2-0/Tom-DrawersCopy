import React from "react";
import PropTypes from "prop-types";
import RatingBar from "./RatingBar.jsx";

export default class RatingFilter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    };

    render () {
        return (
            <div className="rating-filter-container">
                <fieldset>
                    {this.props.ratingCounts.map((tuple, index) => <RatingBar starRating={tuple[0]} ratingCount={tuple[1]} totalReviews={this.props.totalReviews} key={index} />)}
                </fieldset>
            </div>
        )
    }
};

RatingFilter.propTypes = {
    totalReviews: PropTypes.number,
    ratingCounts: PropTypes.array
}