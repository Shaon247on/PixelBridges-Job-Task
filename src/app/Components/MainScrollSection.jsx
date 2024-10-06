import React from 'react';
import Slider from './Slider';
import Banner from './Banner';



const MainScrollSection = () => {
    return (
        <div className="absolute text-scroll w-[1796px] h-[790px] rounded-xl z-10 overflow-hidden overflow-y-scroll left-1/2 transform -translate-x-1/2 bg-white -mt-24">

           <Banner/>
            
            <Slider />
        </div>
    );
};

export default MainScrollSection;