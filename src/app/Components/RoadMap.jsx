import Image from 'next/image';
import React from 'react';
import dog1 from '../../../public/Image/dog-2.png';

const RoadMap = () => {
    return (
        <div className='absolute z-20 w-full mt-20 md:mt-36 lg:mt-[200px]'>
            <h1 className='text-[68px] md:text-[90px] lg:text-[220px] font-Cheesburga text-white  ml-10 md:ml-14 lg:ml-24'>ROAD MAP</h1>
            <div className='flex flex-col md:flex-row items-center justify-between mt-[350px] mr-10 ml-16 lg:ml-32'>
                <div className='lg:text-[44px] w-[300px] lg:w-[685px] font-bold font-Kumbh mt-28 md:-mt-36 lg:mt-10'>
                    <h1 className='lg:leading-[50px]'>Our journey is just beginning. Explore our roadmap to see the exciting milestones and future plans we have in store. </h1>
                    <h1 className='lg:leading-[50px] mt-5 lg:mt-14 text-[#ffa800]'>Join us as we grow and achieve new heights.</h1>
                </div>
                <Image src={dog1} alt='map-dog' className='absolute top-[116px] lg:top-[260px] right-4 lg:right-12 md:w-[400px] lg:w-[941px]  water-reflection3'/>
            </div>
        </div>
    );
};

export default RoadMap;