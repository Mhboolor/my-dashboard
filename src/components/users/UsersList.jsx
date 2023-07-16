import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import User from "./User";
import { useGetAllUsersQuery } from "../../api/apiSlice";
import Loading from "../Loading";

function UsersList({ changeId, changeShow }) {
  const { data: users, isLoading, isError, isSuccess } = useGetAllUsersQuery();

  const [query, setQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const searchUser = (e) => {
    setQuery(e);
    const searchedUsers = users.filter((user) =>
      user.name.toLowerCase().includes(e.toLowerCase())
    );
    setFilteredUsers(searchedUsers);
  };

  useEffect(() => {
    setFilteredUsers(users || []);
  }, []);

  return (
    <div className="p-6 bg-white rounded-sm shadow-sm flex flex-col gap-5 flex-1 w-full">
      <SearchBox
        changeShow={changeShow}
        query={query}
        searchUser={searchUser}
      />
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
            {isError ? (
              <p>خطا در هنگام دریافت اطلاعات از سرور</p>
            ) : isLoading ? (
              <Loading />
            ) : isSuccess ? (
              filteredUsers.length ? (
                filteredUsers.map((user) => (
                  <User {...user} key={user.id} changeId={changeId} />
                ))
              ) : (
                users.map((user) => (
                  <User {...user} key={user.id} changeId={changeId} />
                ))
              )
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersList;
