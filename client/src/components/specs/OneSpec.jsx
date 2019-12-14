import React from "react";
import PropTypes, { string } from "prop-types";
import $ from "jquery";

// import styles from "./OneSpec.css";

const OneSpec = props => {
  
const iconDisplay = props.specData.has_more_info
  ? "inline-block"
  : "none";
const iconCircleId = `${props.specData.spec_id}-info-icon-circle`;
const iconTextId = `${props.specData.spec_id}-info-icon-text`;
const modalId = `${props.specData.spec_id}-modal`;

const highlightIcon = () => {
    $(`#${iconTextId}`).addClass("focus");
    $(`#${iconCircleId}`).addClass("focus");
  }

  const resetIcon = () => {
    $(`#${iconTextId}`).removeClass("focus");
    $(`#${iconCircleId}`).removeClass("focus");
  }

  const openModal = (e) => {
    e.stopPropagation();
    $(`#${modalId}`).addClass("open");
  }

  const closeModal = (e) => {
    e.stopPropagation();
    $(`#${modalId}`).removeClass("open");
  }

    return (
      <tr>
        <td className="spec-name">
          <span className="spec-name-text">
            {props.specData.spec_name}
          </span>
          <span
            className="info-icon"
            onMouseEnter={highlightIcon}
            onMouseLeave={resetIcon}
            onClick={openModal}
            style={{ display: iconDisplay }}
          >
            <svg viewBox="0 0 32 32">
              <path
                className="info-i-circle"
                id={iconCircleId}
                d="M26.2581987,5.74210906 L26.2581401,5.74205043 C20.6025532,0.0861463808 11.3972359,0.0861463808 5.74161017,5.74208017 C0.0862168925,11.3974735 0.086023201,20.6028332 5.74157023,26.2584799 C11.3971764,31.9136602 20.6033604,31.9136602 26.2584809,26.2585487 C31.9139957,20.6027259 31.9137711,11.3973734 26.2581987,5.74210906 Z"
              ></path>
              <g
                className="info-i-text"
                id={iconTextId}
                transform="translate(13, 5)"
              >
                <path d="M2.99909,0.22944 C1.47071,0.22944 0.28873,1.43911 0.28873,2.82365 C0.28873,4.23691 1.47072,5.42016 2.99909,5.42016 C4.49875,5.42016 5.71106,4.29447 5.71106,2.82365 C5.71106,1.38236 4.49874,0.22944 2.99909,0.22944 Z"></path>
                <rect
                  x="0.63385"
                  y="7.40948"
                  width="4.73013"
                  height="14.36168"
                ></rect>
              </g>
            </svg>
          </span>
          <div className="more-info-modal" id={modalId}>
            {/* <div className="modal-background"></div> */}
            <div className="modal-content" onClick={closeModal}>
              <div className="modal-container">
                <div className="modal-box">
                  <div className="modal-copy">
                    <div className="modal-title">
                      {props.specData.spec_name}
                    </div>
                    <div className="modal-description">
                      {props.specData.more_info_text}
                    </div>
                  </div>
                  <button className="close-modal" onClick={closeModal}>
                    x
                  </button>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td className="spec-value">{props.specData.spec_value}</td>
      </tr>
    );
  };

OneSpec.propTypes = {
  specData: PropTypes.object
};

export default OneSpec;
