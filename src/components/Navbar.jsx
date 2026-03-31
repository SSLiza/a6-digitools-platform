import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow px-50 h-23">
  <a className="flex items-center navbar-start text-transparent bg-clip-text bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-4xl font-bold p-3">
  DigiTools
</a>
  <div className="navbar-center">
    <ul className='flex gap-8 justify-between text-xl'>
        <li>Products</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Testimonials</li>
        <li>FAQ</li>
    </ul>
  </div>
  <div className="navbar-end flex gap-4">
    <button className="flex items-center gap-3 text-[20px]">
  <CiShoppingCart size={40} /> 
  Login
</button>
    <button className="btn bg-gradient-to-r from-[#4f39f6] to-[#9514fa] rounded-3xl text-white p-6 text-xl">Get Started</button>
  </div>
</div>
    );
};

export default Navbar;