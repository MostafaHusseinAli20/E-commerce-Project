"use client";

import { useContext } from "react";
import { CartContext } from "../_context/CartContext";
import Link from "next/link";
function Cart() {
    const {cart , setCart} = useContext(CartContext)
  return (
    <>
      <div
        className="h-[350px] w-[350px]
            bg-gray-100 z-50 rounded-md border shadow-sm
            absolute mx-10 right-24 top-28 overflow-auto"
      >
        
        <div className="mt-4 space-y-6 px-10">
          <ul className="space-y-4">
            {cart.map(item => (
                <li key={item?.id} className="flex items-center gap-4">
                <img
                  src= {item?.product?.attributes?.bannerCard?.
                    data?.attributes?.url}
                  alt=""
                  className="size-16 rounded object-cover"
                />
  
                <div>
                  <h3 className="text-sm font-bold text-gray-900 line-clamp-1">{item?.product?.
                  attributes?.title}</h3>
  
                  <div className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt className="block font-bold">Brand : {item?.product?.attributes?.brand}</dt>
                      <dd className="inline font-bold">Price : ${item?.product?.attributes?.price}</dd>
                    </div>
                  </div>
                </div>
              </li>
              
            ))}
            
          </ul>
        </div>
        
        <div className="space-y-4 text-center py-5 px-10">
      <Link
        href="/cart"
        className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
      >
        View my cart ({cart?.length})
      </Link>

      <Link
        href="/cart"
        className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
      >
        Checkout
      </Link>

      <a
        href="#"
        className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
      >
        Continue shopping
      </a>
    </div>
      </div>
    </>
  );
}

export default Cart;
