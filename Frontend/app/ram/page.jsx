"use client"
import { useEffect } from "react";
import { useState } from "react";
import RamItems from './RamItems';

function Ram() {
    const [rams , setRams] = useState([])

    useEffect(() => {
        getRamApi();
    } , [])

    // Get Api Ram to Page
    const getRamApi = () => {
    const brands = ["CORSAIR", "CRUCIAL" , "Lexar" , "Teamgroup" , "KLEVV " , "Acer"];
    const filters = brands
      .map((brand) => `filters[brand][$eq]=${brand}`)
      .join("&");
    fetch(`http://localhost:1337/api/products?${filters}&populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setRams(data.data || []);
      })
      .catch((error) => console.error("Error:", error));
    }

    return ( 
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3
        md:grid-cols-4 gap-4 my-20 xs:px-2 md:px-16 items-center">
            {
                rams.map(items => (
                    <div key={items?.id}>
                        <RamItems product={items}/>
                    </div>
                ))
            }
        </div>
        </>
    );
}

export default Ram;