import Image from 'next/image';
import React from 'react';
import dog1 from '../../../public/Image/dog-2.png';

const RoadMap = () => {
    return (
        <div className='absolute z-20 w-full mt-[200px]'>
            <h1 className='text-[220px] font-Cheesburga text-white bottom-[100px] ml-24'>ROAD MAP</h1>
            <div className='flex items-center justify-between mt-[350px] mr-10 ml-32'>
                <div className='text-[44px] w-[685px] font-bold font-Kumbh'>
                    <h1 className='leading-[50px]'>Our journey is just beginning. Explore our roadmap to see the exciting milestones and future plans we have in store. </h1>
                    <h1 className='leading-[50px] mt-14 text-[#ffa800]'>Join us as we grow and achieve new heights.</h1>
                </div>
                <Image src={dog1} alt='' className='absolute top-[260px] right-12 water-reflection3'/>
            </div>
        </div>
    );
};

export default RoadMap;