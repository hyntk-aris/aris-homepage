<!-- Reference: components/ui/marquee.tsx -->

# Marquee

**Status**: Production  
**Last Updated**: 2025-11-25

## 1. Visual Description

### Layout
- **Type**: Infinite horizontal scrolling carousel
- **Container**: Flex row, `w-max` (content-driven width)
- **Gap**: `gap-8` (32px spacing between items)
- **Overflow**: `overflow-hidden` (hides overflow)
- **Mask**: Linear gradient fade (10% visible at start/end, 90% middle)

### Styling
- **Mask Image**: `linear-gradient(90deg, transparent, white 10%, white 90%, transparent)`
- **WebKit Mask**: `-webkit-mask-image` (cross-browser support)
- **Purpose**: Smooth fade-in/out at edges
- **Direction**: Left-to-right (default) or right-to-left (reverse)
- **Duplication**: Content rendered twice (seamless loop)

### Variants

| Variant | Property | Value | Effect |
|---------|----------|-------|--------|
| **Normal** | `reverse: false` | `animation: scroll {speed}s linear infinite` | Left scrolling |
| **Reverse** | `reverse: true` | `animation: scroll-reverse {speed}s linear infinite` | Right scrolling |
| **Pause** | `pauseOnHover: true` | `group-hover:[animation-play-state:paused]` | Pauses on hover |
| **Continuous** | `pauseOnHover: false` | Keeps scrolling | No pause effect |

## 2. Props Interface

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `""` | Additional CSS classes for wrapper |
| `children` | `React.ReactNode` | — | Items to scroll (duplicated automatically) |
| `pauseOnHover` | `boolean` | `true` | Pause animation on mouse hover |
| `speed` | `number` | `40` | Animation duration in seconds (higher = slower) |
| `reverse` | `boolean` | `false` | Reverse scroll direction (right-to-left) |

## 3. Interaction & Motion

### Animation (Scroll)
```css
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);  /* Half the width = seamless loop */
  }
}

@keyframes scroll-reverse {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}
```

### Animation Properties
- **Type**: CSS keyframe animation (linear, infinite)
- **Duration**: Controlled by `speed` prop (in seconds)
- **Timing**: `linear` (constant velocity)
- **Iteration**: `infinite` (continuous loop)
- **Transform**: `translateX()` (horizontal movement)

### Pause on Hover
- **Condition**: `pauseOnHover === true`
- **Selector**: `.group-hover:[animation-play-state:paused]`
- **Effect**: Hover stops animation, release resumes
- **Transition**: Immediate (no easing)

### Speed Control
```
speed={20}  → Fast scroll (20 seconds per loop)
speed={40}  → Medium scroll (40 seconds per loop)
speed={60}  → Slow scroll (60 seconds per loop)
speed={100} → Very slow (100 seconds per loop)
```

## 4. Responsive Design

### Mobile
- **Width**: Full viewport width (fills container)
- **Gap**: `gap-8` (32px, maintains spacing)
- **Item Size**: Responsive (adjust child width for mobile)
- **Speed**: Same as desktop (consider reducing for smaller screens)

### Desktop
- **Width**: Full container width
- **Gap**: `gap-8` (consistent spacing)
- **Item Size**: Larger items fit more per row
- **Speed**: Faster feels more natural with more space

## 5. Performance Considerations

### Optimization
- **Content Duplication**: Duplicated in JSX (double render) → CSS handles seamless looping
- **GPU Acceleration**: `transform: translateX()` uses GPU (smooth performance)
- **Mask Image**: Uses `mask-image` (CSS filter, performant)
- **Infinite Loop**: No JavaScript interval (pure CSS animation)

### Best Practices
- Keep child items lightweight (images, small components)
- Avoid heavy re-renders inside children
- Use `React.memo` for static carousel items
- Test performance on slower devices

## Usage Examples

### Basic Logo Carousel
```tsx
import { Marquee } from '@/components/ui/marquee';

export function LogoCarousel() {
  return (
    <Marquee pauseOnHover speed={40}>
      <div className="flex gap-8">
        <img src="/logo1.svg" alt="Partner 1" className="h-12" />
        <img src="/logo2.svg" alt="Partner 2" className="h-12" />
        <img src="/logo3.svg" alt="Partner 3" className="h-12" />
        {/* ... more logos ... */}
      </div>
    </Marquee>
  );
}
```

### Testimonials Carousel
```tsx
<Marquee speed={50} reverse pauseOnHover>
  <div className="space-y-4">
    <TestimonialCard quote="Great service!" author="John Doe" />
    <TestimonialCard quote="Highly recommend!" author="Jane Smith" />
    {/* ... more testimonials ... */}
  </div>
</Marquee>
```

### Continuous Feed (No Pause)
```tsx
<Marquee pauseOnHover={false} speed={60}>
  <NewsItem />
  <NewsItem />
  {/* ... more items ... */}
</Marquee>
```

---

Last updated: 2025-11-25