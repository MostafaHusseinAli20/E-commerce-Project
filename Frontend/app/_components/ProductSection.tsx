"use client"
import { useEffect, useState } from "react";
import ProductApis from "../_utils/ProductApis";
import ProductList from "./ProductList";
import Pagination from './Pagination'
export default function ProductSection() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    getProductList_();
  }, []);

  const getProductList_ = () => {
    ProductApis.getProductList().then((res) => {
      console.log(res.data.data);
      setProductsList(res.data.data);
    });
  };

  return (
    <div className="px-10 md:px-20">
      <h1 className="font-bold sm:text-5xl text-center mb-20">Our Products</h1>
      <ProductList productsList={productsList} />
      {/* Pagination */}
      <Pagination />
    </div>
  );
}
