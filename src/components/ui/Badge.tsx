import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'sage' | 'gold' | 'bordeaux' | 'moka';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'bordeaux' }) => {
  const styles = {
    sage: 'bg-[#839689]/15 text-[#4D6355] border-[#839689]/30',
    gold: 'bg-[#B6A571]/20 text-[#6E5D2A] border-[#B6A571]/40',
    bordeaux: 'bg-[#4A1521]/10 text-[#4A1521] border-[#4A1521]/20',
    moka: 'bg-[#635634]/10 text-[#392118] border-[#635634]/25',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium tracking-wide uppercase border ${styles[variant]}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
      {children}
    </span>
  );
};
