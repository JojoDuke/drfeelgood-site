import React, {useEffect, useState} from 'react'
import mainLogo from '../assets/main-logo.png';
import Utility from '../utils/Utility'
import HamburgerIcon from '../assets/pNav-icons/hamburger.png'

function Navbar() {
  const [menu, setMenu] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(()=>{
    setMenu(Utility.navMenu)
  },[])

  return (
    <nav className="w-full bg-[#1D1D1D] px-7 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white">
          <a href="/">
            <img src={mainLogo} alt="main-logo" />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="ml-20 text-white text-lg text-center hidden lg:flex flex-grow justify-center items-center">
          <ul className="flex space-x-4">
            {
              menu && menu.map((item, index) => (
                <li key={index}><a href={item.route}>{item.title}</a></li>
              )) 
            }</ul>
        </div>


        {/* Sign In and Sign Up Buttons */}
        <div className="space-x-2 hidden lg:flex flex-row">
          <button className="border border-white text-white rounded-full px-5 py-2 hover:text-green-300">LOG IN</button>
          <button className="border border-white text-white rounded-full px-5 py-2 hover:text-green-300">SIGN UP</button>
        </div>
        <img 
          className="block lg:hidden" 
          onClick={()=> setToggle(!toggle)} 
          src={HamburgerIcon} 
          alt="menu" 
          />

          {
            toggle && (
                <div className='w-full h-fit flex flex-col absolute left-0 mt-[65vh] md:mt-[55vh] p-[20px] bg-[#2a2a2a]'
                >
                    {
                        menu && menu.map((item, index) => (
                            <div
                              key={index}
                              onClick={() => {
                                  setToggle(!toggle)
                              }}
                              className='w-full float-left h-[60px] text-white flex items-center content-center hover:font-bold cursor-pointer'
                            >
                                 <span key={index}><a href={item.route}>{item.title}</a></span>
                            </div>
                        ))
                    }
                    <div className="flex lg:hidden justify-center gap-10 pt-[40px]">
                      <button className="text-white underline">LOG IN</button>
                      <div className='w-[1px] border'/>
                      <button className="text-white underline">SIGN UP</button>
                    </div>
                </div>
            )
        }
    </nav>
  );
}

export default Navbar;
