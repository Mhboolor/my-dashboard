import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdEdit } from "react-icons/md";

function RevenueHistory() {
  return (
    <div className="bg-white shadow-sm rounded-sm p-6 flex flex-col gap-5 flex-1 w-full h-full overflow-hidden">
      <div className="flex items-center justify-between">
        <p>سابقه درآمد</p>
        <button>
          <BsThreeDotsVertical />
        </button>
      </div>
      <div className="w-full overflow-x-scroll lg:overflow-auto">
        <table className="rounded-sm w-[640px] sm:w-full">
          <thead className="bg-table-light text-sm text-gray-5 font-bold text-justify">
            <tr>
              <th className="p-3">بازارها</th>
              <th className="p-3">تاریخ</th>
              <th className="p-3">پرداخت ها</th>
              <th className="p-3">وضعیت</th>
              <th className="p-3">ویرایش</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-2 text-sm ease-in-out duration-100 hover:bg-table-light">
              <td className="p-3">
                <p className="text-gray-5">تم مارکت</p>
              </td>
              <td className="p-3">
                <p>Oct 15, 2018</p>
              </td>
              <td className="p-3">
                <p>$5848.68</p>
              </td>
              <td className="p-3">
                <span className="bg-warning text-warning rounded-sm p-1 text-xs">پیش رو</span>
              </td>
              <td className="p-3">
                <button className="text-lg flex items-center justify-center text-black bg-light rounded-sm px-2 py-1">
                  <MdEdit />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RevenueHistory;
