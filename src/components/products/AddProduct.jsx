import React from 'react'

function AddProduct() {
  return (
    <div className='w-full h-full fixed left-0 top-0 flex items-center justify-center bg-black/30 z-50'>
        <div className='bg-white rounded-sm shadow-sm flex flex-col gap-4 p-6 w-full sm:w-96'>
            <input type="text" placeholder='نام محصول را وارد کنید' className='bg-light rounded-sm px-2 py-1 w-full'/>
            <input type="text" placeholder='قیمت محصول را به تومان وارد کنید' className='bg-light rounded-sm px-2 py-1 w-full'/>
            <input type="text" placeholder='موجودی محصول را وارد کنید' className='bg-light rounded-sm px-2 py-1 w-full'/>
            <input type="text" placeholder='امتیاز محصول را وارد کنید' className='bg-light rounded-sm px-2 py-1 w-full'/>
            <input type="text" placeholder='آدرس عکس محصول را وارد کنید' className='bg-light rounded-sm px-2 py-1 w-full'/>
            <div className='flex items-center justify-center gap-4'>
                <button className='px-2 py-1 bg-green/100 text-white rounded-md'>اضافه کردن</button>
                <button className='px-2 py-1 bg-red text-white rounded-md'>انصراف</button>
            </div>
        </div>
    </div>
  )
}

export default AddProduct