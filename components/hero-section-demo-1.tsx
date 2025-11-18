"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { Marquee } from "@/components/ui/marquee";
import { AuroraText } from "@/components/ui/aurora-text";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

const logos = [
  { name: "Cus 1", src: "/images/logos/cus1.svg" },
  { name: "Cus 2", src: "/images/logos/cus2.svg" },
  { name: "Cus 3", src: "/images/logos/cus3.svg" },
  { name: "Cus 4", src: "/images/logos/cus4.svg" },
  { name: "Cus 5", src: "/images/logos/cus5.svg" },
];

const LogoCard = ({ logo }: { logo: (typeof logos)[0] }) => (
  <div className="flex items-center justify-center px-8 py-4 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
    <img
      src={logo.src}
      alt={logo.name}
      className="w-auto object-contain filter dark:brightness-150 dark:invert"
      style={{
        filter: "brightness(var(--logo-brightness, 0.5))",
        height: "calc(2rem * 1.44)",
      }}
    />
  </div>
);

export default function HeroSectionOne() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Track scroll progress of the hero section so we can animate the main image
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  // Scale the image from normal to enlarged as user scrolls through the hero
  const rawImgScale = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [1, 1.1, 1.5, 2]);
  // Smooth the scale motion with a spring for a nicer feeling
  const imgScale = useSpring(rawImgScale, { stiffness: 100, damping: 25, mass: 1 });

  // Small initial upward offset so user sees the image is scrollable
  const imgYOffset = useTransform(scrollYProgress, [0, 0.08], [-48, 0]);

  // Smoothly remove border radius as it approaches full-screen
  const imgRadius = useTransform(scrollYProgress, [0.6, 1], [24, 0]);

  // Animate width/height so the image becomes full-bleed at the end
  const imgWidth = useTransform(scrollYProgress, [0.6, 1], ["95%", "100vw"]);
  const imgHeight = useTransform(scrollYProgress, [0.6, 1], ["75vh", "100vh"]);

  return (
    <div ref={containerRef} className="relative w-full min-h-[220vh] overflow-hidden bg-background" style={{ scrollBehavior: "smooth" }}>
      {/* Spotlight Effect */}
      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
        size={800}
      /> */}

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-4 pt-20 pb-10 scroll-snap-type-y-mandatory">
        {/* Main Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4 text-center mb-12"
        >
          {/* Title */}
          <h1 className="text-center font-bold text-4xl md:text-7xl text-neutral-900 dark:text-neutral-100">
            Thúc đẩy đổi mới với
          </h1>

          {/* Gradient Title with Icon */}
          <span className="flex items-center gap-3 justify-center font-bold text-4xl md:text-7xl">
            {/*<Sparkles className="w-8 h-8 md:w-10 md:h-10 text-blue-500 flex-shrink-0" />*/}
            <AuroraText>Trí tuệ nhân tạo</AuroraText>
          </span>

          {/* Description */}
          <p className="max-w-2xl text-base md:text-lg text-neutral-600 dark:text-neutral-400 mt-4">
            Khai phá tiềm năng mới để vượt lên dẫn đầu thị trường.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8 mb-16"
        >
          <button className="bg-slate-900 text-white rounded-full px-8 py-3 hover:opacity-90 transition-opacity font-semibold dark:bg-slate-100 dark:text-slate-900">
            Liên hệ tư vấn
          </button>
          <button className="bg-gray-100 text-slate-900 rounded-full px-8 py-3 hover:bg-gray-200 transition-colors font-semibold dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700">
            Tìm hiểu thêm
          </button>
        </motion.div>

        {/* Logo Marquee Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10 mb-16"
        >
          {/*<p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 text-center mb-8">
            Đối tác tin cậy
          </p>**/}

          {/* Marquee Container */}
          <div className="relative w-full overflow-hidden">
            {/* Left Gradient Fade - use CSS variable so dark mask follows --background */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-1/3 z-10"
              style={{ background: "linear-gradient(to right, hsl(var(--background) / 1) 0%, transparent 100%)" }}
            />

            {/* Marquee */}
            <Marquee className="py-4" pauseOnHover speed={40}>
              {logos.map((logo, idx) => (
                <LogoCard key={idx} logo={logo} />
              ))}
            </Marquee>

            {/* Right Gradient Fade - use CSS variable so dark mask follows --background */}
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-1/3 z-10"
              style={{ background: "linear-gradient(to left, hsl(var(--background) / 1) 0%, transparent 100%)" }}
            />
          </div>
        </motion.div>

        {/* Main Image - positioned 128px below marquee, with snap behavior */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full"
        >
          {/* Sticky container with scroll-snap-stop to enable snapping */}
          <div className="sticky top-0 h-screen flex items-center justify-center z-20 pointer-events-none" style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}>
            <motion.div
              style={{
                scale: imgScale,
                borderRadius: imgRadius,
                width: imgWidth,
                height: imgHeight,
                y: imgYOffset,
              }}
              className="w-full pointer-events-auto overflow-hidden shadow-2xl bg-neutral-50 dark:bg-neutral-900"
            >
              <img
                src="https://assets.aceternity.com/pro/aceternity-landing.webp"
                alt="AI Dashboard"
                className="w-full h-full object-cover block"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


