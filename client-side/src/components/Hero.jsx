import React from 'react';
import delivery from '../assets/delivery.png';
import shop from '../assets/shop.png';
import features from '../assets/features.png';
import mainLogo from '../assets/main-logo.png';
import newDrops from '../assets/new-drops.png';

function Hero() {
  return (
    <div className='py-40'>
      <div className='text-center flex flex-col justify-center items-center'>
        <h1 className='text-white text-[26px] font-bold mb-10'>START YOUR SHOPPING EXPERIENCE NOW!</h1>

        {/* Delivery And Pickup */}
        <div className='flex flex-row justify-center items-center gap-10 mb-20'>
          <div className='h-[600px] w-[400px] bg-[#54B5D5] rounded-md flex flex-col justify-center items-center hover:bg-[#88d6f0] transition duration-300 ease-in-out cursor-pointer'>
            <img src={delivery} alt="truck-icon" />
            <p className='text-white text-[20px] font-bold mt-12'>DELIVERY</p>
          </div>
          <div className='h-[600px] w-[400px] bg-[#BE63DA] rounded-md flex flex-col justify-center items-center hover:bg-[#D893F5] transition duration-300 ease-in-out cursor-pointer'>
            <img src={shop} alt="shop-icon" />
            <p className='text-white text-[20px] font-bold mt-12'>PICK-UP</p>
          </div>
        </div>

        {/* MainLogo */}
        <img src={mainLogo} alt="main logo" width="250px" height="250px"/>
        <h1 className="text-white text-[24px] mt-20 mb-12">Featured In</h1>

        {/* Featured In */}
        <img src={features} alt="main logo" width="800px"/>

        {/* The Rest */}
        <h1 className="text-white text-[24px] mt-20 mb-12">See all the ways to enjoy your cannabis</h1>
        
        <div className='flex flex-col justify-center items-center gap-5'>
          <div className='bg-white cursor-pointer rounded w-[400px] py-6'>
            <p className='font-bold text-[22px]'>FLOWERS</p>
          </div>
          <div className='bg-white cursor-pointer rounded w-[400px] py-6'>
            <p className='font-bold text-[22px]'>EDIBLES</p>
          </div>
          <div className='bg-white cursor-pointer rounded w-[400px] py-6'>
            <p className='font-bold text-[22px]'>VAPES</p>
          </div>
          <div className='bg-white cursor-pointer rounded w-[400px] py-6'>
            <p className='font-bold text-[22px]'>CONCENTRATES</p>
          </div>
          <div className='bg-white cursor-pointer rounded w-[400px] py-6'>
            <p className='font-bold text-[22px]'>PRE-ROLLS</p>
          </div>
          <div className='bg-white cursor-pointer rounded w-[400px] py-6'>
            <p className='font-bold text-[22px]'>ACCESSORIES</p>
          </div>
        </div>

        <h1 className="text-white text-[24px] mt-20 mb-24">New Drops</h1>

        <img src={newDrops} alt="new-drops image" width="1000px"/>
      </div>
    </div>
  )
}

export default Hero;