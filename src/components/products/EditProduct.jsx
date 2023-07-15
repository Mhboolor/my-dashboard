import React, { useState } from "react";
import HeaderPages from "../HeaderPages";
import { Link , useNavigate, useParams } from "react-router-dom";
import { useEditProductMutation, useGetProductQuery } from "../../api/apiSlice";
import Loading from "../Loading";

function EditProduct() {
  const { productId } = useParams();
  
  const {
    data: product,
    isLoading,
    isSuccess,
    isError,
  } = useGetProductQuery(productId);

  const navigate = useNavigate()

  const [title , setTitle] = useState('')
  const [price , setPrice] = useState('')
  const [stock , setStock] = useState('')
  const [rate , setRate] = useState('')
  const [image , setImage] = useState('')

  

  const [editedProduct] = useEditProductMutation()


  const editProduct = async () => {
    if(title && price && stock && rate && image){
        await editedProduct({
            id : productId,
            title , 
            price ,
            stock,
            rate,
            image
        })
        navigate('/products')
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <HeaderPages title={"ویرایش محصول"} address={"ویرایش محصول"} />
      <div className="bg-white rounded-sm shadow-sm p-5 gap-6 flex flex-col">
        {isError ? (
          <p className="text-2xl text-center">
            مشکل در هنگام دریافت محصولات از سرور
          </p>
        ) : isLoading ? (
          <Loading />
        ) : isSuccess ? (
          <div className="flex items-center flex-col-reverse sm:flex-row">
            <div className="flex flex-col gap-5 flex-1">
              <p className="font-semibold text-gray-6">
                وارد کردن اطلاعات جدید :
              </p>
              <input
                type="text"
                className="bg-light px-2 py-1 rounded-sm border border-black/25 focus-visible:outline-none focus-visible:border-black/60"
                placeholder={`نام محصول : ${product.title}`}
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
              <input
                type="number"
                className="bg-light px-2 py-1 rounded-sm border border-black/25 focus-visible:outline-none focus-visible:border-black/60"
                placeholder={` قیمت محصول به تومان : ${product.price}`}
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
              <input
                type="number"
                className="bg-light px-2 py-1 rounded-sm border border-black/25 focus-visible:outline-none focus-visible:border-black/60"
                placeholder={`موجودی محصول : ${product.stock}`}
                value={stock}
                onChange={e => setStock(e.target.value)}
              />
              <input
                type="number"
                className="bg-light px-2 py-1 rounded-sm border border-black/25 focus-visible:outline-none focus-visible:border-black/60"
                placeholder={`امتیاز محصول : ${product.rate}`}
                value={rate}
                onChange={e => setRate(e.target.value)}
              />
              <input
                type="text"
                className="bg-light px-2 py-1 rounded-sm border border-black/25 focus-visible:outline-none focus-visible:border-black/60"
                placeholder={`آدرس عکس محصول : ${product.image}`}
                value={image}
                onChange={e => setImage(e.target.value)}
              />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <img
                src="../images/products/product-1.png"
                alt="product"
                className="w-96 h-96"
              />
            </div>
          </div>
        ) : null}

        <div className="flex items-center justify-center gap-5 text-white">
          <Link className="bg-green/100 rounded-md px-2 py-1" onClick={editProduct}>
            ویرایش محصول
          </Link>
          <Link className="bg-red rounded-md px-2 py-1" to={'/products'}>انصراف</Link>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
