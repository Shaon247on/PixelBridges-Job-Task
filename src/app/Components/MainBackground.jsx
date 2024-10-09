import Image from "next/image";
import main from '../../../public/Image/main-Background.jpg';

const MainBackground = () => {
    return (
        <div className="h-[100vh] hidden lg:block">
        <Image src={main} alt="" className="fixed left-1/2 transform -translate-x-1/2   w-full object-cover object-center"/>
        <div className="lg:relative z-0 ">
          <h1 className="text-[50px] lg:text-[148.48px] font-Cheesburga text-center gradient-text fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[200%] text-nowrap">welcome to alabay world</h1>
          {/* <h1 className="font-Cheesburga text-white text-5xl fixed bottom-36 bg-[#181C27] w-full text-center px-[50px] py-10">
            where the <span className="gradient-text-2">legendary Central Asian Shepherd Dog</span> meets a new-age adventure. <span className="gradient-text-2">Join us</span> in celebrating the <span className="gradient-text-2">strength</span>, <span className="gradient-text-2">loyalty</span>, and <span className="gradient-text-2">heritage</span> of the Alabay breed.
          </h1> */}
        </div>
      </div>
    );
};

export default MainBackground;