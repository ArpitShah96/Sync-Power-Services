import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const LearnMore = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <NavLink to="/about">
        <h5 className=" font-16px text-orange-400 font-light font-md">
          learn more{" "}
        </h5>
      </NavLink>
      <FaLongArrowAltRight color="rgb(249 115 22)" />
    </div>
  );
};

export default LearnMore;
 