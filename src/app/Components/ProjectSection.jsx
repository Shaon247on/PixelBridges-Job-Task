import Image from 'next/image';
import dogGroup from '../../../public/Image/dog-group.png';
import RoadMap from './RoadMap';


const ProjectSection = () => {
    return (
        <div className="relative mt-[700px] h-[2500px]">
            <div className="slanted-box-mid gradient-background2 w-[100%] top-0 z-[1] absolute" />
            <div className="absolute z-20 w-full -top-[594px]">
                <h1 className='text-[220px] font-Cheesburga text-[#ffa800] text-center -mt-9'>PROJECT VISION</h1>
                <Image src={dogGroup} alt='dog group' className='water-reflection2 relative z-10' />
                <div className='w-[1300px] h-[90px] rounded-[100%] shadow-effect absolute  bottom-[16%] left-[12%] '/>
                <p className='w-[1606px] mx-auto text-5xl font-bold text-center mt-20 drop-shadow-lg'>Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community. Just as the Alabay protects its flock, we aim to build a pack that stands strong together.</p> 
                <RoadMap/>            
            </div>
        </div>
    );
};

export default ProjectSection;