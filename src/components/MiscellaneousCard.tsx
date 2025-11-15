import type { MiscellaneousItem } from "../data/miscelleanous";
import { link } from "../resources/icons";

interface MiscellaneousCardProps {
  item: MiscellaneousItem;
}

const MiscellaneousCard = (props: MiscellaneousCardProps) => {
  const { item } = props;

  console.log(item.link);
  return (
    <section className="text-center max-sm:w-[200px] max-sm:h-[200px] max-md:w-[250px] max-md:h-[250px]">
      <img src={item.image} alt="" width={225} height={225} />
      <p className="mt-4 text-[#464646] text-lg md:text-xl">{item.title}</p>
      <p className="flex items-center justify-center gap-1">
        <span className=" text-[#858585] text-sm md:text-base">Link</span>
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
