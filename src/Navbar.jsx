import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <div className="box-border bg-white p-4 md:p-5 flex items-center justify-between">
        <img
          src="src/assets/images/logo.svg"
          alt="Logo"
          className="h-7 w-7 md:h-9 md:w-9"
        />

        {/* Hamburger - only on mobile */}
        <button
          onClick={() => setIsOpen(true)}
          className="text-black text-2xl md:hidden"
        >
          ☰
        </button>

        {/* Menu - only on desktop */}
        <div className="hidden md:flex space-x-6 items-center">
          <a className="text-sm font-semibold text-gray-500 hover:text-red-500 cursor-pointer">
            Home
          </a>
          <a className="text-sm font-semibold  text-gray-500 hover:text-red-500 cursor-pointer">
            New
          </a>
          <a className="text-sm font-semibold  text-gray-500 hover:text-red-500 cursor-pointer">
            Popular
          </a>
          <a className="text-sm font-semibold  text-gray-500 hover:text-red-500 cursor-pointer">
            Trending
          </a>
          <a className="text-sm font-semibold  text-gray-500 hover:text-red-500 cursor-pointer">
            Categories
          </a>
        </div>
      </div>

      {/* Full Screen Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-1/2 h-full bg-green-400 flex flex-col p-6">
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="text-black text-3xl ml-auto"
          >
            ✖
          </button>

          {/* Links */}
          <div className="flex flex-col mt-10 space-y-4 text-lg font-semibold">
            <a className="hover:text-red-500 cursor-pointer">Home</a>
            <a className="hover:text-red-500 cursor-pointer">New</a>
            <a className="hover:text-red-500 cursor-pointer">Popular</a>
            <a className="hover:text-red-500 cursor-pointer">Trending</a>
            <a className="hover:text-red-500 cursor-pointer">Categories</a>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
