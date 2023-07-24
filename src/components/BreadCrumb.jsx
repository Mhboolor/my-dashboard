import React from 'react'
import { Link } from 'react-router-dom'
import {MdArrowBackIos} from "react-icons/md"

function BreadCrumb({address}) {
  return (
    <ul className='flex items-center gap-2 text-gray-2 text-sm'>
        <Link to={'/dashboard'} className='text-gray-4 dark:text-white'>داشبورد</Link>
        <MdArrowBackIos/>
        <Link>{address}</Link>
    </ul>
  )
}

export default BreadCrumb