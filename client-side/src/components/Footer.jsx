import React from 'react';
import mainLogo from '../assets/main-logo.png';

function Footer() {
  return (
    <footer className="flex flex-row justify-between items-start px-20 py-10 bg-[#131313] text-white bottom-0 w-full">
      <img src={mainLogo} alt="main-logo" />
      
      <div className="">
        <h2 className='text-[#BD64D8] font-bold mb-5'>DR FEELGOOD</h2>

        <ul className="">
          <li className="">
            <a href="/">
              PRODUCTS
            </a>
          </li>
          <li className="">
            <a href="/">
              BRANDS
            </a>
          </li>
          <li className="">
            <a href="/">
              DELIVERY MAP
            </a>
          </li>
          <li className="">
            <a href="/">
              ABOUT
            </a>
          </li>
          <li className="">
            <a href="/">
              CONTACT US
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h2 className='text-[#BD64D8] font-bold mb-5'>NEW MEMBERS</h2>

        <ul>
            <li>
                <a href="/">
                SIGN IN
                </a>
            </li>
            <li>
                <a href="/">
                SIGN UP
                </a>
            </li>
            <li>
                <a href="/">
                PRIVACY POLICY
                </a>
            </li>
            <li>
                <a href="/">
                TERMS AND CONDITIONS
                </a>
            </li>
        </ul>
      </div>

      <div>
        <h2 className='text-[#BD64D8] font-bold mb-5'>SOCIAL MEDIA</h2>

        <ul>
            <li>
                <a href="/">
                    INSTAGRAM
                </a>
            </li>
            <li>
                <a href="/">
                    TWITTER
                </a>
            </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
