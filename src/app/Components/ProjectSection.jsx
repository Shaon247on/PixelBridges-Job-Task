import Image from 'next/image';
import dogGroup from '../../../public/Image/dog-group.png';
import RoadMap from './RoadMap';


const ProjectSection = () => {
    return (
        <div className="relative mt-[800px] lg:mt-[700px] h-[900px] lg:h-[2500px]">
            <div className="slanted-box-mid gradient-background2 w-[100%] -top-[497px] md:-top-[370px] lg:top-0 z-[1] absolute" />
            <div className="absolute z-20 w-full -top-[594px]">
                <h1 className='text-[48px] md:text-[90px] lg:text-[220px] font-Cheesburga text-[#ffa800] text-center -mt-9'>PROJECT VISION</h1>
                <Image src={dogGroup} alt='dog group' className='water-reflection2 relative z-10' />
                <div className='w-[260px] md:w-[570px] lg:w-[1300px] h-[50px] lg:h-[90px] rounded-[100%] shadow-effect absolute bottom-[41.5%] md:bottom-[26%] lg:bottom-[16%] left-[12%] md:left-[12%]'/>
                <p className='w-[350px] md:w-[600px] lg:w-[1606px] mx-auto text-lg md:text-2xl lg:text-5xl font-bold text-center mt-20 drop-shadow-lg leading-5 md:leading-6'>Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community. Just as the Alabay protects its flock, we aim to build a pack that stands strong together.</p> 
                <RoadMap/>            
            </div>
        </div>
    );
};

export default ProjectSection;