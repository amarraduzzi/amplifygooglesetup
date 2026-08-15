import React, { useState } from 'react';

interface AmplifyLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showText?: boolean;
  inverted?: boolean;
}

export const AmplifyLogo: React.FC<AmplifyLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  inverted = false
}) => {
  const [imageError, setImageError] = useState(false);

  // Size specifications
  const iconSizes = {
    sm: 'h-8 w-8',
    md: 'h-11 w-11',
    lg: 'h-14 w-14',
    hero: 'h-20 w-20 sm:h-24 sm:w-24'
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    hero: 'text-3xl sm:text-4xl'
  };

  const subTextSizes = {
    sm: 'text-[9px] tracking-widest',
    md: 'text-[11px] tracking-widest',
    lg: 'text-xs tracking-widest',
    hero: 'text-sm tracking-[0.25em]'
  };

  const navyColor = inverted ? '#FFFFFF' : '#0F2A4A';
  const greenColor = '#22A366';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`} id="amplify-brand-logo">
      {/* Visual Logo Mark */}
      <div className={`relative flex items-center justify-center flex-shrink-0 ${iconSizes[size]}`}>
        {!imageError ? (
          <img
            src="/logo.jpg"
            alt="Amplify Growth Studio Logo"
            className="w-full h-full object-contain rounded-lg"
            onError={() => setImageError(true)}
            referrerPolicy="no-referrer"
          />
        ) : (
          /* High Precision Vector Fallback matching the brand emblem */
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            aria-label="Amplify Growth Logo"
          >
            {/* Navy soundwave bars */}
            <circle cx="16" cy="50" r="4.5" fill={navyColor} />
            <rect x="25" y="40" width="8" height="20" rx="4" fill={navyColor} />
            <rect x="37" y="32" width="8" height="36" rx="4" fill={navyColor} />
            <rect x="49" y="38" width="8" height="24" rx="4" fill={navyColor} />

            {/* Rising Green Growth Arrow */}
            <path
              d="M40 56 L55 36 L66 48 L78 24 L86 34 L88 18 L72 20 L78 26 L66 42 L55 30 L38 52 Z"
              fill={greenColor}
            />

            {/* Dynamic bottom curve accent */}
            <path
              d="M46 58 C55 64 68 62 76 52 C71 58 60 61 46 58 Z"
              fill={navyColor}
            />
          </svg>
        )}
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-black uppercase tracking-wider ${textSizes[size]} transition-colors`}
            style={{ color: navyColor }}
          >
            AMPLIFY
          </span>
          <span
            className={`font-extrabold uppercase mt-1 ${subTextSizes[size]}`}
            style={{ color: greenColor }}
          >
            GROWTH STUDIO
          </span>
        </div>
      )}
    </div>
  );
};
