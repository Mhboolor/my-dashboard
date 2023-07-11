import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='w-fuul'>
      <p>فهرست</p>
      <ul>
        <NavLink to={'/'}>داشبود</NavLink>
        <NavLink to={'/products'}>محصولات</NavLink>
        <NavLink to={'/users'}>کاربران</NavLink>
        <NavLink to={'/sellers'}>فروشندگان</NavLink>
        <NavLink to={'/tikets'}>تیکت ها</NavLink>
      </ul>
    </div>
  )
}

export default Sidebar