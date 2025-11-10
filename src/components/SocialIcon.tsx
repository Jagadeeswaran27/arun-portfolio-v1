export type SocialIconType = "whatsapp" | "mail" | "behance" | "linkedin";

interface SocialIconProps {
  iconType: SocialIconType;
  defaultIcon: string;
  hoverIcon: string;
  className: string;
  hoveredIcon: string | null;
  isSocialOpened?: boolean;
  setHoveredIcon: (icon: SocialIconType | null) => void;
}

const SocialIcon = (props: SocialIconProps) => {
  const {
    iconType,
    defaultIcon,
    hoverIcon,
    className,
    hoveredIcon,
    isSocialOpened,
    setHoveredIcon,
  } = props;

  const handleIconClick = () => {
    if (iconType === "whatsapp") {
      window.open("https://wa.me/8296570333", "_blank");
    } else if (iconType === "mail") {
      window.location.href = "mailto:arun.n163@gmail.com";
    } else if (iconType === "behance") {
      window.open("https://www.behance.net/arunn15", "_blank");
    } else if (iconType === "linkedin") {
      window.open("http://www.linkedin.com/in/arun-n-5510b1252", "_blank");
    }
  };

  return (
    <img
      src={hoveredIcon === iconType ? hoverIcon : defaultIcon}
      style={{ width: "34px", height: "34px" }}
      onMouseEnter={() => setHoveredIcon(iconType)}
      onMouseLeave={() => setHoveredIcon(null)}
      className={`absolute left-2.5 ${
        isSocialOpened ? "block" : "hidden group-hover:block"
      } ${className} hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer`}
      alt={`${iconType} icon`}
      onClick={handleIconClick}
    />
  );
};

export default SocialIcon;
