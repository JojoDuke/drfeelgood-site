import React from 'react';

function ProductsNav() {
  return (
    <div>
      <div className="mt-16 text-white text-md text-center flex flex-grow justify-center items-center">
        <ul className="flex space-x-7">
          <li><a href="/products">ALL</a></li>
          <li><a href="/brands">FLOWERS</a></li>
          <li><a href="/delivery-map">EDIBLES</a></li>
          <li><a href="/about">VAPES</a></li>
          <li><a href="/contact">CONCENTRATES</a></li>
          <li><a href="/contact">PRE-ROLLS</a></li>
          <li><a href="/contact">ACCESSORIES</a></li>
          <li><a href="/contact">MERCHANDISE</a></li>
        </ul>
      </div>
    </div>
  )
}

export default ProductsNav;