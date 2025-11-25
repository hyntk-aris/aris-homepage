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
    'Components': [
      'specs/components/button.md',
      'specs/components/bento-grid.md',
      'specs/components/card.md',
      'specs/components/spotlight.md',
      'specs/components/hero-section.md',
    ],
    'Sections': [
      'specs/sections/featured-services.md',
      'specs/sections/hero.md',
    ],
    'Styles': [
      'specs/styles/colors.md',
      'specs/styles/typography.md',
      'specs/styles/spacing.md',
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
