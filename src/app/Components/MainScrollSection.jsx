import React from 'react';
import Banner from './Banner';
import PhotoSlider from './PhotoSlider';
import ProjectSection from './ProjectSection';
import CardSection from './CardSection';
import TokenSection from './TokenSection';
import Slider from './Slider';
import GameSection from './GameSection';
import PreviewSection from './PreviewSection';
import Footer from './Footer';



const MainScrollSection = () => {
    return (
        <div className="absolute text-scroll w-[1796px] h-[95%] rounded-xl z-10 overflow-hidden overflow-y-scroll left-1/2 transform -translate-x-1/2 bg-white -mt-20">

           <Banner/>
            <PhotoSlider/>
            <ProjectSection/>    
            <CardSection/>  
            <TokenSection/>      
            <Slider/>
            <GameSection/>
            <PreviewSection/>
            <Footer/>
        </div>
    );
};

export default MainScrollSection;