"use client"
import { useEffect , useState } from "react";
import KeyboardItem from './KeyboardItem'
function keyboard() {
    const [keyboard , setKeyboard] = useState([])

    useEffect(() => {
        keyboardApi();
    } , [])

    // Get Api Filter For Brand Keyboards
    const keyboardApi = () => {
        const brands = ["Razerkeyboard" , "Redragon"];
        const filters = brands
          .map((brand) => `filters[brand][$eq]=${brand}`)
          .join("&");
        fetch(`http://localhost:1337/api/products?${filters}&populate=*`)
          .then((response) => response.json())
          .then((data) => {
            setKeyboard(data.data || []);
          })
          .catch((err) => console.log(err.message));
      };

    return ( 
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3
        md:grid-cols-4 gap-4 my-20 xs:px-2 md:px-16 items-center">
            {
                keyboard.map(item => (
                    <div key={item.id}>
                        <KeyboardItem product={item}/>
                    </div>
                ))
            }
        </div>
        </>
     );
}

export default keyboard;