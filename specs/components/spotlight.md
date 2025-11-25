<!-- Reference: components/ui/spotlight.tsx -->

# Spotlight

**Status**: Production (Aceternity UI)  
**Last Updated**: 2025-11-25

## 1. Visual Description

### Layout
- **Type**: SVG-based animated spotlight effect
- **Positioning**: Absolute positioned, full coverage with overflow
- **Dimensions**: 
  - Width: `w-[138%]` (mobile), `lg:w-[84%]` (desktop)
  - Height: `h-[169%]`
  - Aspect Ratio: Maintains SVG viewBox (3787x2842)
- **Z-Index**: `z-[1]` (behind content, above background)
- **Pointer**: `pointer-events-none` (non-interactive)

### Styling
- **SVG Shape**: Ellipse (rotated, blurred)
- **Fill**: White (default) or custom color via `fill` prop
- **Fill Opacity**: `fillOpacity="0.21"` (default, 21% visible)
- **Blur Filter**: `feGaussianBlur stdDeviation="151"` (soft glow)
- **Animation**: `animate-spotlight` (Tailwind class)
- **Initial Opacity**: `opacity-0` (starts invisible)

### Spotlight Effect
- **Center**: (1924.71, 273.501)
- **Rotation**: -0.822377, -0.568943 (skewed 45° angle)
- **Blur**: 151px (very soft, diffuse light)
- **Color Gradient**: White radial glow with Gaussian blur

## 2. Props Interface

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | — | Additional CSS classes (e.g., positioning, opacity) |
| `fill` | `string` | `'white'` | SVG fill color (hex/rgb/named) |

## 3. Interaction & Motion

### Animation
- **Library**: Tailwind CSS keyframes (defined in `tailwind.config.ts`)
- **Animation Name**: `spotlight`
- **Duration**: 2s
- **Easing**: ease (default)
- **Delay**: 0.75s
- **Iteration**: 1 (runs once)
- **Fill Mode**: forwards (holds final state)
- **Keyframes**:
  ```css
  @keyframes spotlight {
    0% {
      opacity: 0;
      transform: translateX(0) translateY(0);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateX(-200px) translateY(200px);
    }
  }
  ```

### Initial State
- `opacity-0` (invisible)
- Animation triggers on mount
- Effect: Spotlight fades in, moves slightly, then fades out

### Light/Dark Mode Usage
- **Light Mode**: 
  - Fill: `rgb(59, 130, 246)` (blue)
  - Opacity Wrapper: `opacity-[0.25]` or custom
- **Dark Mode**:
  - Fill: `white`
  - Opacity Wrapper: `opacity-[0.0005]` (very dim) or custom

## 4. Responsive Design

### Mobile (< lg)
- Width: `w-[138%]` (wider, fills more of container)
- Height: `h-[169%]`

### Desktop (lg+)
- Width: `lg:w-[84%]` (narrower, more focused)
- Height: `h-[169%]`

## 5. Integration Pattern

### Hero Section Example
```tsx
import { Spotlight } from '@/components/ui/spotlight';

export function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Light Mode Spotlight */}
      <Spotlight
        className="absolute top-0 left-0 opacity-[0.25]"
        fill="rgb(59, 130, 246)"
      />

      {/* Dark Mode Spotlight */}
      <Spotlight
        className="absolute top-0 left-0 opacity-[0.0005] dark:opacity-[0.08]"
        fill="white"
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero content here */}
      </div>
    </div>
  );
}
```

### Styling Notes
- **Wrapper Opacity**: Control brightness via wrapper CSS class (not `fillOpacity`)
- **Z-Index**: Keep `z-[1]` to allow content overlay
- **Fixed vs. Absolute**: Use `absolute` for scroll-locked, `fixed` for viewport-locked
- **Position**: `top-0 left-0` or adjust for desired placement

## Usage

```tsx
import { Spotlight } from '@/components/ui/spotlight';

export default function Example() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Spotlight 
        className="absolute top-0 left-0 opacity-[0.3]"
        fill="#3b82f6"
      />
      <div className="relative z-10">
        {/* Your content */}
      </div>
    </div>
  );
}
```

---

Last updated: 2025-11-25