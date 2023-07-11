import React from 'react'
import {MdEdit , MdClose , MdStar} from "react-icons/md"

function Product() {
  return (
    <div className="bg-white rounded-sm p-6 group">
      <div className="bg-light flex items-center justify-center relative">
        <img src="./images/products/product-1.png" alt="product_image" className="w-full h-full" />
        <div className="flex items-center justify-center text-white gap-1 overflow-hidden absolute -left-8 top-0 opacity-0 duration-200 ease-in-out group-hover:opacity-100 group-hover:left-0">
          <button className="bg-green/100 p-1 rounded-sm">
            <MdEdit />
          </button>
          <button
            className="bg-red p-1 rounded-sm"
          >
            <MdClose />
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-5">
        <div className="font-semibold">شلوار</div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center text-gold text-lg">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
          </div>
          <div className="bg-light text-gray-4 font-semibold p-2 rounded-sm">
            2000000 T
          </div>
        </div>
        <div className="flex items-center gap-1 text-sm font-semibold text-gray-2">
          <span>موجودی : </span>
          <span>58</span>
        </div>
      </div>
    </div>
  )
}

export default Product