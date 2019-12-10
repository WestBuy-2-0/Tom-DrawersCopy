import React from "react";
import PropTypes from "prop-types";

import styles from "./OneIncludedItem.css";

const OneIncludedItem = props => {
  return (
    <li className="whats-included-list-item body-copy">
      <strong>{props.includedItem}</strong>
    </li>
  );
};

OneIncludedItem.propTypes = {
  includedItem: PropTypes.string
};

export default OneIncludedItem;
