"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

interface Solution {
  id: number
  title: string
  description: string
  coverImage: string
  features: string[]
  category: string
}

const SOLUTIONS_DATA: Solution[] = [
  {
    id: 1,
    title: "Hệ thống E-Office",
    description: "Quản lý văn phòng điện tử hiệu quả",
    coverImage: "/images/solutions/Image (Replace).png",
    features: [
      "Nền tảng kết nối giữa người dùng và biên dịch viên/đơn vị cung cấp dịch vụ phiên dịch",
      "Hỗ trợ thực hiện phiên dịch trực tuyến",
      "Quản lý thủ lao, thanh toán",
      "Quản lý biên dịch viên và công ty phiên dịch",
      "Quản lý người dùng",
    ],
    category: "Hệ thống doanh nghiệp",
  },
  {
    id: 2,
    title: "Hệ thống ghép nối phiên dịch viên trực tuyến",
    description: "Kết nối dịch vụ phiên dịch hiệu quả",
    coverImage: "/images/solutions/Image (Replace).png",
    features: [
      "Nền tảng kết nối BtoBtoC cho dịch vụ phiên dịch trực tuyến",
      "Ghép nối giữa người dùng dựa vào biên dịch viên/doanh nghiệp dịch thuật",
      "Quản lý biên dịch viên và người dùng",
      "Quản lý thanh toán, thủ lao",
      "Hệ thống e-Office hỗ trợ quản lý bộ toàn diện",
    ],
    category: "Hệ thống doanh nghiệp",
  },
  {
    id: 3,
    title: "Hệ thống quản lý chăm sóc y tế tại nhà",
    description: "Quản lý y tế cộng đồng tổng thể",
    coverImage: "/images/solutions/Image (Replace).png",
    features: [
      "Tổ chức lịch khám y tế tại nhà",
      "Xây dựng các trường hợp nguy hiểm và khảo sát",
      "Quản lý tuyến đường, thời gian",
      "Tạo báo cáo và thống kê chính xác",
      "Với tệ hệ thống quản trị nhân viên/Người phụ trách",
    ],
    category: "Hệ thống doanh nghiệp",
  },
  {
    id: 4,
    title: "Hệ thống quản lý thời gian thực",
    description: "Theo dõi hoạt động thời gian thực",
    coverImage: "/images/solutions/Image (Replace).png",
    features: [
      "Dữ liệu và phân tích toàn diện",
      "Phân vùng khu vực thực hiện",
      "Đánh giá tổng thể hoạt động",
      "Quản lý nhiều vị trí",
    ],
    category: "Hệ thống doanh nghiệp",
  },
  {
    id: 5,
    title: "Nền tảng thương mại điện tử",
    description: "Giải pháp bán hàng trực tuyến",
    coverImage: "/images/solutions/Image (Replace).png",
    features: [
      "Quản lý sản phẩm và kho hàng",
      "Xử lý đơn hàng tự động",
      "Tích hợp cổng thanh toán",
      "Báo cáo doanh số chi tiết",
    ],
    category: "Hệ thống doanh nghiệp",
  },
  {
    id: 6,
    title: "Hệ thống CRM toàn diện",
    description: "Quản lý mối quan hệ khách hàng",
    coverImage: "/images/solutions/Image (Replace).png",
    features: [
      "Quản lý danh bạ khách hàng",
      "Theo dõi tương tác",
      "Dự báo bán hàng",
      "Tích hợp email marketing",
    ],
    category: "Hệ thống doanh nghiệp",
  },
  {
    id: 7,
    title: "Nền tảng quản lý dự án",
    description: "Cộng tác nhóm hiệu quả",
    coverImage: "/images/solutions/Image (Replace).png",
    features: [
      "Lập kế hoạch và gán công việc",
      "Theo dõi tiến độ dự án",
      "Cộng tác nhóm thời gian thực",
      "Báo cáo và phân tích",
    ],
    category: "Hệ thống doanh nghiệp",
  },
]

const CONTAINER_WIDTH = 1440

const SolutionCard = ({ solution }: { solution: Solution }) => {
  return (
    <motion.div
      className="flex-shrink-0 min-w-[354px] w-[354px] bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col"
      whileHover={{ y: -8 }}
    >
      {/* Cover Image - Fixed height 266px */}
      <div className="relative h-[266px] w-full overflow-hidden bg-neutral-100">
        <Image
          src={solution.coverImage}
          alt={solution.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Body */}
      <div className="flex flex-col p-5 justify-between flex-1">
        {/* Title and Features */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-neutral-900 line-clamp-2">
            {solution.title}
          </h3>

          {/* Features List */}
          <ul className="space-y-1.5">
            {solution.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-blue-500 font-bold flex-shrink-0 mt-0.5">•</span>
                <span className="text-xs text-neutral-600 line-clamp-2">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer - Category Tag */}
        <div>
          <span className="inline-block px-3 py-1.5 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full">
            {solution.category}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function FeaturedSolutionsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [leftInset, setLeftInset] = useState(0)
  const [xScrollAmount, setXScrollAmount] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Calculate left inset and scroll amount based on container alignment
  useEffect(() => {
    const calculateAlignment = () => {
      if (typeof window === "undefined") return

      // Calculate left inset for 1440px container centered on viewport
      const calculatedLeftInset = Math.max(0, (window.innerWidth - CONTAINER_WIDTH) / 2)
      setLeftInset(calculatedLeftInset)

      // Calculate scroll amount after a brief delay to ensure DOM is ready
      setTimeout(() => {
        if (trackRef.current) {
          // Track width includes all cards + gaps
          const trackWidth = trackRef.current.scrollWidth
          // Total horizontal scroll needed: track width - viewport width + (leftInset on both sides)
          const calculatedXScrollAmount = Math.max(
            0,
            trackWidth - window.innerWidth + calculatedLeftInset * 2
          )
          setXScrollAmount(calculatedXScrollAmount)
        }
      }, 50)
    }

    calculateAlignment()

    // Recalculate on window resize
    window.addEventListener("resize", calculateAlignment)
    return () => window.removeEventListener("resize", calculateAlignment)
  }, [])

  // Transform scroll progress with "pause" effect
  // 0-85% progress: cards scroll horizontally
  // 85-100% progress: cards pause (pause effect)
  const xTranslate = useTransform(
    scrollYProgress,
    [0, 0.85, 1],
    [0, -xScrollAmount, -xScrollAmount]
  )

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-neutral-50 pb-16">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen bg-neutral-50 flex flex-col items-center overflow-hidden">
        {/* Header - Left aligned heading with action button */}
        <div className="relative w-full z-10 pt-[164px]">
          <div className="max-w-7xl w-full mx-auto flex items-start justify-between gap-4 md:gap-6 mb-12 px-4 md:px-8">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-6 bg-blue-500" />
                <span className="text-sm font-semibold text-blue-500">Giải pháp</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900">
                Giải pháp nổi bật
              </h2>
            </div>

            <div className="flex items-center">
              <button className="inline-flex items-center px-4 py-2 border border-neutral-200 rounded-md text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-100">
                Xem thêm
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Track Container - Overflow hidden for masking */}
        <div className="relative w-full flex-1 overflow-hidden flex items-stretch pb-16">
          <motion.div
            ref={trackRef}
            style={{ 
              x: xTranslate,
              paddingLeft: leftInset,
              paddingRight: leftInset,
            }}
            className="flex gap-6 w-max items-stretch"
          >
            {SOLUTIONS_DATA.map((solution) => (
              <SolutionCard key={solution.id} solution={solution} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
