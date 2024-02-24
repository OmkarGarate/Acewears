import React, { useRef } from 'react';
import img1 from '../Images/Image1.png';
import img2 from '../Images/Image2.png';
import img3 from '../Images/Image3.png';
import img4 from '../Images/Image4.png';

function ProductPage() {
  const imgRefs = [useRef(), useRef(), useRef(), useRef()];

  const scrollToImage = (index) => {
    imgRefs[index].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='w-[80%] py-10 m-auto  flex relative justify-between gap-10'>
      <div className='flex w-max relative justify-between'>
        <div className='h-[600px] w-[80px] flex flex-col items-center justify-center sticky top-0 z-2 gap-1 mr-[-42px]'>
          <img
            src={img1}
            alt="img1"
            className='w-[80px] h-[90px] border border-black cursor-pointer'
            onClick={() => scrollToImage(0)}
          />
          <img
            src={img2}
            alt="img2"
            className='w-[80px] h-[90px] border border-black cursor-pointer'
            onClick={() => scrollToImage(1)}
          />
          <img
            src={img3}
            alt="img3"
            className='w-[80px] h-[90px] border border-black cursor-pointer'
            onClick={() => scrollToImage(2)}
          />
          <img
            src={img4}
            alt="img4"
            className='w-[80px] h-[90px] border border-black cursor-pointer'
            onClick={() => scrollToImage(3)}
          />
        </div>
        <div className='w-[500px] h-[2436px]'>
            <div className='flex flex-col gap-3 w-[500px] h-[2436px] items-center justify-center'>
                <img ref={imgRefs[0]} src={img1} alt="img1" className='w-[500px] h-[600px]'/>
                <img ref={imgRefs[1]} src={img2} alt="img2" className='w-[500px] h-[600px] '/>
                <img ref={imgRefs[2]} src={img3} alt="img3" className='w-[500px] h-[600px] '/>
                <img ref={imgRefs[3]} src={img4} alt="img4" className='w-[500px] h-[600px] '/>
            </div>
        </div>
      </div>
      <div className='h-[100vh] w-[55%]  sticky right-0 top-0'>
        <h1 className='text-4xl font-bold'>Classic Style Women Regular Fit T - Shirt - Charcoal Black</h1>
        <p className='text-orange-500 text-2xl font-semibold'>Unisex</p>
      </div>
    </div>
    
  );
}

export default ProductPage;
