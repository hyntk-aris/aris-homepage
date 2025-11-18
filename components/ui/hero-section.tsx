"use client";

import React from "react";
import { Spotlight } from "./spotlight";
import { Marquee } from "./marquee";
import { cn } from "@/lib/utils";

const CustomerLogos = [
  { id: 1, name: "Logo 1" },
  { id: 2, name: "Logo 2" },
  { id: 3, name: "Logo 3" },
  { id: 4, name: "Logo 4" },
  { id: 5, name: "Logo 5" },
  { id: 6, name: "Logo 6" },
];

const LogoCard = ({ logo }: { logo: (typeof CustomerLogos)[0] }) => (
  <div className="flex items-center justify-center h-20 px-8 grayscale opacity-50 hover:opacity-75 transition-opacity">
    <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
      {logo.name}
    </div>
  </div>
);

export default function HeroSection() {
  return (
    <div className={cn(
      "relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden",
      "bg-white dark:bg-black/[0.96]",
      "antialiased"
    )}>
      {/* Grid Background Pattern */}
      {/* <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      /> */}

      {/* Spotlight Effect */}
      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#3B82F6"
        size={400}
      /> */}

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        {/* Header */}
        <h1 className={cn(
          "text-center text-4xl font-bold md:text-6xl lg:text-7xl leading-tight mb-6",
          "bg-gradient-to-b from-slate-900 to-slate-700 dark:from-slate-50 dark:to-slate-300",
          "bg-clip-text text-transparent"
        )}>
          Thúc đẩy đổi mới với{" "}
          <span className="inline-flex items-center gap-2">
            <span className="bg-gradient-to-b from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Trí tuệ nhân tạo
            </span>
            <svg
              className="w-8 h-8 text-blue-600 dark:text-blue-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
          </span>
        </h1>

        {/* Subtext */}
        <p className={cn(
          "mx-auto mt-4 max-w-2xl text-center text-base font-normal md:text-lg",
          "text-slate-600 dark:text-slate-300"
        )}>
          Khám phá giải pháp AI tiên tiến để tối ưu hóa quy trình kinh doanh của bạn và đạt được thành công bền vững.
        </p>

        {/* Action Area - Two Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center mb-16">
          <button className={cn(
            "px-8 py-3 rounded-full font-medium transition-colors",
            "bg-slate-900 text-white hover:bg-slate-800",
            "dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
          )}>
            Liên hệ tư vấn
          </button>
          <button className={cn(
            "px-8 py-3 rounded-full font-medium transition-colors",
            "bg-slate-200 text-slate-900 hover:bg-slate-300",
            "dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
          )}>
            Tìm hiểu thêm
          </button>
        </div>
      </div>

      {/* Footer Hero - Marquee with Logos */}
      <div className={cn(
        "w-full border-t",
        "border-slate-200 dark:border-slate-800"
      )}>
        <div className={cn(
          "text-center text-sm font-medium py-4",
          "text-slate-500 dark:text-slate-400"
        )}>
          Được tin tưởng bởi
        </div>
        <Marquee className="py-4">
          {CustomerLogos.map((logo) => (
            <LogoCard key={logo.id} logo={logo} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
