import React, { useEffect, useState } from "react";
import {
  MdMenu,
  MdDarkMode,
  MdSunny,
  MdArrowDropDown,
  MdArrowDropUp,
} from "react-icons/md";
import { Link } from "react-router-dom";

function Header({ changeMenuStatus , exitHandler}) {
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const darkQuery = window.matchMedia("(prefers-color-scheme : dark)");

  const changeShow = () => {
    setShow((prev) => !prev);
  };




  const changeTheme = () => {
    switch (theme) {
      case "dark":
        setTheme("light");
        break;
      case "light":
        setTheme("dark");
        break;
      default:
        break;
    }
  };

  const onWindowMatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if (e.matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <div className="flex items-center justify-between p-4 w-full md:px-10 bg-dark shadow-md shadow-white dark:bg-[#3c4752] dark:shadow">
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
      <div className="flex items-center gap-8 text-gray-1 relative group">
        <div className="flex items-center gap-2">
          <img
            src="./images/users/user.jpg"
            alt=""
            className="rounded-full w-8 h-8"
          />
          <button
            className="flex items-center text-sm font-meduim"
            onClick={changeShow}
          >
            بولوری <MdArrowDropDown className={show ? "hidden" : "block"} />
            <MdArrowDropUp className={show ? "block" : "hidden"} />
          </button>
        </div>
        <div className="text-2xl">
          <button onClick={changeTheme}>
            {theme === "dark" ? <MdDarkMode /> : <MdSunny />}
          </button>
        </div>
        <ul
          className={`absolute bg-white text-gray-4 text-sm flex-col items-start w-full right-0 top-12 shadow-md rounded-md pt-2 z-30 ${
            show ? "flex" : "hidden"
          }`}
        >
          <li className="text-gray-5 text-xs px-5 py-2 w-full">خوش آمدی !</li>
          <li className="w-full">
            <Link to="/profile" className="px-5 py-2 flex" onClick={changeShow}>
              حساب من
            </Link>
          </li>
          <li className="w-full border-t">
            <Link to="/register" className="px-5 py-2 flex" onClick={exitHandler}>
              خروج
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
