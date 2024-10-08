import React from 'react';
import TokenLabel from './TokenLabel';
import dog1 from '../../../public/Image/dog-7.png';
import Image from 'next/image';

const TokenSection = () => {
    return (
        <div className='relative border-4 border-white'>
            <div className="slanted-box-mid gradient-background3 w-[100%] top-0 z-[1] absolute" />
            <h1 className='text-[48px] md:text-[90px] lg:text-[220px] font-Cheesburga text-white relative z-[2] mt-[120px] md:mt-[140px] lg:mt-[330px] ml-[50px] md:ml-[30px] lg:ml-[60px]'>Tokenomics</h1>  
            <div className='relative z-[2] flex flex-col md:flex-row items-center justify-center md:justify-between md:ml-[70px] mt-9 md:mt-0'>
                <div>
                    <TokenLabel label="LIQUIDITY" title="LOCKED"/>
                    <TokenLabel label="CONTRACT" title="RENOUNCED"/>
                    <TokenLabel label="TAXES" title="0%"/>
                </div>
                <div>
                    <Image src={dog1} alt='Dog Image' className='water-reflection4'/>
                </div>
            </div>
        </div>
    );
};

export default TokenSection;