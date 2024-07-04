"use client"
import { useEffect , useState} from "react";
import GraphicCard from "./GraphicCard";
function GraphCard() {
    const [graphic , setGraphic] = useState([])

    useEffect(() => {
        graphicCard();
    } , [])

    // Logic Connect By Api
    const graphicCard = () => {
        const brands = ["Nvidia" , "AMDRX"];
        const filters = brands
          .map((brand) => `filters[brand][$eq]=${brand}`)
          .join("&");
        fetch(`http://localhost:1337/api/products?${filters}&populate=*`)
          .then((response) => response.json())
          .then((data) => {
            setGraphic(data.data || []);
          })
          .catch((err) => console.log(err.message));
    }
    return ( 
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3
        md:grid-cols-4 gap-4 my-20 xs:px-2 md:px-16 items-center">
            {
                graphic.map(graph => (
                    <div>
                        <GraphicCard product={graph}/>
                    </div>
                ))
            }
        </div>
        </>
     );
}

export default GraphCard;