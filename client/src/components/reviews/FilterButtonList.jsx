import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

const FilterButtonList = props => {
  let display = props.filtersAreActive ? "flex" : "none";
  let totalFilters = 0;

  if (props.vpFilter) {
    totalFilters++;
  }
  totalFilters += props.activeFilters.length;

  const removeVPFilter = () => {
    props.removeFilter("vp");
  }

  const removeRatingFilter = (e) => {
    props.toggleRatingFilter(e.target.value);
  }

  const restoreAllReviews = () => {
    props.restoreReviews();
  }


  return (
    <div className="active-filters" style={{ display: display }}>
      <strong>Filters: </strong>
      {props.vpFilter ? (
        <Button variant="outline-primary" onClick={removeVPFilter}>
          Verified Purchase<i class="fas fa-times btn-close-x"></i>
        </Button>
      ) : (
        <></>
      )}
      {props.activeFilters.map((filter, index) => (
        <Button variant="outline-primary" onClick={removeRatingFilter} value={filter} key={index}>
          {filter} Star<i class="fas fa-times btn-close-x"></i>
        </Button>
      ))}
      {totalFilters > 1 ? (
        <Button variant="link" id="clear-all-btn" onClick={restoreAllReviews}>
          Clear All
        </Button>
      ) : (
        <></>
      )}
    </div>
  );
};

FilterButtonList.propTypes = {
  vpFilter: PropTypes.bool,
  activeFilters: PropTypes.array,
  filtersAreActive: PropTypes.bool,
  removeFilter: PropTypes.func,
  toggleRatingFilter: PropTypes.func,
  restoreReviews: PropTypes.func
};

export default FilterButtonList;
