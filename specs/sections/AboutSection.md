<!-- Reference: components/sections/home/AboutSection.tsx -->

# About Section

**Status**: Production (Stats + company info)  
**Last Updated**: 2025-11-25

## 1. Visual Description

### Section Container
- **Type**: Full-width section
- **Padding**: `py-20` (80px top/bottom), `px-4 md:px-8` (responsive horizontal)
- **Max Width**: `max-w-[1440px]` (1440px), centered
- **Background**: `bg-background` (light/dark mode)

### Content Grid
- **Layout**: 2-column (`lg:grid-cols-2`) on desktop, single column on mobile
- **Gap**: `gap-12` (mobile) / `lg:gap-16` (desktop)

### Left Column (Content)
- **Layout**: `flex flex-col justify-between` (vertical, space-between)
- **Spacing**: Structured with margin gaps

**Label Section**:
- **Container**: `flex items-center gap-2`, `mb-8`
- **Accent Bar**: `h-1 w-6 bg-blue-500` (blue vertical bar)
- **Text**: `text-sm font-semibold text-blue-500`, "Về Chúng Tôi" (About Us)

**Title**:
- **Text**: "ARIS Việt Nam"
- **Font Size**: `text-4xl lg:text-5xl` (responsive)
- **Weight**: `font-bold`
- **Color**: `text-slate-900` (light) / `dark:text-white` (dark)
- **Margin**: `mb-6`

**Description Paragraphs**:
- **Container**: `space-y-4` (4 paragraphs stacked, 16px gap)
- **Font**: `text-base`
- **Color**: `text-neutral-600` (light) / `dark:text-neutral-400` (dark)
- **Line Height**: Default (relaxed)

**CTA Button**:
- **Type**: `<Button>` component
- **Style**: `inline-flex items-center gap-2 rounded-full`
- **Background**: `bg-slate-900` / `dark:bg-white`
- **Text**: `dark:text-slate-900`
- **Hover**: `hover:gap-3` (gap expands on hover)
- **Content**: "Tải xuống hồ sơ" (Download profile) + ChevronRight icon

### Right Column (Stats Grid)
- **Layout**: 2×2 grid (`grid-cols-2`)
- **Gap**: `gap-4` (16px)
- **Type**: 4 stat cards

**Stat Card (Two Types)**:

**Highlighted (500 projects)**:
- **Background**: `bg-slate-900` (light) / `dark:bg-slate-800` (dark)
- **Text**: `text-white`
- **Border**: None

**Regular Stats**:
- **Background**: `bg-white` (light) / `dark:bg-slate-900/50` (dark)
- **Border**: `border border-gray-200` (light) / `dark:border-gray-800` (dark)
- **Shadow**: `shadow-sm`
- **Padding**: `p-8`
- **Border Radius**: `rounded-2xl`
- **Transition**: `transition-all`

**Stat Content**:
- **Number**: `text-4xl lg:text-5xl font-bold` animated with `<NumberTicker>`
- **Suffix**: `text-2xl` "+" after number
- **Label**: `text-sm font-medium`, centered
- **Label Color**: Gray-300 (highlighted) or gray-600/400 (regular)

## 2. Props Interface

### AboutSection Props
```tsx
export default function AboutSection() {
  // No props - fully self-contained
}
```

### Internal Data Structure

**Stats Array**:
```tsx
const stats = [
  { number: 500, label: "Dự án thành công", highlight: true },
  { number: 14, label: "Năm kinh nghiệm" },
  { number: 200, label: "Khách hàng hài lòng" },
  { number: 80, label: "Nhân sự" },
]
```

| Property | Type | Description |
|----------|------|-------------|
| `number` | `number` | Stat value (animated counter) |
| `label` | `string` | Stat description (Vietnamese) |
| `highlight` | `boolean` | True for featured stat (dark background) |

## 3. Interaction & Motion

### NumberTicker Animation
```tsx
<NumberTicker value={stat.number} />
```
- Animates from 0 → stat.number
- Duration: 1 second
- Triggers when stat becomes visible
- Smooth interpolation with decimal support

### Button Hover Effect
```tsx
hover:gap-3
```
- Gap expands from 8px to 12px on hover
- Creates icon-spread effect when hovering
- Smooth transition

### Stat Cards Styling
```tsx
transition-all
```
- Prepared for future hover animations
- Currently no hover effect implemented
- Can add shadow/scale on hover if needed

## 4. Responsive Design

### Mobile (< lg)
- **Layout**: Single column
- **Stats**: 2×2 grid
- **Title**: `text-4xl` (36px)
- **Padding**: `px-4`
- **Gap**: `gap-12` (vertical)

### Desktop (lg+)
- **Layout**: 2-column grid
- **Title**: `text-5xl` (48px)
- **Padding**: `px-8`
- **Gap**: `gap-16` (horizontal)

### Dark Mode
- Text: Light colors
- Backgrounds: Dark slate
- Stat cards: Semi-transparent dark backgrounds
- Borders: Light gray/dark gray

## 5. Component Architecture

### Imports
- **NumberTicker**: Animated counter component
- **Button**: Shadcn button with CVA variants
- **ChevronRight**: Lucide icon
- **Link**: Next.js link component

### Used in Stats Grid
- Renders 4 stat cards from hardcoded array
- Conditional styling based on `highlight` flag
- Dynamic rendering with `.map()`

## Usage Example

```tsx
import AboutSection from '@/components/sections/home/AboutSection';

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <AboutSection />
      {/* More sections */}
    </>
  );
}
```

### Customization Notes
- **Change stats**: Modify `stats` array with new numbers/labels
- **Change highlight**: Toggle `highlight: true` for different stat
- **Update title**: Change "ARIS Việt Nam" to company name
- **Update description**: Edit hardcoded Vietnamese text
- **Button link**: Add `href` prop to Button if needed
- **Button text**: Change "Tải xuống hồ sơ" (Download profile)

### Integration Tips
- Place in homepage after hero section
- Stats show company credibility
- NumberTicker adds visual interest
- Responsive layout adjusts for all screens
- Dark mode fully supported

---

Last updated: 2025-11-25