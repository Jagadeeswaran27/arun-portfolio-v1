import type { MiscellaneousItem } from "../data/miscelleanous";
import { link } from "../resources/icons";

interface MiscellaneousCardProps {
  item: MiscellaneousItem;
}

const MiscellaneousCard = (props: MiscellaneousCardProps) => {
  const { item } = props;

  const handleLinkClick = () => {
    window.open(item.link, "_blank");
  };

  return (
    <section
      className="text-center max-sm:w-[200px] max-sm:h-[200px] max-md:w-[250px] max-md:h-[250px] hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
      onClick={handleLinkClick}
    >
      <img src={item.image} alt="" width={225} height={225} />
      <p className="mt-4 text-[#464646] text-lg md:text-xl">{item.title}</p>
      <p
        className="flex items-center justify-center gap-1 hover:scale-105 transition-transform duration-200 ease-in-out hover:underline hover:decoration-[#858585]"
        onClick={handleLinkClick}
      >
        <span className=" text-[#858585] text-sm md:text-base ">Link</span>
        <img
          src={link}
          alt=""
          style={{
            width: "13px",
            height: "13px",
          }}
        />
      </p>
    </section>
  );
};

export default MiscellaneousCard;
