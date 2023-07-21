import React from 'react'

function ShowInfo() {
  return (
    <div className='flex flex-col gap-5'>
        <div className='flex items-center justify-center w-full'>
            <img src="./images/users/user.jpg" alt="user_image" className='rounded-md w-32 h-32'/>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 dark:text-[#94a0ad]'>
            <p>نام و نام خانوادگی : محمد حسین بولوری</p>
            <p>ایمیل : 	mhstare81@gmail.com</p>
            <p>تلفن : 09035425892</p>
            <p>شغل : Front-End Developer</p>
            <p>شرکت : bolori</p>
            <p>سن : 20</p>
            <p>توضیحات : محمدحسین بولوری هستم ساکن تهران , فرانت اند دولوپر و این یکی از پروژه های من برای رزومه خودم هستش</p>
        </div>
    </div>
  )
}

export default ShowInfo