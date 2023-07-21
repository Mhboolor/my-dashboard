import React from "react";
import { MdDelete } from "react-icons/md";
import { useDeleteTiketMutation } from "../../api/apiSlice";

function Tiket({id , image , name , subject , priority , status , date , exp}) {

  const [deleteTiket] = useDeleteTiketMutation();

  const deleteHandler = () => {
    deleteTiket(id)
  }

  return (
    <tr className="hover:bg-light hover:dark:bg-[#3b4651] dark:text-[#94a0ad]">
      <td className="p-3">{id}</td>
      <td className="flex items-center gap-2 px-3 py-5">
        <img
          src={image}
          alt="user"
          className="w-6 h-6 rounded-full"
        />
        <span>{name}</span>
      </td>
      <td>{subject}</td>
      <td className="p-3">
        <span className="bg-red/100 text-xs py-1 px-2 rounded-md text-white">
          {priority}
        </span>
      </td>
      <td className="p-3">
        <span className="bg-green/100 text-xs py-1 px-2 rounded-md text-white">
          {status}
        </span>
      </td>
      <td className="p-3">{date} </td>
      <td className="p-3">{exp}</td>
      <td className="p-3">
        <button className="bg-light p-3 dark:bg-[#424e5a] dark:text-white" onClick={deleteHandler}>
          <MdDelete />
        </button>
      </td>
    </tr>
  );
}

export default Tiket;
