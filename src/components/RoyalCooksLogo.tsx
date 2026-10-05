import React, { useState, useEffect } from 'react';
import { RoyalCooksExactLogo } from './RoyalCooksExactLogo';

interface RoyalCooksLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withBackground?: boolean;
}

export const RoyalCooksLogo: React.FC<RoyalCooksLogoProps> = ({
  className = '',
  size = 'md',
  withBackground = true,
}) => {
  const [customLogo, setCustomLogo] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('royal_cooks_logo_url');
    }
    return null;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const stored = localStorage.getItem('royal_cooks_logo_url');
      setCustomLogo(stored);
    };
    window.addEventListener('royal_cooks_logo_updated', handleStorageChange);
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('royal_cooks_logo_updated', handleStorageChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  if (customLogo) {
    const sizeClasses = {
      sm: 'w-10 h-10 sm:w-11 sm:h-11',
      md: 'w-14 h-14 sm:w-16 sm:h-16',
      lg: 'w-24 h-24 sm:w-28 sm:h-28',
      xl: 'w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56',
    }[size];

    return (
      <img
        src={customLogo}
        alt="Royal Cooks Logo"
        className={`${sizeClasses} rounded-xl object-contain shadow-md ${className}`}
      />
    );
  }

  return (
    <RoyalCooksExactLogo
      className={className}
      size={size}
      withBackground={withBackground}
    />
  );
};
