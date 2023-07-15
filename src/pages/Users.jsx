import React, { useState } from "react";
import HeaderPages from "../components/HeaderPages";
import UsersList from "../components/users/UsersList";
import User from "../components/users/UserInfo";
import AddUser from "../components/users/AddUser";

function Users() {
  const [showAdd, setShowAdd] = useState(false);
  const [userId, setUserId] = useState("");

  const changeId = (id) => {
    setUserId(id);
    console.log(userId);
  };
  const changeShow = () => {
    setShowAdd((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-5">
      <HeaderPages title={"کاربران"} address={"کاربران"} />
      <div className="flex flex-col xl:flex-row items-start gap-6">
        <UsersList changeId={changeId} changeShow={changeShow} />
        <User userId={userId} />
      </div>
      {showAdd && <AddUser changeShow={changeShow}/>}
    </div>
  );
}

export default Users;
