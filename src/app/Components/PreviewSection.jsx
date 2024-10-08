"use client"
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'animate.css';
import 'swiper/swiper-bundle.css';
import Image from "next/image";


import image1 from '../../../public/Image/Alabay-Games/Abilities-2.png';
import image2 from '../../../public/Image/Alabay-Games/artifacts-2.png';
import image3 from '../../../public/Image/Alabay-Games/guard-2.png';
import image4 from '../../../public/Image/Alabay-Games/image-1.png';
import image5 from '../../../public/Image/Alabay-Games/image-2.png';

import nextButton from '../../../public/Image/Next-Button.svg';


const PreviewSection = () => {
    const swiper1Ref = useRef(null);
    return (
        <React.Fragment>

            <div className='flex items-center justify-start ml-[55px] mb-[42px] mt-[130px] gap-11 z-[10] relative'>
                <h1 className='font-Montserrat text-[#ffa800] font-black text-[28px] md:text-[48px] lg:text-[64px]'>Game <span className='text-[#353535]'>Preview</span></h1>
            </div>

            {/* Photo  */}

            <div className='mx-[50px] gap-5 lg:ml-[75px] flex flex-col lg:flex-row items-center justify-between'>
                <Swiper
                    // install Swiper modules
                    className='w-full lg:w-[1552px] h-auto lg:h-[489px]' 
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={3}
                    onSwiper={(swiper) => {
                        swiper1Ref.current = swiper;  // Store swiper instance for first slider
                    }}
                    onSlideChange={() => console.log('slide change')}
                    loop={true}
                    breakpoints={{
                        1024:{slidesPerView:3},
                        768:{slidesPerView:2},
                        375:{slidesPerView: 1}
                    }}
                >
                    <SwiperSlide>
                        <div className='lg:w-[480px] lg:h-[489px] bg-[#6a6a6a] flex items-center rounded-[25px] justify-center'>
                            <Image src={image1} alt='Image-1' className='object-cover object-center rounded-[25px]' />
                        </div>
                    </SwiperSlide>                    
                    <SwiperSlide>
                        <div className='lg:w-[480px] lg:h-[489px] bg-[#6a6a6a] flex items-center rounded-[25px] justify-center'>
                            <Image src={image2} alt='Image-2' className='object-cover object-center rounded-[25px]' />
                        </div>
                    </SwiperSlide>                    
                    <SwiperSlide>
                        <div className='lg:w-[480px] lg:h-[489px] bg-[#6a6a6a] flex items-center rounded-[25px] justify-center'>
                            <Image src={image3} alt='Image-3' className='object-cover object-center rounded-[25px]' />
                        </div>
                    </SwiperSlide>                    
                    <SwiperSlide>
                        <div className='lg:w-[480px] lg:h-[489px] bg-[#6a6a6a] flex items-center rounded-[25px] justify-center'>
                            <Image src={image4} alt='Image-4' className='object-cover object-center rounded-[25px]' />
                        </div>
                    </SwiperSlide>                    
                    <SwiperSlide>
                        <div className='lg:w-[480px] lg:h-[489px] bg-[#6a6a6a] flex items-center rounded-[25px] justify-center'>
                            <Image src={image5} alt='Image-5' className='object-cover object-center rounded-[25px]' />
                        </div>
                    </SwiperSlide>  
                </Swiper>
                <button
                    onClick={() => {
                        swiper1Ref.current?.slideNext();
                    }}
                    className="bg-[#353535] py-[15px] md:py-[22px] lg:py-[58px] px-[25px] md:px-[40px] lg:px-[32px] rounded-[28px] shadow-drop"
                >
                    <Image src={nextButton} alt="right" className="w-[56.85px] h-[56.85px]" />
                </button>
            </div>
        </React.Fragment>
    );
};

export default PreviewSection;