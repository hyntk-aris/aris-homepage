<!-- Reference: components/ui/aurora-text.tsx -->

# Aurora Text

**Status**: Production (Memoized)  
**Last Updated**: 2025-11-25

## 1. Visual Description

### Layout
- **Type**: Inline text span with animated gradient background
- **Display**: `inline-block` (allows width constraint)
- **Clipping**: `bg-clip-text text-transparent` (gradient fills text)
- **Background Size**: `bg-[length:200%_auto]` (200% width, allows animation)
- **Accessibility**: `sr-only` fallback for screen readers

### Styling
- **Gradient**: Linear gradient 135° (diagonal)
- **Default Colors**: Pink → Purple → Blue → Cyan → loop
- **Text Fill**: Transparent (shows gradient only)
- **WebKit**: `-WebkitBackgroundClip: "text"`, `-WebkitTextFillColor: "transparent"` (cross-browser)
- **Animation**: `animate-aurora` (Tailwind class)

## 2. Props Interface

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | — | Text content to display (required) |
| `className` | `string` | `""` | Additional CSS classes |
| `colors` | `string[]` | `["#FF0080", "#7928CA", "#0070F3", "#38bdf8"]` | Gradient color array (hex/rgb) |
| `speed` | `number` | `1` | Animation speed multiplier (higher = faster) |

### Speed Calculation
```
animationDuration = 10 / speed

speed=1   → 10s animation
speed=2   → 5s animation (twice as fast)
speed=0.5 → 20s animation (half as fast)
```

## 3. Interaction & Motion

### Animation
- **Name**: `animate-aurora` (Tailwind keyframes)
- **Type**: Gradient position shift (background-position)
- **Duration**: Dynamic based on `speed` prop
- **Timing**: Linear
- **Iteration**: Infinite
- **Keyframes** (expected):
  ```css
  @keyframes aurora {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  ```

### Customization
```tsx
// Fast animation (5 seconds)
<AuroraText speed={2}>Fast Aurora</AuroraText>

// Slow animation (20 seconds)
<AuroraText speed={0.5}>Slow Aurora</AuroraText>

// Custom colors
<AuroraText colors={["#ff0000", "#00ff00", "#0000ff"]}>
  RGB Aurora
</AuroraText>

// Combine
<AuroraText 
  speed={1.5} 
  colors={["#FF6B6B", "#4ECDC4", "#45B7D1"]}
  className="text-4xl font-bold"
>
  Custom Aurora
</AuroraText>
```

## 4. Responsive Design

### Mobile
- **Text Size**: Responsive (inherit parent font-size)
- **Performance**: Smooth gradient animation
- **Memory**: Memoized (`React.memo`) → no re-render unless props change

### Desktop
- **Same**: Responsive (no breakpoint-specific styling)
- **Scales**: Text size follows parent container

## 5. Accessibility

- **Screen Reader**: `sr-only` span contains actual text (visible to assistants)
- **Semantic**: Spans render as aria-hidden (decorative gradient)
- **Color Contrast**: Gradient may have low contrast; ensure sufficient parent contrast

## Usage Examples

```tsx
import { AuroraText } from '@/components/ui/aurora-text';

// Basic usage
<AuroraText>Aurora Heading</AuroraText>

// With size
<h1 className="text-4xl">
  <AuroraText>Big Aurora Title</AuroraText>
</h1>

// Fast animation
<AuroraText speed={2} className="text-2xl">
  Fast Animated Text
</AuroraText>

// Custom gradient
<AuroraText colors={["#FF1493", "#FFD700", "#00CED1"]}>
  Vibrant Aurora
</AuroraText>

// In heading
<header>
  <AuroraText className="text-5xl font-bold">
    Welcome to Aurora
  </AuroraText>
</header>
```

---

Last updated: 2025-11-25