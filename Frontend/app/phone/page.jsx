"use client"
import { useEffect, useState } from "react";
import PhoneItem from "./phoneItem"
function Phone() {
  const [productFilterBrand, setProductFilterBrand] = useState([]);

  useEffect(() => {
    getPrductFilterByBrand();
  }, []);

  const getPrductFilterByBrand = () => {
    const brands = ["Samsung", "Xiaomi", "iPhone"];
    const filters = brands
      .map((brand) => `filters[brand][$eq]=${brand}`)
      .join("&");
    fetch(`http://localhost:1337/api/products?${filters}&populate=*`)
      .then((response) => response.json())
      .then((data) => {
        setProductFilterBrand(data.data || []);
      })
      .catch((error) => console.error("Error:", error));
  };
  return (
    <>
        <div className="grid grid-cols-2 sm:grid-cols-3
        md:grid-cols-4 gap-4 my-20 xs:px-2 md:px-16 items-center">
            {
                productFilterBrand.map((product) => (
                    <div key={product.id}>
                        <PhoneItem product={product}/>
                    </div>
                ))
            }
        </div>
    </>
  );
}

export default Phone;
