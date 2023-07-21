import React from "react";
import { MdOutlineHomeWork } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { useGetUserQuery } from "../../api/apiSlice";
import Loading from "../Loading";

function UserInfo({userId}) {

  const {data : user , isError , isLoading , isSuccess} = useGetUserQuery(userId)
  

  return (
    <div className="bg-white dark:bg-[#36404a] shadow-sm rounded-sm p-6 flex flex-col gap-6 text-gray-2 text-sm flex-1 w-full xl:max-w-[520px] relative">
      <div className={`w-full h-full absolute z-10 top-0 left-0 backdrop-blur-sm bg-white/30 ${userId && 'hidden'}`}></div>
      {
        isError ? (
          <p>کاربری وجود ندارد</p>
        ) : isLoading ? (
          <Loading/>
        ) : isSuccess ? (
          <>
            <div className="flex items-start gap-5 md:flex-col md:justify-center md:items-center">
              <div>
                <img
                  src={user.image}
                  alt="UserImage"
                  className="w-[72px] h-[72px] rounded-full"
                />
              </div>
              <div className="md:text-center flex flex-col gap-2">
                <p className="text-gray-5 text-base font-semibold dark:text-[#acbfd2]">{user.name}</p>
                <p>{user.job}</p>
                <p className="flex itmes-center gap-2 md:justify-center">
                  <MdOutlineHomeWork />
                  شرکت : {user.company}
                </p>
                <div className="flex items-center flex-wrap gap-2">
                  <button className="rounded-md duration-150 ease-in-out border px-2 py-1 hover:text-green hover:border-green">ایمیل بفرست</button>
                  <button className="rounded-md duration-150 ease-in-out border px-2 py-1 hover:text-green hover:border-green">صدا زدن</button>
                  <button className="rounded-md duration-150 ease-in-out border px-2 py-1 hover:text-green hover:border-green">ویرایش</button>
                </div>
              </div>
            </div>
            <div className="flex items-center w-full bg-light dark:bg-[rgb(66_78_90)] gap-2 rounded-sm py-2 px-3 text-gray-5 dark:text-[#acbfd2] text-base">
              <FaCircleUser />
              اطلاعات شخصی
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs dark:text-[#8c98a5]">درمورد من:</p>
              <p className="text-gray-4 dark:text-[#94a0ad]">{user.caption}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs dark:text-[#8c98a5]">تاریخ تولد :</p>
              <p className="text-gray-4 dark:text-[#94a0ad]">{user.birthday}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs dark:text-[#8c98a5]">شرکت:</p>
              <p className="text-gray-4 dark:text-[#94a0ad]">{user.company}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs dark:text-[#8c98a5]">اضافه :</p>
              <p className="text-gray-4 dark:text-[#94a0ad]">{user.data}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs dark:text-[#8c98a5]">به روز شده:</p>
              <p className="text-gray-4 dark:text-[#94a0ad]">{user.update}</p>
            </div>
          </>
        ) : null
      }
    </div>
  );
}

export default UserInfo;


