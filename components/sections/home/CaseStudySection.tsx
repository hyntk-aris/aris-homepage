"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Define mảng 'caseStudies'. Item 1: 'Nền tảng CRM 001', Item 2: 'Nền tảng CRM 002'. Description text giả.
const caseStudies = [
  {
    id: 1,
    title: "Nền tảng CRM 001",
    description: "Quản lý quan hệ khách hàng cho doanh nghiệp.",
  },
  {
    id: 2,
    title: "Nền tảng CRM 002",
    description: "Quản lý quản hệ phiên bản hành cho doanh nghiệp.",
  },
];

export function CaseStudySection() {
  return (
    <section className="py-20 bg-background">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Render Header: Flex container. Left: Title & Desc. Right: Button 'Xem thêm'. Mobile: Stack column. Desktop: Row justify-between. */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-8">
          {/* Left Section */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Câu chuyện thành công
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
              Khám phá cách chúng tôi giúp các doanh nghiệp giải quyết thách thức &
              đạt được kết quả vượt ngoài dự thính thực & đạt được kết quả công nghệ
            </p>
          </div>

          {/* Right Section - Button */}
          <div className="flex-shrink-0">
            <Button
              variant="outline"
              className="rounded-full px-6 py-3 border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-slate-900/50 hover:bg-gray-200 dark:hover:bg-slate-900 text-slate-900 dark:text-white"
            >
              Xem thêm
            </Button>
          </div>
        </div>

        {/* Map qua caseStudies. Container mỗi item dùng Flexbox. Logic đảo chiều: Kiểm tra index % 2. Nếu lẻ thì thêm class 'md:flex-row-reverse'. Gap giữa cột hình và cột chữ lớn (gap-12 hoặc gap-24). */}
        <div className="space-y-16">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } gap-12 md:gap-24 items-center`}
            >
              {/* Render Image Area: Div bg-gray-100 (gray-50), rounded-3xl, aspect-video (hoặc aspect-[4/3]), w-full. */}
              <div className="w-full md:w-1/2 flex-shrink-0">
                <div className="w-full aspect-[4/3] rounded-2xl bg-gray-100 dark:bg-slate-900/50"></div>
              </div>

              {/* Render Text Area: w-full flex flex-col justify-center gap-4. Title: Text-3xl font-bold. Description: Text-gray-500. */}
              <div className="w-full md:w-1/2 flex flex-col justify-center gap-4">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">{caseStudy.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
