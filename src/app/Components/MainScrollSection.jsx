import React from 'react';
import Slider from './Slider';
import Banner from './Banner';
import PhotoSlider from './PhotoSlider';
import ProjectSection from './ProjectSection';
import RoadMap from './RoadMap';



const MainScrollSection = () => {
    return (
        <div className="absolute text-scroll w-[1796px] h-[88%] rounded-xl z-10 overflow-hidden overflow-y-scroll left-1/2 transform -translate-x-1/2 bg-white -mt-20">

           <Banner/>
            <PhotoSlider/>
            <ProjectSection/>            
            {/* <Slider /> */}
        </div>
    );
};

export default MainScrollSection;