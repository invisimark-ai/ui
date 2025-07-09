import React from "react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  imgSrc: string;
  linkedinUrl: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  imgSrc,
  linkedinUrl,
}) => {
  return (
    <div className="group flex flex-col items-center text-center transition-all duration-200 hover:scale-[1.10] hover:opacity-95">
      <img
        src={imgSrc}
        alt={name}
        className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover mb-2 border border-[#444]"
      />
      <h3 className="text-base font-semibold leading-tight">{name}</h3>
      <p className="text-sm text-[#aaa] mt-0.5">{role}</p>
      {linkedinUrl && (
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <img src="/icons/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
        </a>
      )}
    </div>
  );
};

export default TeamMemberCard;
