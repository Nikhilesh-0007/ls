import React from 'react';

export const SectionHeader = ({
  badge,
  title,
  subtitle,
  centered = true,
  className = ""
}) => {
  return (
    <div className={`space-y-3 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-blue/10 text-brand-blue border border-brand-blue/20">
          {badge}
        </span>
      )}
      {title && (
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-brand-navy tracking-tight leading-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
