"use client";

import { ReactNode } from "react";

interface MarqueeProps {
  className?: string;
  children: ReactNode;
  pauseOnHover?: boolean;
  speed?: number;
  reverse?: boolean;
}

export const Marquee = ({
  className = "",
  children,
  pauseOnHover = true,
  speed = 40,
  reverse = false,
}: MarqueeProps) => {
  return (
    <div
      className={`group relative w-full overflow-hidden ${className}`}
      style={{
        maskImage: "linear-gradient(90deg, transparent, white 10%, white 90%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, white 10%, white 90%, transparent)",
      }}
    >
      <div
        className={`flex w-max gap-8 ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
        style={{
          animation: `${reverse ? "scroll-reverse" : "scroll"} ${speed}s linear infinite`,
        }}
      >
        {children}
        {children}
      </div>
      <style>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-reverse {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};
