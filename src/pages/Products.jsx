import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import SearchBox from '../components/products/SearchBox'
import Product from '../components/products/Product'


function Products() {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex items-center justify-between'>
        <p className='text-xl text-gray-6'>محصولات</p>
        <BreadCrumb address={'iten'}/>
      </div>
      <SearchBox/>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
        <Product/>
      </div>
    </div>
  )
}

export default Products