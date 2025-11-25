<!-- Reference: components/ui/expandable-card.tsx -->

# Expandable Card

**Status**: Production (Framer Motion)  
**Last Updated**: 2025-11-25

## 1. Visual Description

### Closed State
- **Type**: Grid card with visual + text overlay
- **Layout**: `relative` container, full size
- **Visual**: Absolute fill (`inset-0`), component render
- **Text Overlay**: `absolute bottom-0 left-0 right-0`
- **Gradient**: `bg-gradient-to-t from-black/60 to-transparent` (dark bottom fade)
- **Button**: Blue pill ("+") badge, hover scale, bottom right
- **Hover**: Y-offset animation (`y: -4`), shadow increase

### Expanded State (Modal)
- **Type**: Fixed centered modal
- **Backdrop**: `fixed inset-0 bg-black/40 backdrop-blur-md z-40`
- **Modal Container**: `fixed top-50% left-50%`, centered, `width: min(90vw, 800px)`
- **Max Height**: `min(85vh, 90vh)` (scrollable if needed)
- **Background**: White, `rounded-3xl shadow-2xl`
- **Close Button**: Sticky top-right, circle icon (X)
- **Content Layout**:
  - Visual preview (full-width, `h-64 md:h-72`)
  - Title (`text-3xl md:text-4xl`)
  - Description (gray text)
  - Content box (light gray background, bordered)
  - CTA button (blue, full-width)

## 2. Props Interface

### ExpandableCardProps

| Name | Type | Description |
|------|------|-------------|
| `item` | `WhyChooseUsItem` | Card data object (required) |
| `isActive` | `boolean` | Whether modal is open |
| `onOpen` | `() => void` | Callback to open modal |
| `onClose` | `() => void` | Callback to close modal |

### WhyChooseUsItem Interface

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | Unique identifier |
| `title` | `string` | Card title (grid + modal) |
| `description` | `string` | Subtitle/description (modal only) |
| `content` | `string` | Full content (modal content box) |
| `cta` | `string` | CTA button text |
| `visualType` | `string` | Visual component key (maps to `visualComponents`) |

### Visual Types
```
- security_shield
- quality_card
- professional_toggle
- companion_chart
- connection_network
```

## 3. Interaction & Motion

### Grid Card Interactions

**Hover Animation**
```tsx
whileHover={{ y: -4 }} // Lift card up 4px
```
- Button "+": `whileHover={{ scale: 1.1 }}`
- Shadow: `hover:shadow-lg transition-shadow`

**Click**
- Triggers `onOpen()` → opens modal

### Modal Animations

**Entry (Opening)**
```tsx
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ type: "spring", damping: 30, stiffness: 300 }}
```
- Fade-in + scale-up spring animation
- Backdrop: Fade-in (200ms)
- Smooth entrance with bounce (spring physics)

**Exit (Closing)**
```tsx
exit={{ opacity: 0, scale: 0.8 }}
```
- Fade-out + scale-down

**Close Button**
```tsx
whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.95 }}
```
- Hover: Scale 110%
- Tap: Scale 95% (press feedback)

**CTA Button (Modal)**
```tsx
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
```
- Subtle scale on hover/tap

### Shared Layout Animation
- **layoutId**: `card-${item.id}`, `visual-${item.id}`, `content-${item.id}`
- **Purpose**: Seamless morph animation between grid card and modal
- **Library**: Framer Motion `layoutId` prop (Shared Layout Animation)

### Body Scroll Lock
```tsx
useEffect(() => {
  if (isActive) {
    document.body.style.overflow = "hidden"
    document.body.style.paddingRight = "8px" // Scrollbar width compensation
  } else {
    document.body.style.overflow = "unset"
  }
}, [isActive])
```
- Prevents background scroll when modal open
- Adds padding to prevent layout shift

### Outside Click
```tsx
const ref = useOutsideClick(onClose)
```
- Clicking backdrop or outside modal closes it
- Custom hook from `lib/hooks/useOutsideClick`

## 4. Responsive Design

### Mobile (< md)
- **Grid**: Single or 2-column
- **Modal Width**: `90vw` (full width minus padding)
- **Visual Height**: `h-64` (256px)
- **Padding**: `p-6` (24px)
- **Font**: `text-3xl` (title)

### Desktop (md+)
- **Grid**: 3-4 columns
- **Modal Width**: `800px` max
- **Visual Height**: `h-72` (288px)
- **Padding**: `p-10` (40px)
- **Font**: `text-4xl` (title)

## 5. Component Architecture

### Sub-Components (Visual Types)
```tsx
const visualComponents: Record<string, React.ComponentType> = {
  security_shield: SecurityShield,
  quality_card: QualityCard,
  professional_toggle: ProfessionalToggle,
  companion_chart: CompanionChart,
  connection_network: ConnectionNetwork,
}
```

- Maps `visualType` string to React component
- Defaults to `SecurityShield` if unknown
- Renders in both grid card and modal

## Usage Example

```tsx
import { ExpandableCard, WhyChooseUsItem } from '@/components/ui/expandable-card';

export function WhyChooseUsGrid() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const items: WhyChooseUsItem[] = [
    {
      id: "1",
      title: "Security First",
      description: "Enterprise-grade security",
      content: "All data is encrypted end-to-end...",
      cta: "Learn More",
      visualType: "security_shield",
    },
    // ... more items
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map(item => (
        <ExpandableCard
          key={item.id}
          item={item}
          isActive={activeId === item.id}
          onOpen={() => setActiveId(item.id)}
          onClose={() => setActiveId(null)}
        />
      ))}
    </div>
  );
}
```

---

Last updated: 2025-11-25