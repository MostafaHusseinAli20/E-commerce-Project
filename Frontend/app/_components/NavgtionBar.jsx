"use client";
import { CiShoppingCart } from "react-icons/ci";
import logo from "./assets/heaedr icons/logo.svg";
import Image from "next/image";
import MenuBar from "./MenuBar";
import CartApis from "../_utils/CartApis";
import Cart from "./Cart";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../_context/CartContext";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

function NavgtionBar() {

  const [openCart, setopenCart] = useState(false);

  const { cart , setCart } = useContext(CartContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    setIsLoggedIn(window.location.href.toString().includes("sign-in"));
    setIsSignUp(window.location.href.toString().includes("sign-up"));
  }, []);

  const { user } = useUser();

  // Get Cart Items
  useEffect(() => {
    user && getUserCartItems();
  }, [user]);

  const getUserCartItems = () => {
    CartApis.getUserCartItems(user.primaryEmailAddress.emailAddress).then(
      (res) => {
        console.log("response from Cart items", res?.data?.data);
        res?.data?.data.forEach((citem) => {
          setCart((oldCart) => [
            ...oldCart,
            {
              id: citem?.id,
              product: citem?.attributes?.products?.data[0],
            },
          ]);
        });
      }
    );
  };
  return (
    !isLoggedIn &&
    !isSignUp && (
      <>
      
        <nav class="bg-white w-full z-20 top-0 start-0 border-b border-gray-200 ">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link
              href="/"
              class="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image src={logo} width={150} height={150} />
            </Link>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            
              {!user ? (
                <ul className="flex gap-3 xs:pt-4 md:pt-0">
                  <li>
                    <Link
                      className="bg-teal-600 text-white p-2 rounded-lg"
                      href="/sign-in"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="bg-slate-100 p-2 text-teal-600 rounded-lg"
                      href="/sign-up"
                    >
                      Register
                    </Link>
                  </li>
                </ul>
              ) : (
                <>
                  <button className="relative me-6 text-4xl flex">
                    <CiShoppingCart onClick={() => setopenCart(!openCart)} />
                    <span
                      className="absolute left-8 bottom-6 
                  text-xs bg-red-400 rounded-full p-1"
                    >
                      ({cart?.length})
                    </span>
                  </button>
                  {openCart && <Cart />}
                  <UserButton afterSignOutUrl="/" />
                </>
              )}
            </div>
            <div
              class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <input
                type="text"
                id="search-navbar"
                class="block w-96 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
          </div>
        </nav>
        <MenuBar />

       
      </>
    )
  );
}

export default NavgtionBar;
