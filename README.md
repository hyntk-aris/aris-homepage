# MyCompany Website

A modern Next.js 14+ website built with TypeScript, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Additional UI:** Aceternity UI

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Initialize shadcn/ui (if not already done):
```bash
npx shadcn-ui@latest init
```

3. Add the Button component from shadcn/ui:
```bash
npx shadcn-ui@latest add button
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Header & Footer
│   ├── page.tsx            # Home page
│   ├── services/           # Services page
│   ├── projects/           # Projects page
│   ├── about/              # About page
│   └── news/               # News page
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Sticky header with navigation
│   │   └── Footer.tsx      # Footer with links and social media
│   ├── sections/home/      # 13 home page sections
│   └── ui/                 # shadcn/ui components
└── lib/
    └── utils.ts            # Utility functions
```

## Home Page Sections

1. Hero Section
2. Featured Services Section
3. About Section
4. Why Choose Us Section
5. Featured Projects Section
6. Process Section
7. Testimonials Section
8. Team Section
9. Stats Section
10. Partners Section
11. Latest News Section
12. FAQ Section
13. CTA Section

## License

MIT
