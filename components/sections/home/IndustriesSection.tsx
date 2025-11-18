"use client";

import { Marquee } from "@/components/ui/marquee";

const row1Industries = [
  "Sản Xuất / Nhà Máy",
  "Bán Lẻ & TMĐT",
  "Chăm Sóc Sức Khoẻ",
  "An Ninh Mạng",
];

const row2Industries = [
  "Giáo Dục & Đào Tạo",
  "Giao Thông / Logistics",
  "Bất Động Sản",
  "Tài Chính / Ngân Hàng",
];

const IndustryCard = ({ name }: { name: string }) => (
  <div className="flex-shrink-0 px-8 py-4 border border-gray-200 dark:border-gray-800 rounded-full bg-white dark:bg-slate-900/50 text-slate-600 dark:text-gray-400 font-medium whitespace-nowrap transition-colors hover:border-blue-500 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-slate-900 dark:hover:border-blue-500 dark:hover:text-blue-400">
    {name}
  </div>
);

export function IndustriesSection() {
  return (
    <section className="py-20 overflow-hidden bg-background">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">
          Giải pháp được thiết kế riêng cho từng ngành trọng điểm
        </h2>

        {/* Content - Row 1 */}
        <div className="mb-8">
          <Marquee speed={40} pauseOnHover={true}>
            {row1Industries.map((industry, index) => (
              <IndustryCard key={index} name={industry} />
            ))}
          </Marquee>
        </div>

        {/* Content - Row 2 (Reverse) */}
        <div>
          <Marquee speed={40} pauseOnHover={true} reverse={true}>
            {row2Industries.map((industry, index) => (
              <IndustryCard key={index} name={industry} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
