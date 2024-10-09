"use client"
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'animate.css';
import 'swiper/swiper-bundle.css';
import Image from "next/image";
import cover1 from '../../../public/Image/Alabay-Games/gameProfile-1.png';
import cover2 from '../../../public/Image/Alabay-Games/gameProfile-2.png';
import arrow from '../../../public/Image/Next-Button.svg';
import arrow2 from '../../../public/Image/arrow-3.png';
import Link from "next/link";


const GameSection = () => {

    const swiper1Ref = useRef(null);
    const swiper2Ref = useRef(null);
    return (
        <React.Fragment>
            <div className='relative'>
                <div className="slanted-box-mid gradient-background4 w-[100%] z-[-1] absolute -top-[0px] md:-top-[190px] lg:-top-[430px]" />

                <h1 className='text-[90px] lg:text-[220px] text-white text-center font-Cheesburga pt-32 lg:pt-80'>Games</h1>
                <p className='text-[28px] lg:text-[64px] font-Montserrat font-black text-center'>Stay tuned for upcoming games !</p>
                <div className="mx-[10px] md:mx-[55px] mt-[120px] lg:mt-[165px]">

                    <div className="relative w-full">
                        {/* Image Slider */}
                        <Swiper
                            modules={[Navigation]}
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
                                <Image src={cover1} alt="image-1" className="w-full h-auto border-[4px] md:border-[8px] lg:border-[16px] rounded-[20px] md:rounded-[40px] lg:rounded-[85px] object-top" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={cover2} alt="image-2" className="w-full h-auto border-[4px] md:border-[8px] lg:border-[16px] rounded-[20px] md:rounded-[40px] lg:rounded-[85px] object-top" />
                            </SwiperSlide>
                        </Swiper>

                        {/* Button Slider */}
                        <div className="absolute bottom-[-10px] md:bottom-[20px] lg:bottom-[160px] w-[454px] h-[110px] left-[27%]  md:left-[30%] lg:left-[50%] transform lg:-translate-x-1/2 flex items-center justify-center z-10">
                            <Swiper
                                modules={[EffectFade]}
                                effect="fade"
                                spaceBetween={50}
                                slidesPerView={1}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                onSwiper={(swiper) => {
                                    swiper2Ref.current = swiper;  // Store swiper instance for first slider
                                }}
                            >
                                <SwiperSlide>
                                    <Link href="/Games/Guardian"><button className="bg-[#843AFC] font-Montserrat text-[14px] md:text-[18px] lg:text-[40px] flex items-center gap-[10px] md:gap-[20px] lg:gap-[45px] font-black text-center text-white rounded-full py-2 md:py-[10px] lg:py-[34px] px-[20px] md:px-[40px] lg:px-[78px]">DISCOVER
                                        <Image src={arrow2} alt="arrow" className="w-[25px] md:w-[30px] lg:w-[40px] h-[20px] md:h-[20px] lg:h-[40px]" /></button></Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link href='/Games/Heritage'><button className="bg-[#45D689] font-Montserrat text-[14px] md:text-[18px] lg:text-[40px] flex items-center gap-[10px] md:gap-[20px] lg:gap-[45px] font-black text-center text-white rounded-full py-2 md:py-[10px] lg:py-[34px] px-[20px] md:px-[40px] lg:px-[78px]">DISCOVER <Image src={arrow2} alt="arrow" className="w-[25px] md:w-[30px] lg:w-[40px] h-[20px] md:h-[20px] lg:h-[40px]" /></button></Link>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>


                    <button
                        onClick={() => {
                            swiper1Ref.current?.slideNext();
                            swiper2Ref.current?.slideNext();
                        }}
                        className="bg-[#353535] py-[15px] md:py-[40px] lg:py-[58px] px-[5px] md:px-[10px] lg:px-[21px] rounded-[28px] rotate-180 absolute z-[4] cursor-pointer bottom-[12%] md:bottom-[16%] lg:bottom-[22%] right-5 md:right-24"
                    >
                        <Image src={arrow} alt="right" className="rotate-180 w-[40px] lg:w-[80px] h-[20px] lg:h-[80px]" />
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default GameSection;