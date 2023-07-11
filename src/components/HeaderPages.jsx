import React from 'react'
import BreadCrumb from './BreadCrumb'

function HeaderPages({title , address}) {
  return (
    <div className='flex items-center justify-between'>
        <p className='text-xl text-gray-6'>{title}</p>
        <BreadCrumb address={address}/>
    </div>
  )
}

export default HeaderPages