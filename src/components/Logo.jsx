import React from 'react';

/**
 * Legacy IT Solutions SVG Logo Monogram Component
 * Features: Deep navy serif "L", gradient blue "S", globe motif grid, 3 people icons, swoosh.
 */
export const Logo = ({ className = "h-11", showText = true, variant = "default" }) => {
  const isDarkFooter = variant === "light-text";

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* logo.png from public folder */}
      <img
        src="/logo.png"
        alt="Legacy IT Solutions Logo"
        className="h-full w-auto object-contain shrink-0"
      />

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
