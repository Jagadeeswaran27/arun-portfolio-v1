import { miscellaneousData } from "../data/miscelleanous";
import { miscellaneousBackground } from "../resources/images";
import MiscellaneousCard from "./MiscellaneousCard";

function Miscellaneous() {
  return (
    <div className=" bg-white font-normal font-brand w-full pt-[35px] relative min-h-[650px] overflow-hidden max-md:pb-[70px] hover:shadow-[0px_2px_8px_rgba(0,0,0,0.2)] hover:rounded-md hover:scale-105 transition-all duration-300 ease-in-out">
      <img
        src={miscellaneousBackground}
        alt=""
        className="absolute bottom-4 right-[12%] z-0 max-md:w-[194px] max-md:h- max-md:bottom-[25%]"
      />
      <div className="absolute bottom-[70px] left-0  w-[200px] h-2.5 bg-[#B2B2B2]"></div>
      <div className="relative z-10">
        <h1 className="text-[#2D2D2D] text-[48px] max-md:text-[32px] max-sm:text-[24px] text-center">
          Miscellaneous
        </h1>
        <div className="flex justify-center items-center gap-[70px] max-md:gap-[100px] flex-wrap mt-20">
          {miscellaneousData.map((item) => (
            <MiscellaneousCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Miscellaneous;
