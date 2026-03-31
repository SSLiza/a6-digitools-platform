import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const Navbar = ({carts}) => {
  return (
    <div className="navbar bg-base-100 shadow px-4 md:px-6 lg:px-12 py-3">

      {/* Left */}
      <div className="navbar-start">

        {/* Mobile Menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>

        {/* Logo */}
        <a className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f39f6] to-[#9514fa] 
        text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ml-2 p-2">
          DigiTools
        </a>
      </div>

      {/* Center - Desktop Menu */}
      <div className="navbar-center hidden md:flex">
        <ul className="
          menu menu-horizontal 
          text-sm md:text-base lg:text-lg 
          gap-3 md:gap-0 lg:gap-6
        ">
          <li><a>Products</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end flex items-center gap-4 md:gap-3 lg:gap-8">

        {/* Cart/Login */}
       <button className="flex items-center gap-4 md:gap-2 lg:gap-8 text-sm md:text-base lg:text-lg">

  {/* Icon Wrapper */}
  <div className="relative">
    <CiShoppingCart size={30} className="md:size-9 lg:size-12" />

    {/* Badge */}
    <div className="badge badge-error badge-xs absolute -top-2 -right-2">
      {carts.length}
    </div>
  </div>

  <span className="md:hidden lg:inline font-semibold">Login</span>
</button>

        {/* Button */}
        <button className="
          bg-gradient-to-r from-[#4f39f6] to-[#9514fa] 
          rounded-full text-white 
          px-3 py-1.5 
          md:px-4 md:py-2 
          lg:px-6 lg:py-2.5 
          text-xs md:text-sm lg:text-lg
        ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;