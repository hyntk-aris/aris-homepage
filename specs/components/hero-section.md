<!-- Reference: components/ui/hero-section.tsx -->

# Hero Section

**Status**: Production (Marquee + Spotlight ready)  
**Last Updated**: 2025-11-25

## 1. Visual Description

### Hero Container
- **Layout**: `flex min-h-screen w-full`, centered content
- **Direction**: `flex-col items-center justify-center`
- **Background**: White (light) / `bg-black/[0.96]` (dark)
- **Overflow**: `overflow-hidden`
- **Text Rendering**: `antialiased`

### Header Section
- **Type**: Centered, large hero text
- **Main Title**: 
  - Light: `text-slate-900` → `text-slate-700`
  - Dark: `text-slate-50` → `text-slate-300`
  - Gradient: `bg-gradient-to-b` (top to bottom)
  - Font**: `text-4xl md:text-6xl lg:text-7xl` bold
  - `leading-tight`, margin-bottom `mb-6`
- **Highlight**: Inline "AI" text
  - Gradient: `from-blue-600 to-blue-400`
  - Inline with icon (SVG smiley face)

### Subtext
- **Font**: `text-base md:text-lg`, normal weight
- **Color**: `text-slate-600` (light) / `dark:text-slate-300` (dark)
- **Width**: `max-w-2xl`, centered
- **Spacing**: `mt-4`, centered

### Action Buttons (Two Column)
- **Layout**: `flex flex-col sm:flex-row`, centered
- **Gap**: `gap-4`
- **Margin**: `mt-8 mb-16`

**Button 1 - Primary (Liên hệ tư vấn)**
- Background: `bg-slate-900` (light) / `dark:bg-white` (dark)
- Text: `text-white` (light) / `dark:text-slate-900` (dark)
- Hover: `hover:bg-slate-800` (light) / `dark:hover:bg-slate-100` (dark)
- Shape: `rounded-full`, `px-8 py-3`

**Button 2 - Secondary (Tìm hiểu thêm)**
- Background: `bg-slate-200` (light) / `dark:bg-slate-800` (dark)
- Text: `text-slate-900` (light) / `dark:text-slate-100` (dark)
- Hover: `hover:bg-slate-300` (light) / `dark:hover:bg-slate-700` (dark)
- Shape: `rounded-full`, `px-8 py-3`

### Marquee Section (Footer)
- **Border**: Top border `border-slate-200` (light) / `dark:border-slate-800` (dark)
- **Label**: "Được tin tưởng bởi" (Trusted by)
  - Font: `text-sm font-medium`
  - Color: `text-slate-500` (light) / `dark:text-slate-400` (dark)
  - Padding: `py-4`
- **Logo Carousel**: Infinite scroll via `<Marquee>` component
  - Each logo in pill container: `h-20 px-8`
  - Text: `text-sm text-slate-600` (light) / `dark:text-slate-400` (dark)
  - Effects: `grayscale opacity-50 hover:opacity-75`

## 2. Props Interface

### HeroSection Props
```tsx
export default function HeroSection() {
  // No props - static component
}
```

### Internal Data Structure

**CustomerLogos Array**
```tsx
const CustomerLogos = [
  { id: 1, name: "Logo 1" },
  { id: 2, name: "Logo 2" },
  // ... 6 total
]
```

| Property | Type | Value |
|----------|------|-------|
| `id` | `number` | 1-6 (unique identifier) |
| `name` | `string` | Display name (e.g., "Logo 1") |

### LogoCard Component Props

| Name | Type | Description |
|------|------|-------------|
| `logo` | `Logo` | Logo object with `id` and `name` |

## 3. Interaction & Motion

### Button Interactions
- **Primary Button**: `hover:bg-slate-800` (darken on hover)
- **Secondary Button**: `hover:bg-slate-300` (lighten on hover)
- **Transition**: Smooth color transition (`transition-colors`)

### Logo Hover Effect
```tsx
grayscale opacity-50 hover:opacity-75 transition-opacity
```
- **Default**: Grayscale, 50% opacity (muted)
- **Hover**: 75% opacity (highlight)
- **Transition**: Smooth opacity animation

### Marquee Animation
- **Component**: `<Marquee>` (imported from `./marquee`)
- **Behavior**: Continuous horizontal scroll
- **Speed**: Controlled by `<Marquee>` props (default speed)
- **Pause**: `pauseOnHover` (from parent `<Marquee>`)

### Optional Spotlight (Currently Commented)
```tsx
{/* <Spotlight
  className="-top-40 left-0 md:left-60 md:-top-20"
  fill="#3B82F6"
  size={400}
/> */}
```
- **Position**: Top-left, can be uncommented for animated background
- **Color**: Blue (#3B82F6)
- **Size**: 400px radius

### Optional Grid Background (Currently Commented)
```tsx
{/* Grid background pattern */}
```
- **Pattern**: 40px × 40px grid lines
- **Color**: `#e2e8f0` (light) / `#171717` (dark)

## 4. Responsive Design

### Mobile (< sm)
- **Title Size**: `text-4xl`
- **Subtext Size**: `text-base`
- **Buttons**: `flex-col` (stacked vertically)
- **Padding**: `p-4 pt-20` (40px top padding)
- **Button Width**: Full width of column

### Tablet (sm → md)
- **Title Size**: `md:text-6xl`
- **Subtext Size**: `md:text-lg`
- **Buttons**: `flex-row` (side-by-side, gap-4)
- **Padding**: `p-4`

### Desktop (md+)
- **Title Size**: `lg:text-7xl`
- **Buttons**: Horizontal layout, centered
- **Padding**: `pt-0` (no top padding at desktop sizes)

### Dark Mode
- Background: `dark:bg-black/[0.96]`
- Title gradient: `dark:from-slate-50 dark:to-slate-300`
- Subtext: `dark:text-slate-300`
- Buttons: Dark variants
- Border: `dark:border-slate-800`
- Logos: `dark:text-slate-400`

## 5. Component Architecture

### Composed Components
1. **Spotlight** (`.spotlight`) - Imported, currently disabled
2. **Marquee** (`.marquee`) - Logo carousel
3. **LogoCard** - Internal card component

### Dependencies
- **React**: `"use client"` directive
- **Utils**: `cn()` from `@/lib/utils`
- **Internal**: Spotlight, Marquee components

### Content (Hardcoded in Vietnam)
- Title: "Thúc đẩy đổi mới với Trí tuệ nhân tạo" (Drive innovation with AI)
- Subtext: AI solution for business optimization
- Button 1: "Liên hệ tư vấn" (Contact consultation)
- Button 2: "Tìm hiểu thêm" (Learn more)
- Marquee label: "Được tin tưởng bởi" (Trusted by)

## Usage Example

```tsx
import HeroSection from '@/components/ui/hero-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* Other page sections */}
    </main>
  );
}
```

### Customization Notes
- **Enable Spotlight**: Uncomment Spotlight section for animated background
- **Enable Grid**: Uncomment grid background for subtle pattern
- **Update Logos**: Modify `CustomerLogos` array with actual company data
- **Change Text**: Edit hardcoded Vietnamese strings for different language/content
- **Adjust Button Actions**: Add `onClick` handlers to buttons (currently no handlers)
- **Marquee Speed**: Pass `speed` prop to `<Marquee>` component

### Integration Tips
- Place at top of home page (full viewport height)
- Pair with floating navbar for navigation
- Use Spotlight for ambient lighting effect
- Logos should be in `public/images/logos/` and imported as images for real implementation

---

Last updated: 2025-11-25