<!-- Reference: components/ui/button.tsx -->

# Button

**Status**: Production  
**Last Updated**: 2025-11-25

## 1. Visual Description

### Layout
- **Type**: Inline-flex container with centered items
- **Alignment**: Center (both horizontally and vertically)
- **Spacing**: Whitespace nowrap (prevents text wrapping)
- **Height**: Variable based on size variant (9-11px)
- **Padding**: Horizontal (3-8px), Vertical (2px)

### Styling
- **Text**: `text-sm font-medium` (small, bold text)
- **Border Radius**: `rounded-md` (medium rounded corners)
- **Ring**: Focus state with `ring-2 focus-visible:ring-ring` (WCAG AA compliant)
- **Ring Offset**: `ring-offset-2` (space between border and ring)
- **Transition**: `transition-colors` (smooth color change on hover/focus)
- **Disabled State**: `disabled:opacity-50 disabled:pointer-events-none` (grayed out, non-interactive)

### Variants

| Variant | Colors | Hover | Use Case |
|---------|--------|-------|----------|
| **default** | `bg-primary text-primary-foreground` | `hover:bg-primary/90` | Primary CTA buttons |
| **destructive** | `bg-destructive text-destructive-foreground` | `hover:bg-destructive/90` | Delete/cancel actions |
| **outline** | `border border-input bg-background` | `hover:bg-accent` | Secondary actions |
| **secondary** | `bg-secondary text-secondary-foreground` | `hover:bg-secondary/80` | Secondary CTAs |
| **ghost** | Transparent | `hover:bg-accent` | Tertiary/minimal buttons |
| **link** | `text-primary` | `hover:underline` | Link-styled buttons |

### Size Variants

| Size | Height | Padding | Use Case |
|------|--------|---------|----------|
| **sm** | `h-9` (36px) | `px-3` | Compact buttons |
| **default** | `h-10` (40px) | `px-4 py-2` | Standard buttons |
| **lg** | `h-11` (44px) | `px-8` | Large/prominent buttons |
| **icon** | `h-10 w-10` (40×40px) | Square | Icon-only buttons |

## 2. Props Interface

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link'` | `'default'` | Button style variant |
| `size` | `'sm' \| 'default' \| 'lg' \| 'icon'` | `'default'` | Button size |
| `className` | `string` | — | Additional CSS classes (merged with variant classes) |
| `asChild` | `boolean` | `false` | If true, renders as child (Slot from Radix UI) |
| `disabled` | `boolean` | `false` | Disables button interaction |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |
| `onClick` | `(e: React.MouseEvent) => void` | — | Click handler |
| `children` | `React.ReactNode` | — | Button text/content |

## 3. Interaction & Motion

### Hover State
- **Color Change**: Variant-specific color darkening (e.g., primary → primary/90)
- **Opacity**: 90% for main variants (subtle darkening)
- **Transition**: `transition-colors` (150ms default)
- **Cursor**: Default pointer behavior

### Focus State
- **Visual**: `ring-2 ring-ring ring-offset-2` (keyboard focus indicator)
- **Outline**: None (custom ring replaces browser outline)
- **Accessibility**: WCAG AA compliant for focus visibility

### Disabled State
- **Opacity**: 50% transparency
- **Pointer**: `pointer-events-none` (non-clickable)
- **Cursor**: Default (not `pointer`)
- **No Animation**: Hover effects disabled

### Animation
- **Library**: None (transition-only, no Framer Motion)
- **Type**: CSS transition (`transition-colors`)
- **Duration**: 150ms (default)
- **Easing**: Ease-in-out (default)

## 4. Responsive

**Desktop (md+)**
- Full size rendering
- All variants visible
- Hover effects active

**Mobile**
- Button scaling respects size variant
- Touch-friendly minimum size: `h-10` (40px)
- No hover effects (replaced by active/pressed)
- No ring offset adjustment

## Usage Examples

```tsx
import { Button } from '@/components/ui/button';

// Primary Button
<Button variant="default" size="default">
  Send Message
</Button>

// Large CTA
<Button variant="default" size="lg">
  Get Started
</Button>

// Icon Button
<Button variant="ghost" size="icon">
  <IconComponent />
</Button>

// Outline Link
<Button variant="outline" asChild>
  <a href="/docs">Documentation</a>
</Button>

// Destructive Action
<Button variant="destructive" onClick={handleDelete}>
  Delete Account
</Button>

// Disabled State
<Button disabled>
  Processing...
</Button>
```