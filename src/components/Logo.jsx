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

      {/* Brand Text Image */}
      {showText && (
        <img
          src="/logo_text.png"
          alt="Legacy IT Solutions"
          className={`h-full w-auto object-contain shrink-0 ${isDarkFooter ? 'brightness-0 invert' : ''}`}
        />
      )}
    </div>
  );
};

export default Logo;
