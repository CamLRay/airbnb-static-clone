import React from "react";
import PropertyItem from "./PropertyItem";
import './PropertyList.css'
import house from '../img/house.jpg'
const imageStyling = {
  width: '100%',
  borderRadius: '15px',
  boxSizing: ' border-box'
}
const propertyArray = [
  {description: "blah", image: <img style={imageStyling} src={house} alt="property" />},
  {description: "blah", image: <img style={imageStyling} src={house} alt="property" />},
  {description: "blah", image: <img style={imageStyling} src={house} alt="property" />},
  {description: "blah", image: <img style={imageStyling} src={house} alt="property" />},
  {description: "blah", image: <img style={imageStyling} src={house} alt="property" />},
  {description: "blah", image: <img style={imageStyling} src={house} alt="property" />},
  {description: "blah", image: <img style={imageStyling} src={house} alt="property" />},
  {description: "blah", image: <img style={imageStyling} src={house} alt="property" />},
  {description: "blah", image: <img style={imageStyling} src={house} alt="property" />},
  {description: "blah", image: <img style={imageStyling} src={house} alt="property" />},
  {description: "blah", image: <img style={imageStyling} src={house} alt="property" />},
  {description: "blah", image: <img style={imageStyling} src={house} alt="property" />},
  {description: "blah", image: <img style={imageStyling} src={house} alt="property" />},
  {description: "blah", image: <img style={imageStyling} src={house} alt="property" />},
  {description: "blah", image: <img style={imageStyling} src={house} alt="property" />},
  {description: "blah", image: <img style={imageStyling} src={house} alt="property" />}
];

const listStyling= {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridColumnGap: '10px',
  marginTop: '10px'
}

function PropertyList(){
  return(
    <div style={listStyling}>
      {propertyArray.map((item, index) => 
      <PropertyItem description = {item.description}
      image = {item.image}
      key = {index}
      />) }
    </div>
  );
}

export default PropertyList;