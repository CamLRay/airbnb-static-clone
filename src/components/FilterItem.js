import React from "react";
import PropTypes from "prop-types";

function FilterItem(props){
  return(
    <button className="btn">{props.name}</button>
  );
}

export default FilterItem;

FilterItem.propTypes= {
  name: PropTypes.string
};