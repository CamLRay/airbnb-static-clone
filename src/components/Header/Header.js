import React from "react";
import logo from "../../img/airbnblogo.png";
import SearchBar from "../SearchBar";
import UserGroup from "../UserGroup";
import './Header.css';
const headerStyle = {
  display: 'flex',
  padding: "10px",
  justifyContent: 'space-between',
  borderBottom: '1px solid #d6dce2',
  position: 'fixed',
  width: '100%',
  marginTop: '-10px',
  backgroundColor: 'white'
}
function Header(){
    return(
    <div style={headerStyle}>
      <img src={logo} alt="airbnb logo" />
      <SearchBar />
      <UserGroup />
    </div>
    );
}

export default Header;