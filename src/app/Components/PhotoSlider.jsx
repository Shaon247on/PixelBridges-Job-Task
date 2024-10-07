"use client"
import React, { useRef, useState } from 'react';
import Image from 'next/image';

// local imports 

// photos
import dog1 from '../../../public/Image/dog-3.png';
import dog2 from '../../../public/Image/dog-4.png';
import dog3 from '../../../public/Image/dog-5.png';
import dog4 from '../../../public/Image/dog-6.png';
// svg
import nextButton from '../../../public/Image/Next-Button.svg';
// videos
import video1 from "../../../public/Videos/video-1.mp4";
import video2 from '../../../public/Videos/video-2.mp4';
import video3 from '../../../public/Videos/video-3.mp4';
import video4 from '../../../public/Videos/video-4.mp4';
// Import for Swtper

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/scrollbar';
// styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const PhotoSlider = () => {
    const [toggle, setToggle] = useState(1)
    const swiper1Ref = useRef(null);
    const swiper2Ref = useRef(null);
    const swiper3Ref = useRef(null);
    return (
        <React.Fragment>
            <div className='flex items-center justify-center gap-11 z-[10] relative'>
                <button onClick={() => setToggle(1)} className={`font-Montserrat ${toggle === 1 ? "text-[#ffa800]" : "text=white"} font-black text-[32px]`}>All</button>
                <button onClick={() => setToggle(2)} className={`font-Montserrat ${toggle === 2 ? "text-[#ffa800]" : "text=white"} font-black text-[32px]`}>Photo</button>
                <button onClick={() => setToggle(3)} className={`font-Montserrat ${toggle === 3 ? "text-[#ffa800]" : "text=white"} font-black text-[32px]`}>Video</button>
            </div>

            <div className='mb-16 flex items-center gap-6 mt-[37px] pb-48 pt-[20px] bg-white relative z-[100]'>

                {/* All slider */}
                <div className={`${toggle === 1 ? "block" : "hidden"} w-[1522px] h-[369px] ml-[75px]`}>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={3}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => {
                            swiper1Ref.current = swiper;  // Store swiper instance for first slider
                        }}
                        onSlideChange={() => console.log('slide change')}
                        loop={true}
                    >
                        <SwiperSlide>
                            <div className='w-[456px] h-[310px] rounded-lg bg-[#6a6a6a] flex items-center justify-center'>
                                <Image src={dog1} alt='Image-1' className='object-cover object-center' />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='w-[456px] h-[310px] rounded-lg flex items-center justify-center bg-[#6a6a6a]'>
                                <video 
                                 src={video1}
                                 autoPlay                                  
                                 style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }} 
                                 loop 
                                 muted 
                                />
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className='w-[456px] h-[310px] rounded-lg flex items-center justify-center bg-[#6a6a6a]'>
                                <Image src={dog2} alt='Imag-2' className='object-cover object-center' />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='w-[456px] h-[310px] rounded-lg flex items-center justify-center bg-[#6a6a6a]'>
                                <video 
                                 src={video2}
                                 autoPlay                                  
                                 style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }} 
                                 loop 
                                 muted 
                                />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='w-[456px] h-[310px] rounded-lg flex items-center justify-center bg-[#6a6a6a]'>
                                <Image src={dog3} alt='Image-3' className='object-cover object-center' />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='w-[456px] h-[310px] rounded-lg flex items-center justify-center bg-[#6a6a6a]'>
                                <video 
                                 src={video3}
                                 autoPlay                                  
                                 style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }} 
                                 loop 
                                 muted 
                                />
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className='w-[456px] h-[310px] rounded-lg flex items-center justify-center bg-[#6a6a6a]'>
                                <Image src={dog4} alt='Imag-4' />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='w-[456px] h-[310px] rounded-lg flex items-center justify-center bg-[#6a6a6a]'>
                                <video 
                                 src={video4}
                                 autoPlay                                  
                                 style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }} 
                                 loop 
                                 muted 
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* Photo  */}

                <div className={`${toggle === 2 ? "block" : "hidden"} w-[1522px] h-[369px] ml-[75px]`}>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={3}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => {
                            swiper3Ref.current = swiper;  // Store swiper instance for first slider
                        }}
                        onSlideChange={() => console.log('slide change')}
                        loop={true}
                    >
                        <SwiperSlide>
                            <div className='w-[456px] h-[310px] rounded-lg bg-[#6a6a6a] flex items-center justify-center'>
                                <Image src={dog1} alt='Image-1' className='object-cover object-center' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-[456px] h-[310px] rounded-lg flex items-center justify-center bg-[#6a6a6a]'>
                                <Image src={dog2} alt='Imag-2' className='object-cover object-center' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-[456px] h-[310px] rounded-lg flex items-center justify-center bg-[#6a6a6a]'>
                                <Image src={dog3} alt='Image-3' className='object-cover object-center' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-[456px] h-[310px] rounded-lg flex items-center justify-center bg-[#6a6a6a]'>
                                <Image src={dog4} alt='Imag-4' />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* video  */}


                
                <div className={`${toggle === 3 ? "block" : "hidden"} w-[1522px] h-[369px] ml-[75px]`}>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={3}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => {
                            swiper2Ref.current = swiper;  // Store swiper instance for first slider
                        }}
                        onSlideChange={() => console.log('slide change')}
                        loop={true}
                    >
                        
                        <SwiperSlide>
                            <div className='w-[456px] h-[310px] rounded-lg flex items-center justify-center bg-[#6a6a6a]'>
                                <video 
                                 src={video1}
                                 autoPlay                                  
                                 style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }} 
                                 loop 
                                 muted 
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-[456px] h-[310px] rounded-lg flex items-center justify-center bg-[#6a6a6a]'>
                                <video 
                                 src={video2}
                                 autoPlay                                  
                                 style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }} 
                                 loop 
                                 muted 
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-[456px] h-[310px] rounded-lg flex items-center justify-center bg-[#6a6a6a]'>
                                <video 
                                 src={video3}
                                 autoPlay                                  
                                 style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }} 
                                 loop 
                                 muted 
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-[456px] h-[310px] rounded-lg flex items-center justify-center bg-[#6a6a6a]'>
                                <video 
                                 src={video4}
                                 autoPlay                                  
                                 style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }} 
                                 loop 
                                 muted 
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>


                <button
                    onClick={() => {
                        swiper1Ref.current?.slideNext();                       
                        swiper2Ref.current?.slideNext();                       
                        swiper3Ref.current?.slideNext();                       
                    }}
                    className="bg-[#353535] py-[58px] px-[32px] rounded-[28px]"
                >
                    <Image src={nextButton} alt="right" className="w-[56.85px] h-[56.85px]" />
                </button>
            </div>
        </React.Fragment>
    );
};

export default PhotoSlider;