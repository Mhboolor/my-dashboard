import React from "react";
import { MdDelete } from "react-icons/md";

function BestUser() {
  return (
    <tr className="text-gray-2 text-sm ease-in-out duration-100 hover:bg-table-light">
      <td className="p-3">
        <img
          src="./images/users/user-2.jpg"
          alt=""
          className="rounded-full w-9 h-9"
          width={36}
          height={36}
        />
      </td>
      <td className="p-3">
        <p className="text-gray-5">هادی</p>
        <p className="text-xs">عضو از 2017</p>
      </td>
      <td className="p-3">
        <p>BTC</p>
      </td>
      <td className="p-3">
        <p>0.00816117 BTC</p>
      </td>
      <td className="p-3">
        <p>0.00097036 BTC</p>
      </td>
      <td className="p-3">
        <button className="text-lg flex items-center justify-center text-white bg-red rounded-sm px-2 py-1">
          <MdDelete />
        </button>
      </td>
    </tr>
  );
}

export default BestUser;
