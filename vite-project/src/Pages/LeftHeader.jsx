import React from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { FaBook } from "react-icons/fa";

const LeftHeader = () => {
  return (
    <div className="left-header">
      <AiOutlineAlignLeft size={20} color="#000000" />
      <BsFillSuitHeartFill size={20} color="#000000" />
      <IoHome size={20} color="#000000" />
      <FaBook size={20} color="#000000" />
    </div>
  );
};

export default LeftHeader;
