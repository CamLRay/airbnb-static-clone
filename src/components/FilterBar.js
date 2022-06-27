import React from "react";
import FilterItem from "./FilterItem";

const filterItemArray = [
  {name: "Lakefront"},
  {name: "National Parks"},
  {name: "Cabins"},
  {name: "Beach"},
  {name: "Camping"},
  {name: "Country Side"}
];
const container = {
  width: '100%',
  filter: 'drop-shadow(1px 1px 1px grey)',
  position: 'fixed',
  top:'10vmin',
  left: '0',
  backgroundColor: 'white'
}
const filterBarStyle ={
  display: 'flex',
  padding: '1px',
  justifyContent: 'space-around'
}
function FilterBar(){
  return(
    <div style={container}>
      <div style = {filterBarStyle}>
      {filterItemArray.map((item, index) =>
        <FilterItem name = {item.name}
        key = {index}/>
      )}
      </div>
    </div>
  );
}

export default FilterBar;