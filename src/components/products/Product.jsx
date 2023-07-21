import React from 'react'
import {MdEdit , MdClose , MdStar} from "react-icons/md"
import { useDeleteProductMutation } from '../../api/apiSlice'
import { Link } from 'react-router-dom';

function Product({id , title , image , price , stock , rate}) {

  const [deleteProduct] = useDeleteProductMutation();

  return (
    <div className="bg-white rounded-sm p-6 group dark:bg-[#36404a]">
      <div className="bg-light flex items-center justify-center relative dark:bg-[rgb(66_78_90)]">
        <img src={image} alt="product_image" className="w-full h-full" />
        <div className="flex items-center justify-center text-white gap-1 overflow-hidden absolute -left-8 top-0 opacity-0 duration-200 ease-in-out group-hover:opacity-100 group-hover:left-0">
          <Link className="bg-green/100 p-1 rounded-sm" to={`./${id}`}>
            <MdEdit />
          </Link>
          <button
            className="bg-red p-1 rounded-sm"
            onClick={() => deleteProduct(id)}
          >
            <MdClose />
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-5">
        <div className="font-semibold dark:text-[#f3f7f9]">{title}</div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center text-gold text-lg">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
          </div>
          <div className="bg-light text-gray-4 font-semibold p-2 rounded-sm dark:bg-[#323a46] dark:text-[#94a0ad]">
            {Number(price)} T
          </div>
        </div>
        <div className="flex items-center gap-1 text-sm font-semibold text-gray-2 dark:text-[#8c98a5]">
          <span>موجودی : </span>
          <span>{Number(stock)}</span>
        </div>
      </div>
    </div>
  )
}

export default Product