"use client"
import React, { useRef } from "react";
import { Swiper, SwiperSlide,  } from 'swiper/react';
import { Navigation, EffectFade, Autoplay, Mousewheel } from 'swiper/modules';


import img1 from '../../../public/Image/Alabay-Merch/black-hoodie-bck.png';
import img2 from '../../../public/Image/Alabay-Merch/pink-tee-bck.png';
import img3 from '../../../public/Image/Alabay-Merch/yellow-tee-bck.png';
import img4 from '../../../public/Image/Alabay-Merch/blue-cap-bck.png';
import img5 from '../../../public/Image/Alabay-Merch/black-hoodie.png';
import img6 from '../../../public/Image/Alabay-Merch/cap-mockup.png';
import img7 from '../../../public/Image/Alabay-Merch/pink-tshirt.png';
import img8 from '../../../public/Image/Alabay-Merch/yellow tshirt.png';
import arrow from '../../../public/Image/arrow.png';

import 'swiper/css';
import 'animate.css';
import 'swiper/swiper-bundle.css';
import Image from "next/image";

const Slider = () => {
    const swiper1Ref = useRef(null);
    const swiper2Ref = useRef(null);
    return (
        <React.Fragment>
            <h1 className="text-[48px] md:text-[90px] lg:text-[220px] mt-[300px] md:mt-[180px] lg:mt-[350px] mb-[100px]  md:mb-[180px] lg:mb-[250px] text-center font-Cheesburga text-[#FFA800]">merchandise</h1>
            <div className="relative z-[4] md:w-[600px] lg:w-[1652px] h-[200px] md:h-[400px] lg:h-[1080px] mx-auto">
                {/* First Slider */}

                <Swiper
                    className="absolute w-full lg:h-full z-10 rounded-[25px]"
                    modules={[ EffectFade, Autoplay]}
                    effect="fade"
                    spaceBetween={50}                    
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    onSwiper={(swiper) => {
                        swiper1Ref.current = swiper;  // Store swiper instance for first slider
                    }}
                >
                    <SwiperSlide>
                        <Image src={img1} alt="image-1" className="w-full h-full" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={img2} alt="image-2" className="w-full h-full" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={img3} alt="image-3" className="w-full h-full" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={img4} alt="image-4" className="w-full h-full" />
                    </SwiperSlide>
                </Swiper>

                {/* Second Slider */}
                <Swiper
                    className="absolute z-30 w-full h-full top-[-270px] md:top-[-430px] lg:top-[-1150px]"
                    modules={[Autoplay]}
                    effect="fade"
                    spaceBetween={50}
                    slidesPerView={1}                    
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    onSwiper={(swiper) => {
                        swiper2Ref.current = swiper;  // Store swiper instance for second slider
                    }}
                >
                    <SwiperSlide>
                        <Image src={img5} alt="image-5" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={img7} alt="image-6" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={img8} alt="image-7" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={img6} alt="image-8" />
                    </SwiperSlide>
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="absolute bottom-[15%] md:bottom-[35%] lg:bottom-[45.5%] left-1/2 transform -translate-x-1/2 z-50 flex justify-between w-full px-2 md:px-4 lg:px-[43.5px]">
                    <button
                        onClick={() => {
                            swiper1Ref.current?.slidePrev();
                            swiper2Ref.current?.slidePrev();
                        }}
                        className="w-10 md:w-12 lg:w-24 h-24 rounded-full"
                    >
                        <Image src={arrow} alt="left" />
                    </button>
                    <button
                        onClick={() => {
                            swiper1Ref.current?.slideNext();
                            swiper2Ref.current?.slideNext();
                        }}
                        className="w-10 md:w-12 lg:w-24 h-24 rounded-full"
                    >
                        <Image src={arrow} alt="right" className="rotate-180" />
                    </button>
                </div>
                <h1 className="font-Montserrat absolute bottom-[65%] md:bottom-[35%] top-[30px] md:top-[60px] lg:top-[218px] right-[10px] md:right-[0px] lg:right-[80px] transform md:-translate-x-1/2 z-50 lg:text-[36px] font-black">Coming Soon...</h1>
            </div>
        </React.Fragment>
    );
};

export default Slider;