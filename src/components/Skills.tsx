const SkillIcon = ({ name }: { name: string }) => {
  const s = 24;
  const color = "#2D2D2D";

  switch (name) {
    case "Illustrator":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
          <rect x="1" y="1" width="22" height="22" rx="4" stroke={color} strokeWidth="1.5" />
          <text x="12" y="16.5" textAnchor="middle" fill={color} fontSize="12" fontWeight="500" fontFamily="serif">Ai</text>
        </svg>
      );
    case "Photoshop":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
          <rect x="1" y="1" width="22" height="22" rx="4" stroke={color} strokeWidth="1.5" />
          <text x="12" y="16.5" textAnchor="middle" fill={color} fontSize="12" fontWeight="500" fontFamily="serif">Ps</text>
        </svg>
      );
    case "Blender 3d":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
          <circle cx="14" cy="13" r="6.5" stroke={color} strokeWidth="1.5" />
          <ellipse cx="14" cy="13" rx="3" ry="2" stroke={color} strokeWidth="1" />
          <circle cx="14" cy="13" r="0.8" fill={color} />
          <path d="M3 12.5L9 8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M5 16L10 13.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "Fusion 360":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
          <rect x="1" y="1" width="22" height="22" rx="4" stroke={color} strokeWidth="1.5" />
          <path d="M7 7h4v4H7z" stroke={color} strokeWidth="1.2" />
          <path d="M11 11h4v4h-4z" stroke={color} strokeWidth="1.2" />
          <path d="M7 7l4 4" stroke={color} strokeWidth="1" />
          <path d="M11 7l4 4" stroke={color} strokeWidth="1" />
          <path d="M7 11l4 4" stroke={color} strokeWidth="1" />
          <text x="15" y="20" fill={color} fontSize="6" fontFamily="sans-serif">F</text>
        </svg>
      );
    case "Solid works":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" />
          <circle cx="12" cy="12" r="4" stroke={color} strokeWidth="1.5" />
          <circle cx="12" cy="12" r="1.5" fill={color} />
          <path d="M12 3v4" stroke={color} strokeWidth="1.2" />
          <path d="M12 17v4" stroke={color} strokeWidth="1.2" />
          <path d="M3 12h4" stroke={color} strokeWidth="1.2" />
          <path d="M17 12h4" stroke={color} strokeWidth="1.2" />
          <path d="M5.6 5.6l2.8 2.8" stroke={color} strokeWidth="1.2" />
          <path d="M15.6 15.6l2.8 2.8" stroke={color} strokeWidth="1.2" />
        </svg>
      );
    case "Figma":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
          <rect x="4" y="2" width="7" height="6.5" rx="3.25" stroke={color} strokeWidth="1.5" />
          <rect x="13" y="2" width="7" height="6.5" rx="3.25" stroke={color} strokeWidth="1.5" />
          <rect x="4" y="8.5" width="7" height="6.5" rx="3.25" stroke={color} strokeWidth="1.5" />
          <circle cx="16.5" cy="11.75" r="3.25" stroke={color} strokeWidth="1.5" />
          <rect x="4" y="15" width="7" height="6.5" rx="3.25" stroke={color} strokeWidth="1.5" />
        </svg>
      );
    case "Sketchbook":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
          <path d="M4 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4V4z" stroke={color} strokeWidth="1.5" />
          <path d="M4 4v18" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <path d="M8 2v4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M9 13l3-5 2.5 3.5L17 9" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "Keyshot":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" />
          <path d="M12 2a10 10 0 0 1 0 20" stroke={color} strokeWidth="1.5" />
          <path d="M12 5v7l4.5 4.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
          <path d="M8 3.5L12 12" stroke={color} strokeWidth="1" />
          <path d="M19 7L12 12" stroke={color} strokeWidth="1" />
          <path d="M20 15L12 12" stroke={color} strokeWidth="1" />
          <path d="M5 17L12 12" stroke={color} strokeWidth="1" />
          <circle cx="12" cy="12" r="2.5" stroke={color} strokeWidth="1.2" />
        </svg>
      );
    case "AutoCAD":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
          <path d="M3 21L12 3l9 18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.5 14h11" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="12" cy="3" r="1.5" fill={color} />
          <path d="M8 18h8" stroke={color} strokeWidth="1" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
};

const skills = [
  { name: "Illustrator" },
  { name: "Blender 3d" },
  { name: "Fusion 360" },
  { name: "Solid works", note: "Learning" },
  { name: "Photoshop" },
  { name: "Figma" },
  { name: "Sketchbook" },
  { name: "Keyshot", note: "Learning" },
  { name: "AutoCAD" },
];

function Skills() {
  return (
    <div className="bg-white font-brand w-full py-[30px] sm:py-[40px] md:py-[50px] px-4 sm:px-6 md:px-16 lg:px-24 relative overflow-hidden hover:shadow-[0px_2px_8px_rgba(0,0,0,0.2)] hover:rounded-md hover:scale-[103%] transition-all duration-300 ease-in-out">
      <h1 className="text-[#2D2D2D] text-[48px] max-md:text-[32px] max-sm:text-[24px] text-center mb-6 sm:mb-10 md:mb-16">
        Skills
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-8 md:gap-x-10 gap-y-5 sm:gap-y-6 md:gap-y-8 max-w-[800px] mx-auto justify-items-start">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 sm:gap-3 hover:scale-105 transition-all duration-300 ease-in-out cursor-default"
          >
            <div className="w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] md:w-[42px] md:h-[42px] flex-shrink-0 rounded-[6px] sm:rounded-[8px] border border-[#2D2D2D] flex items-center justify-center">
              <SkillIcon name={skill.name} />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-0 sm:gap-1">
              <span className="text-[#2D2D2D] text-[13px] sm:text-[15px] md:text-[17px] font-normal">
                {skill.name}
              </span>
              {skill.note && (
                <span className="text-[#858585] text-[10px] sm:text-[11px] md:text-[12px] font-normal">
                  ({skill.note})
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
