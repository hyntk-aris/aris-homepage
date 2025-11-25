/**
 * spec-kit configuration for ARIS Homepage
 * Defines component patterns, documentation structure, and build settings
 */

module.exports = {
  // Project metadata
  name: 'ARIS Homepage',
  description: 'Design system and component documentation for ARIS Vietnam',
  version: '1.0.0',

  // Spec sources - directories containing component documentation
  specs: [
    'specs/**/*.md',
  ],

  // Output settings
  output: {
    directory: 'docs/specs',
    format: 'html',
  },

  // Navigation and grouping
  navigation: {
    'Getting Started': [
      'specs/intro.md',
      'specs/installation.md',
    ],
    'Atoms/UI': [
      'specs/components/bento-grid.md',
      'specs/components/button.md',
      'specs/components/card.md',
      'specs/components/dark-mode-toggle.md',
      'specs/components/floating-navbar.md',
      'specs/components/Footer.md',
      'specs/components/Header.md',
      'specs/components/hero-section-demo-1.md',
      'specs/components/hero-section.md',
      'specs/components/marquee.md',
      'specs/components/number-ticker.md',
      'specs/components/resizable-navbar.md',
      'specs/components/spotlight.md',
      'specs/components/why-choose-us-visuals.md',
    ],
    'Sections': [
      'specs/sections/AboutSection.md',
      'specs/sections/CaseStudySection.md',
      'specs/sections/ExploreSection.md',
      'specs/sections/FAQSection.md',
      'specs/sections/FeaturedProjectsSection.md',
      'specs/sections/featured-services.md',
      'specs/sections/FooterSection.md',
      'specs/sections/HeroSection.md',
      'specs/sections/IndustriesSection.md',
      'specs/sections/LatestNewsSection.md',
      'specs/sections/NewsSection.md',
      'specs/sections/PartnersSection.md',
      'specs/sections/ProcessSection.md',
      'specs/sections/StatsSection.md',
      'specs/sections/TeamMemberSection.md',
      'specs/sections/TestimonialsSection.md',
      'specs/sections/WhyChooseUsSection.md',
    ],
    'Styles': [
      'specs/styles/colors.md',
      'specs/styles/spacing.md',
      'specs/styles/typography.md',
    ],
  },

  // Brand colors
  theme: {
    colors: {
      primary: '#3b82f6',
      secondary: '#6366f1',
      accent: '#ec4899',
    },
    fonts: {
      body: 'Plus Jakarta Sans',
      mono: 'Fira Code',
    },
  },

  // GitHub integration
  github: {
    owner: 'hyntk-aris',
    repo: 'aris-homepage',
    branch: 'main',
  },
};