import type { ContactLink } from "../data/contactLinks";

interface ContactLinkProps {
  item: ContactLink;
}

const ContactLinkItem = (props: ContactLinkProps) => {
  const { image, title, onClick } = props.item;
  return (
    <div
      className="flex items-center gap-0.5 cursor-pointer justify-center"
      onClick={onClick}
    >
      <img
        src={image}
        alt=""
        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain"
      />
      <p className="text-[14px] sm:text-[15px] md:text-[16px] font-normal text-[#464646] underline">
        {title}
      </p>
    </div>
  );
};

export default ContactLinkItem;
