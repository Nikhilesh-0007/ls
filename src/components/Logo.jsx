import React from 'react';

/**
 * Legacy IT Solutions SVG Logo Monogram Component
 * Features: Deep navy serif "L", gradient blue "S", globe motif grid, 3 people icons, swoosh.
 */
export const Logo = ({ className = "h-11", showText = true, variant = "default" }) => {
  const isDarkFooter = variant === "light-text";

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* SVG Icon Graphic */}
      <svg
        viewBox="0 0 450 400"
        className="h-full w-auto aspect-square overflow-visible drop-shadow-sm shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Logo Gradient Defs */}
          <linearGradient id="lsNavyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#04122B" />
            <stop offset="50%" stopColor="#0A1F44" />
            <stop offset="100%" stopColor="#0E2D65" />
          </linearGradient>

          <linearGradient id="lsBlueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0052CC" />
            <stop offset="50%" stopColor="#2E6FD9" />
            <stop offset="100%" stopColor="#5891F0" />
          </linearGradient>

          <linearGradient id="lsSilverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6C757D" />
            <stop offset="50%" stopColor="#8A93A3" />
            <stop offset="100%" stopColor="#D1D5DB" />
          </linearGradient>

          <linearGradient id="swooshGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0A1F44" />
            <stop offset="60%" stopColor="#2E6FD9" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>
        </defs>

        {/* Globe Lattice Background Grid */}
        <g stroke="url(#lsNavyGradient)" strokeWidth="4" opacity="0.35" fill="none">
          <circle cx="200" cy="180" r="75" strokeWidth="3" />
          <path d="M 125 180 Q 200 130 275 180 Q 200 230 125 180 Z" strokeWidth="3" />
          <path d="M 125 180 Q 200 150 275 180 Q 200 210 125 180 Z" strokeWidth="2" />
          <line x1="200" y1="105" x2="200" y2="255" strokeWidth="3" />
          <line x1="125" y1="180" x2="275" y2="180" strokeWidth="3" />
        </g>

        {/* 3 Stylized People Icons */}
        <g transform="translate(250, 110)">
          {/* Left Person */}
          <circle cx="20" cy="40" r="10" fill="#3B82F6" />
          <path d="M 5 65 C 5 53 10 48 20 48 C 30 48 35 53 35 65 Z" fill="#3B82F6" />

          {/* Center Person (Dominant) */}
          <circle cx="45" cy="25" r="14" fill="url(#lsNavyGradient)" />
          <path d="M 23 65 C 23 48 30 40 45 40 C 60 40 67 48 67 65 Z" fill="url(#lsNavyGradient)" />

          {/* Right Person */}
          <circle cx="70" cy="40" r="10" fill="#60A5FA" />
          <path d="M 55 65 C 55 53 60 48 70 48 C 80 48 85 53 85 65 Z" fill="#60A5FA" />
        </g>

        {/* Monogram Serif 'L' */}
        <path
          d="M 100 80 L 180 80 C 170 80 162 88 162 100 L 162 250 L 220 250 C 240 250 250 245 255 230 L 255 265 L 100 265 L 100 250 C 112 250 122 240 122 225 L 122 120 C 122 100 110 80 100 80 Z"
          fill="url(#lsNavyGradient)"
        />

        {/* Monogram Serif 'S' (Top Portion) */}
        <path
          d="M 330 115 C 330 90 305 75 270 75 C 235 75 210 90 210 110 C 210 145 305 140 305 185 C 305 210 275 230 240 230 C 215 230 190 220 180 205 L 180 235 C 200 250 230 260 265 260 C 315 260 350 235 350 190 C 350 140 255 142 255 110 C 255 95 275 88 295 88 C 315 88 330 98 330 115 Z"
          fill="url(#lsBlueGradient)"
        />

        {/* Lower Serif 'S' Base Accent */}
        <path
          d="M 230 290 C 210 290 195 280 195 265 C 195 250 210 235 235 235 C 255 235 285 245 315 235 C 345 225 355 200 355 180 L 325 180 C 325 210 300 225 270 225 C 240 225 215 210 215 190 L 170 190 L 170 210 C 170 260 220 300 280 300 C 325 300 360 280 360 245 C 360 210 320 200 280 200 C 250 200 230 290 230 290 Z"
          fill="url(#lsSilverGradient)"
          opacity="0.9"
        />

        {/* Dynamic Curved Swoosh under logo */}
        <path
          d="M 90 260 Q 240 200 370 160 Q 240 230 90 260 Z"
          fill="url(#swooshGradient)"
        />
      </svg>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <span className={`font-serif tracking-tight font-bold text-xl sm:text-2xl ${isDarkFooter ? 'text-white' : 'text-brand-navy'}`}>
            LEGACY <span className="text-brand-blue font-sans font-light">IT</span>
          </span>
          <span className={`text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase mt-1 ${isDarkFooter ? 'text-slate-400' : 'text-brand-silver-muted'}`}>
            Solutions
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
