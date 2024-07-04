"use client"
import { useEffect } from "react";
import { useState } from "react";
import ProcessorItems from "./ProcessorItems";

function Processor() {
  const [processor, setProcessor] = useState([]);

  useEffect(() => {
    getProcessorApis();
  }, []);

    const getProcessorApis = () => {
    const brands = ["Intel" , "AMD"];
    const filters = brands
      .map((brand) => `filters[brand][$eq]=${brand}`)
      .join("&");
    fetch(`http://localhost:1337/api/products?${filters}&populate=*`)
      .then((response) => response.json())
      .then((data) => {
        setProcessor(data.data || []);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
        <div className="grid grid-cols-2 sm:grid-cols-3
        md:grid-cols-4 gap-4 my-20 xs:px-2 md:px-16 items-center">
            {
                processor.map(process => (
                    <div key={process.id}>
                        <ProcessorItems product={process}/>
                    </div>
                ))
            }
        </div>
    </>
     );
}

export default Processor;
