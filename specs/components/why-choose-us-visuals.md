<!-- Reference: components/ui/why-choose-us-visuals.tsx -->

# Why Choose Us Visuals

**Status**: Production (Emoji-based visual components)  
**Last Updated**: 2025-11-25

## 1. Visual Description

### Visual Component Pattern (All 5 components)
- **Container**: `w-full h-full`, flex centered (`flex items-center justify-center`)
- **Background**: Gradient (`bg-gradient-to-br from-[color]-100 to-[color]-50`)
- **Border Radius**: `rounded-3xl` (large rounded corners)
- **Content**: Large emoji (6xl font size)

### Individual Visual Components

#### 1. SecurityShield
- **Icon**: 🛡️ (shield emoji)
- **Color Scheme**: Blue gradient
- **Gradient**: `from-blue-100 to-blue-50`
- **Use Case**: Security, protection, safety features

#### 2. QualityCard
- **Icon**: ✓ (checkmark emoji)
- **Color Scheme**: Green gradient
- **Gradient**: `from-green-100 to-green-50`
- **Use Case**: Quality, verified, approval, standards

#### 3. ProfessionalToggle
- **Icon**: 👥 (people emoji)
- **Color Scheme**: Purple gradient
- **Gradient**: `from-purple-100 to-purple-50`
- **Use Case**: Team, professionalism, community, collaboration

#### 4. CompanionChart
- **Icon**: 📈 (chart emoji)
- **Color Scheme**: Orange gradient
- **Gradient**: `from-orange-100 to-orange-50`
- **Use Case**: Growth, analytics, progress, metrics

#### 5. ConnectionNetwork
- **Icon**: 🔗 (link/chain emoji)
- **Color Scheme**: Pink gradient
- **Gradient**: `from-pink-100 to-pink-50`
- **Use Case**: Integration, connections, networking, relationships

## 2. Props Interface

### All Visual Components (Stateless)

**Function Signature**:
```tsx
export function SecurityShield() { ... }
export function QualityCard() { ... }
export function ProfessionalToggle() { ... }
export function CompanionChart() { ... }
export function ConnectionNetwork() { ... }
```

**Props**: None (zero-config components)

### Export as Component Collection
```tsx
const visualComponents = {
  security_shield: SecurityShield,
  quality_card: QualityCard,
  professional_toggle: ProfessionalToggle,
  companion_chart: CompanionChart,
  connection_network: ConnectionNetwork,
}
```

Used in `ExpandableCard` component for dynamic visual rendering:
```tsx
const Component = visualComponents[visualType] || SecurityShield
return <Component />
```

## 3. Interaction & Motion

### Entry Animation (All Components)
```tsx
<motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.5 }}
>
```

**Animation Details**:
- **Initial State**: Scale 80% (0.8), transparent (opacity 0)
- **Final State**: Scale 100% (1), fully visible (opacity 1)
- **Duration**: 500ms
- **Type**: Linear timing (default, smooth easing)
- **Effect**: Fade-in + scale-up zoom effect

### Animation Trigger
- Plays on component mount
- **No dependencies**: Plays every time component is mounted
- **No exit animation**: Stays visible indefinitely
- **Repeated mounts**: Animation plays each time (useful for tab switches)

### Stacked Animation
When multiple visual components are visible:
- Each plays its own 500ms scale-up animation independently
- No stagger (all start at same time)
- Creates ripple effect if rendered simultaneously

## 4. Responsive Design

### Full-Size Responsive
```tsx
className="w-full h-full"
```
- Inherits parent container's width/height
- Scales responsively with parent
- Parent controls breakpoints

### Recommended Container Sizes

**Mobile (< md)**:
```tsx
<div className="h-48">
  <SecurityShield />
</div>
```
- 192px height

**Tablet (md → lg)**:
```tsx
<div className="h-64">
  <SecurityShield />
</div>
```
- 256px height

**Desktop (lg+)**:
```tsx
<div className="h-80">
  <SecurityShield />
</div>
```
- 320px height

### Emoji Sizing
- **Font Size**: `text-6xl` (60px base)
- **Parent Height**: Controls visible emoji size
- **Scaling**: Responsive via Tailwind font-size utility

### No Dark Mode Support
- All visuals use light-mode gradients
- Could add dark variants if needed:
  ```tsx
  bg-gradient-to-br from-blue-900 to-blue-800
  dark:from-blue-900 dark:to-blue-800
  ```

## 5. Component Architecture

### Stateless Components
- No state management
- No hooks (except Framer Motion motion.div)
- Pure presentational components
- Can be rendered multiple times without side effects

### Reusability Pattern
- Used primarily in `ExpandableCard` component
- Mapped via `visualComponents` record
- Can be used standalone for visual elements
- Designed for consistency across "Why Choose Us" section

### Accessibility Notes
- Emoji-only presentation (decorative)
- Should have parent text context (title, description)
- Not keyboard-interactive
- Consider adding `aria-label` if needed

## Usage Examples

### Standalone Usage
```tsx
import { SecurityShield, QualityCard, CompanionChart } from '@/components/ui/why-choose-us-visuals';

export function FeatureShowcase() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="h-48">
        <SecurityShield />
      </div>
      <div className="h-48">
        <QualityCard />
      </div>
      <div className="h-48">
        <CompanionChart />
      </div>
    </div>
  );
}
```

### Grid Layout
```tsx
import * as Visuals from '@/components/ui/why-choose-us-visuals';

export function BenefitsGrid() {
  const benefits = [
    { component: 'SecurityShield', title: 'Enterprise Security', description: 'Bank-level encryption' },
    { component: 'QualityCard', title: 'Quality Assured', description: '99.9% uptime SLA' },
    { component: 'ProfessionalToggle', title: 'Expert Team', description: '50+ specialists' },
    { component: 'CompanionChart', title: 'Growth Focused', description: '300% ROI average' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {benefits.map((benefit) => {
        const Component = Visuals[benefit.component];
        return (
          <div key={benefit.component}>
            <div className="h-56 mb-4">
              <Component />
            </div>
            <h3 className="font-bold text-lg">{benefit.title}</h3>
            <p className="text-gray-600 text-sm">{benefit.description}</p>
          </div>
        );
      })}
    </div>
  );
}
```

### Within ExpandableCard (Primary Use)
```tsx
import { ExpandableCard, WhyChooseUsItem } from '@/components/ui/expandable-card';

const items: WhyChooseUsItem[] = [
  {
    id: "1",
    title: "Security First",
    description: "Enterprise-grade security",
    content: "All data is encrypted end-to-end...",
    cta: "Learn More",
    visualType: "security_shield",  // Maps to SecurityShield component
  },
  {
    id: "2",
    title: "Quality Guaranteed",
    description: "High standards",
    content: "We ensure 99.9% uptime...",
    cta: "Learn More",
    visualType: "quality_card",  // Maps to QualityCard component
  },
];

export function WhyChooseUs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item) => (
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

### With Custom Wrapping
```tsx
export function CustomVisualWrapper() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 p-12 rounded-2xl">
      <div className="flex items-center gap-6">
        <div className="flex-shrink-0 h-40 w-40">
          <ConnectionNetwork />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">Connected Network</h2>
          <p className="text-gray-600 text-lg">
            Integrate seamlessly with 500+ platforms and services
          </p>
        </div>
      </div>
    </div>
  );
}
```

### Integration Notes
- **Self-contained**: Each component is fully self-contained
- **No context needed**: Can render anywhere without setup
- **Animation timing**: 500ms entrance, consistent across all visuals
- **Sizing**: Set parent container height, emoji scales with it
- **Colors**: Blue, Green, Purple, Orange, Pink gradients (accessible, distinguishable)
- **Emoji**: Consider replacing with SVG icons for more polished look in production

---

Last updated: 2025-11-25