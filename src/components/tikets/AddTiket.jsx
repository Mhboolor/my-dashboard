import React, { useState } from 'react'
import { useAddTiketsMutation } from '../../api/apiSlice';
import { nanoid } from '@reduxjs/toolkit';

function AddTiket({changeShow}) {

    const [name , setName] = useState('');
    const [subject , setSubject] = useState('');
    const [priority , setPriority] = useState('');
    const [status , setStatus] = useState('');
    const [image , setImage] = useState('');

    const [newTiket] = useAddTiketsMutation();
    
    const addTiket = async () => {
        if (name && subject && priority && status && image) {
            await newTiket({
                id : nanoid(),
                ex : Date.now().toString,
                name ,
                subject ,
                priority ,
                status ,
                image
            }).unwrap();
            changeShow()
        }
    }


  return (
    <div className='w-full h-full fixed left-0 top-0 flex items-center justify-center bg-black/30 z-30'>
        <div className='w-full h-full fixed left-0 top-0 flex items-center justify-center bg-black/30' onClick={changeShow}></div>
        <div className='bg-white rounded-sm shadow-sm flex flex-col gap-4 p-6 w-full sm:w-96 z-50'>
            <p className='text-center'>ثبت تیکت جدید</p>
            <input type="text" placeholder='نام کاربری را وارد کنید' className='bg-light rounded-sm px-2 py-1 w-full' value={name} onChange={e => setName(e.target.value)}/>
            <input type="text" placeholder='موضوع تیکت را وارد کنید' className='bg-light rounded-sm px-2 py-1 w-full' value={subject} onChange={e => setSubject(e.target.value)}/>
            <input type="text" placeholder='سطح اولویت تیکت را وارد کنید' className='bg-light rounded-sm px-2 py-1 w-full' value={priority} onChange={e => setPriority(e.target.value)}/>
            <input type="text" placeholder='وضعیت تیکت را وارد کنید' className='bg-light rounded-sm px-2 py-1 w-full' value={status} onChange={e => setStatus(e.target.value)}/>
            <input type="text" placeholder='آدرس عکس را وارد کنید' className='bg-light rounded-sm px-2 py-1 w-full' value={image} onChange={e => setImage(e.target.value)}/>
            <div className='flex items-center justify-center gap-4'>
                <button className='px-2 py-1 bg-green/100 text-white rounded-md' onClick={addTiket}>اضافه کردن</button>
                <button className='px-2 py-1 bg-red text-white rounded-md' onClick={changeShow}>انصراف</button>
            </div>
        </div>
    </div>
  )
}

export default AddTiket