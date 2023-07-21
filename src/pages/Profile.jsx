import React from "react";
import ShowInfo from "../components/profile/ShowInfo"

function Profile() {
  return (
    <div className="bg-white rounded-sm p-6 flex flex-col gap-5 dark:bg-[#36404a]">
      <ul className="flex items-center justify-between divide-x divide-x-reverse divide-gray-2 rounded-md text-sm md:text-base">
        <li to={'/data'} className="flex-1 flex items-center justify-center bg-light ease-in-out duration-150 text-gray-6 py-2 hover:shadow-md dark:bg-[#3b4651] dark:text-white">
          اطلاعات ادمین
        </li>
      </ul>
      <div>
        <ShowInfo/>
      </div>
    </div>
  );
}

export default Profile;
