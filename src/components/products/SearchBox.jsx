import React from "react";
import { MdAddCircle } from "react-icons/md";

function SearchBox({ showAddModal , searchProduct , query}) {
  return (
    <div className="bg-white shadow-sm rounded-sm p-6 flex items-center flex-col md:flex-row justify-between gap-5 dark:bg-[#36404a]">
      <div className="flex items-center flex-wrap gap-6">
        <div>
          <input
            type="text"
            placeholder="محصول خود را جستجو کنید ..."
            className="border border-inp p-2 rounded-sm focus-visible:outline-none focus-visible:border-gray-4 dark:bg-[#3b4651] dark:border-[#424e5a] dark:text-[#94a0ad]" 
            value={query}
            onChange={e => searchProduct(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button
          className="flex items-center gap-2 bg-red text-white rounded-sm px-3 py-2"
          onClick={showAddModal}
        >
          <MdAddCircle />
          اضافه کردن محصول
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
