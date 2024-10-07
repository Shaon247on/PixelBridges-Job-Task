import Image from 'next/image';
import dog1 from '../../../public/Image/dog-1.png';
import React from 'react';

const Banner = () => {
    return (
        <React.Fragment>
            <div className="slanted-box gradient-background overflow-auto flex">
                <div className='w-[231px] h-[25px]  bg-[#fff6a1] absolute top-8 rounded-2xl' />
                <div className='w-[710pc] h-[385px]'></div>
                <div className='text-end mr-[60px] mt-[-200px]'>
                    <h3 className='text-[100px] font-Montserrat font-black text-[#f87a01]'>History of</h3>
                    <p className='font-Cheesburga text-[220px] -mb-5'>ALABAY</p>
                    <p className='text-[46px] w-[769px] h-[532px] font-Kumbh font-bold text-[#353535] text-end'>The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.</p>
                </div>
            </div>
            <Image src={dog1} alt='puppy' className='absolute top-[370px] water-reflection z-[1]' />
        </React.Fragment>
    );
};

export default Banner;