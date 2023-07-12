import React from "react";

function SearchBox() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:items-center items-start sm:justify-between text-gray-4">
      <div className="flex items-center gap-2">
        <label>مقدار</label>
        <select className="border border-inp px-1 rounded-sm focus-visible:outline-none focus-visible:border-gray-4">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <label>نمایش</label>
      </div>
      <div>
        <label htmlFor="search">جستجو : </label>
        <input
          type="text"
          id="search"
          className="border text-gray-6 border-inp px-1 rounded-sm focus-visible:outline-none focus-visible:border-gray-4"
        />
      </div>
    </div>
  );
}

export default SearchBox;