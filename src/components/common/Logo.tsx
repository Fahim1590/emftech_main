import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", showText = true }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Cloud Body */}
        <path
          d="M155.5 55.5C155.5 39.2 142.3 26 126 26C119.5 26 113.6 28.1 108.8 31.6C102.5 23.4 92.6 18 81.5 18C62.4 18 47 33.4 47 52.5C47 53.5 47.1 54.5 47.2 55.5C36.6 57.1 28.5 66.4 28.5 77.5C28.5 89.9 38.6 100 51 100H151C163.4 100 173.5 89.9 173.5 77.5C173.5 66.4 165.4 57.1 154.8 55.5C154.9 55.5 155.5 55.5 155.5 55.5Z"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        />
        
        {/* Lightning Bolt */}
        <path
          d="M105 45L85 75H100L95 105"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        />

        {/* Circuit Nodes Left */}
        <circle cx="65" cy="55" r="4" fill="currentColor" className="text-white" />
        <path d="M65 55V75" stroke="currentColor" strokeWidth="3" className="text-white" />
        <circle cx="80" cy="45" r="4" fill="currentColor" className="text-white" />
        <path d="M80 45V70" stroke="currentColor" strokeWidth="3" className="text-white" />

        {/* Circuit Nodes Right */}
        <circle cx="135" cy="55" r="4" fill="currentColor" className="text-white" />
        <path d="M135 55V75" stroke="currentColor" strokeWidth="3" className="text-white" />
        <circle cx="120" cy="45" r="4" fill="currentColor" className="text-white" />
        <path d="M120 45V70" stroke="currentColor" strokeWidth="3" className="text-white" />
      </svg>
      
      {showText && (
        <div className="mt-2 flex flex-col items-center">
          <span className="text-2xl font-black tracking-[0.25em] uppercase leading-none text-white drop-shadow-sm">EMF</span>
          <span className="text-[10px] font-black tracking-[0.6em] uppercase text-primary mt-1.5 drop-shadow-[0_0_5px_rgba(193,154,107,0.5)]">TECHNOLOGY</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
