import React from 'react';
import Banner from '../../assets/Products/blackpattern.png';
const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  };

function Products() {
  return (
    <div
    className='mb-20 text-white bg-gray-100 dark:bg-gray-800'
    data-aos='zoom-in'
    style={BannerImg}
  >
    <div className='container py-10 backdrop-blur-sm'>
      <div className='max-w-xl mx-auto space-y-6'>
        <h1 className='text-2xl text-white font-semibold !text-center sm:text-left sm:text-4xl '>
          Get Notified About New Products
        </h1>
        
      </div>
    </div>
  </div>
  )
}

export default Products