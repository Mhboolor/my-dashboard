import React from 'react'
import HeaderPages from '../components/HeaderPages'
import UsersList from '../components/users/UsersList'
import User from '../components/users/UserInfo'

function Users() {
  return (
    <div className='flex flex-col gap-5'>
      <HeaderPages title={"کاربران"} address={"کاربران"} />
      <div className='flex flex-col xl:flex-row items-start gap-6'>
        <UsersList/>
        <User/>
      </div>
    </div>
  )
}

export default Users