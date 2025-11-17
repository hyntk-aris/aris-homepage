import HeroSection from "@/components/sections/home/HeroSection"
import FeaturedServicesSection from "@/components/sections/home/FeaturedServicesSection"
import AboutSection from "@/components/sections/home/AboutSection"
import FeaturedSolutionsSection from "@/components/sections/home/FeaturedSolutionsSection"
import WhyChooseUsSection from "@/components/sections/home/WhyChooseUsSection"
import FeaturedProjectsSection from "@/components/sections/home/FeaturedProjectsSection"
import ProcessSection from "@/components/sections/home/ProcessSection"
import TestimonialsSection from "@/components/sections/home/TestimonialsSection"
import TeamSection from "@/components/sections/home/TeamSection"
import StatsSection from "@/components/sections/home/StatsSection"
import PartnersSection from "@/components/sections/home/PartnersSection"
import LatestNewsSection from "@/components/sections/home/LatestNewsSection"
import FAQSection from "@/components/sections/home/FAQSection"
import CTASection from "@/components/sections/home/CTASection"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturedServicesSection />
      <AboutSection />
      <FeaturedSolutionsSection />
      <WhyChooseUsSection />
      <FeaturedProjectsSection />
      <ProcessSection />
      <TestimonialsSection />
      <TeamSection />
      <StatsSection />
      <PartnersSection />
      <LatestNewsSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
