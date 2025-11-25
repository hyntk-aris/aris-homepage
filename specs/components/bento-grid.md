<!-- Reference: components/ui/bento-grid.tsx -->

# Bento Grid

**Status**: Production (Flexible responsive grid layout)  
**Last Updated**: 2025-11-25

## 1. Visual Description

### BentoGrid Container
- **Type**: CSS Grid layout
- **Max Width**: `max-w-7xl` (80rem)
- **Centering**: `mx-auto`
- **Mobile Layout**: `grid-cols-1` (single column)
- **Desktop Layout** (md+): `grid-cols-3` (3 columns)
- **Row Height** (md+): `auto-rows-[18rem]` (fixed 288px rows)
- **Gap**: `gap-4` (16px between items)

### BentoGridItem (Card)
- **Type**: Card with optional image background
- **Layout**: `flex flex-col justify-between` (vertical, space between)
- **Border**: `border border-neutral-200` (light) / `dark:border-white/[0.2]` (dark)
- **Padding**: `p-4` (16px)
- **Border Radius**: `rounded-xl` (extra-large corners)
- **Shadow**: `shadow-input` (subtle), `hover:shadow-xl` (elevated on hover)
- **Background**: Inherits from parent (can be colored via `className`)
- **Position**: `relative overflow-hidden` (clips content at edges)

### Image Background (Optional)
```tsx
{image ? (
  <div className="absolute inset-0 z-0">
    <img src={image} className="h-full w-full object-cover" />
  </div>
) : null}
```
- **Position**: Absolute, full coverage (`inset-0`)
- **Z-Index**: `z-0` (behind text)
- **Sizing**: `object-cover` (fills container, crops if needed)

### Header Section (Optional)
- **Position**: Above text content
- **Type**: Custom React component (passed as prop)
- **Z-Index**: Implicit (above image, below text due to DOM order)

### Text Content
- **Layout**: Flex column (`flex flex-col justify-between`)
- **Z-Index**: `z-10` (above image background)
- **Animation**: Slides right on hover (`group-hover/bento:translate-x-2`)

**Icon** (Optional):
- **Position**: Before title
- **Type**: Custom React component

**Title**:
- **Font**: `font-sans font-bold`
- **Color**: `text-slate-900` (light) / `dark:text-white` (dark)
- **Size**: Default (inherits)

**Description** (Optional):
- **Font**: `font-sans text-xs font-normal`
- **Color**: `text-neutral-600` (light) / `dark:text-neutral-300` (dark)
- **Conditional**: Only renders if provided

## 2. Props Interface

### BentoGrid Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | N/A | Optional additional CSS classes |
| `children` | `React.ReactNode` | N/A | Grid items to render |

### BentoGridItem Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | N/A | Optional additional CSS classes (styling, colspan) |
| `title` | `string \| React.ReactNode` | N/A | Card title (required for content) |
| `description` | `string \| React.ReactNode` | N/A | Optional subtitle/description text |
| `header` | `React.ReactNode` | N/A | Optional header component (renders first) |
| `icon` | `React.ReactNode` | N/A | Optional icon component (renders before title) |
| `image` | `string` | N/A | Optional background image URL |
| `classNameTitle` | `string` | N/A | Optional classes for title container |

## 3. Interaction & Motion

### Card Hover Effects

**Shadow Animation**:
```tsx
shadow-input transition duration-200 hover:shadow-xl
```
- Smooth 200ms transition
- Elevates shadow on hover (more pronounced shadow)
- Gives depth/lift feeling

**Text Animation**:
```tsx
transition duration-200 group-hover/bento:translate-x-2
```
- Uses Tailwind's group variant (`group-hover/bento`)
- Translates text 8px to the right (`translate-x-2`) on hover
- Smooth 200ms transition
- Creates sliding effect

### Group Variant Behavior
```tsx
className="group/bento ..."
<div className="...group-hover/bento:translate-x-2...">
```
- Parent has `group/bento` class
- Child listens to parent hover via `group-hover/bento`
- Text slides when card is hovered
- Allows coordinated hover effects

### Background Image Overlay
- Image is `z-0` (bottom layer)
- Text is `z-10` (top layer)
- Text always readable over image
- No interactive overlay (static display)

## 4. Responsive Design

### Mobile (< md)
- **Grid**: Single column (`grid-cols-1`)
- **Row Height**: Auto (varies with content)
- **Layout**: Stacked vertically
- **Padding**: `p-4` (16px)
- **Full Width**: Minus gutters

### Desktop (md+)
- **Grid**: 3 columns (`grid-cols-3`)
- **Row Height**: Fixed `auto-rows-[18rem]` (288px)
- **Layout**: 3-column grid
- **Flexible Heights**: Can span multiple rows via `className="md:row-span-2"`

### Responsive Classes Example
```tsx
<BentoGridItem
  className="md:col-span-2"  // Wide item on desktop
  ...
/>
```

### Dark Mode
- Border: `dark:border-white/[0.2]`
- Title: `dark:text-white`
- Description: `dark:text-neutral-300`
- Shadow: `dark:shadow-none` (prevents shadow in dark mode)

## 5. Component Architecture

### BentoGrid (Container)
- Pure layout container
- No state
- Simple prop forwarding
- Uses `cn()` for class merging

### BentoGridItem (Card)
- Presentational component
- No state
- Handles optional props (image, header, icon, description)
- Manages conditional rendering
- Applies styling via classnames

### Styling Pattern
- Uses `cn()` utility for class composition
- Base classes + optional className prop
- Dark mode support via `dark:` prefix
- Hover states via Tailwind variants

## Usage Examples

### Basic Grid
```tsx
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';

export function ServiceGrid() {
  return (
    <BentoGrid>
      <BentoGridItem
        title="Design"
        description="Beautiful interfaces"
      />
      <BentoGridItem
        title="Development"
        description="Fast & scalable"
      />
      <BentoGridItem
        title="Deployment"
        description="Production ready"
      />
    </BentoGrid>
  );
}
```

### With Icons
```tsx
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { Code, Palette, Zap } from 'lucide-react';

export function FeaturesGrid() {
  return (
    <BentoGrid>
      <BentoGridItem
        icon={<Code className="w-6 h-6" />}
        title="Clean Code"
        description="Well-structured and maintainable"
      />
      <BentoGridItem
        icon={<Palette className="w-6 h-6" />}
        title="Beautiful Design"
        description="Modern UI/UX"
      />
      <BentoGridItem
        icon={<Zap className="w-6 h-6" />}
        title="High Performance"
        description="Optimized for speed"
      />
    </BentoGrid>
  );
}
```

### With Images
```tsx
export function ImageGrid() {
  const items = [
    {
      title: "Project 1",
      description: "Web application",
      image: "/images/project1.jpg",
    },
    {
      title: "Project 2",
      description: "Mobile app",
      image: "/images/project2.jpg",
    },
    {
      title: "Project 3",
      description: "SaaS platform",
      image: "/images/project3.jpg",
    },
  ];

  return (
    <BentoGrid>
      {items.map((item) => (
        <BentoGridItem key={item.title} {...item} />
      ))}
    </BentoGrid>
  );
}
```

### Responsive Grid Spans
```tsx
export function MixedLayout() {
  return (
    <BentoGrid>
      {/* Wide item on desktop */}
      <BentoGridItem
        className="md:col-span-2"
        title="Featured"
        description="Takes up 2 columns"
        image="/images/featured.jpg"
      />
      
      {/* Regular items */}
      <BentoGridItem
        title="Item 2"
        description="Single column"
      />
      
      {/* Tall item on desktop */}
      <BentoGridItem
        className="md:row-span-2"
        title="Tall Item"
        description="Spans 2 rows"
      />
      
      <BentoGridItem title="Item 4" />
      <BentoGridItem title="Item 5" />
    </BentoGrid>
  );
}
```

### With Header Component
```tsx
export function GridWithHeaders() {
  return (
    <BentoGrid>
      <BentoGridItem
        title="Analytics"
        description="Real-time metrics"
        header={
          <div className="h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-4" />
        }
      />
      <BentoGridItem
        title="Reports"
        description="Detailed insights"
        header={
          <div className="h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg mb-4" />
        }
      />
    </BentoGrid>
  );
}
```

### Custom Styling
```tsx
export function CustomStyledGrid() {
  return (
    <BentoGrid className="gap-6">
      <BentoGridItem
        className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-neutral-900 dark:to-neutral-800 md:col-span-2"
        title="Large Featured Item"
      />
      <BentoGridItem
        className="bg-blue-50 dark:bg-blue-950/20"
        title="Colored Item"
      />
    </BentoGrid>
  );
}
```

### Integration Notes
- **Responsive**: Mobile single-column, desktop 3-column
- **Flexible heights**: Fixed row height on desktop, auto on mobile
- **Optional content**: Image, header, icon, description all optional
- **Hover feedback**: Shadow lift + text slide on hover
- **Dark mode**: Automatic support via Tailwind classes
- **Customizable**: `className` prop allows overriding defaults
- **Nested content**: Accept any React component in header/icon

---

Last updated: 2025-11-25
