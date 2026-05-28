const certifications = [
  {
    id: "1",
    title: "Internship : 2 Month Completion Certificate",
    organization: "Permanent Objects",
  },
  {
    id: "2",
    title: "Internship : 6 Month Completion Certificate",
    organization: "Ayawi Designs",
  },
];

function Certifications() {
  return (
    <div className="bg-white font-brand w-full py-[30px] sm:py-[40px] md:py-[50px] px-4 sm:px-6 md:px-16 lg:px-24 relative overflow-hidden hover:shadow-[0px_2px_8px_rgba(0,0,0,0.2)] hover:rounded-md hover:scale-[103%] transition-all duration-300 ease-in-out">
      <h1 className="text-[#2D2D2D] text-[48px] max-md:text-[32px] max-sm:text-[24px] text-center mb-6 sm:mb-10 md:mb-16">
        Certifications
      </h1>
      <div className="flex flex-col sm:flex-row justify-center items-stretch gap-5 sm:gap-8 md:gap-12 flex-wrap">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="group relative bg-[#FAFAFA] border border-[#E8E8E8] rounded-xl sm:rounded-2xl px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10 max-w-[380px] w-full hover:border-[#2D2D2D] hover:shadow-[0px_4px_20px_rgba(0,0,0,0.08)] hover:scale-105 transition-all duration-300 ease-in-out cursor-default"
          >
            {/* Decorative top accent */}
            <div className="absolute top-0 left-5 right-5 sm:left-8 sm:right-8 h-[2px] bg-[#B2B2B2] group-hover:bg-[#2D2D2D] transition-colors duration-300"></div>
            <div className="flex items-start gap-3 sm:gap-4 mt-2">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#2D2D2D] flex items-center justify-center mt-1">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div>
                <h3 className="text-[#2D2D2D] text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-snug">
                  {cert.title}
                </h3>
                <p className="text-[#858585] text-[12px] sm:text-[14px] md:text-[15px] font-normal mt-1.5 sm:mt-2">
                  {cert.organization}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
