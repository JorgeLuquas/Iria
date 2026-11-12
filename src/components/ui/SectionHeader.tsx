import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  centered = false,
  dark = false,
}) => {
  return (
    <div className={`space-y-3 mb-12 ${centered ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}`}>
      {eyebrow && (
        <span
          className={`inline-block text-[11px] font-semibold tracking-[0.25em] uppercase ${
            dark ? 'text-[#B6A571]' : 'text-[#4A1521]'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.15] font-light ${
          dark ? 'text-[#FBF9F5]' : 'text-[#1A1412]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-sm sm:text-base leading-relaxed ${
            dark ? 'text-[#D6CEBE]/80' : 'text-[#635634]/90'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
