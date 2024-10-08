"use client"
import Image from 'next/image';
import React from 'react';
import img1 from '../../../public/Image/Alabay-Games/overview.png';
import img2 from '../../../public/Image/Alabay-Games/Abilities-2.png';
import img3 from '../../../public/Image/Alabay-Games/artifacts-2.png';
import img4 from '../../../public/Image/Alabay-Games/locations-preview.png';
import arrowIcon from '../../../public/Image/Polygon-1.png';
import { motion } from "framer-motion"
import Link from 'next/link';

const HeritageSection = () => {

    const fadeInAnimationVariants = {
        initial: { y: -60 },
        animate: { y: 0, transition: { duration: .5, } },
        exit: {
            y: -100, transition: { duration: 0.1, ease: "easeOut" }
        }
    }

    const fadeOutAnimationVariants = {
        initial: { opacity: 0, y: 0 },
        animate: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
        exit: { opacity: 0, y: 0, transition: { duration: 0.1, ease: "easeOut" } }
    }

    const slideInAnimationVariants = {
        initial: { y: 200 }, animate: { y: 0, transition: { duration: .5, } },
        exit: { y: -100, transition: { duration: 1.5, ease: "easeOut" } }
    };

    return (
        <React.Fragment>
            <div className='bg-heritage bg-no-repeat bg-cover bg-center bg-fixed scroll-off'>
                <div className='p-[82px]'>
                    <div className='fixed'>
                        <h1 className='text-[96px] font-Baron text-white'>ALABAY HERITAGE</h1>
                        <p className='text-[48px] font-Baron text-[#90FFAE]'>THE LOST ADVENTURE</p>
                    </div>

                    {/* scrolled section */}

                    <div className='mt-[251px] scroll-container scroll-container1'>
                        <div className='h-[100vh] pt-10 pb-20 section pr-9'>
                            <motion.p
                                variants={fadeInAnimationVariants}
                                initial='initial'
                                whileInView="animate"
                                exit="exit"
                                className='text-[22px] font-Montserrat text-white font-bold w-[562px]'>Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors. </motion.p>
                            <motion.button
                                variants={fadeInAnimationVariants}
                                initial='initial'
                                whileInView="animate"
                                className='w-[220px] h-[66px] flex items-center  justify-between rounded-full bg-[#90FFAE] text-[23px] font-Helvetica uppercase mt-10 mb-24 px-[18px]'>
                                <span className='w-[42px] h-[42px] p-[10px] rounded-full bg-[#201E26] flex items-center justify-center'>
                                    <Image src={arrowIcon} alt='arrow-image' />
                                </span>
                                <span className='mr-[55px]'>Play</span></motion.button>
                            <div>

                                <motion.h1
                                    variants={fadeOutAnimationVariants}
                                    initial='initial'
                                    whileInView="animate"
                                    exit="exit"
                                    className='text-[32px] font-Montserrat font-bold text-white mb-6'><span className='text-[#90FFAE]'>Game</span> Preview</motion.h1>
                                <div
                                    className='flex items-center justify-start gap-5 mx-auto'>
                                    <Image src={img1} alt='image-1' className='w-[554px] h-[277px] rounded-[23px] border-[2.5px] border-white autoplay1' />
                                    <Image src={img2} alt='image-2' className='h-[277px] rounded-[23px] border-[2.5px] border-white autoplay1' />
                                    <Image src={img3} alt='image-3' className='h-[277px] rounded-[23px] border-[2.5px] border-white autoplay1' />
                                    <Image src={img4} alt='image-4' className='w-[554px] h-[277px] rounded-[23px] border-[2.5px] border-white autoplay1' />
                                </div>
                            </div>
                        </div>
                        <div
                            className='w-[1359px] h-[640px] section'>
                            <motion.h1
                                variants={slideInAnimationVariants}
                                initial='initial'
                                whileInView="animate"
                                exit="exit"
                                className='text-[32px] font-Montserrat font-bold text-[#90FFAE]'>FEATURES</motion.h1>
                            <motion.p
                                variants={slideInAnimationVariants}
                                initial='initial'
                                whileInView="animate"
                                exit="exit"

                                className='text-[22px] font-Montserrat text-white font-bold'>Explore a variety of landscapes, including <span className='text-[#90FFAE]'>mountains</span>, <span className='text-[#90FFAE]'>forests</span>, <span className='text-[#90FFAE]'>deserts</span>, and <span className='text-[#90FFAE]'>ancient ruins</span>. <br /> <br />

                                Use the Alabay's <span className='text-[#90FFAE]'>abilities</span> to solve <span className='text-[#90FFAE]'>puzzles</span> that involve moving objects, activating mechanisms, or finding hidden clues. <br /><br />

                                Discover relics that tell the story of the Alabay's ancestors, each piece contributing to a larger narrative about the breed's role in ancient history. <br /><br />

                                Unlock new skills and abilities for the Alabay, enhancing its capacity to explore and solve puzzles.
                            </motion.p>
                            <motion.p
                                variants={slideInAnimationVariants}
                                initial='initial'
                                whileInView="animate"
                                exit="exit"
                                className='text-[22px] font-Montserrat text-white font-bold'>Challenge Modes:</motion.p>
                            <motion.ul
                                variants={slideInAnimationVariants}
                                initial='initial'
                                whileInView="animate"
                                exit="exit"
                                className='text-[22px] font-Montserrat text-white font-bold'>
                                <li ><span className='text-[#90FFAE]'>Time Trials</span>: Compete in special timed challenges where the Alabai must navigate through complex mazes or
                                    complete puzzles within a time limit.</li>
                                <li ><span className='text-[#90FFAE]'>Exploration Mastery</span>: A mode that rewards players for fully exploring every nook and cranny of the game's world,
                                    uncovering all secrets</li>
                            </motion.ul>
                            <div className='flex gap-[50px] mt-[88px] '>
                                <button
                                    className='w-[220px] h-[66px] items-center flex justify-between rounded-full bg-white text-[23px] font-Helvetica px-[18px] uppercase'>
                                    <span className='w-[42px] h-[42px] p-[10px]  rounded-full bg-[#201E26] flex items-center justify-center'>
                                        <Image src={arrowIcon} alt='arrow-image' />
                                    </span><span className='mr-[55px]'>Play</span></button>
                                <Link href='\'><button
                                    className='w-[220px] h-[66px] items-center flex justify-center rounded-full bg-transparent text-white border-[5px] border-white text-[23px] font-Helvetica uppercase'>EXIT</button></Link>
                            </div>

                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </React.Fragment>
    );
};

export default HeritageSection;