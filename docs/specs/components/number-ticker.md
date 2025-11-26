<!-- Reference: components/ui/number-ticker.tsx -->

# Number Ticker

**Status**: Production (requestAnimationFrame animation)  
**Last Updated**: 2025-11-25

## 1. Visual Description

### Rendered Output
- **Type**: Text-based counter (inline `<span>`)
- **Display**: Animated numeric value
- **Format**: Fixed decimal places (default: 0)
- **Default Style**: Inherits parent font/color
- **Animation**: Smooth interpolation from start → end value

## 2. Props Interface

### NumberTickerProps

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | ✓ Required | Target number to count to (or from if direction="down") |
| `direction` | `"up" \| "down"` | `"up"` | Count direction: ascending or descending |
| `delay` | `number` | `0` | Milliseconds to wait before animation starts |
| `decimalPlaces` | `number` | `0` | Number of decimal places to display |

### Example Props

```tsx
// Count up from 0 to 1000
<NumberTicker value={1000} />

// Count down from 100 to 0 with delay
<NumberTicker value={100} direction="down" delay={500} />

// Display currency: count up to 99.99
<NumberTicker value={99.99} decimalPlaces={2} />

// Percentage with decimal: 87.5%
<NumberTicker value={87.5} decimalPlaces={1} />
```

## 3. Interaction & Motion

### Animation Mechanism

**Scroll Visibility Trigger**
```tsx
const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting && !hasStarted.current) {
      // Start animation when visible
    }
  },
  { threshold: 0.1 }
)
```
- Watches element visibility (`threshold: 0.1` = 10% visible)
- Only starts animation once, when element enters viewport
- Prevents unnecessary animation if off-screen

**Animation Timing**
```tsx
const duration = 1000 // 1 second
const elapsed = now - startTime
const progress = Math.min(elapsed / duration, 1)
```
- Fixed duration: **1000ms** (1 second)
- Progress: 0 → 1 (linear progress ratio)
- Clamps to max 1 (prevents over-animation)

### Count Direction

**Up Direction (default)**
```tsx
direction === "up"
// current = 0 + (value - 0) * progress
// Animates from 0 → value
```
- Start: 0
- End: `value`
- Progress: Increases smoothly

**Down Direction**
```tsx
direction === "down"
// current = value - (value - 0) * progress
// Animates from value → 0
```
- Start: `value`
- End: 0
- Progress: Decreases smoothly

### Decimal Place Formatting
```tsx
setCount(Number(current.toFixed(decimalPlaces)))
```
- Rounds intermediate values: `99.56` → `99.6` (if decimalPlaces=1)
- Ensures smooth integer transitions if `decimalPlaces=0`

### Render Timing
```tsx
requestAnimationFrame(animate)
```
- Uses `requestAnimationFrame` for 60fps animation (browser refresh rate)
- Stops when `progress >= 1` (animation complete)

### State Management
```tsx
hasStarted: useRef(false)
```
- Prevents animation from restarting on re-renders
- Ensures animation runs only once per component mount
- Resets if `value`, `direction`, `delay`, or `decimalPlaces` changes (dependency array)

## 4. Responsive Design

### No Built-in Responsive Behavior
- Component is stateless regarding screen size
- Parent container controls sizing and spacing
- Use responsive classes on wrapper:

```tsx
<div className="text-4xl md:text-6xl font-bold">
  <NumberTicker value={150} />
</div>
```

### Color Inheritance
- Inherits text color from parent
- No hardcoded color (allows flexible styling)

```tsx
// White text counter
<div className="text-white">
  <NumberTicker value={500} />
</div>

// Blue gradient text
<div className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
  <NumberTicker value={999.99} decimalPlaces={2} />
</div>
```

## 5. Lifecycle & Cleanup

### Effect Dependencies
```tsx
useEffect(() => {
  // Setup
}, [value, direction, delay, decimalPlaces])
```
- Triggers re-observer setup if any prop changes
- Clears previous timers/observers (cleanup function)

### Cleanup Function
```tsx
return () => {
  if (containerRef.current) {
    observer.unobserve(containerRef.current)
  }
}
```
- Removes intersection observer on unmount
- Prevents memory leaks

### Timer Cleanup
```tsx
const timer = setTimeout(() => {
  // Animation
}, delay)

return () => clearTimeout(timer)
```
- Clears delayed timeout if component unmounts
- Prevents "setState on unmounted component" warnings

## Usage Examples

### Basic Counter
```tsx
import { NumberTicker } from '@/components/ui/number-ticker';

export function StatsSection() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-4">
        <NumberTicker value={500} /> +
      </h2>
      <p>Clients Served</p>
    </div>
  );
}
```

### Multiple Stats with Delay
```tsx
export function AchievementsGrid() {
  return (
    <div className="grid grid-cols-3 gap-8">
      {[
        { label: "Projects", value: 250 },
        { label: "Team Members", value: 45 },
        { label: "Years Active", value: 12 },
      ].map((stat, idx) => (
        <div key={stat.label} className="text-center">
          <div className="text-5xl font-bold text-blue-600 mb-2">
            <NumberTicker 
              value={stat.value} 
              delay={idx * 200}  // Stagger animation
            />
          </div>
          <p className="text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
```

### Currency Display
```tsx
export function RevenueStat() {
  return (
    <div className="text-4xl font-bold">
      $<NumberTicker value={2500000} decimalPlaces={0} />
      <span className="text-lg"> Annual Revenue</span>
    </div>
  );
}
```

### Countdown Timer
```tsx
export function OfferCountdown() {
  return (
    <div className="text-center">
      <p className="text-2xl font-bold mb-2">Offer ends in:</p>
      <div className="text-5xl font-bold text-red-600">
        <NumberTicker value={60} direction="down" />
        <span> seconds</span>
      </div>
    </div>
  );
}
```

### Performance Metric with Delay
```tsx
export function LoadingMetric() {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-sm">System Uptime</div>
      <div className="text-3xl font-bold">
        <NumberTicker 
          value={99.99} 
          decimalPlaces={2}
          delay={500}
        />%
      </div>
    </div>
  );
}
```

### Integration Notes
- **Viewport-based**: Animation triggers when 10% visible
- **One-time animation**: Won't repeat unless prop changes
- **Performance**: Uses `requestAnimationFrame` for efficiency
- **Staggering**: Use `delay` prop to cascade multiple counters
- **Styling**: Apply styles to parent wrapper, not component itself

---

Last updated: 2025-11-25