import React from "react";
import SearchBox from "./SearchBox";
import User from "./User";

function UsersList() {
  return (
    <div className="p-6 bg-white rounded-sm shadow-sm flex flex-col gap-5 flex-1 w-full">
      <SearchBox />
      <div className="w-full overflow-x-scroll md:overflow-auto">
        <table className="text-sm text-gray-4 text-justify w-[900px] md:w-full">
          <thead className="border-b">
            <tr>
              <th className="p-3">اطلاعات پایه</th>
              <th className="p-3">تلفن</th>
              <th className="p-3">پست الکترونیک </th>
              <th className="p-3">شرکت </th>
              <th className="p-3">تاریخ ایجاد شده </th>
              <th className="p-3">عمل</th>
            </tr>
          </thead>
          <tbody className=" divide-y">
            <User />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersList;