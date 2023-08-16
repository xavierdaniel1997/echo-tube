import React from "react";

const FilterButtons = ({buttonName}) => {
  return (
    <div className="">
      <button className="bg-black text-white px-3 py-2 rounded-md shadow-md shadow-black">
        {buttonName}
      </button>
    </div>
  );
};

export default FilterButtons;
