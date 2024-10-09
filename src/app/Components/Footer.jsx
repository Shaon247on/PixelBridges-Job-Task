import Image from 'next/image';
import React from 'react';
import dog1 from '../../../public/Image/dog-8.png';
import icon1 from '../../../public/Image/Mask-group.png';
import icon2 from '../../../public/Image/twitter-logo 1.png';


const Footer = () => {
    return (
        <div className='my-[100px] md:my-[200px] lg:my-[400px]'>
            <h1 className='text-[48px] md:text-[90px] lg:text-[200px] font-Cheesburga text-[#FFA800] ml-10 lg:ml-[76px]'>Social Media <br /> Links</h1>
            <div className='grid grid-flow-col-dense grid-cols-1 md:grid-cols-5 items-center justify-between mx-10 lg:mx-[70px]'>
                <div className='col-span-1 md:col-span-2 bg-linksBG bg-no-repeat w-[300px] lg:w-[700px] h-[200px] lg:h-[480px] bg-center bg-cover top-[310px] md:top-0  relative'>
                    <div className='absolute flex gap-[15px] lg:gap-[35px] items-center left-[40%] top-[45px] lg:top-[104px] transform -translate-x-[50%]'>
                        <div className='w-[40px] lg:w-[91px] h-[40px] lg:h-[91px] p-2 lg:p-[21px] bg-[#353535] rounded-full'>
                            <Image src={icon2} alt='Icon-1' className='' />
                        </div>
                        <p className='col-span-2 text-[18px] lg:text-[40px] text-nowrap font-Montserrat text-white font-black'>Twitter Link</p>
                    </div>
                    <div className='absolute flex gap-[15px] lg:gap-[35px] items-center left-[43%] top-[105px]  lg:top-[234px] transform -translate-x-[50%]'>
                        <div className='w-[40px] lg:w-[91px] h-[40px] lg:h-[91px] p-2 lg:p-[21px] bg-[#353535] rounded-full'>
                            <Image src={icon1} alt='Icon-2' className='' />
                        </div>
                        <p className='col-span-2 text-[18px] lg:text-[40px] text-nowrap font-Montserrat text-white font-black'>Telegram Link</p>
                    </div>
                </div>
                <Image src={dog1} alt='image-2' className='col-span-1 md:col-span-3 water-reflection4' />
            </div>
        </div>
    );
};

export default Footer;