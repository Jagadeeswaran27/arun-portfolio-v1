import { content } from "./data/content";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "./assets/animations/system-solid.json";
import SocialIcon, { type SocialIconType } from "./components/SocialIcon";
import { maximize, minimize } from "./resources/icons";
import { socialIcons } from "./data/socialIcons";
import Miscellaneous from "./components/Miscellaneous";
import Contact from "./components/Contact";

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<SocialIconType | null>(null);
  const [isSmallDevice, setIsSmallDevice] = useState<boolean>(false);
  const [isSocialOpened, setIsSocialOpened] = useState<boolean>(false);

  useEffect(() => {
    content.slice(0, 3).forEach((imgSrc) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = imgSrc;
      document.head.appendChild(link);
    });

    const checkDeviceSize = () => {
      setIsSmallDevice(window.innerWidth <= 768);
    };

    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".social-container") && isSocialOpened) {
        setIsSocialOpened(false);
      }
    };

    checkDeviceSize();

    window.addEventListener("resize", checkDeviceSize);
    document.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("resize", checkDeviceSize);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isSocialOpened]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      setIsFullscreen(true);
      document.documentElement.requestFullscreen();
    } else {
      setIsFullscreen(false);
      document.exitFullscreen();
    }
  };

  return (
    <div className="root">
      {content.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Portfolio image ${index + 1}`}
          loading={index < 3 ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={index < 3 ? "high" : "low"}
          className={`hover:scale-[103%] transition-all duration-300 ease-in-out hover:shadow-[0px_2px_8px_rgba(0,0,0,0.2)] hover:rounded-md`}
        />
      ))}
      <div
        onClick={toggleFullscreen}
        className={`z-50 group w-14 h-14 fixed ${
          isHovered
            ? isSmallDevice
              ? "bottom-[470px]"
              : "bottom-[500px]"
            : isSmallDevice
            ? "bottom-[170px]"
            : "bottom-[200px]"
        } right-[3%] rounded-full flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer hover:scale-105`}
        style={{
          background: "#cccccc",
          boxShadow: "0px 0px 7px 1px #F7F7F740",
        }}
      >
        <img
          src={isFullscreen ? minimize : maximize}
          alt="Fullscreen Toggle"
          style={{
            width: "30px",
            height: "30px",
          }}
        />
      </div>
      {/* Floating icon */}
      <div
        onMouseLeave={() => setIsHovered(false)}
        onMouseEnter={() => setIsHovered(true)}
        onClick={isSmallDevice ? () => setIsSocialOpened(true) : undefined}
        className={`z-50 social-container group w-14 h-14 fixed bottom-[100px] right-[3%] rounded-full flex items-end cursor-pointer hover:scale-105 hover:h-[350px] ${
          isSocialOpened ? "h-[350px]" : ""
        } transition-all duration-500 ease-in-out origin-bottom`}
        style={{
          background: "#cccccc",
          boxShadow: "0px 0px 7px 1px #F7F7F740",
        }}
      >
        {socialIcons.map((icon) => (
          <SocialIcon
            key={icon.type}
            iconType={icon.type}
            defaultIcon={icon.default}
            hoverIcon={icon.hover}
            className={icon.position}
            hoveredIcon={hoveredIcon}
            isSocialOpened={isSocialOpened}
            setHoveredIcon={setHoveredIcon}
          />
        ))}
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          className={`w-[30px] h-[30px] absolute left-[13px] bottom-[13px] ${
            isSocialOpened && "opacity-0"
          } group-hover:opacity-0 `}
        />
      </div>
      <Miscellaneous />
      <Contact />
    </div>
  );
}

export default App;
