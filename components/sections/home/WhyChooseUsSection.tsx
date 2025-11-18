"use client"

import { useState } from "react"
import { ExpandableCard, type WhyChooseUsItem } from "@/components/ui/expandable-card"

const whyChooseUsData: WhyChooseUsItem[] = [
  {
    id: "security",
    title: "Cam kết bảo mật",
    description: "Hệ thống bảo mật đa lớp chuẩn quốc tế ISO 27001.",
    content:
      "Chúng tôi cam kết bảo mật tuyệt đối dữ liệu khách hàng thông qua quy trình mã hóa End-to-End và thỏa thuận NDA chặt chẽ. Mọi source code và dữ liệu nghiệp vụ đều được lưu trữ trên hạ tầng Private Cloud với quyền truy cập được kiểm soát nghiêm ngặt.",
    cta: "Xem chứng chỉ bảo mật",
    visualType: "security_shield",
  },
  {
    id: "quality",
    title: "Quản lý chất lượng",
    description: "Quy trình QC/QA nghiêm ngặt với độ phủ test >95%.",
    content:
      "Áp dụng quy trình kiểm thử tự động (Automation Test) kết hợp kiểm thử thủ công. Mỗi dòng code đều trải qua Code Review kỹ lưỡng trước khi merge. Cam kết bàn giao sản phẩm 'Bug-free' ở các luồng nghiệp vụ chính.",
    cta: "Quy trình QA/QC",
    visualType: "quality_card",
  },
  {
    id: "professional",
    title: "Tính chuyên nghiệp",
    description: "Đội ngũ nhân sự >5 năm kinh nghiệm, quy trình Agile/Scrum.",
    content:
      "Làm việc theo quy trình Agile chuyên nghiệp, báo cáo tiến độ Daily/Weekly minh bạch. Đội ngũ BA/PM giàu kinh nghiệm giúp tư vấn và tối ưu hóa bài toán nghiệp vụ của khách hàng ngay từ khâu ý tưởng.",
    cta: "Gặp gỡ đội ngũ",
    visualType: "professional_toggle",
  },
  {
    id: "companion",
    title: "Cam kết đồng hành",
    description: "Hỗ trợ trọn đời, bảo hành 12 tháng sau bàn giao.",
    content:
      "Không chỉ là đối tác phát triển, ARIS đồng hành cùng doanh nghiệp trong suốt vòng đời sản phẩm. Hỗ trợ nâng cấp, mở rộng tính năng và xử lý sự cố 24/7 ngay cả khi dự án đã kết thúc giai đoạn phát triển.",
    cta: "Chính sách bảo hành",
    visualType: "companion_chart",
  },
  {
    id: "connection",
    title: "Gắn kết khách hàng",
    description: "Mạng lưới đối tác rộng khắp, hệ sinh thái đa dạng.",
    content:
      "Chúng tôi kết nối khách hàng với hệ sinh thái công nghệ rộng lớn, giúp doanh nghiệp tiếp cận các giải pháp tích hợp (Payment, Logistics, AI...) một cách nhanh chóng và tối ưu chi phí nhất.",
    cta: "Đối tác tiêu biểu",
    visualType: "connection_network",
  },
]

export default function WhyChooseUsSection() {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  return (
    <section className="py-16 relative bg-background">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Tại sao chọn ARIS?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
            Chúng tôi mang đến giải pháp toàn diện với sự cam kết về chất lượng
            và đồng hành lâu dài.
          </p>
        </div>

        {/* Special Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative z-0">
          {/* First 3 Cards: md:col-span-2 (1/3 width each) */}
          {whyChooseUsData.slice(0, 3).map((item) => (
            <div key={item.id} className="md:col-span-2 h-[254px]">
              <ExpandableCard
                item={item}
                isActive={activeCard === item.id}
                onOpen={() => setActiveCard(item.id)}
                onClose={() => setActiveCard(null)}
              />
            </div>
          ))}

          {/* Last 2 Cards: md:col-span-3 (1/2 width each) */}
          {whyChooseUsData.slice(3).map((item) => (
            <div key={item.id} className="md:col-span-3 h-[254px]">
              <ExpandableCard
                item={item}
                isActive={activeCard === item.id}
                onOpen={() => setActiveCard(item.id)}
                onClose={() => setActiveCard(null)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
