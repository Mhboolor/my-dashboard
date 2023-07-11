import React from "react";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineBarChart,
  AiOutlineEye,
} from "react-icons/ai";

function Dashboard() {
  return (
    <div className="p-4">
      <div className="flex items-center font-medium text-xl text-gray-6 my-4">
        <p>داشبورد</p>
      </div>
      <div className="flex gap-6 flex-wrap">
        <div className="flex items-center justify-between bg-white shadow-sm flex-1 p-6 rounded-sm ">
          <div className="w-[70px] h-[70px] rounded-full border border-[#6658dd] bg-purple flex items-center justify-center"><AiOutlineHeart className="text-2xl text-purple"/></div>
          <div className="flex flex-col items-end gap-1">
            <p className="text-gray-5 text-2xl font-semibold">$58,947</p>
            <p className="text-sm text-gray-2">مجموع درآمد</p>
          </div>
        </div>
        <div className="flex items-center justify-between bg-white shadow-sm flex-1 p-6 rounded-sm ">
          <div className="w-[70px] h-[70px] rounded-full border border-[#1abc9c] bg-green flex items-center justify-center"><AiOutlineShoppingCart className="text-2xl text-green"/></div>
          <div className="flex flex-col items-end gap-1">
            <p className="text-gray-5 text-2xl font-semibold">127</p>
            <p className="text-sm text-gray-2">فروش امروز</p>
          </div>
        </div>
        <div className="flex items-center justify-between bg-white shadow-sm flex-1 p-6 rounded-sm ">
          <div className="w-[70px] h-[70px] rounded-full border border-[#4fc6e1] bg-blue flex items-center justify-center"><AiOutlineBarChart className="text-2xl text-blue"/></div>
          <div className="flex flex-col items-end gap-1">
            <p className="text-gray-5 text-2xl font-semibold">0.58%</p>
            <p className="text-sm text-gray-2">تبدیل</p>
          </div>
        </div>
        <div className="flex items-center justify-between bg-white shadow-sm flex-1 p-6 rounded-sm ">
          <div className="w-[70px] h-[70px] rounded-full border border-[#f7b84b] bg-orange flex items-center justify-center"><AiOutlineEye className="text-2xl text-orange"/></div>
          <div className="flex flex-col items-end gap-1">
            <p className="text-gray-5 text-2xl font-semibold">78.41k</p>
            <p className="text-sm text-gray-2">بازدیدهای امروز</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
