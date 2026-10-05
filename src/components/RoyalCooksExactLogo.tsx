import React from 'react';

interface RoyalCooksExactLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withBackground?: boolean;
}

export const RoyalCooksExactLogo: React.FC<RoyalCooksExactLogoProps> = ({
  className = '',
  size = 'md',
  withBackground = true,
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10 sm:w-11 sm:h-11',
    md: 'w-14 h-14 sm:w-16 sm:h-16',
    lg: 'w-24 h-24 sm:w-28 sm:h-28',
    xl: 'w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56',
  }[size];

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${sizeClasses} ${className}`}
    >
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full object-contain rounded-xl select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Dark warm brown-black background from user's image */}
        {withBackground && (
          <rect width="500" height="500" fill="#1C1815" rx="20" />
        )}

        <g transform="translate(10, 8)">
          {/* 1. Skillet Pan & Leaping Flames (White #FFFFFF) with internal flame cut */}
          <path
            fill="#FFFFFF"
            fillRule="evenodd"
            d="
              M 148 244
              C 138 220, 126 190, 142 162
              C 148 152, 160 144, 166 150
              C 160 162, 156 182, 172 194
              C 165 170, 158 138, 178 112
              C 188 98, 194 96, 194 102
              C 192 116, 184 135, 194 148
              C 200 132, 210 122, 218 132
              C 226 145, 222 168, 224 185
              C 230 165, 238 160, 244 175
              C 250 192, 245 215, 248 232
              C 240 235, 234 238, 226 242
              C 216 218, 214 194, 208 180
              C 204 192, 198 212, 190 226
              C 184 212, 178 182, 184 165
              C 178 182, 172 208, 166 232
              C 158 236, 152 240, 148 244 Z

              M 186 160
              C 192 172, 195 190, 188 206
              C 184 214, 176 220, 172 222
              C 170 216, 172 206, 176 198
              C 182 186, 182 172, 186 160 Z
            "
          />

          {/* Pan Hull & Bottom Crescent (White) */}
          <path
            fill="#FFFFFF"
            d="
              M 108 260
              C 114 294, 156 322, 220 318
              C 266 314, 298 286, 304 246
              C 306 240, 300 238, 288 246
              C 258 268, 222 284, 172 280
              C 138 278, 118 266, 112 256
              C 107 250, 106 253, 108 260 Z
            "
          />

          {/* Pan Upper Rim Arc (White) */}
          <path
            fill="#FFFFFF"
            d="
              M 116 250
              C 140 272, 192 278, 246 262
              C 280 252, 294 238, 294 232
              C 294 229, 284 235, 262 243
              C 216 260, 158 256, 128 240
              C 121 236, 118 240, 116 250 Z
            "
          />

          {/* Pan Inner Bowl Hollow */}
          <path
            fill="#1C1815"
            d="
              M 120 250
              C 148 270, 208 274, 268 250
              C 284 242, 290 234, 284 238
              C 254 260, 192 264, 138 248
              C 126 244, 122 246, 120 250 Z
            "
          />

          {/* Pan Handle with rounded teardrop paddle tip (White) */}
          <path
            fill="#FFFFFF"
            d="
              M 298 256
              C 316 240, 344 212, 378 188
              C 395 176, 412 166, 420 168
              C 426 170, 429 176, 424 182
              C 414 192, 392 208, 370 226
              C 344 246, 320 262, 302 270
              C 296 272, 294 266, 298 256 Z
            "
          />

          {/* 2. "ROYAL" in Cursive Script Hand-Drawn Paths (#F0C43B) */}
          <g
            fill="none"
            stroke="#F0C43B"
            strokeWidth="4.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* R */}
            <path d="M 148 342 C 145 362, 142 390, 146 410" />
            <path d="M 144 345 C 150 332, 174 326, 186 338 C 196 348, 194 366, 180 374 C 168 378, 146 376, 144 376" />
            <path d="M 166 375 C 174 382, 186 398, 198 410" />

            {/* O */}
            <path d="M 230 355 C 215 352, 198 372, 202 392 C 206 410, 224 414, 235 404 C 244 394, 246 372, 238 358 C 235 354, 230 354, 226 356" />

            {/* Y with descender loop */}
            <path d="M 252 358 C 255 375, 260 390, 272 392 C 282 392, 288 380, 294 358" />
            <path d="M 292 358 C 288 385, 280 415, 272 432 C 265 444, 252 444, 248 434 C 244 424, 256 412, 286 410" />

            {/* A */}
            <path d="M 326 358 C 314 370, 304 388, 308 402 C 312 410, 324 412, 332 404 C 338 396, 342 384, 340 370" />
            <path d="M 338 358 C 338 375, 338 395, 344 410" />

            {/* L with high loop and bottom horizontal sweep */}
            <path d="M 366 395 C 374 355, 380 330, 388 332 C 394 335, 390 355, 380 382 C 374 398, 368 412, 372 414 C 378 416, 400 414, 420 404 C 426 400, 428 395, 426 392" />
          </g>

          {/* 3. "COOKS" in Tall Narrow Brush Caps Hand-Drawn Paths (#F0C43B) */}
          <g
            fill="none"
            stroke="#F0C43B"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* C */}
            <path d="M 204 446 C 196 442, 186 448, 186 458 C 186 468, 196 472, 204 468" />

            {/* O */}
            <path d="M 226 444 C 218 444, 214 452, 214 460 C 214 468, 220 472, 226 472 C 234 472, 238 466, 238 458 C 238 450, 232 444, 226 444 Z" />

            {/* O */}
            <path d="M 256 444 C 248 444, 244 452, 244 460 C 244 468, 250 472, 256 472 C 264 472, 268 466, 268 458 C 268 450, 262 444, 256 444 Z" />

            {/* K */}
            <path d="M 282 444 L 282 472" />
            <path d="M 298 445 L 283 458 L 298 472" />

            {/* S */}
            <path d="M 326 448 C 322 444, 314 445, 314 452 C 314 460, 328 458, 328 466 C 328 472, 320 472, 314 468" />
          </g>
        </g>
      </svg>
    </div>
  );
};
