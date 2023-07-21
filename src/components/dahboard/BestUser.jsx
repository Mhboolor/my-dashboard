import React from "react";
import { MdDelete } from "react-icons/md";
import { useDeleteBestUserMutation } from "../../api/apiSlice";

function BestUser({id , image , name , date , property , order , currency}) {

  const [deleteUser] = useDeleteBestUserMutation();

  const deleteUserHandler = () => {
    deleteUser(id)
  }

  return (
    <tr className="text-gray-2 dark:text-[#94a0ad] text-sm ease-in-out duration-100 hover:bg-table-light hover:dark:bg-[#3b4651]">
      <td className="p-3">
        <img
          src={image}
          alt=""
          className="rounded-full w-9 h-9"
          width={36}
          height={36}
        />
      </td>
      <td className="p-3">
        <p className="text-gray-5 dark:text-[#acbfd2]">{name}</p>
        <p className="text-xs">{date}</p>
      </td>
      <td className="p-3">
        <p>{property}</p>
      </td>
      <td className="p-3">
        <p>{order}</p>
      </td>
      <td className="p-3">
        <p>{currency}</p>
      </td>
      <td className="p-3">
        <button className="text-lg flex items-center justify-center text-white bg-red rounded-sm px-2 py-1" onClick={deleteUserHandler}>
          <MdDelete />
        </button>
      </td>
    </tr>
  );
}

export default BestUser;
