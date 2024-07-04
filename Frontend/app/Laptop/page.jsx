"use client";
import { useEffect } from "react";
import { useState } from "react";
import LaptopItems from './LaptopItems'
function Laptop() {
  const [laptop, setLaptop] = useState([]);

  useEffect(() => {
    getApiLap();
  }, []);

  const getApiLap = () => {
    const brands = [
      "ASUS Rog Strix",
      "ASUS TUF Gaming",
      "Dell",
      "Hp",
      "Samsung Book",
    ];
    const filters = brands
      .map((brand) => `filters[brand][$eq]=${brand}`)
      .join("&");
    fetch(`http://localhost:1337/api/products?${filters}&populate=*`)
      .then((response) => response.json())
      .then((data) => {
        setLaptop(data.data || []);
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <div
        className="grid grid-cols-2 sm:grid-cols-3
        md:grid-cols-4 gap-4 my-20 xs:px-2 md:px-16 items-center"
      >
        {laptop.map((item) => (
          <div key={item.id}>
            <LaptopItems product={item} />
          </div>
        ))}
      </div>
    </>
  );
}
export default Laptop;
