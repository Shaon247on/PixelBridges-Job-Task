import Image from 'next/image';
import React from 'react';
import dog1 from '../../../public/Image/dog-8.png';
import icon1 from '../../../public/Image/Mask-group.png';
import icon2 from '../../../public/Image/twitter-logo 1.png';


const Footer = () => {
    return (
        <div className='my-[400px]'>
            <h1 className='text-[200px] font-Cheesburga text-[#FFA800] ml-[76px]'>Social Media <br /> Links</h1>
            <div className='grid grid-cols-5 items-center justify-between mx-[70px]'>
                <div className='col-span-2 bg-linksBG w-[700px] h-[480px] bg-center justify-start bg-contain relative'>
                    <div className='absolute flex gap-[35px] items-center left-[40%] top-[104px] transform -translate-x-[50%]'>
                        <div className='w-[91px] h-[91px] p-[21px] bg-[#353535] rounded-full'>
                            <Image src={icon2} alt='Icon-1' className='' />
                        </div>
                        <p className='col-span-2 text-[40px] text-nowrap font-Montserrat text-white font-black'>Twitter Link</p>
                    </div>
                    <div className='absolute flex gap-[35px] items-center left-[43%] top-[234px] transform -translate-x-[50%]'>
                        <div className='w-[91px] h-[91px] p-[21px] bg-[#353535] rounded-full'>
                            <Image src={icon1} alt='Icon-2' className='' />
                        </div>
                        <p className='col-span-2 text-[40px] text-nowrap font-Montserrat text-white font-black'>Telegram Link</p>
                    </div>
                </div>
                <Image src={dog1} alt='image-2' className='col-span-3 water-reflection4' />
            </div>
        </div>
    );
};

export default Footer;