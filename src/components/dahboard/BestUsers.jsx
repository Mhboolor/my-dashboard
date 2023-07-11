import React from 'react'
import {BsThreeDotsVertical} from "react-icons/bs"
import {MdDelete} from "react-icons/md"

function BestUsers() {  
  return (
    <div className='bg-white shadow-sm rounded-sm p-6 flex flex-col gap-5 flex-1 w-full overflow-hidden'>
        <div className="flex items-center justify-between">
          <p>5 کاربر برتر</p>
          <button>
            <BsThreeDotsVertical />
          </button>
        </div>
        <div className='w-full overflow-scroll'>
            <table className="rounded-sm w-[640px] md:w-full">
                <thead className='bg-table-light text-sm text-gray-5 font-bold text-justify'>
                    <tr>
                        <th className='p-3' colSpan="2">پروفایل</th>
                        <th className='p-3'>واحد پولی</th>
                        <th className='p-3'>دارایی</th>
                        <th className='p-3'>میزان سفارش	</th>
                        <th className='p-3'>فعال</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='text-gray-2 text-sm ease-in-out duration-100 hover:bg-table-light'>
                        <td className='p-3'>
                            <img src="./images/users/user-2.jpg" alt="" className='rounded-full w-9 h-9' width={36} height={36}/>
                        </td>
                        <td className='p-3'>
                            <p className='text-gray-5'>هادی</p>
                            <p className='text-xs'>عضو از 2017</p>
                        </td>
                        <td className='p-3'>
                            <p>BTC</p>
                        </td>
                        <td className='p-3'>
                            <p>0.00816117 BTC</p>
                        </td>
                        <td className='p-3'>
                            <p>0.00097036 BTC</p>
                        </td>
                        <td className='p-3'>
                            <button className='text-lg flex items-center justify-center text-white bg-red rounded-sm px-2 py-1'><MdDelete/></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default BestUsers