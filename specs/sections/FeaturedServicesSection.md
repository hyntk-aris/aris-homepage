<!-- Reference: components/sections/home/FeaturedServicesSection.tsx -->

# Featured Services Section

**Status**: Production (BentoGrid with service cards)  
**Last Updated**: 2025-11-25

## 1. Visual Description

### Section Container
- **Padding**: `py-20` (80px vertical), `px-4 md:px-8`
- **Background**: `bg-background`
- **Max Width**: `max-w-[1440px]`

### Section Header
- **Layout**: 2-column grid (`flex gap-6`)
- **Left**: Main title
- **Right**: Subtitle

**Title**:
- **Text**: "Tăng tốc hành trình DX của bạn..." (Accelerate your DX journey)
- **Font**: `text-3xl md:text-4xl lg:text-5xl font-bold`
- **Color**: `text-slate-900` / `dark:text-white`

**Subtitle**:
- **Text**: "ARIS Việt nam đồng hành..." (ARIS accompanies you)
- **Font**: `text-base md:text-lg`
- **Color**: `text-muted-foreground`
- **Alignment**: Right side, bottom-aligned

### Grid Layout (BentoGrid)
- **5 Service Cards** in custom arrangement:
  1. **Big Card** (Featured): 2 cols × 2 rows (50% width + height)
     - Title: "Phát triển phần mềm dịch vụ trọn gói ONE-STOP"
     - Image: `/images/services/hero-one.webp`
  2. **Top-right Card**: AI/Automation (25% width)
  3. **Card 3**: DX Consulting (25% width)
  4. **Card 4**: Mobile Apps (25% width)
  5. **Card 5**: UI/UX Design (25% width)

**Card Styling**:
- **Background**: Service image (`object-cover`)
- **Border**: Subtle, rounded corners
- **Text**: Overlaid on image with gradient fade
- **Hover**: Shadow elevation, text slide animation
- **Padding**: `p-4 md:p-8`

## 2. Props Interface

### FeaturedServicesSection Props
```tsx
export default function FeaturedServicesSection() {
  // No props - self-contained
}
```

### Services Data

| Index | Title | Classes | Image | Featured |
|-------|-------|---------|-------|----------|
| 0 | Phát triển phần mềm... | `md:col-span-2 md:row-span-2` | hero-one.webp | ✓ |
| 1 | AI/AL/AUTOMATION | `md:col-span-1` | ai-automation.webp | |
| 2 | Tư vấn chuyển đổi số | `md:col-span-1` | dx-consulting.webp | |
| 3 | Phát triển ứng dụng | `md:col-span-1` | mobile-apps.webp | |
| 4 | Thiết kế UI/UX | `md:col-span-1` | ui-ux.webp | |

## 3. Interaction & Motion

### BentoGrid Hover Effects
```tsx
hover:shadow-xl transition duration-200
```
- Shadow elevation on hover
- 200ms smooth transition

### Card Text Animation
```tsx
group-hover/bento:translate-x-2
```
- Title slides right 8px on hover
- Smooth 200ms transition

### Image Display
```tsx
image: "/images/services/hero-one.webp"
className="h-full w-full object-cover"
```
- Full-screen cover of image
- Maintains aspect ratio, crops as needed
- Text positioned on top via z-index

## 4. Responsive Design

### Mobile (< md)
- **Grid**: Single column (`grid-cols-1`)
- **All cards**: Full width
- **Big card**: Auto height
- **Layout**: Stacked vertically

### Desktop (md+)
- **Grid**: Multi-column via BentoGrid
- **Big card**: 2 cols × 2 rows (50% + 50% height)
- **Small cards**: 1 col each (25% width)
- **Layout**: Balanced asymmetrical grid

### Dark Mode
- Backgrounds: Dark slate
- Text: Light colors
- Borders: Light gray/dark gray variants
- Shadows: Reduced in dark mode

## 5. Component Architecture

### Imports
- **BentoGrid, BentoGridItem**: Grid layout system
- **React**: For JSX

### Services Array
- 5 service objects with title, className, image
- className controls grid positioning (col-span, row-span)
- image path points to service images in public folder

### Grid Rendering
- Map over services array
- BentoGrid handles responsive layout
- Each BentoGridItem accepts image prop
- Image displayed as background with text overlay

---

Last updated: 2025-11-25