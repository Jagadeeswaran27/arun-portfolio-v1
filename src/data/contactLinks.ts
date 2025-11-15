import { behance, linkedin, mail, whatsapp } from "../resources/icons";

export type ContactLink = {
  id: string;
  image: string;
  title: string;
  onClick: () => void;
};

export const contactLinks: ContactLink[] = [
  {
    id: "1",
    image: mail,
    title: "Gmail",
    onClick: () => {
      const subject = "";
      const body = "";
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=arun.n163@gmail.com&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.open(gmailUrl, "_blank");
    },
  },
  {
    id: "2",
    image: linkedin,
    title: "Linkedin",
    onClick: () => {
      window.open("http://www.linkedin.com/in/arun-n-5510b1252", "_blank");
    },
  },
  {
    id: "3",
    image: whatsapp,
    title: "Whatsapp",
    onClick: () => {
      window.open("https://wa.me/8296570333", "_blank");
    },
  },
  {
    id: "4",
    image: behance,
    title: "Behance",
    onClick: () => {
      window.open("https://www.behance.net/arunn15", "_blank");
    },
  },
];
