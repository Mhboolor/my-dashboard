import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import SearchBox from '../components/products/SearchBox'


function Products() {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex items-center justify-between'>
        <p className='text-xl text-gray-6'>محصولات</p>
        <BreadCrumb address={'iten'}/>
      </div>
      <SearchBox/>
    </div>
  )
}

export default Products