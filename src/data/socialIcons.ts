import type { SocialIconType } from "../components/SocialIcon";
import {
  behance,
  behanceHover,
  linkedin,
  linkedInHover,
  mail,
  mailHover,
  whatsapp,
  whatsAppHover,
} from "../resources/icons";

export const socialIcons = [
  {
    type: "whatsapp" as SocialIconType,
    default: whatsapp,
    hover: whatsAppHover,
    position: "top-[50px]",
  },
  {
    type: "mail" as SocialIconType,
    default: mail,
    hover: mailHover,
    position: "bottom-[200px]",
  },
  {
    type: "behance" as SocialIconType,
    default: behance,
    hover: behanceHover,
    position: "bottom-[125px]",
  },
  {
    type: "linkedin" as SocialIconType,
    default: linkedin,
    hover: linkedInHover,
    position: "bottom-[50px]",
  },
];
