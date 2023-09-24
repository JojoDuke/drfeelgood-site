import React from 'react';
import delivery from '../assets/delivery.png';
import shop from '../assets/shop.png';
import features from '../assets/features.png';
import mainLogo from '../assets/main-logo.png';

function Hero() {
  return (
    <div className='py-40'>
      <div className='text-center flex flex-col justify-center items-center'>
        <h1 className='text-white text-[26px] font-bold mb-10'>START YOUR SHOPPING EXPERIENCE NOW!</h1>

        {/* Delivery And Pickup */}
        <div className='flex flex-row justify-center items-center gap-10 mb-20'>
          <div className='h-[600px] w-[400px] bg-[#54B5D5] rounded-md flex flex-col justify-center items-center'>
            <img src={delivery} alt="truck-icon" />
            <p className='text-white text-[20px] font-bold mt-12'>DELIVERY</p>
          </div>
          <div className='h-[600px] w-[400px] bg-[#BE63DA] rounded-md flex flex-col justify-center items-center'>
            <img src={shop} alt="truck-icon" />
            <p className='text-white text-[20px] font-bold mt-12'>PICK-UP</p>
          </div>
        </div>

        {/* MainLogo */}
        <img src={mainLogo} alt="main logo" width="250px" height="250px"/>
        <h1 className="text-white text-[24px] mt-20">Featured In</h1>

        {/* Featured In */}
        <img src={features} alt="main logo" width="200px" height="200px"/>

        {/* The Rest */}
        <p>P</p>
      </div>
    </div>
  )
}

export default Hero;