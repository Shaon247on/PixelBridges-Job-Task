import React from 'react';

const TokenLabel = ({label, title}) => {
    return (
        <div className=' lg:w-[682px] lg:h-[193px] rounded-[15px] lg:rounded-[35px] bg-[#353535] font-Montserrat py-[10px] lg:py-7 px-[50px] lg:px-[75px] mb-[30px] lg:mb-[68px] shadow-drop'>
            <p className='text-[14px] lg:text-[42px] font-black text-white'>{label}</p>
            <h1 className='text-[#FFF280] text-[24px] lg:text-[73px] font-black lg:-mt-4'>{title}</h1>
        </div>
    );
};

export default TokenLabel;