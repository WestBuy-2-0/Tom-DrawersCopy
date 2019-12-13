import React from "react";
import PropTypes from "prop-types";

export default class ReviewFilterSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "MOST_RECENT"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ selected: e.currentTarget.value }, () => {
      console.log(this.state.selected);
    });
  }

  render() {
    return (
      <div className="review-filter-selector-container">
        <div className="reviews-sorting">
          <label className="sort-by-label" htmlFor="sort-options">
            Sort by
          </label>
          <select
            id="sort-options"
            value={this.state.selected}
            onChange={this.handleChange}
            className="sort-options"
          >
            <option selected value="MOST_RECENT">
              Most Recent
            </option>
            <option value="MOST_HELPFUL">Most Helpful</option>
            <option value="OLDEST">Oldest</option>
            <option value="HIGHEST_RATING">Highest Rating</option>
            <option value="LOWEST_RATING">Lowest Rating</option>
          </select>
        </div>
      </div>
    );
  }
}
