import React from "react";
import { IoLocationSharp } from "react-icons/io5";

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
        <span>home</span>
        <span>my-orders</span>
        <input type="text" placeholder="search your item" />
      </div>
      <div className="header-options"></div>
    </header>
  );
};

export default Header;
