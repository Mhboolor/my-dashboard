import React from "react";
import {MdDelete , MdEdit} from "react-icons/md"

function User() {
  return (
    <tr className="hover:bg-light">
      <td className="flex items-center gap-2 px-3 py-5">
        <img
          src="./images/users/user-1.jpg"
          alt="user"
          className="w-6 h-6 rounded-full"
        />
        <span>پل جی فرند</span>
      </td>
      <td>937-330-1634</td>
      <td className="p-3">pauljfrnd@jourrapide.com</td>
      <td className="p-3">پل جی فرند</td>
      <td className="p-3">07/07/2018 </td>
      <td>
        <button className="mx-1 text-base"><MdEdit/></button>
        <button className="mx-1 text-base"><MdDelete/></button>
      </td>
    </tr>
  );
}

export default User;
