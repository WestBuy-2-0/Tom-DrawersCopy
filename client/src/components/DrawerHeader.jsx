import React from "react";
import PropTypes from "prop-types";

const DrawerHeader = props => {
  const upCaretPath =
    "M31.7858,20.91949c0.35494-0.4731,0.25868-1.15101-0.21397-1.50645L16.81907,8.32973 c-0.47265-0.35519-1.24607-0.35424-1.71803,0.00219L0.42612,19.41498c-0.47191,0.35643-0.56652,1.03429-0.21009,1.5065 l1.95147,2.58456c0.35643,0.47216,1.03429,0.56652,1.5065,0.21008l11.43631-8.63729 c0.47216-0.35648,1.24532-0.35743,1.71803-0.00219l11.50777,8.64481c0.47265,0.35549,1.15056,0.25918,1.50555-0.21397 L31.7858,20.91949z";
  const downCaretPath =
    "M31.7858,11.08051c0.35494,0.4731,0.25868,1.15101-0.21397,1.50645L16.81907,23.67027 c-0.47265,0.35519-1.24607,0.35424-1.71803-0.00219L0.42612,12.58502c-0.47191-0.35643-0.56652-1.03429-0.21009-1.5065 L2.1675,8.49396C2.52393,8.02181,3.20179,7.92744,3.674,8.28388l11.43631,8.63729c0.47216,0.35648,1.24532,0.35743,1.71803,0.00219 l11.50777-8.6448c0.47265-0.35549,1.15056-0.25918,1.50555,0.21397L31.7858,11.08051z";
  const currentCaretPath = props.isOpen ? upCaretPath : downCaretPath;

  return (
    <>
      <span className="drawer-label">{props.label}</span>
      <span className="drawer-caret">
        <svg viewBox="0 0 32 32">
          <path className="caret" d={currentCaretPath}></path>
        </svg>
      </span>
    </>
  );
};

DrawerHeader.propTypes = {
  label: PropTypes.string,
  isOpen: PropTypes.bool
};

export default DrawerHeader;
