import React from "react";
import './PropertyItem.css';

function PropertyItem(props){
  const styledProperty = {
    fontFamily: 'sans-serif',
    paddingTop: '50px',
  }
  return(
    <div style={styledProperty}>
      {props.image}
      <p>{props.description}</p>
    </div>
  );
}
export default PropertyItem;