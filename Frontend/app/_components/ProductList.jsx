"use client"

import ProductItem from "./ProductItem";
function ProductList({productsList}) {

    return ( 
        <>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 items-center">
            {
                productsList.map(item => (
                    <div key={item.id}>
                        <ProductItem product={item}/>
                    </div>
                ))
            }
        </div>
        
        </>
        
     );
}

export default ProductList;