const experiences = [
  {
    id: "1",
    role: "Furniture Design Intern",
    period: "Dec 2025 - May 2026",
    company: "Ayawi Designs",
    mode: "Onsite",
    points: [
      "Executed AutoCAD production drawings for mixed-category furniture projects, translating design concepts into precise technical layouts and ensuring manufacturing-ready documentation across multiple product lines.",
      "Led CMF development and fabric selection for residential and commercial pieces, evaluating wood finishes, upholstery materials, and surface treatments to align aesthetic intent with structural and cost requirements.",
      "Conducted end-to-end quality checks across production stages, identifying fit, finish, and material inconsistencies early in the build cycle, reducing rework touchpoints and maintaining consistent output standards.",
    ],
  },
];

function Experience() {
  return (
    <div className="bg-white font-brand w-full py-[50px] px-6 md:px-16 lg:px-24 relative overflow-hidden hover:shadow-[0px_2px_8px_rgba(0,0,0,0.2)] hover:rounded-md hover:scale-[103%] transition-all duration-300 ease-in-out">
      <h1 className="text-[#2D2D2D] text-[48px] max-md:text-[32px] max-sm:text-[24px] text-center mb-10 md:mb-16">
        Experience
      </h1>
      <div className="max-w-[800px] mx-auto">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative">
            {/* Timeline line */}
            <div className="absolute left-[15px] top-[40px] bottom-0 w-[2px] bg-[#E0E0E0] max-md:hidden"></div>
            <div className="flex items-start gap-6 md:gap-10">
              {/* Timeline dot */}
              <div className="flex-shrink-0 w-[32px] h-[32px] rounded-full bg-[#2D2D2D] flex items-center justify-center mt-1 max-md:hidden">
                <div className="w-[12px] h-[12px] rounded-full bg-white"></div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 mb-2">
                  <h2 className="text-[#2D2D2D] text-[22px] md:text-[26px] font-normal leading-tight">
                    {exp.role}
                  </h2>
                  <span className="text-[#858585] text-[13px] md:text-[14px] font-normal whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[#464646] text-[15px] md:text-[17px] font-normal">
                    {exp.company}
                  </span>
                  <span className="px-3 py-0.5 rounded-full text-[12px] md:text-[13px] bg-[#F0F0F0] text-[#464646] font-normal">
                    {exp.mode}
                  </span>
                </div>
                <ul className="space-y-4">
                  {exp.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-[6px] h-[6px] rounded-full bg-[#B2B2B2] mt-[9px]"></span>
                      <p className="text-[#464646] text-[13px] md:text-[15px] font-light leading-7">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
