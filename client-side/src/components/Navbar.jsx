import { useState } from 'react'

function Navbar() {
  
    return (
        <nav className="bg-gray-900 p-8 flex items-center justify-between">
            
            {/* Logo */}
            <div className="text-white">
                <p>LOGO</p>
            </div>
  
        {/* Navigation Links */}
        <div className="text-white text-md text-center flex justify-center items-center">
          <ul className="flex justify-center items-center space-x-4">
            <li>PRODUCTS</li>
            <li>BRANDS</li>
            <li>DELIVERY MAP</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
            <li>TEAM MEMBER APPLICATION</li>
          </ul>
        </div>
  
        {/* Sign In and Sign Up Buttons */}
        <div className="space-x-2 flex flex-row">
          <button className="border border-white text-white rounded-full px-4 py-1">LOG IN</button>
          <button className="border border-white text-white rounded-full px-4 py-1">SIGN UP</button>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
