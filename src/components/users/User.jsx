import React from "react";
import {MdDelete} from "react-icons/md"

function User({id , image , name , phone , email , company , date , changeId}) {
  return (
    <tr className="hover:bg-light" onClick={() => changeId(id)}>
      <td className="flex items-center gap-2 px-3 py-5">
        <img
          src={image}
          alt="user"
          className="w-6 h-6 rounded-full"
        />
        <span>{name}</span>
      </td>
      <td>{phone}</td>
      <td className="p-3">{email}</td>
      <td className="p-3">{company}</td>
      <td className="p-3">{date}</td>
      <td>
        <button className="mx-1 text-base"><MdDelete/></button>
      </td>
    </tr>
  );
}

export default User;
