import React from "react";
import { MdOutlineHomeWork } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";

function UserInfo() {
  return (
    <div className="bg-white shadow-sm rounded-sm p-6 flex flex-col gap-6 text-gray-2 text-sm flex-1 w-full xl:max-w-[520px]">
      <div className="flex items-start gap-5 md:flex-col md:justify-center md:items-center">
        <div>
          <img
            src="./images/users/user-1.jpg"
            alt="UserImage"
            className="w-[72px] h-[72px] rounded-full"
          />
        </div>
        <div className="md:text-center">
          <p className="text-gray-5 text-base font-semibold">حنا</p>
          <p>مدیر شعبه</p>
          <p className="flex itmes-center gap-2 md:justify-center">
            <MdOutlineHomeWork />
            شرکت Vine{" "}
          </p>
          <div className="flex items-center flex-wrap">
            <button>ایمیل بفرست</button>
            <button>صدا زدن</button>
            <button>ویرایش</button>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full bg-light gap-2 rounded-sm py-2 px-3 text-gray-5 text-base">
        <FaCircleUser />
        اطلاعات شخصی
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xs">درمورد من:</p>
        <p className="text-gray-4">سلام من جاناتن دیو هستم ، از آن زمان به بعد ، متن ساختگی استاندارد صنعت بوده است دهه 1500 ، هنگامی که یک چاپگر ناشناخته از نوع خاصی استفاده کرد.</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xs">تاریخ تولد :</p>
        <p className="text-gray-4">March 23, 1984 (34 Years)</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xs">شرکت:</p>
        <p className="text-gray-4">Vine Corporation</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xs">اضافه :</p>
        <p className="text-gray-4">April 22, 2016</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xs">به روز شده:</p>
        <p className="text-gray-4">Dec 13, 2017</p>
      </div>
    </div>
  );
}

export default UserInfo;
