import React from 'react';
import mainLogo from '../assets/main-logo.png';

function Footer() {
  return (
    <footer className="flex flex-row justify-between items-center px-20 bg-[#131313] text-white p-4 absolute bottom-0 w-full">
      <img src={mainLogo} alt="main-logo" />
      <h2 className='text-[#BD64D8]'>Dr FEELGOOD</h2>
      <h2>NEW MEMBERS</h2>
      <h2>SOCIAL MEDIA</h2>
    </footer>
  );
}

export default Footer;
