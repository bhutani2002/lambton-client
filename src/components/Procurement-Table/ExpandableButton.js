import React from "react";
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
export const ExpandableButton = ({ isOpen, toggle }) => {
  return (
    <button onClick={toggle}>
      <span
        class="material-symbols-outlined"
        style={{
          transform: `rotate(${isOpen ? 180 : 0}deg)`,
          transition: "all 0.25s",
        }}
      >
        {isOpen ?  <i className = "fa fa-angle-up"></i> : <i className = "fa fa-angle-down"></i>}
      </span>
      
    </button>
  );
};