"use client"

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { Code, Zap, Layout, BarChart3, Smartphone } from "lucide-react"

export default function FeaturedServicesSection() {
  const services = [
    {
      title: "Web Development",
      description: "Build fast and modern websites with cutting-edge technologies. We create responsive, scalable solutions tailored to your business needs.",
      icon: <Code className="h-8 w-8 text-blue-500" />,
      className: "md:col-span-1 md:row-span-2 min-h-[384px]",
    },
    {
      title: "Performance",
      description: "Optimized for speed and efficiency",
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: "Responsive Design",
      description: "Works perfectly on all devices",
      icon: <Layout className="h-6 w-6 text-green-500" />,
    },
    {
      title: "Analytics",
      description: "Track and analyze user behavior",
      icon: <BarChart3 className="h-6 w-6 text-purple-500" />,
    },
    {
      title: "Mobile Apps",
      description: "Native mobile application development",
      icon: <Smartphone className="h-6 w-6 text-pink-500" />,
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Left - Main Title */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Tăng tốc hành trình DX của bạn nhờ dịch vụ từ chúng tôi
            </h1>
          </div>

          {/* Right - Subtitle */}
          <div className="flex-1 md:pl-8">
            <p className="text-base text-muted-foreground md:text-lg">
              ARIS Việt nam đồng hành cùng bạn trên hành trình chuyển đổi số.
            </p>
          </div>
        </div>

        {/* BentoGrid Section */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {services.map((service, i) => (
            <BentoGridItem
              key={i}
              title={service.title}
              description={service.description}
              icon={service.icon}
              className={service.className}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
