import React from 'react'
import {BsTag} from "react-icons/bs"
import {MdOutlineWatchLater ,MdOutlineDelete} from "react-icons/md"
import {BsCheck2Circle} from "react-icons/bs"

function StatusBox() {
  return (
    <div className="flex gap-6 flex-wrap">
      <div className="flex items-center justify-between bg-white shadow-sm flex-1 p-6 rounded-sm ">
        <div className="w-[70px] h-[70px] rounded-full bg-purple/100 flex items-center justify-center text-white text-2xl">
          <BsTag/>
        </div>
        <div className="flex flex-col items-end gap-1">
          <p className="text-gray-5 text-2xl font-semibold">3,947</p>
          <p className="text-sm text-gray-2">مجموع تیکت ها</p>
        </div>
      </div>
      <div className="flex items-center justify-between bg-white shadow-sm flex-1 p-6 rounded-sm ">
        <div className="w-[70px] h-[70px] rounded-full bg-orange/100 flex items-center justify-center text-white text-2xl">
          <MdOutlineWatchLater/>
        </div>
        <div className="flex flex-col items-end gap-1">
          <p className="text-gray-5 text-2xl font-semibold">624</p>
          <p className="text-sm text-gray-2">تیکت های در انتظار</p>
        </div>
      </div>
      <div className="flex items-center justify-between bg-white shadow-sm flex-1 p-6 rounded-sm ">
        <div className="w-[70px] h-[70px] rounded-full bg-green/100 flex items-center justify-center text-white text-2xl">
          <BsCheck2Circle/>
        </div>
        <div className="flex flex-col items-end gap-1">
          <p className="text-gray-5 text-2xl font-semibold">3195</p>
          <p className="text-sm text-gray-2">تیکت های بسته شده</p>
        </div>
      </div>
      <div className="flex items-center justify-between bg-white shadow-sm flex-1 p-6 rounded-sm ">
        <div className="w-[70px] h-[70px] rounded-full bg-blue/100 flex items-center justify-center text-white text-2xl">
          <MdOutlineDelete/>
        </div>
        <div className="flex flex-col items-end gap-1">
          <p className="text-gray-5 text-2xl font-semibold">128</p>
          <p className="text-sm text-gray-2">تیکت های پاک شده</p>
        </div>
      </div>
    </div>
  )
}

export default StatusBox