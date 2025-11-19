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
  { name: "Cus 6", src: "/images/logos/cus6.svg" },
  { name: "Cus 7", src: "/images/logos/cus7.svg" },
  { name: "Cus 8", src: "/images/logos/cus8.svg" },
  { name: "Cus 9", src: "/images/logos/cus9.svg" },
  { name: "Cus 10", src: "/images/logos/cus10.svg" },
  { name: "Cus 11", src: "/images/logos/cus11.svg" },
  { name: "Cus 12", src: "/images/logos/cus12.svg" },
  { name: "Cus 13", src: "/images/logos/cus13.svg" },
  { name: "Cus 14", src: "/images/logos/cus14.svg" },
  { name: "Cus 15", src: "/images/logos/cus15.svg" },
  { name: "Cus 16", src: "/images/logos/cus16.svg" },
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
  const imageContainerRef = useRef<HTMLDivElement | null>(null);

  // Track scroll progress for main image animation
  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start center", "end center"],
  });

  // TRANSFORM PHASE (0% -> 30% scroll - VERY FAST):
  // Width: 90% -> 100% (inset to fullscreen)
  const imgWidth = useTransform(scrollYProgress, [0, 0.3, 1], ["90%", "100%", "100%"]);

  // Height: 80% -> 100% (inset to fullscreen)
  const imgHeight = useTransform(scrollYProgress, [0, 0.3, 1], ["80vh", "100vh", "100vh"]);

  // Border Radius: rounded (12px) -> none (0px)
  const imgRadius = useTransform(scrollYProgress, [0, 0.3, 1], [12, 0, 0]);

  // BUFFER PHASE (80% -> 100% scroll):
  // At 80%, image is fullscreen and stays fullscreen until 100%
  // This is the buffer zone for user to contemplate the full-screen image

  return (
    <div ref={containerRef} className="relative w-full bg-background">
      {/* Spotlight background - Light Mode: Blue (Company Logo Color) - TOP HERO SECTION */}
      {/* NOTE: Opacity control for Light Mode - Currently opacity-12 (50% of 25) */}
      {/* To adjust: Change "opacity-12" to desired value (opacity-10, opacity-15, opacity-20, etc.) */}
      <div className="absolute top-0 left-1/2 w-full max-w-[1440px] h-screen z-40 pointer-events-none" style={{ transform: "translateX(calc(-50% + 20%))" }}>
        {/* Light-mode spotlight opacity: increase if too faint. Use arbitrary value like opacity-[0.25] for ~25% */}
        <Spotlight
          className="opacity-[0.25] dark:hidden animate-spotlight"
          fill="rgb(59, 130, 246)"
        />
      </div>
      {/* Spotlight background - Dark Mode: White - TOP HERO SECTION */}
      {/* NOTE: Opacity control for Dark Mode - Currently opacity-9 (50% of 18) */}
      {/* To adjust: Change "opacity-9" to desired value (opacity-5, opacity-10, opacity-15, etc.) */}
      <div className="absolute top-0 left-1/2 w-full max-w-[1440px] h-screen z-40 pointer-events-none hidden dark:block" style={{ transform: "translateX(calc(-50% + 20%))" }}>
        {/* Dark-mode spotlight opacity: currently extremely low. */}
        {/* Reduced by 50% from previous value (0.001 -> 0.0005). */}
        {/* To tweak: change the arbitrary opacity value, e.g. opacity-[0.0008] or opacity-[0.0003] */}
        <Spotlight
          className="opacity-[0.0003] animate-spotlight"
          fill="rgb(255, 255, 255, 0.4)"
        />
      </div>

      {/* Content Container - Header, Buttons, Marquee */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-4 pt-20 pb-10 min-h-screen">
        {/* Main Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4 text-center mt-12 mb-12"
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
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8 mb-12"
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
          className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10 mb-0"
        >
          {/*<p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 text-center mb-8">
            Đối tác tin cậy
          </p>**/}

          {/* Marquee Container */}
          <div className="relative w-full overflow-hidden">
            {/* Left Gradient Fade */}
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

            {/* Right Gradient Fade */}
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-1/3 z-10"
              style={{ background: "linear-gradient(to left, hsl(var(--background) / 1) 0%, transparent 100%)" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Main Image Container - Scroll Space h-[300vh] */}
      <div ref={imageContainerRef} className="relative w-full h-[300vh]">
        {/* Sticky container - keeps image/video in viewport */}
        <div className="sticky top-0 z-30 w-full h-screen flex items-center justify-center bg-background overflow-hidden">
          {/* Animated Video - Transform from Inset to Fullscreen */}
          <motion.div
            style={{
              width: imgWidth,
              height: imgHeight,
              borderRadius: imgRadius,
            }}
            className="relative z-30 overflow-hidden shadow-2xl border-radius-sm" 
          >
            <video
              src="/videos/hero-background.webm"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            {/* Fallback gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 opacity-0" />
          </motion.div>
        </div>

        {/* Buffer Zone text hint (optional) */}
        <div className="absolute bottom-0 left-0 right-0 h-[100vh] flex items-center justify-center pointer-events-none opacity-0">
          <p className="text-center text-neutral-400 dark:text-neutral-500 text-sm">Scroll for more...</p>
        </div>
      </div>
    </div>
  );
}


