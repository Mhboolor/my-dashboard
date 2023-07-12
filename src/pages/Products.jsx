import React from "react";
import SearchBox from "../components/products/SearchBox";
import Product from "../components/products/Product";
import HeaderPages from "../components/HeaderPages";

function Products() {

  return (
    <div className="flex flex-col gap-5">
      <HeaderPages title={"محصولات"} address={"محصولات"} />
      <SearchBox />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <Product/>
      </div>
    </div>
  );
}

export default Products;
