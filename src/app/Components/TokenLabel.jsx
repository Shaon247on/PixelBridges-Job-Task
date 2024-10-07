import React from 'react';

const TokenLabel = ({label, title}) => {
    return (
        <div className='w-[682px] h-[193px] rounded-[35px] bg-[#353535] font-Montserrat py-7 px-[75px] mb-[68px] shadow-drop'>
            <p className='text-[42px] font-black text-white'>{label}</p>
            <h1 className='text-[#FFF280] text-[73px] font-black -mt-4'>{title}</h1>
        </div>
    );
};

export default TokenLabel;