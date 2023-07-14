import React from 'react'

function Loading() {
  return (
    <div className='flex items-center justify-center w-full h-full'>
        <div className='border-[16px] rounded-full border-y-[16px] border-y-blue/100 w-32 h-32 animate-[spin_2s_linear_infinite]'></div>
    </div>
  )
}

export default Loading