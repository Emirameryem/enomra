import React from 'react';

export default function Logo({ className = "h-12", lightMode = false }) {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src={lightMode ? "/logo-dark.png" : "/logo.png"}
        alt="ENOMRA GROUP"
        className="h-full w-auto object-contain transition-transform duration-300 hover:scale-105 drop-shadow-md"
      />
    </div>
  );
}
