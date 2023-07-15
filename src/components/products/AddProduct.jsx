import React, { useState } from 'react'
import { useAddProductMutation } from '../../api/apiSlice';
import { nanoid } from '@reduxjs/toolkit';

function AddProduct({showAddModal}) {

    const [title , setTitle] = useState('');
    const [price , setPrice] = useState('');
    const [stock , setStock] = useState('');
    const [rate , setRate] = useState('');
    const [image , setImage] = useState('');

    const emptyAll = () => {
        setTitle('')
        setPrice('')
        setStock('')
        setRate('')
        setImage('')
    }

    const closeFrom = () => {
        emptyAll()
        showAddModal()
    }

    const [addNewProduct] = useAddProductMutation()

    const addProduct = async () => {
        if(title && price && stock && rate && image){
            try{
                await addNewProduct({
                    id : nanoid(),
                    title , 
                    price ,
                    stock ,
                    rate ,
                    image
                }).unwrap();
                emptyAll()
                showAddModal()
            }catch(error){
                console.error(error)
            }
        }
    }

  return (
    <div className='w-full h-full fixed left-0 top-0 flex items-center justify-center bg-black/30 z-30'>
        <div className='w-full h-full fixed left-0 top-0 flex items-center justify-center bg-black/30' onClick={showAddModal}></div>
        <div className='bg-white rounded-sm shadow-sm flex flex-col gap-4 p-6 w-full sm:w-96 z-50'>
            <input type="text" placeholder='نام محصول را وارد کنید' className='bg-light rounded-sm px-2 py-1 w-full' value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type="number" placeholder='قیمت محصول را به تومان وارد کنید' className='bg-light rounded-sm px-2 py-1 w-full' value={price} onChange={(e) => setPrice(e.target.value)}/>
            <input type="number" placeholder='موجودی محصول را وارد کنید' className='bg-light rounded-sm px-2 py-1 w-full' value={stock} onChange={(e) => setStock(e.target.value)}/>
            <input type="number" placeholder='امتیاز محصول را وارد کنید' className='bg-light rounded-sm px-2 py-1 w-full' value={rate} onChange={(e) => setRate(e.target.value)}/>
            <input type="text" placeholder='آدرس عکس محصول را وارد کنید' className='bg-light rounded-sm px-2 py-1 w-full' value={image} onChange={(e) => setImage(e.target.value)}/>
            <div className='flex items-center justify-center gap-4'>
                <button className='px-2 py-1 bg-green/100 text-white rounded-md' onClick={addProduct}>اضافه کردن</button>
                <button className='px-2 py-1 bg-red text-white rounded-md' onClick={closeFrom}>انصراف</button>
            </div>
        </div>
    </div>
  )
}

export default AddProduct