import React from "react";
import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdProductionQuantityLimits,
  MdOutlineSpeakerNotes,
} from "react-icons/md";
import { FaUsers } from "react-icons/fa6";

function Sidebar() {
  return (
    <div className="w-fuul h-full p-5 text-gray-3">
      <p className="text-xs">فهرست</p>
      <ul className="flex flex-col text-base gap-2">
        <NavLink
          to={"/"}
          className={
            "w-full hover:text-[#00acc1] py-3 px-5 flex items-center gap-2 ease-in-out duration-200"
          }
        >
          <MdDashboard />
          داشبود
        </NavLink>
        <p className="text-xs">محصولات</p>

        <NavLink
          to={"/products"}
          className={
            "w-full hover:text-[#00acc1] py-3 px-5 flex items-center gap-2 ease-in-out duration-200"
          }
        >
          <MdProductionQuantityLimits />
          محصولات
        </NavLink>
        <p className="text-xs">کاربران</p>

        <NavLink
          to={"/users"}
          className={
            "w-full hover:text-[#00acc1] py-3 px-5 flex items-center gap-2 ease-in-out duration-200"
          }
        >
          <FaUsers />
          کاربران
        </NavLink>
        <p className="text-xs">تیکت ها</p>

        <NavLink
          to={"/tikets"}
          className={
            "w-full hover:text-[#00acc1] py-3 px-5 flex items-center gap-2 ease-in-out duration-200"
          }
        >
          <MdOutlineSpeakerNotes />
          تیکت ها
        </NavLink>
      </ul>
    </div>
  );
}

export default Sidebar;
