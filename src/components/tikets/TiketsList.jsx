import React, { useState } from 'react'
import {MdAddCircleOutline} from "react-icons/md"
import SearchBox from './SearchBox'
import Tiket from './Tiket'
import { useGetTiketsQuery } from '../../api/apiSlice'
import Loading from "../Loading"

function TiketsList() {

    const [showAdd , setShowAdd] = useState(true)

    const {data : tikets , isLoading , isError , isSuccess} = useGetTiketsQuery() 


  return (
    <div className='bg-white shadow-sm rounded-sm p-6 flex flex-col gap-5'>
        <div className='flex items-center justify-between'>
            <p className='text-xl text-gray-6'>مدیریت تیکت ها</p>
            <button className='flex items-center rounded-md py-1 px-2 bg-[#4a81d4] text-white gap-2'><MdAddCircleOutline/>تیکت زدن</button>
        </div>
        <SearchBox/>
        <div className='w-full overflow-x-scroll md:overflow-auto'>
            <table className='text-sm text-gray-4 text-justify w-[900px] md:w-full'>
                <thead className='border-b'>
                    <tr>
                        <th className='p-3'>شناسه</th>
                        <th className='p-3'>ارسال شده توسط</th>
                        <th className='p-3'>موضوع</th>
                        <th className='p-3'>اولویت</th>
                        <th className='p-3'>وضعیت</th>
                        <th className='p-3'>تاریخ ایجاد</th>
                        <th className='p-3'>انقضا</th>
                        <th className='p-3'>بازخورد</th>
                    </tr>
                </thead>
                <tbody className=' divide-y'>
                    {
                        isError ? (
                            <p>خطا در هنگام دریافت اطلاعات از سرور</p>
                        ) : isLoading ? (
                            <Loading/>
                        ) : isSuccess ? (
                            tikets.map(tiket => (
                                <Tiket {...tiket} key={tiket.id}/>
                            ))
                        ) : null
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default TiketsList