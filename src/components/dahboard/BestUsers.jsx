import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import BestUser from "./BestUser";
import { useGetBestUsersQuery } from "../../api/apiSlice";
import Loading from "../Loading"

function BestUsers() {

  const {data : users , isLoading , isSuccess , isError} = useGetBestUsersQuery();


  return (
    <div className="bg-white dark:bg-[#36404a] shadow-sm rounded-sm p-6 flex flex-col gap-5 flex-1 w-full h-full overflow-hidden">
      <div className="flex items-center justify-between dark:text-[#acbfd2]">
        <p>5 کاربر برتر</p>
        <button>
          <BsThreeDotsVertical />
        </button>
      </div>
      <div className="w-full overflow-x-scroll lg:overflow-auto">
        <table className="rounded-sm w-[640px] sm:w-full">
          <thead className="bg-table-light dark:bg-[#3e4954] text-sm text-gray-5 dark:text-white font-bold text-justify">
            <tr>
              <th className="p-3" colSpan="2">
                پروفایل
              </th>
              <th className="p-3">واحد پولی</th>
              <th className="p-3">دارایی</th>
              <th className="p-3">میزان سفارش </th>
              <th className="p-3">فعال</th>
            </tr>
          </thead>
          <tbody>
            {
              isError ? (
                <p>خطا در هنگام دریافت اطلاعات از سرور</p>
              ) : isLoading ? (
                <Loading/>
              ) : isSuccess ? (
                users.map(user => (
                  <BestUser {...user} key={user.id}/>
                ))
              ) : null
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BestUsers;
