import React from 'react'
import { Link } from 'react-router-dom'
import {MdArrowBackIos} from "react-icons/md"

function BreadCrumb({address}) {
  return (
    <ul className='flex items-center gap-2 text-gray-2 text-sm'>
        <Link to={'/'} className='text-gray-4' >داشبورد</Link>
        <MdArrowBackIos/>
        <Link to={`/${address}`}>{address}</Link>
    </ul>
  )
}

export default BreadCrumb