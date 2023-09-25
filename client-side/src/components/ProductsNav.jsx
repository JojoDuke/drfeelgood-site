import React from 'react';
import all from '../assets/pNav-icons/all.png';
import flowers from '../assets/pNav-icons/flowers.png';
import edibles from '../assets/pNav-icons/edibles.png';
import vapes from '../assets/pNav-icons/vapes.png';
import concentrates from '../assets/pNav-icons/concentrates.png';
import preRolls from '../assets/pNav-icons/pre-rolls.png';
import accessories from '../assets/pNav-icons/accessories.png';
import merchandise from '../assets/pNav-icons/merch.png';

function ProductsNav() {
  return (
    <div className='w-full'>
      <div className="mt-12 text-white text-md text-center">
        <ul className="grid grid-cols-2 gap-y-[50px] sm:grid-cols-4 lg:flex lg:space-x-7 lg:justify-center ">
          <li className="text-center flex flex-col items-center justify-center">
            <a href="/products">
              <div className="flex flex-col items-center">
                <img className="pb-2 mx-auto" src={all} alt="all products image" />
                <span>ALL</span>
              </div>
            </a>
          </li>
          <li className="text-center flex flex-col items-center justify-center">
            <a href="/products">
              <div className="flex flex-col items-center">
                <img className="pb-2 mx-auto" src={flowers} alt="flowers image" />
                <span>FLOWERS</span>
              </div>
            </a>
          </li>
          <li className="text-center flex flex-col items-center justify-center">
            <a href="/products">
              <div className="flex flex-col items-center">
                <img className="pb-2 mx-auto" src={edibles} alt="edibles image" />
                <span>EDIBLES</span>
              </div>
            </a>
          </li>
          <li className="text-center flex flex-col items-center justify-center">
            <a href="/products">
              <div className="flex flex-col items-center mt-2">
                <img className=" mb-3 mx-auto" src={vapes} alt="vapes image" />
                <span className='mt-1'>VAPES</span>
              </div>
            </a>
          </li>
          <li className="text-center flex flex-col items-center justify-center">
            <a href="/products">
              <div className="flex flex-col items-center">
                <img className="pb-2 mx-auto" src={concentrates} alt="concentrates image" />
                <span>CONCENTRATES</span>
              </div>
            </a>
          </li>
          <li className="text-center flex flex-col items-center justify-center">
            <a href="/products">
              <div className="flex flex-col items-center">
                <img className="pb-2 mx-auto" src={preRolls} alt="pre-rolls image" />
                <span className='mb-2'>PRE-ROLLS</span>
              </div>
            </a>
          </li>
          <li className="text-center flex flex-col items-center justify-center">
            <a href="/products">
              <div className="flex flex-col items-center">
                <img className="pb-2 mx-auto" src={accessories} alt="accessories image" />
                <span>ACCESSORIES</span>
              </div>
            </a>
          </li>
          <li className="text-center flex flex-col items-center justify-center">
            <a href="/products">
              <div className="flex flex-col items-center justify-center">
                <img className="pb-2 mx-auto" src={merchandise} alt="merchandise image" />
                <span>MERCHANDISE</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductsNav;
