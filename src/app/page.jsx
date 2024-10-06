import Slider from "./Components/Slider";
export default function Home() {



  return (
    <div>
      <div className="bg-mainBG h-[100vh] bg-fixed">
        <div className="relative z-0 ">
          <h1 className="text-[148.48px] font-Cheesburga text-center gradient-text fixed left-28">welcome to alabay world</h1>
          <h1 className="font-Cheesburga text-white text-5xl fixed bottom-52 bg-[#181C27] text-center px-[50px] py-10">
            where the <span className="gradient-text-2">legendary Central Asian Shepherd Dog</span> meets a new-age adventure. <span className="gradient-text-2">Join us</span> in celebrating the <span className="gradient-text-2">strength</span>, <span className="gradient-text-2">loyalty</span>, and <span className="gradient-text-2">heritage</span> of the Alabay breed.
          </h1>

        </div>
      </div>
      <div className="slanted-box mx-auto gradient-background ">

      </div>
      <Slider />

    </div>
  );
}
