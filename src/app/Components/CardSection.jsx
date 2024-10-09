import React from 'react';


const CardSection = () => {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 mx-[76px] gap-[19px]'>
            <div className="col-span-1 bg-gradient-to-b from-[#DBC70C] flex items-center justify-center rounded-tl-[30px] flex-col px-3 py-6">
                <p className='text-[40px] font-black font-Montserrat text-white text-center leading-[46px]'>Community Building</p>
                <p className='text-[32px] font-black font-Montserrat text-white'>and Initial Launch</p>
                <div className="image-background1 w-[377.05px] h-[505px]"/>                
            </div>
            <div className="col-span-1 bg-gradient-to-b from-[#00D4D4] flex items-center justify-center flex-col px-3 py-6">
                <p className='text-[40px] font-black font-Montserrat text-white text-center'>Merchandise</p>
                <p className='text-[32px] font-black font-Montserrat text-white mb-10'>Store Launch</p>
                <div className="image-background2 w-[377.05px] h-[505px]"/>
                
            </div>
            <div className="col-span-1 bg-gradient-to-b from-[#D427FF] flex items-center justify-center flex-col px-3 py-6">
                <p className='text-[40px] font-black font-Montserrat text-white text-center leading-[46px]'>Community Events</p>
                <p className='text-[32px] font-black font-Montserrat text-white'>and contests</p>
                <div className="image-background3 w-[377.05px] h-[505px]"/>                
            </div>
            <div className="col-span-1 bg-gradient-to-b from-[#8F3A3C] flex items-center justify-center rounded-tr-[30px] flex-col px-3 py-6">
                <p className='text-[40px] font-black font-Montserrat text-white text-center leading-[46px]'>Expansion and New</p>
                <p className='text-[32px] font-black font-Montserrat text-white'>Features</p>
                <div className="image-background4 w-[377.05px] h-[505px]"/>                
            </div>
        </div>
    );
};

export default CardSection;