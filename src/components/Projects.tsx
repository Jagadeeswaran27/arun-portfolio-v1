const projects = [
  {
    id: "1",
    title: "Unbound | Posture-Adaptive Chair",
    subtitle: "Graduation Project",
    points: [
      "Designed a posture-adaptive seating solution for hybrid young users, addressing extended work, study, and relaxation needs in home environments, going beyond conventional 90° task chair ergonomics.",
      "Engineered multi-posture flexibility to support natural, non-neutral sitting behaviors including cross-legged positioning and dynamic posture shifting, reducing static muscular fatigue and minimizing physical discomfort during prolonged use.",
      "Balanced alignment, spatial freedom, and a timeless aesthetic — delivering a multi-purpose design that doesn't compromise on ergonomic safety or functional usability.",
    ],
  },
];

function Projects() {
  return (
    <div className="bg-white font-brand w-full py-[50px] px-6 md:px-16 lg:px-24 relative overflow-hidden hover:shadow-[0px_2px_8px_rgba(0,0,0,0.2)] hover:rounded-md hover:scale-[103%] transition-all duration-300 ease-in-out">
      <h1 className="text-[#2D2D2D] text-[48px] max-md:text-[32px] max-sm:text-[24px] text-center mb-10 md:mb-16">
        Projects
      </h1>
      <div className="max-w-[800px] mx-auto space-y-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-[#FAFAFA] border border-[#E8E8E8] rounded-2xl px-8 py-8 md:px-10 md:py-10 hover:border-[#2D2D2D] hover:shadow-[0px_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out"
          >
            {/* Decorative left accent */}
            <div className="absolute left-0 top-8 bottom-8 w-[3px] rounded-full bg-[#B2B2B2] group-hover:bg-[#2D2D2D] transition-colors duration-300"></div>
            <div className="ml-2 md:ml-4">
              <h2 className="text-[#2D2D2D] text-[22px] md:text-[28px] font-normal leading-tight">
                {project.title}
              </h2>
              <p className="text-[#858585] text-[14px] md:text-[16px] font-normal mt-1 mb-6">
                {project.subtitle}
              </p>
              <ul className="space-y-4">
                {project.points.map((point, index) => (
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
        ))}
      </div>
    </div>
  );
}

export default Projects;
