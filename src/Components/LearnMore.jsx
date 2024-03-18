import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const LearnMore = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <h5 className=" font-['open_sans'] text-orange-400 font-light font-md">
        learn more{" "}
      </h5>
      <FaLongArrowAltRight color="rgb(249 115 22)" />
    </div>
  );
};

export default LearnMore;
