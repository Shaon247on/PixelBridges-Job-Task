import React from 'react';


const CardSection = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 mx-[30px] lg:mx-[76px] gap-3 md:gap-[19px]'>
            <div className="col-span-1 bg-gradient-to-b from-[#DBC70C] flex items-center justify-center rounded-t-[30px] md:rounded-tl-[30px] flex-col py-6">
                <p className='text-[20px] lg:text-[40px] font-black font-Montserrat text-white text-center lg:leading-[46px]'>Community Building</p>
                <p className='text-[16px] lg:text-[32px] font-black font-Montserrat text-white text-center'>and Initial Launch</p>
                <div className="image-background1 w-full h-[200px] md:h-[210px] lg:h-[505px]" />
            </div>
            <div className="col-span-1 bg-gradient-to-b rounded-t-[30px] md:rounded-none from-[#00d4d4] flex items-center justify-center flex-col py-6">
                <p className='text-[20px] lg:text-[40px] font-black font-Montserrat text-white text-center '>Merchandise</p>
                <p className='text-[16px] lg:text-[32px] font-black font-Montserrat text-white mb-10'>Store Launch</p>
                <div className="image-background2 w-full h-[200px] md:h-[210px] lg:h-[505px]" />

            </div>
            <div className="col-span-1 bg-gradient-to-b rounded-t-[30px] md:rounded-none from-[#D427FF] flex items-center justify-center flex-col py-6">
                <p className='text-[20px] lg:text-[40px] font-black font-Montserrat text-white text-center lg:leading-[46px]'>Community Events</p>
                <p className='text-[16px] lg:text-[32px] font-black font-Montserrat text-white'>and contests</p>
                <div className="image-background3 w-full h-[200px] md:h-[210px] lg:h-[505px]" />
            </div>
            <div className="col-span-1 bg-gradient-to-b from-[#8F3A3C] flex items-center justify-center rounded-t-[30px] md:rounded-tr-[30px] flex-col py-6">
                <p className='text-[20px] lg:text-[40px] font-black font-Montserrat text-white text-center lg:leading-[46px]'>Expansion and New</p>
                <p className='text-[16px] lg:text-[32px] font-black font-Montserrat text-white'>Features</p>
                <div className="image-background4 w-full h-[200px] md:h-[210px] lg:h-[505px]" />
            </div>
        </div>
    );
};

export default CardSection;