"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { NumberTicker } from "@/components/ui/number-ticker"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  const stats = [
    { number: 500, label: "Dự án thành công", highlight: true },
    { number: 14, label: "Năm kinh nghiệm" },
    { number: 200, label: "Khách hàng hài lòng" },
    { number: 80, label: "Nhân sự" },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-between">
            {/* Label */}
            <div className="mb-8 flex items-center gap-2">
              <div className="h-1 w-6 bg-blue-500" />
              <span className="text-sm font-semibold text-blue-500">Về Chúng Tôi</span>
            </div>

            {/* Title */}
            <h2 className="mb-6 text-4xl font-bold lg:text-5xl text-slate-900 dark:text-white">
              ARIS Việt Nam
            </h2>

            {/* Description Paragraphs */}
            <div className="mb-8 space-y-4">
              <p className="text-base text-neutral-600 dark:text-neutral-400">
                Đồng hành cùng doanh nghiệp thông qua các giải pháp phần mềm sáng tạo suốt hơn 14 năm qua.
              </p>
              <p className="text-base text-neutral-600 dark:text-neutral-400">
                ARIS Việt Nam là công ty phần mềm 100% vốn Nhật Bản, với hơn 14 năm kinh nghiệm triển khai các dự án công nghệ thông tin cho thị trường Nhật Bản và trong nước. Chúng tôi chuyên phát triển ứng dụng di động, dịch vụ phát triển phần mềm theo yêu cầu và kiểm thử phần mềm, đáp ứng nhu cầu độc lập khác nhau của các công ty.
              </p>
              <p className="text-base text-neutral-600 dark:text-neutral-400">
                Với đội ngũ kỹ thuật giàu kinh nghiệm, ARIS Việt Nam cam kết mang đến các giải pháp chất lượng cao, đồng hành cùng khách hàng trong suốt quá trình phát triển và đảm bảo hiệu quả tối đa cho mỗi dự án.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <Button className="inline-flex items-center gap-2 rounded-full bg-slate-900 dark:bg-white dark:text-slate-900 hover:gap-3">
                Tải xuống hồ sơ
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col items-center justify-center rounded-2xl p-8 transition-all ${
                  stat.highlight
                    ? "bg-slate-900 text-white dark:bg-slate-800"
                    : "border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-slate-900/50"
                }`}
              >
                <div className="mb-2 text-4xl font-bold lg:text-5xl text-slate-900 dark:text-white">
                  <NumberTicker value={stat.number} />
                  <span className="text-2xl">+</span>
                </div>
                <p className={`text-center text-sm font-medium ${
                  stat.highlight 
                    ? "text-gray-300" 
                    : "text-gray-600 dark:text-gray-400"
                }`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
