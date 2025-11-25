<!-- Reference: components/hero-section-demo-1.tsx -->

# Hero Section Demo 1

**Status**: Production (Advanced scroll animation with video)  
**Last Updated**: 2025-11-25

## 1. Visual Description

### Hero Container
- **Type**: Full-page hero section with scroll-triggered animation
- **Background**: Light/dark mode backgrounds
- **Total Height**: `h-[300vh]` (300% viewport height - 3 viewports worth of scroll)

### Spotlight Background (Animated)
- **Light Mode**: Blue spotlight (`rgb(59, 130, 246)`)
  - Opacity: `opacity-[0.25]` (25%)
  - Animation: `animate-spotlight` keyframes
  - Position: Top-left offset via `translateX(calc(-50% + 20%))`
- **Dark Mode**: White spotlight (`rgb(255, 255, 255, 0.4)`)
  - Opacity: `opacity-[0.0003]` (extremely faint)
  - Hidden until dark mode active (`hidden dark:block`)
  - Same position offset

### Header Section
- **Title**: "Thúc đẩy đổi mới với"
- **Font Size**: `text-4xl md:text-7xl` (responsive)
- **Color**: `text-neutral-900` (light) / `dark:text-neutral-100` (dark)
- **Weight**: `font-bold`

### Gradient Title (AuroraText)
- **Text**: "Trí tuệ nhân tạo" (AI - Artificial Intelligence)
- **Component**: `<AuroraText>` with animated gradient
- **Font Size**: `text-4xl md:text-7xl`
- **Layout**: Inline with optional icon (Sparkles - currently commented)

### Description
- **Text**: "Khai phá tiềm năng mới để vượt lên dẫn đầu thị trường."
- **Font Size**: `text-base md:text-lg`
- **Color**: `text-neutral-600` (light) / `dark:text-neutral-400` (dark)
- **Max Width**: `max-w-2xl`, centered

### Action Buttons (Two Column)
1. **Primary**: "Liên hệ tư vấn"
   - Background: `bg-slate-900` / `dark:bg-slate-100`
   - Text: `text-white` / `dark:text-slate-900`
   - Hover: `opacity-90`
2. **Secondary**: "Tìm hiểu thêm"
   - Background: `bg-gray-100` / `dark:bg-neutral-800`
   - Text: `text-slate-900` / `dark:text-neutral-100`
   - Hover: `bg-gray-200` / `dark:bg-neutral-700`

### Logo Marquee Section
- **Marquee**: Infinite horizontal scroll with 16 logos
- **Speed**: `speed={40}`
- **Pause**: `pauseOnHover`
- **Gradient Fades**: Left & right edges (1/3 width each)
  - Fade direction: Into background color
  - Z-index: 10 (above marquee content)

### Main Image Container (Scroll-Triggered)
- **Height**: `h-[300vh]` (3x viewport)
- **Sticky Inner**: `sticky top-0 h-screen` (stays in viewport while scrolling)
- **Video Container**: Animated transform from inset to fullscreen
- **Video**: `.webm` format, auto-playing, looped
- **Border Radius**: Animates from `12px` → `0px`

## 2. Props Interface

### HeroSectionOne Props
```tsx
export default function HeroSectionOne() {
  // No props - fully self-contained
}
```

### Internal Data Structures

**logos Array** (16 logos):
```tsx
const logos = [
  { name: "Cus 1", src: "/images/logos/cus1.svg" },
  { name: "Cus 2", src: "/images/logos/cus2.svg" },
  // ... through Cus 16
]
```

| Property | Type | Value |
|----------|------|-------|
| `name` | `string` | Logo identifier (e.g., "Cus 1") |
| `src` | `string` | SVG path in `/images/logos/` |

## 3. Interaction & Motion

### Header Animation (Entry)
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
```
- Fades in, slides up from 20px below
- Plays on mount

### Button Animation (Entry, Staggered)
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.1 }}
>
```
- Same as header but with `delay: 0.1` (100ms after header)
- Creates cascading entrance

### Marquee Animation (Entry, More Delay)
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.2 }}
>
```
- Fade-in only (no slide)
- Delay: 0.2s (200ms)
- Completes after buttons

### Scroll Animation (Main Image)

**Tracked Element**: `imageContainerRef`
```tsx
const { scrollYProgress } = useScroll({
  target: imageContainerRef,
  offset: ["start center", "end center"],
})
```

**Transform Phase (0% → 30% scroll)**:
```tsx
const imgWidth = useTransform(scrollYProgress, [0, 0.3, 1], ["90%", "100%", "100%"])
const imgHeight = useTransform(scrollYProgress, [0, 0.3, 1], ["80vh", "100vh", "100vh"])
const imgRadius = useTransform(scrollYProgress, [0, 0.3, 1], [12, 0, 0])
```

- **Width**: 90% (inset) → 100% (fullscreen) over 0-30% scroll
- **Height**: 80vh (inset) → 100vh (fullscreen) over 0-30% scroll
- **Border Radius**: 12px (rounded) → 0px (square) over 0-30% scroll
- **Effect**: Image expands from inset card to fullscreen

**Buffer Phase (30% → 100% scroll)**:
- Image stays fullscreen (100%, 100vh, 0px radius)
- No further changes
- Allows user to contemplate full-screen image

### Video Properties
```tsx
<video
  autoPlay
  muted
  loop
  playsInline
  className="w-full h-full object-cover"
/>
```
- Auto-plays on load
- Muted (required for autoplay in browsers)
- Loops infinitely
- Plays inline on mobile
- Covers entire container (`object-cover`)

### Spotlight Animation
```tsx
className="animate-spotlight"
```
- Uses `animate-spotlight` keyframes from Tailwind config
- Likely pulsing/rotating animation
- Applies to both light & dark spotlight layers

### Logo Hover Effect
```tsx
grayscale opacity-60 hover:opacity-100 hover:grayscale-0
transition-all duration-300
```
- Default: Grayscale, 60% opacity (muted)
- Hover: Full color, 100% opacity (highlight)
- Smooth 300ms transition

## 4. Responsive Design

### Mobile (< md)
- **Title**: `text-4xl` (36px)
- **Description**: `text-base` (16px)
- **Buttons**: Stacked vertically (`flex-col`)
- **Image Height**: `80vh` (initially inset)
- **Video**: Plays inline

### Tablet (md → lg)
- **Title**: `md:text-7xl` (54px)
- **Description**: `md:text-lg` (18px)
- **Buttons**: Side-by-side (`sm:flex-row`)

### Desktop (lg+)
- **Title**: Full `text-7xl` (54px)
- **Buttons**: Horizontal layout with gap-4

### Dark Mode
- Background: `dark:text-neutral-100` (titles)
- Text: `dark:text-neutral-400` (description)
- Spotlight: White, extremely faint (`opacity-[0.0003]`)
- Buttons: Dark variants with light text

### Video Aspect Ratio
- `object-cover` ensures full coverage
- Maintains aspect ratio, clips if necessary
- Works on mobile/tablet/desktop

## 5. Component Architecture

### Imports
- **Spotlight**: Animated background effect
- **Marquee**: Infinite logo scroll
- **AuroraText**: Gradient animated text
- **Framer Motion**: `motion`, `useScroll`, `useTransform`, `useSpring`
- **Lucide Icons**: `Sparkles` (commented out)

### Dependencies on Other Components
1. **Spotlight** - Background animation
2. **Marquee** - Logo carousel
3. **AuroraText** - Gradient title text

### State Management
- Uses Framer Motion's `useTransform` (reactive, no useState needed)
- `useScroll` tracks scroll position
- `useRef` for measuring scroll container

### Video Asset
- Path: `/videos/hero-background.webm`
- Format: WebM (modern, compressed)
- Fallback: Gradient overlay (currently `opacity-0`)

## Usage Example

```tsx
import HeroSectionOne from '@/components/hero-section-demo-1';

export default function Home() {
  return (
    <main>
      <HeroSectionOne />
      {/* More content below */}
    </main>
  );
}
```

### Customization Options

**Update Spotlight Opacity** (Light Mode):
```tsx
// Change from opacity-[0.25] to desired value
<Spotlight className="opacity-[0.35] dark:hidden animate-spotlight" ... />
```

**Update Spotlight Color** (Light Mode):
```tsx
// Change from blue to another color
<Spotlight fill="rgb(168, 85, 247)" ... />  // Purple
```

**Replace Video**:
```tsx
<video src="/videos/your-video.webm" ... />
```

**Update Logo List**:
```tsx
const logos = [
  { name: "Partner 1", src: "/images/logos/partner1.svg" },
  // Add your logos
]
```

**Change Marquee Speed**:
```tsx
<Marquee className="py-4" pauseOnHover speed={60}>
  {/* Increase from 40 to 60 for faster scroll */}
</Marquee>
```

**Enable Sparkles Icon**:
```tsx
<span className="flex items-center gap-3 justify-center font-bold text-4xl md:text-7xl">
  <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-blue-500 flex-shrink-0" />
  <AuroraText>Trí tuệ nhân tạo</AuroraText>
</span>
```

### Integration Notes
- **Full-page**: Recommended as homepage hero
- **Scroll-driven**: Best used with additional content below
- **Performance**: Video autoplay may impact performance on slower devices
- **Video Hosting**: Ensure `/videos/hero-background.webm` is optimized
- **Logos**: Update from `/images/logos/` with your partner logos
- **Staging**: Test spotlight opacity adjustments in both light & dark modes

---

Last updated: 2025-11-25