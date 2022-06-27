import React from "react";
import icon from "./../img/magnifyingglass.png"

function SearchBar(){
  return(
    <>
      <div>
        <input type="text" placeholder="Anywhere | Any week | Add guests"></input>
        <img src={icon} alt="mag glass" />
      </div>
    </>
  );
}
export default SearchBar;