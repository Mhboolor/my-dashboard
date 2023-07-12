import React from "react";
import { MdMenu, MdDarkMode, MdSunny, MdArrowDropDown } from "react-icons/md";

function Header({changeMenuStatus}) {
  return (
    <div className="flex items-center justify-between p-4 w-full md:px-10 bg-dark shadow-md shadow-white">
      <div className="flex items-center gap-8">
        <img
          src="./images/logo-light.png"
          alt=""
          className="hidden md:flex w-[100px] h-5"
        />
        <img src="./images/logo-sm.png" alt="" className="md:hidden h-6 w-6" />
        <div className="flex items-center justify-center lg:hidden text-2xl text-white">
          <button className="bg-transparent" onClick={changeMenuStatus}>
            <MdMenu />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-8 text-gray-1 relative">
        <div className="flex items-center gap-2">
          <img
            src="./images/users/user-1.jpg"
            alt=""
            className="rounded-full w-8 h-8"
          />
          <button className="flex items-center text-sm font-meduim">
            زهرا <MdArrowDropDown />
          </button>
        </div>
        <div className="text-2xl">
          <MdDarkMode />
          <MdSunny className="hidden" />
        </div>
        <ul className="absolute bg-white text-gray-4 text-sm flex-col items-start w-full right-0 top-12 shadow-md rounded-md pt-2 hidden">
          <li className="text-gray-5 text-xs px-5 py-2 w-full">خوش آمدی !</li>
          <li className="w-full">
            <a href="/" className="px-5 py-2 flex">
              حساب من
            </a>
          </li>
          <li className="w-full border-t">
            <a href="/" className="px-5 py-2 flex">
              خروج
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
