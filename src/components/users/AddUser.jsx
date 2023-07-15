import React, { useState } from 'react'
import { useAddUserMutation } from '../../api/apiSlice'
import { nanoid } from '@reduxjs/toolkit'

function AddUser({changeShow}) {

    const [name , setName] = useState('')
    const [phone , setPhone] = useState('')
    const [email , setEmail] = useState('')
    const [company , setCompany] = useState('')
    const [caption , setCaption] = useState('')
    const [job , setJob] = useState('')
    const [image , setImage] = useState('')
    const [birthday , setBirthday] = useState('')


    const [addNewUser] = useAddUserMutation();

    const addUser = async () => {
        if(name && phone && email && company && caption && job && image && birthday){
            await addNewUser({
                id : nanoid(),
                date : Date.now(),
                name,
                phone,
                email,
                company,
                caption,
                job,
                image,
                birthday,
            }).unwrap();
            changeShow()
            setName('')
            setPhone('')
            setEmail('')
            setCompany('')
            setCaption('')
            setJob('')
            setImage('')
            setBirthday('')
        }
    }


  return (
    <div className='w-full h-full fixed left-0 top-0 flex items-center justify-center bg-black/30 z-30'>
        <div className='w-full h-full fixed left-0 top-0 flex items-center justify-center bg-black/30' onClick={changeShow}></div>
        <div className='bg-white rounded-sm shadow-sm flex flex-col gap-4 p-6 w-full sm:w-96 z-50'>
            <p className='text-center'>ثبت کاربر جدید</p>
            <input type="text" placeholder='نام کاربری را وارد کنید' className='bg-light rounded-sm px-2 py-1 w-full' value={name} onChange={e => setName(e.target.value)}/>
            <input type="text" placeholder='شماره کاربر را وارد کنید' className='bg-light rounded-sm px-2 py-1 w-full' value={phone} onChange={e => setPhone(e.target.value)}/>
            <input type="text" placeholder='ایمیل کاربر را وارد کنید' className='bg-light rounded-sm px-2 py-1 w-full' value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="text" placeholder='شرکت کاربر را وارد کنید' className='bg-light rounded-sm px-2 py-1 w-full' value={company} onChange={e => setCompany(e.target.value)}/>
            <input type="text" placeholder='کوتاه کاربر را معرفی کنید' className='bg-light rounded-sm px-2 py-1 w-full' value={caption} onChange={e => setCaption(e.target.value)}/>
            <input type="text" placeholder='شغل کاربر را وارد کنید' className='bg-light rounded-sm px-2 py-1 w-full' value={job} onChange={e => setJob(e.target.value)}/>
            <input type="text" placeholder='تاریخ تولد کاربر را وارد کنید' className='bg-light rounded-sm px-2 py-1 w-full' value={birthday} onChange={e => setBirthday(e.target.value)}/>
            <input type="text" placeholder='آدرس عکس کاربر را وارد کنید' className='bg-light rounded-sm px-2 py-1 w-full' value={image} onChange={e => setImage(e.target.value)}/>
            <div className='flex items-center justify-center gap-4'>
                <button className='px-2 py-1 bg-green/100 text-white rounded-md' onClick={addUser}>اضافه کردن</button>
                <button className='px-2 py-1 bg-red text-white rounded-md' onClick={changeShow}>انصراف</button>
            </div>
        </div>
    </div>
  )
}

export default AddUser
