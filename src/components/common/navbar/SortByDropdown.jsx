import React from "react";
import { cn } from "../../library/utilities/cn";

export const SortByDropdown = ({className}) => {
  return (
    <div className={cn("justify-center items-center gap-1 bg-white rounded-md px-2 border-2 hover:border-gray-400", className)}>
      <label htmlFor="select" className="text-gray-700 text-t12 ">
        Sort By:
      </label>
      <select
        id="select"
        className=" text-gray-900 text-sm cursor-pointer p-2 outline-none appearance-none text-t12"
      >
        <option value="name">Name</option>
        <option value="date">Date modified</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
};
