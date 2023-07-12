import React from "react";
import {BsThreeDots} from "react-icons/bs"

function Tiket() {
  return (
    <tr className="hover:bg-light">
      <td className="p-3">#9852</td>
      <td className="flex items-center gap-2 px-3 py-5">
        <img
          src="./images/users/user-1.jpg"
          alt="user"
          className="w-6 h-6 rounded-full"
        />
        <span>Debra J. Wilson</span>
      </td>
      <td>Your item has been updated!</td>
      <td className="p-3">
        <span className="bg-red/100 text-xs py-1 px-2 rounded-md text-white">
          High
        </span>
      </td>
      <td className="p-3">
        <span className="bg-green/100 text-xs py-1 px-2 rounded-md text-white">
          Open
        </span>
      </td>
      <td className="p-3">01/04/2017 </td>
      <td className="p-3">21/05/2017</td>
      <td className="p-3">
        <button className="bg-light p-3">
          <BsThreeDots />
        </button>
      </td>
    </tr>
  );
}

export default Tiket;
