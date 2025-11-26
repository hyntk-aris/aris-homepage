<!-- Reference: components/spotlight-demo.tsx -->

# Spotlight Demo

**Status**: Production (Spotlight effect showcase)  
**Last Updated**: 2025-11-25

## 1. Visual Description

### Container
- **Type**: Full-width demo section
- **Height**: `h-[40rem]` (640px)
- **Layout**: `flex`, centered (`items-center justify-center` on md+)
- **Background**: Very dark black `bg-black/[0.96]` (4% opacity, 96% black)
- **Border Radius**: `rounded-md` (medium rounded corners)
- **Overflow**: `overflow-hidden` (clips content)
- **Text Rendering**: `antialiased`

### Grid Background Pattern
- **Type**: Subtle grid lines
- **Color**: `#171717` (dark gray)
- **Size**: `40px × 40px` cells
- **Line Width**: 1px
- **Horizontal**: Linear gradient (right direction, 1px lines)
- **Vertical**: Linear gradient (bottom direction, 1px lines)
- **Pointer Events**: `pointer-events-none` (non-interactive)
- **User Select**: `select-none` (no text selection)

### Spotlight Effect
- **Position**: Top-left, positioned absolutely
- **Responsive Positioning**:
  - Mobile: `-top-40 left-0` (40rem above, left edge)
  - Desktop (md+): `-top-20 md:left-60` (20rem above, 240px from left)
- **Color**: White (`fill="white"`)
- **Effect**: Animated glow with blur and opacity transitions

### Title Section
- **Text**: "Spotlight" + line break + "is the new trend."
- **Font Size**: `text-4xl md:text-7xl` (responsive)
- **Weight**: `font-bold`
- **Gradient**: `from-neutral-50 to-neutral-400` (light to medium gray)
- **Effect**: `bg-clip-text text-transparent` (text is gradient, not solid)
- **Opacity**: `bg-opacity-50` (semi-transparent gradient)
- **Alignment**: `text-center`

### Description Text
- **Font Size**: `text-base` (16px)
- **Weight**: `font-normal`
- **Color**: `text-neutral-300` (light gray)
- **Max Width**: `max-w-lg` (448px, centered)
- **Line Height**: Default
- **Content**: Explanatory text about spotlight effect

## 2. Props Interface

### SpotlightPreview Props
```tsx
export default function SpotlightPreview() {
  // No props - fully self-contained demo component
}
```

### Spotlight Props (Used Within)

| Name | Type | Description |
|------|------|-------------|
| `className` | `string` | Position & visibility classes |
| `fill` | `string` | Color of spotlight (e.g., "white") |

## 3. Interaction & Motion

### Spotlight Animation
```tsx
<Spotlight
  className="-top-40 left-0 md:-top-20 md:left-60"
  fill="white"
/>
```

**Imported from `./ui/spotlight`**:
- Animated SVG ellipse with Gaussian blur
- Glow effect with `fillOpacity` transitions
- Keyframe animation: `animate-spotlight` (2s duration, continuous)
- Center: 1924.71, 273.501 (SVG coordinates)
- Blur: 151px Gaussian blur for soft glow

**Positioning Strategy**:
- Positioned outside viewport initially (`-top-40`)
- Positioned left on mobile, moves right on desktop
- Creates asymmetrical lighting from upper-left area
- Focuses light on title and description text

### Visual Hierarchy (Z-Stacking)
```tsx
{/* Grid pattern */}
{/* Spotlight */}
<div className="relative z-10">
  {/* Text content */}
</div>
```

- Grid: Default z-index (background)
- Spotlight: Default z-index (behind text by default)
- Text: `z-10` (above spotlight, fully visible)

### No Interactive Animation
- Component is static (display-only)
- No scroll triggers
- No hover effects
- No click handlers
- Used purely for visual demonstration

## 4. Responsive Design

### Mobile (< md)
- **Title Size**: `text-4xl` (36px)
- **Description Size**: `text-base` (16px)
- **Spotlight Position**: `-top-40 left-0` (above, left-aligned)
- **Padding**: `p-4 pt-20` (20px top padding)
- **Max Width**: Full width with padding

### Desktop (md+)
- **Title Size**: `md:text-7xl` (54px)
- **Description Size**: `text-base` (unchanged)
- **Spotlight Position**: `md:-top-20 md:left-60` (higher, shifted right)
- **Padding**: `p-4 pt-0` (no top padding)
- **Centering**: Content centered via flex (`items-center justify-center`)

### Dark Mode
- Background: Already dark `bg-black/[0.96]`
- Works in both light and dark theme
- Grid lines: `#171717` (suitable for dark backgrounds)
- Title gradient: Light colors (`from-neutral-50`)
- Description: Light gray `text-neutral-300`

## 5. Component Architecture

### Purpose
- **Demo/Showcase**: Displays spotlight effect in action
- **Reference**: Shows how to use Spotlight component
- **Educational**: Demonstrates positioning and responsive behavior

### Imports
- **Spotlight**: From `./ui/spotlight`
- **Utils**: `cn()` from `@/lib/utils`
- **React**: Built-in

### Composition
- Single-level component (no child components except Spotlight)
- All content is hardcoded (no dynamic data)
- Static layout

## Usage Example

### Standalone Page
```tsx
import SpotlightPreview from '@/components/spotlight-demo';

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <SpotlightPreview />
      <section className="py-12">
        {/* More content */}
      </section>
    </main>
  );
}
```

### Within Hero Section
```tsx
import SpotlightPreview from '@/components/spotlight-demo';

export function HeroWithSpotlight() {
  return (
    <div className="relative">
      <SpotlightPreview />
      <section className="relative z-20">
        {/* Overlaid content */}
      </section>
    </div>
  );
}
```

### Customize Spotlight Position
```tsx
// Copy component and modify Spotlight props
<Spotlight
  className="-top-60 left-1/2 md:-top-40 md:left-80"
  fill="rgb(59, 130, 246)"  // Blue instead of white
/>
```

### Customize Title Text
```tsx
// Modify hardcoded strings
<h1 className="...">
  Your Custom <br /> Title Here
</h1>
```

### Customize Description
```tsx
<p className="...">
  Your custom description text for the demo
</p>
```

### Full Customization Example
```tsx
"use client"

import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";

export function CustomSpotlightDemo() {
  return (
    <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
      {/* Grid Background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />

      {/* Spotlight - Blue variant */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="rgb(59, 130, 246)"  // Blue
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-blue-50 to-blue-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          Blue Spotlight <br /> Effect
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
          This is a custom blue spotlight demo showing how to change the fill color
        </p>
      </div>
    </div>
  );
}
```

### Integration Notes
- **Static Demo**: Ideal for documentation, component showcases, landing pages
- **Background**: Very dark background makes spotlight effect prominent
- **Grid Pattern**: Adds visual interest and depth
- **Responsiveness**: Spotlight moves to adjust for mobile vs desktop
- **Accessibility**: No interactive elements, but text is readable
- **Performance**: Lightweight component (no complex animations)

---

Last updated: 2025-11-25