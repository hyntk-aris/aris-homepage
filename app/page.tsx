import HeroSection from "@/components/sections/home/HeroSection"
import FeaturedServicesSection from "@/components/sections/home/FeaturedServicesSection"
import AboutSection from "@/components/sections/home/AboutSection"
import FeaturedSolutionsSection from "@/components/sections/home/FeaturedSolutionsSection"
import WhyChooseUsSection from "@/components/sections/home/WhyChooseUsSection"
import { IndustriesSection } from "@/components/sections/home/IndustriesSection"
import { CaseStudySection } from "@/components/sections/home/CaseStudySection"
import { TeamMemberSection } from "@/components/sections/home/TeamMemberSection"
import { NewsSection } from "@/components/sections/home/NewsSection"
import { ExploreSection } from "@/components/sections/home/ExploreSection"
import { ContactSection } from "@/components/sections/home/ContactSection"
import ProcessSection from "@/components/sections/home/ProcessSection"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturedServicesSection />
      <AboutSection />
      <FeaturedSolutionsSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <IndustriesSection />
      <CaseStudySection />
      <TeamMemberSection />
      <NewsSection />
      <ExploreSection />
      <ContactSection />
    </main>
  )
}
