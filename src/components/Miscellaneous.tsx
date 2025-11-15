import { miscellaneousData } from "../data/miscelleanous";
import { miscellaneousBackground } from "../resources/images";
import MiscellaneousCard from "./MiscellaneousCard";

function Miscellaneous() {
  return (
    <div className=" bg-white font-normal font-brand w-full pt-[45px] relative min-h-[612px] overflow-hidden max-md:pb-[70px]">
      <img
        src={miscellaneousBackground}
        alt=""
        className="absolute -bottom-5 right-[15%] z-0 max-md:w-[194px] max-md:h- max-md:bottom-[25%]"
      />
      <div className="absolute bottom-[70px] left-0  w-[250px] h-2.5 bg-[#B2B2B2]"></div>
      <div className="relative z-10">
        <h1 className="text-[#2D2D2D] text-[48px] max-md:text-[32px] max-sm:text-[24px] text-center">
          Miscellaneous
        </h1>
        <div className="flex justify-center items-center gap-[70px] max-md:gap-[100px] flex-wrap mt-12">
          {miscellaneousData.map((item) => (
            <MiscellaneousCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Miscellaneous;
