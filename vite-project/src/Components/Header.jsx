import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h4>
          <IoLocationSharp color="orange" size={31} className="io-logo" />
          wigy
        </h4>
      </div>
      <div className="header-content">
        <NavLink to="/*">
          <span>home</span>
        </NavLink>
        <NavLink to="/myorders">
          <span>my-orders</span>
        </NavLink>
        <input type="text" placeholder="search your item" />
      </div>
      <div className="header-options"></div>
    </header>
  );
};

export default Header;
