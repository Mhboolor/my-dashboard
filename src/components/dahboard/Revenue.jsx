import React from "react";
import { MdDelete } from "react-icons/md";
import { useDeleteRevenueHistoryMutation } from "../../api/apiSlice";

function Revenue({ id, name, date, pay, status }) {
  const [deleteRevenue] = useDeleteRevenueHistoryMutation();

  const deleteHandler = () => {
    deleteRevenue(id);
  };

  return (
    <tr className="text-gray-2 text-sm ease-in-out duration-100 hover:bg-table-light">
      <td className="p-3">
        <p className="text-gray-5">{name}</p>
      </td>
      <td className="p-3">
        <p>{date}</p>
      </td>
      <td className="p-3">
        <p>{pay}</p>
      </td>
      <td className="p-3">
        <span className={`text-warning rounded-sm p-1 text-xs ${status === 'معوق' ? 'bg-warning' : 'bg-green/100 text-white'}`}>
          {status}
        </span>
      </td>
      <td className="p-3">
        <button
          className="text-lg flex items-center justify-center text-black bg-light rounded-sm px-2 py-1"
          onClick={deleteHandler}
        >
          <MdDelete />
        </button>
      </td>
    </tr>
  );
}

export default Revenue;
