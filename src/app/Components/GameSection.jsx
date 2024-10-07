"use client"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'animate.css';
import 'swiper/swiper-bundle.css';
import Image from "next/image";
import cover1 from '../../../public/Image/Alabay-Games/gameProfile-1.png';
import cover2 from '../../../public/Image/Alabay-Games/gameProfile-2.png';
import arrow from '../../../public/Image/Next-Button.svg';


const GameSection = () => {
    const [toggle, setToggle] = useState(true)
    const swiper1Ref = useRef(null);
    const swiper2Ref = useRef(null);
    return (
        <React.Fragment>
            <div className='relative'>
                <div className="slanted-box-mid gradient-background4 w-[100%] z-[-1] absolute -top-[430px]" />

                <h1 className='text-[220px] text-white text-center font-Cheesburga pt-80'>Games</h1>
                <p className='text-[64px] font-Montserrat font-black text-center'>Stay tuned for upcoming games !</p>
                <div className="mx-[55px] ">
                    
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            effect="fade"
                            spaceBetween={50}
                            slidesPerView={1}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => {
                                swiper1Ref.current = swiper;  // Store swiper instance for first slider
                            }}
                        >
                            <SwiperSlide>
                                <Image src={cover1} alt="image-1" className="w-full h-auto border-[16px] rounded-[85px] object-top" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={cover2} alt="image-2" className="w-full h-auto border-[16px] rounded-[85px] object-top " />
                            </SwiperSlide>
                        </Swiper>
                    

                    {/* Button swiper */}

                   
                        <Swiper
                            modules={[Navigation, EffectFade, Autoplay]}
                            effect="fade"
                            spaceBetween={50}
                            slidesPerView={1}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => {
                                swiper2Ref.current = swiper;  // Store swiper instance for first slider
                            }}
                        >
                            <SwiperSlide>
                                <button className="bg-[#843AFC] font-Montserrat text-[40px] font-black text-center text-white rounded-full py-[34px] px-[78px]">Discover</button>
                            </SwiperSlide>
                            <SwiperSlide>
                                <button className="bg-[#45D689] font-Montserrat text-[40px] font-black text-center text-white rounded-full py-[34px] px-[78px]">Discover</button>
                            </SwiperSlide>
                        </Swiper>
                   

                    <button
                        onClick={() => {
                            swiper1Ref.current?.slideNext();
                            swiper2Ref.current?.slideNext();
                        }}
                        className="bg-[#353535] py-[50px] px-[21px] rounded-[28px] rotate-180 absolute z-[3] bottom-[22%] right-24"
                    >
                        <Image src={arrow} alt="right" className="rotate-180" />
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default GameSection;