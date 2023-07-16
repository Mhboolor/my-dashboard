import React from "react";

function SearchBox({changeShow}) {
  return (
    <div className="flex flex-col items-start sm:items-center sm:flex-row justify-between gap-4">
      <div className="relative">
        <input
          type="text"
          placeholder="کاربر خود را جستجو کنید ..."
          className="border border-inp p-2 rounded-sm focus-visible:outline-none focus-visible:border-gray-4 group"
        />
      </div>
      <div>
        <button
          className="flex items-center gap-2 bg-red text-white rounded-sm px-3 py-2"
          onClick={changeShow}
        >
          افزودن کاربر
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
