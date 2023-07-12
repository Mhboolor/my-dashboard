import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import BestUser from "./BestUser";
import { useDeleteBestUserMutation, useGetBestUsersQuery } from "../../api/apiSlice";

function BestUsers() {

  const {data : bestUsers , isLoading , isError} = useGetBestUsersQuery();

  const [deleteUser, response] = useDeleteBestUserMutation()

  return (
    <div className="bg-white shadow-sm rounded-sm p-6 flex flex-col gap-5 flex-1 w-full h-full overflow-hidden">
      <div className="flex items-center justify-between">
        <p>5 کاربر برتر</p>
        <button>
          <BsThreeDotsVertical />
        </button>
      </div>
      <div className="w-full overflow-x-scroll lg:overflow-auto">
        <table className="rounded-sm w-[640px] sm:w-full">
          <thead className="bg-table-light text-sm text-gray-5 font-bold text-justify">
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
            {isLoading && <tr><td>Loading</td></tr>}
            {bestUsers && bestUsers.map(user => (<BestUser {...user} key={user.id} deleteUser={deleteUser}/>))}
            {isError && <tr><td>Error</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BestUsers;
