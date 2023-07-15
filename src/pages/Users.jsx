import React, { useState } from "react";
import HeaderPages from "../components/HeaderPages";
import UsersList from "../components/users/UsersList";
import User from "../components/users/UserInfo";

function Users() {

  const [userId, setUserId] = useState("");
  
  const changeId = (id) => {
    setUserId(id)
    console.log(userId);
  }

  return (
    <div className="flex flex-col gap-5">
      <HeaderPages title={"کاربران"} address={"کاربران"} />
      <div className="flex flex-col xl:flex-row items-start gap-6">
        <UsersList changeId={changeId}/>
        <User userId={userId}/>
      </div>
    </div>
  );
}

export default Users;
