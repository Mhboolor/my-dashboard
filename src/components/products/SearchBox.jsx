import React from 'react'
import {MdAddCircle} from "react-icons/md"

function SearchBox() {
  return (
    <div className='bg-white shadow-sm rounded-sm p-6 flex items-center flex-col md:flex-row justify-between gap-5'>
        <div className='flex items-center flex-wrap gap-6'>
          <div>
            <input type="text" placeholder='محصول خود را جستجو کنید ...' className='border border-inp p-2 rounded-sm focus-visible:outline-none focus-visible:border-gray-4'/>
          </div>
          <div className='flex items-center gap-4'>
            <label className='hidden sm:flex'>مرتب سازی بر اساس</label>
            <select className='border border-inp p-2 rounded-sm'>
              <option value="all">همه</option>
              <option value="popular">محبوبترین</option>
              <option value="low">ارزونترین</option>
              <option value="high">گرونترین</option>
              <option value="out">ناموجود</option>
            </select>
          </div>
        </div>
        <div>
          <button className='flex items-center gap-2 bg-red text-white rounded-sm px-3 py-2'><MdAddCircle/>اضافه کردن محصول</button>
        </div>
      </div>
  )
}

export default SearchBox