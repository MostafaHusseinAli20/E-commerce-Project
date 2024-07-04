"use client"
import { useEffect , useState } from "react";
import MouseItem from './MouseItem'
function Mouse() {
    const [mouse , setMouse] = useState([])

    useEffect(() => {
        MouseApis();
    } , [])

    const MouseApis = () => {
        const brands = ["Logitech" , "Razer"];
        const filters = brands
          .map((brand) => `filters[brand][$eq]=${brand}`)
          .join("&");
        fetch(`http://localhost:1337/api/products?${filters}&populate=*`)
          .then((response) => response.json())
          .then((data) => {
            setMouse(data.data || []);
          })
          .catch((err) => console.log(err.message));
      };

    return ( 
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3
        md:grid-cols-4 gap-4 my-20 xs:px-2 md:px-16 items-center">
            {
                mouse.map(item => (
                    <div key={item.id}>
                        <MouseItem product={item}/>
                    </div>
                ))
            }
        </div>
        </>
     );
}

export default Mouse;