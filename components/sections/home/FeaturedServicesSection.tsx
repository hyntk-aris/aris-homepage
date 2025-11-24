"use client"

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"

export default function FeaturedServicesSection() {
  const services = [
    {
      title: (
        <>
          Phát triển phần mềm
          <br />
          dịch vụ trọn gói ONE-STOP
        </>
      ),
      // Big card: spans 2/4 columns (50%) and 2 rows to match height of right column stack
      className: "md:col-span-2 md:row-span-2 min-h-[384px] ",
      // example image path (place your image at public/images/services/hero-one.webp)
      image: "/images/services/hero-one.webp",
      header: <div className="flex-1" />,

    },
    {
      title: "AI/AL/AUTOMATION",
      // Small card: occupies 1/4 width on md+
      className: "md:col-span-1 items-center text-center",
      image: "/images/services/ai-automation.webp",
      header: <div className="flex-1" />,
    },
    {
      title: (
        <>
          Tư vấn chuyển đổi số,
          <br />
          giải pháp chuyển đổi số
        </>
      ),
      className: "md:col-span-1",
      image: "/images/services/dx-consulting.webp",
    },
    {
      title: (
        <>
          Phát triển
          <br />
          ứng dụng di động
        </>
      ),
      className: "md:col-span-1",
      image: "/images/services/mobile-apps.webp",
    },
    {
      title: (
        <>
          Thiết kế UI/UX
          <br />
          Thiết kế đồ họa
        </>
      ),
      className: "md:col-span-1",
      image: "/images/services/ui-ux.webp",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 ">
        {/* Header Section */}
        <div className="mb-12 flex gap-6">
          {/* Left - Main Title */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl text-slate-900 dark:text-white">
              Tăng tốc hành trình DX của bạn nhờ dịch vụ từ chúng tôi
            </h1>
          </div>

          {/* Right - Subtitle */}
          <div className="flex-1 md:pl-8 flex items-end">
            <p className="text-base text-muted-foreground md:text-lg">
              ARIS Việt nam đồng hành cùng bạn trên hành trình chuyển đổi số.
            </p>
          </div>
        </div>

        {/* BentoGrid Section: 4-column system on md+ (split into 4 equal parts) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {services.map((service, i) => (
            <BentoGridItem
              key={i}
              title={service.title}
              /* remove description: only title should display */
              className={service.className}
              /* for the first (big) card, inject a header spacer so content sits at bottom */
              header={service.header}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
