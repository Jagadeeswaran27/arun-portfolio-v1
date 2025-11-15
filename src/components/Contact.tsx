import { contactLinks } from "../data/contactLinks";
import { arun } from "../resources/images";
import ContactLinkItem from "./ContactLinkItem";

const Contact = () => {
  return (
    <div className="w-full bg-white pt-[30px] md:pt-[50px] font-brand flex flex-col lg:flex-row hover:shadow-[0px_2px_8px_rgba(0,0,0,0.2)] hover:rounded-md hover:scale-105 transition-all duration-300 ease-in-out">
      <img
        src={arun}
        alt=""
        className="w-full sm:max-w-[350px] md:max-w-[400px] lg:max-w-[431px] mx-auto lg:mx-0"
      />
      <div className="px-6 sm:px-12 md:px-16 lg:pl-20 lg:pr-32 pt-8 md:pt-16 lg:pt-20 flex-1">
        <section className="text-left">
          <h1 className="font-normal text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] text-[#2D2D2D] leading-none">
            Thanks
          </h1>
          <h2 className="font-normal text-[24px] sm:text-[30px] md:text-[40px] lg:text-[48px] text-[#2D2D2D] leading-none ml-[3px] md:ml-[5px] lg:ml-[7px]">
            Let's have a chat.
          </h2>
        </section>
        <section className="max-sm:grid grid-cols-2 max-sm:justify-items-start  sm:flex items-center justify-center sm:justify-between flex-wrap gap-4 sm:gap-2 mt-10 md:mt-[50px] lg:mt-[60px] md:ml-[13px]">
          {contactLinks.map((item) => (
            <ContactLinkItem key={item.id} item={item} />
          ))}
        </section>
        <section className="max-lg:pb-10">
          <h1 className="text-[16px] md:text-[18px] text-[#464646] font-normal mt-10 md:mt-[50px] lg:mt-[60px] ml-[3px] md:ml-[5px] lg:ml-[7px]">
            Contact
          </h1>
          <p className="font-light text-[#464646] text-[12px] md:text-[14px] leading-6 md:leading-7 ml-6 md:ml-8 lg:ml-10 mt-2.5">
            Arun Neelamegan
            <br />
            <span
              className="underline cursor-pointer"
              onClick={() => {
                const subject = "";
                const body = "";
                const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=arun.n163@gmail.com&su=${encodeURIComponent(
                  subject
                )}&body=${encodeURIComponent(body)}`;
                window.open(gmailUrl, "_blank");
              }}
            >
              arun.n1693@gmail.com
            </span>
            <br />
            <span
              className="underline cursor-pointer"
              onClick={() => {
                const phoneNumber = "+918296570333";
                window.open(`tel:${phoneNumber}`, "_self");
              }}
            >
              +91 8296570333
            </span>
            <br />
            Bangalore , India
          </p>
        </section>
      </div>
    </div>
  );
};

export default Contact;
