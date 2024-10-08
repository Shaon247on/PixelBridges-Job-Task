import Image from 'next/image';
import dog1 from '../../../public/Image/dog-1.png';
import React from 'react';

const Banner = () => {
    return (
        <React.Fragment>
            <div className="slanted-box gradient-background lg:overflow-auto flex justify-center items-center">
                <div className='w-[231px] h-[25px] bg-[#fff6a1] absolute top-8 rounded-2xl hidden lg:inline' />
                <div className='w-[710pc] h-[385px] hidden lg:block'></div>
                <div className='text-center lg:text-end lg:mr-[60px] -mt-[50px] md:mt-[-150px] lg:mt-[-150px]'>
                    <h3 className='text-[48px] md:text-[72px] lg:text-[100px] font-Montserrat font-black text-[#f87a01]'>History of</h3>
                    <p className='font-Cheesburga text-[54px] md:text-[105px] lg:text-[220px] -mb-5'>ALABAY</p>
                    <p className='mt-8 md:mt-0 lg:text-[46px] md:w-[400px] lg:w-[769px] h-[532px] font-Kumbh font-bold text-[#353535] text-center lg:text-end'>The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.</p>
                </div>
            </div>
            <Image src={dog1} alt='puppy' className='absolute top-[320px] md:top-[400px] lg:top-[325px] water-reflection z-[1]' />
        </React.Fragment>
    );
};

export default Banner;