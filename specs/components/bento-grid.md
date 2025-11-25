# BentoGrid Component

**Status**: Production  
**Last Updated**: 2025-11-25

## Description

A responsive grid layout component that supports flexible column spanning and automatic row sizing. Used for displaying featured services, projects, and content cards.

## Variants

### Standard Bento Grid

- Responsive: 1 column (mobile) → 4 columns (md+)
- Gap: 24px (configurable)
- Item height: Auto or fixed height via props

### Big + Small Cards Pattern

The FeaturedServicesSection uses a 50/50 split:
- **Big Card**: 2 columns × 2 rows (50% width)
- **Small Cards**: 1 column each (4 cards, 25% width each)

## Usage

```tsx
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';

export default function Example() {
  return (
    <BentoGrid className="md:grid-cols-4">
      <BentoGridItem
        title="Card Title"
        className="md:col-span-2 md:row-span-2"
        image="/images/card-bg.webp"
      />
      <BentoGridItem
        title="Small Card"
        className="md:col-span-1"
      />
    </BentoGrid>
  );
}
```

## Props

### BentoGrid

- `className?: string` - Additional CSS classes
- `children?: React.ReactNode` - Grid items

### BentoGridItem

- `title?: string | React.ReactNode` - Card title (required)
- `className?: string` - Custom grid positioning (e.g., "md:col-span-2")
- `description?: string | React.ReactNode` - Optional description
- `header?: React.ReactNode` - Header spacer (for vertical positioning)
- `icon?: React.ReactNode` - Optional icon element
- `image?: string` - Background image URL (fills card with object-cover)

## Styling

- **Background**: Image with gradient overlay
- **Text Color**: `text-slate-900` (light), `dark:text-white` (dark)
- **Padding**: 16px (p-4)
- **Border Radius**: 12px
- **Border**: 1px neutral-200 (light), white/20 (dark)

## Accessibility

- Title is semantic heading
- Alt text for images: auto-generated from title
- Hover state: shadow elevation

## Related Files

- `components/ui/bento-grid.tsx` - Component implementation
- `components/sections/home/FeaturedServicesSection.tsx` - Usage example

---

Last updated: 2025-11-25
