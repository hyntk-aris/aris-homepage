# Installation & Setup

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

## Local Development

```bash
# Clone repository
git clone https://github.com/hyntk-aris/aris-homepage.git
cd aris-homepage

# Install dependencies
npm install

# Start dev server
npm run dev

# Open browser
# http://localhost:3000
```

## Build

```bash
# Production build
npm run build

# Start production server
npm run start
```

## Documentation

```bash
# View this spec kit documentation
# Run the documentation build (see .github/workflows/docs.yml)
```

## Project Structure

```
aris-homepage/
├── app/                    # Next.js app directory
├── components/             # React components
│   ├── ui/                 # UI component library
│   ├── sections/           # Page sections
│   └── layout/             # Layout components
├── public/                 # Static assets
│   └── images/
├── specs/                  # Design system documentation (this folder)
├── spec-kit.config.js      # Spec-kit configuration
└── tailwind.config.ts      # Tailwind CSS config
```

## Key Technologies

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + custom CSS variables
- **Components**: Aceternity UI, shadcn/ui
- **Fonts**: Plus Jakarta Sans (Google Fonts)
- **Animations**: Framer Motion

---

Last updated: 2025-11-25
