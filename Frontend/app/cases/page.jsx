"use client"
import { useEffect } from "react";
import { useState } from "react";
import CaseItems from './CaseItems'
function Cases() {
    const [cases , setCases] = useState([])

    useEffect(() => {
        getApiCaese();
    } , [])

    const getApiCaese = () => {
    const brands = ["Antec", "Color Master", "Gamdias" , "Thermaltake" , "Xigmatek"
        , "Lian Li" , "Gigabyte" , "GALAX"
    ];
    
    const filters = brands
      .map((brand) => `filters[brand][$eq]=${brand}`)
      .join("&");
    fetch(`http://localhost:1337/api/products?${filters}&populate=*`)
      .then((response) => response.json())
      .then(data => {
        setCases(data.data || [])
      })
      .catch(err => console.log(err.message))
    }
    return ( 
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3
        md:grid-cols-4 gap-4 my-20 xs:px-2 md:px-16 items-center">
            {cases.map(item => (
                <div key={item.id}>
                    <CaseItems product={item}/>
                </div>
            )) }
        </div>
        </>
    );
}

export default Cases;