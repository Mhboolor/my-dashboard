import React from "react";

function SearchBox({changeShow , searchUser , query}) {
  return (
    <div className="flex flex-col items-start sm:items-center sm:flex-row justify-between gap-4">
      <div className="relative">
        <input
          type="text"
          placeholder="کاربر خود را جستجو کنید ..."
          className="border border-inp p-2 rounded-sm focus-visible:outline-none focus-visible:border-gray-4 dark:bg-[#3b4651] dark:border-[#424e5a] dark:text-[#94a0ad]"
          value={query}
          onChange={e => searchUser(e.target.value)}
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
