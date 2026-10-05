import React from 'react';

interface RoyalCooksBrandLogoProps {
  className?: string;
  variant?: 'full' | 'mark-only' | 'horizontal';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const RoyalCooksBrandLogo: React.FC<RoyalCooksBrandLogoProps> = ({
  className = '',
  variant = 'horizontal',
  size = 'md',
}) => {
  // Size dimensions
  const dimensions = {
    sm: { height: 36, width: variant === 'mark-only' ? 36 : 140 },
    md: { height: 48, width: variant === 'mark-only' ? 48 : 180 },
    lg: { height: 72, width: variant === 'mark-only' ? 72 : 240 },
    xl: { height: 96, width: variant === 'mark-only' ? 96 : 320 },
  }[size];

  // The Flaming Skillet Pan Icon (Exact vector translation of user logo)
  const FlamingSkilletMark = (
    <svg
      viewBox="0 0 280 200"
      className="h-full w-auto overflow-visible select-none drop-shadow-[0_2px_12px_rgba(255,255,255,0.15)]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="subtle-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#FFFFFF" floodOpacity="0.2" />
        </filter>
      </defs>

      <g filter="url(#subtle-glow)">
        {/* Leaping Flames in White */}
        <path
          fill="#FFFFFF"
          d="
            M 68 132
            C 62 118, 54 94, 66 74
            C 72 64, 82 56, 88 62
            C 84 74, 80 88, 92 98
            C 86 82, 80 60, 94 40
            C 102 28, 108 24, 108 30
            C 106 42, 98 56, 108 66
            C 114 52, 122 44, 128 52
            C 134 62, 130 78, 132 92
            C 138 78, 144 74, 148 86
            C 154 100, 148 116, 150 130
            C 144 132, 136 134, 128 136
            C 120 118, 118 98, 114 88
            C 110 98, 106 114, 100 126
            C 94 114, 90 92, 94 78
            C 90 92, 84 112, 80 130
            C 74 132, 70 134, 68 132 Z
          "
        />

        {/* Skillet Pan Hull (Crescent curved body in White) */}
        <path
          fill="#FFFFFF"
          d="
            M 42 144
            C 48 168, 80 188, 130 185
            C 168 182, 194 162, 198 132
            C 200 126, 196 124, 186 130
            C 164 148, 134 158, 96 156
            C 68 154, 52 146, 46 138
            C 42 134, 40 136, 42 144 Z
          "
        />

        {/* Inside Pan Lip Edge */}
        <path
          fill="#FFFFFF"
          d="
            M 48 138
            C 66 154, 108 160, 152 146
            C 178 138, 190 128, 190 124
            C 190 121, 182 126, 164 132
            C 128 144, 82 142, 58 130
            C 52 127, 50 130, 48 138 Z
          "
        />

        {/* Curved Skillet Handle extending upward and rightward */}
        <path
          fill="#FFFFFF"
          d="
            M 196 138
            C 210 125, 230 104, 255 86
            C 268 76, 280 69, 286 70
            C 290 72, 292 76, 288 81
            C 280 89, 264 100, 246 114
            C 226 130, 208 142, 194 148
            C 192 148, 191 144, 196 138 Z
          "
        />
      </g>
    </svg>
  );

  // If mark-only is requested
  if (variant === 'mark-only') {
    return (
      <div className={`flex items-center justify-center ${className}`} style={{ height: dimensions.height }}>
        {FlamingSkilletMark}
      </div>
    );
  }

  // Horizontal variant (Ideal for sticky Navbar & Header)
  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-2.5 sm:gap-3.5 select-none ${className}`}>
        {/* Flaming skillet logo mark */}
        <div className="relative shrink-0 flex items-center" style={{ height: dimensions.height }}>
          {FlamingSkilletMark}
        </div>

        {/* Wordmark typography: ROYAL COOKS in cursive gold matching user's logo */}
        <div className="flex flex-col justify-center leading-none">
          <span
            className="font-serif-lux italic font-bold tracking-wider text-[#E9BF36] text-xl sm:text-2xl drop-shadow-[0_1px_8px_rgba(233,191,54,0.4)]"
            style={{
              fontFamily: "'Cormorant Garamond', cursive, serif",
              letterSpacing: '0.08em',
              fontWeight: 700,
            }}
          >
            Royal
          </span>
          <span
            className="text-[10px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#E9BF36]/90 mt-0.5"
            style={{
              letterSpacing: '0.3em',
            }}
          >
            COOKS
          </span>
        </div>
      </div>
    );
  }

  // Full Stacked variant (Exact representation of the user's square logo card)
  return (
    <div
      className={`flex flex-col items-center justify-center p-4 rounded-2xl bg-[#181513] border border-[#E9BF36]/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)] select-none ${className}`}
      style={{ minWidth: dimensions.width }}
    >
      {/* Skillet Icon */}
      <div className="w-full flex items-center justify-center mb-1" style={{ height: dimensions.height }}>
        {FlamingSkilletMark}
      </div>

      {/* Royal Cooks text in cursive gold */}
      <div className="flex flex-col items-center text-center mt-1">
        <span
          className="font-serif-lux italic font-bold tracking-widest text-[#E9BF36] text-2xl sm:text-3xl drop-shadow"
          style={{
            fontFamily: "'Cormorant Garamond', cursive, serif",
            letterSpacing: '0.12em',
          }}
        >
          Royal
        </span>
        <span
          className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#E9BF36] mt-1"
        >
          COOKS
        </span>
      </div>
    </div>
  );
};
