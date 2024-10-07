import Image from 'next/image';
import dogGroup from '../../../public/Image/dog-group.png';


const ProjectSection = () => {
    return (
        <div className="relative border-2 border-red-600 mt-[700px]">
            <div className="slanted-box-mid gradient-background w-full z-0 bott" />
            <div className="absolute z-20 w-full -top-[594px]">
                <h1 className='text-[220px] font-Cheesburga text-[#ffa800] text-center -mt-9'>PROJECT VISION</h1>
                <Image src={dogGroup} alt='dog group' className='water-reflection'/>
                <p className='w-[1606px] mx-auto text-5xl font-bold text-center mt-14'>Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community. Just as the Alabay protects its flock, we aim to build a pack that stands strong together.</p>
            </div>
        </div>
    );
};

export default ProjectSection;