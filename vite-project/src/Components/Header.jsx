import React from "react";
import { FaSearch } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";

const Header = () => {
  return (
    <header className="header">
      <div className="inside-header">
        <div>
          <div>
            <FaSearch size={20} color="#797575" />
          </div>
          <div>
            <input type="text" placeholder="what would you like to eat?" />
          </div>
        </div>
        <div>
          <VscThreeBars size={20} color="#797575" />
        </div>
      </div>
    </header>
  );
};

export default Header;
