import { useState } from 'react';
import mainLogo from '../assets/main-logo.png';

function Navbar() {
  return (
    <nav className="bg-[#1D1D1D] px-7 flex items-center justify-between">
      {/* Logo */}
      <div className="text-white">
        <a href="/">
          <img src={mainLogo} alt="main-logo" />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="ml-20 text-white text-lg text-center flex flex-grow justify-center items-center">
        <ul className="flex space-x-4">
          <li><a href="/products">PRODUCTS</a></li>
          <li><a href="/brands">BRANDS</a></li>
          <li><a href="/delivery-map">DELIVERY MAP</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/contact">CONTACT</a></li>
          <li><a href="/team-member-application">TEAM MEMBER APPLICATION</a></li>
        </ul>
      </div>

      {/* Sign In and Sign Up Buttons */}
      <div className="space-x-2 flex flex-row">
        <button className="border border-white text-white rounded-full px-5 py-2 hover:text-green-300">LOG IN</button>
        <button className="border border-white text-white rounded-full px-5 py-2 hover:text-green-300">SIGN UP</button>
      </div>
    </nav>
  );
}

export default Navbar;
