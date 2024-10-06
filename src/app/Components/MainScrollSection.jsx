import React from 'react';
import Slider from './Slider';

const MainScrollSection = () => {
    return (
        <div className="absolute text-scroll h-[750px] w-[1700px] z-10 overflow-hidden overflow-y-scroll left-1/2 transform -translate-x-1/2 bg-white -mt-24">


            <div className="slanted-box mx-auto gradient-background ">

            </div>
            <Slider />
        </div>
    );
};

export default MainScrollSection;