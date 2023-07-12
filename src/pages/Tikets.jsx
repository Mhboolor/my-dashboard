import React from 'react'
import HeaderPages from "../components/HeaderPages"
import StatusBox from '../components/tikets/StatusBox'
import TiketsList from '../components/tikets/TiketsList'

function Tikets() {
  return (
    <div className='flex flex-col gap-5'>
      <HeaderPages title={"لیست تیکت ها"} address={"تیکت ها"}/>
      <StatusBox/>
      <TiketsList/>
    </div>
  )
}

export default Tikets