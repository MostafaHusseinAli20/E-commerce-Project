"use client";
import BreadCrump from "../../_components/BreadCrump";
import ProductApis from "../../_utils/ProductApis";
import { useEffect, useState } from "react";
import ProductBanner from "../_components/ProductBanner";
import ProductInfo from "../_components/ProductInfo";
import ProductList from "../../_components/ProductList";
import { usePathname } from "next/navigation";

function ProductDetails({ params }) {
  // Path Name For Bread Crump
  const path = usePathname();
  console.log(path);
  // Product Details
  const [productDetail, setProductDetail] = useState({});

  // Product Suggestions
  const [productSuggestions, setProductSuggestions] = useState([]);

  useEffect(() => {
    getProductById_();
  }, [params?.idProduct]);
  const getProductById_ = () => {
    ProductApis.getProductById(params?.idProduct).then((res) => {
      console.log("Product Item", res.data.data);
      setProductDetail(res.data.data);
      getProductListByBrand(res.data.data);
    });
  };

  const getProductListByBrand = (product) => {
    ProductApis.getProductByBrand(product?.attributes?.brand).then((res) =>
      setProductSuggestions(res.data.data)
    );
  };

  return (
    <>
      <div className="px-10 py-8 md:px-28">
        <BreadCrump path={path} />
        <div className="block lg:flex flex-col  
        justify-around md:flex-row mt-10 xs:gap-12 lg:gap-0">
          <ProductBanner product={productDetail} />
          <ProductInfo product={productDetail} />
        </div>
        <h2 className="mt-40 mb-14 text-center text-3xl">
          {" "}
          Similar Brand Products{" "}
        </h2>
        <ProductList productsList={productSuggestions} />
      </div>
    </>
  );
}

export default ProductDetails;
