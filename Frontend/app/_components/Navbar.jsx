"use client"
import { useState , useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import NavgtionBar from './NavgtionBar'
function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [isSignUp, setIsSignUp] = useState(false)

  useEffect (() => {
    setIsLoggedIn(window.location.href.toString().includes("sign-in"))
    setIsSignUp(window.location.href.toString().includes("sign-up"))
  } , [])

  return !isLoggedIn && !isSignUp &&(
    <>
      <header className="bg-white border-b-2 border-gray-100 hidden md:block">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-12 items-center justify-between">
              <div className="flex gap-4">
                <a href="#" className="border rounded-lg p-2 bg-gray-300">
                  <FaFacebook className="text-gray-600" />
                </a>

                <a href="#" className="border rounded-lg p-2 bg-gray-300">
                  <FaTwitter className="text-gray-600" />
                </a>
                <a href="#" className="border rounded-lg p-2 bg-gray-300">
                  <FaInstagram className="text-gray-600" />
                </a>
                <a href="#" className="border rounded-lg p-2 bg-gray-300">
                <FaLinkedin className="text-gray-600" />
                </a>
              </div>
              <div className="text-gray-500 text-sm">
                <h5>FREE SHIPPING THIS WEEK ORDER OVER - $55</h5>
              </div>
              <form className="flex gap-3 items-center text-gray-500 text-sm">
                <select>
                  <option value="">$USD</option>
                  <option value="">€EUR</option>
                </select>
                <select>
                <option value="">English</option>
                <option value="">Español</option>
                <option value="">Français</option>
                </select>
              </form>
          </div>
        </div>
        
      </header>
      {/*  */}
      <NavgtionBar/>
    </>
  );
}

export default Navbar;
