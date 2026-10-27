import React from 'react';

export default function Logo({ className = "h-11", showTagline = true, lightMode = false }) {
  const textColor = lightMode ? "#1E242E" : "#FFFFFF";
  const subtextColor = lightMode ? "#64748B" : "#A0AEC0";
  const slateColor = lightMode ? "#2B3240" : "#E2E8F0";
  const goldColor = "#C59A3F";
  const goldGradId = `goldGrad_${lightMode ? 'light' : 'dark'}`;
  const slateGradId = `slateGrad_${lightMode ? 'light' : 'dark'}`;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <svg 
        viewBox="0 0 110 90" 
        className="h-full w-auto aspect-[110/90] drop-shadow-sm transition-transform duration-300 hover:scale-105"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={goldGradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5D076" />
            <stop offset="50%" stopColor="#C59A3F" />
            <stop offset="100%" stopColor="#9B7322" />
          </linearGradient>
          <linearGradient id={slateGradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={lightMode ? "#3B4455" : "#CBD5E1"} />
            <stop offset="100%" stopColor={lightMode ? "#1E2533" : "#64748B"} />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#C59A3F" floodOpacity="0.25"/>
          </filter>
        </defs>

        {/* Monogram Base Shape - Letter 'E' in Slate */}
        <path
          d="M 12 18 C 12 14 15 11 19 11 H 52 C 55 11 57 13 57 16 C 57 19 55 21 52 21 H 25 V 36 H 48 C 50.5 36 52 38 52 40.5 C 52 43 50.5 45 48 45 H 25 V 63 H 55 C 57.5 63 59 65 59 67.5 C 59 70 57.5 72 55 72 H 19 C 15 72 12 69 12 65 Z"
          fill={`url(#${slateGradId})`}
        />

        {/* Dynamic 'N' with Arrowhead */}
        {/* Diagonal stroke connecting E to N arrow */}
        <path
          d="M 36 38 L 59 71 C 61 74 65 75 68 73 C 71 71 72 67 70 64 L 50 35 C 48 32 44 31 41 33 C 38 35 36 37 36 38 Z"
          fill={`url(#${goldGradId})`}
        />
        
        {/* Right vertical leg of N with sharp upward arrow */}
        <path
          d="M 64 28 L 68 12 L 80 28 H 74 V 67 C 74 72 70 76 65 76 H 61 V 67 H 64 V 28 Z"
          fill={`url(#${goldGradId})`}
          filter="url(#glow)"
        />

        {/* Infinity / Loop on the bottom right */}
        <path
          d="M 66 52 C 78 52 88 58 88 68 C 88 77 78 81 68 81 C 58 81 54 75 58 69 C 61 64 68 64 72 67 C 75 69 79 70 80 68 C 81 66 77 61 68 61 C 63 61 60 59 61 55 C 62 53 64 52 66 52 Z"
          fill={`url(#${slateGradId})`}
        />
      </svg>

      <div className="flex flex-col leading-none justify-center">
        <span 
          className="text-2xl font-black tracking-[0.22em] uppercase font-display"
          style={{ color: textColor }}
        >
          ENOMRA
        </span>
        {showTagline && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className="h-[1px] w-3 bg-brand-500/80"></span>
            <span 
              className="text-[9px] font-semibold tracking-[0.28em] uppercase font-sans whitespace-nowrap"
              style={{ color: subtextColor }}
            >
              Grup Şirketleri
            </span>
            <span className="h-[1px] w-3 bg-brand-500/80"></span>
          </div>
        )}
      </div>
    </div>
  );
}
