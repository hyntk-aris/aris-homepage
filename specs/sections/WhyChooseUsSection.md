<!-- Reference: components/sections/home/WhyChooseUsSection.tsx -->

# Why Choose Us Section

**Status**: Production (Expandable cards with modal)  
**Last Updated**: 2025-11-25

## 1. Visual Description

### Section Container
- **Padding**: `py-16` (64px vertical), `px-4 md:px-8`
- **Background**: `bg-background`
- **Max Width**: `max-w-[1440px]` centered

### Section Header
- **Title**: "Tại sao chọn ARIS?" (Why choose ARIS?)
- **Font**: `text-3xl md:text-4xl lg:text-5xl font-bold`
- **Color**: `text-slate-900` / `dark:text-white`
- **Subtitle**: Explanatory text with benefits
- **Max Width**: `max-w-2xl`

### Grid Layout
- **Desktop**: `md:grid-cols-6` (6-column grid)
- **Mobile**: `grid-cols-1` (single column)
- **Gap**: `gap-6` (24px)
- **Top 3 Cards**: `md:col-span-2` each (1/3 width)
- **Bottom 2 Cards**: `md:col-span-3` each (1/2 width)

### Cards
- **Type**: `ExpandableCard` components (modal on click)
- **Height**: `h-[254px]` for top 3 cards
- **Visual**: Icons (shield, checkmark, people, chart, link)
- **Color Gradients**: Blue, Green, Purple, Orange, Pink backgrounds

## 2. Props Interface

### WhyChooseUsSection Props
```tsx
export default function WhyChooseUsSection() {
  // No props - self-contained
}
```

### Internal Data: whyChooseUsData (5 items)

| ID | Title | Visual Type | Key Features |
|----|-------|-------------|--------------|
| security | Cam kết bảo mật | security_shield | ISO 27001, encryption |
| quality | Quản lý chất lượng | quality_card | >95% test coverage |
| professional | Tính chuyên nghiệp | professional_toggle | Agile/Scrum team |
| companion | Cam kết đồng hành | companion_chart | 24/7 support, 12mo warranty |
| connection | Gắn kết khách hàng | connection_network | Partner ecosystem |

## 3. Interaction & Motion

### State Management
```tsx
const [activeCard, setActiveCard] = useState<string | null>(null)
```
- Tracks which card is expanded (modal open)
- One card open at a time

### Card Interactions
- **Click card**: Opens modal with full details
- **Click outside**: Closes modal
- **Animation**: Framer Motion spring animation (expandable-card)
- **Backdrop**: Blurred background on modal open

### Modal Content
Each card shows:
- **Visual**: Icon component (shield, checkmark, etc.)
- **Title**: Benefit name
- **Content**: Full description (Vietnamese)
- **CTA Button**: Action text (e.g., "Xem chứng chỉ bảo mật")

## 4. Responsive Design

### Mobile (< md)
- **Grid**: Single column
- **Cards**: Full width
- **Height**: Auto (flexible)
- **Stacked vertically**: All 5 cards

### Desktop (md+)
- **Grid**: 6-column layout
- **Top 3 cards**: 2-col span each (25% width)
- **Bottom 2 cards**: 3-col span each (50% width)
- **Height**: Fixed 254px for top cards
- **Layout**: Balanced 3-2 arrangement

### Dark Mode
- Backgrounds: Dark slate
- Text: Light colors
- Modal: Dark background with blur
- Cards: Semi-transparent backgrounds

## 5. Component Architecture

### Imports
- **ExpandableCard**: Modal card component
- **WhyChooseUsItem**: Type definition

### Grid Pattern
- Top row: 3 cards (1/3 width each)
- Bottom row: 2 cards (1/2 width each)
- Creates visual balance and hierarchy
- Responsive collapse to single column

---

Last updated: 2025-11-25