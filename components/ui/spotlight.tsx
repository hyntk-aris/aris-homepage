"use client";

import { cn } from "@/lib/utils";

interface SpotlightProps {
  className?: string;
  fill?: string;
  size?: number;
}

export const Spotlight = ({
  className = "",
  fill = "white",
  size = 400,
}: SpotlightProps) => {
  return (
    <svg
      className={cn(
        "pointer-events-none absolute animate-pulse",
        className
      )}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_342_3349)">
        <circle cx={size / 2} cy={size / 2} r={size / 2} fill={fill} />
      </g>
      <defs>
        <filter
          id="filter0_f_342_3349"
          x="0"
          y="0"
          width={size}
          height={size}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation={size / 4} />
        </filter>
      </defs>
    </svg>
  );
};
