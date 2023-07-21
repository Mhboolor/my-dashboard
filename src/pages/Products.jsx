import React, { useEffect, useState } from "react";
import SearchBox from "../components/products/SearchBox";
import Product from "../components/products/Product";
import HeaderPages from "../components/HeaderPages";
import { useGetAllProductsQuery } from "../api/apiSlice";
import Loading from "../components/Loading";
import AddProduct from "../components/products/AddProduct";

function Products() {
  const {
    data: products,
    isLoading,
    isError,
    isSuccess,
  } = useGetAllProductsQuery();
  const [showAdd, setShowAdd] = useState(false);
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sorted, setSorted] = useState("all");

  const showAddModal = () => {
    setShowAdd((prev) => !prev);
  };

  const searchProduct = (e) => {
    setQuery(e);
    const searchedProducts = products.filter((product) =>
      product.title.toLowerCase().includes(e.toLowerCase())
    );
    setFilteredProducts(searchedProducts);
  };

  useEffect(() => {
    setFilteredProducts(products || []);
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <HeaderPages title={"محصولات"} address={"محصولات"} />
      <SearchBox
        showAddModal={showAddModal}
        searchProduct={searchProduct}
        query={query}
      />
      {isError ? (
        <p className="text-2xl text-center">
          مشکل در هنگام دریافت محصولات از سرور
        </p>
      ) : isLoading ? (
        <Loading />
      ) : isSuccess ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredProducts.length
            ? filteredProducts.map((product) => (
                <Product {...product} key={product.id} />
              ))
            : products.map((product) => (
                <Product {...product} key={product.id} />
              ))}
        </div>
      ) : null}
      {showAdd && <AddProduct showAddModal={showAddModal} />}
    </div>
  );
}

export default Products;
