<!-- Reference: components/sections/home/ProcessSection.tsx -->

# Process Section

**Status**: Production (6-step process with tab navigation)  
**Last Updated**: 2025-11-25

## 1. Visual Description

### Section Container
- **Padding**: `py-[164px]` (656px vertical - extra tall)
- **Background**: `bg-background`
- **Max Width**: `max-w-[1440px]`
- **Centering**: `mx-auto`

### Section Header
- **Title**: "Quy trình dự án" (Project Process)
- **Font**: `text-3xl md:text-4xl lg:text-5xl font-bold`
- **Color**: `text-slate-900` / `dark:text-white`

### Content Grid
- **Desktop** (`lg+`): 12-column grid (`lg:grid-cols-12`)
  - Left (tabs): `lg:col-span-3` (25%)
  - Right (display): `lg:col-span-9` (75%)
- **Mobile**: Single column (`grid-cols-1`)
- **Gap**: `gap-8` (32px)

### Left Column - Tab Navigation
- **Layout**: Vertical flex (`flex flex-col gap-3`)
- **6 Step Buttons** in stack

**Inactive Tab**:
- **Border**: `border-2 border-gray-200` / `dark:border-gray-800`
- **Background**: `bg-white` / `dark:bg-slate-900/50`
- **Hover**: Border lightens

**Active Tab**:
- **Border**: `border-2 border-blue-500`
- **Background**: `bg-blue-50` / `dark:bg-slate-900`

**Tab Content**:
- **Padding**: `p-4`
- **Border Radius**: `rounded-lg`
- **Step Label**: `text-sm font-medium text-gray-600` (e.g., "Step 1")
- **Title**: `text-lg font-bold text-slate-900` (Vietnamese step name)

### Right Column - Display
- **Component**: `<ProcessDisplayCard step={activeStepData} />`
- **Animation**: Animates on step change (fade + slide, spring physics)

## 2. Props Interface

### ProcessSection Props
```tsx
export default function ProcessSection() {
  // No props - self-contained
}
```

### Internal Data: PROCESS_STEPS (6 steps)

| ID | Title (Vietnamese) | Key Points |
|----|--------------------|-----------|
| 1 | Phân tích (Analysis) | Understanding needs, goals |
| 2 | Lập kế hoạch (Planning) | Strategy, roadmap |
| 3 | Thực hiện (Execution) | Implementation, coding |
| 4 | Kiểm soát chất lượng (QA) | Testing, verification |
| 5 | Triển khai (Deployment) | Release to production |
| 6 | Vận hành (Operations) | Support, maintenance |

**ProcessStep Interface**:
```tsx
interface ProcessStep {
  id: number;
  title: string;
  description: string;
  details: string;
}
```

## 3. Interaction & Motion

### State Management
```tsx
const [activeStep, setActiveStep] = useState(1)
const activeStepData = PROCESS_STEPS.find((step) => step.id === activeStep)
```
- Default active: Step 1
- Updates on tab click

### Tab Click Handler
```tsx
<button onClick={() => setActiveStep(step.id)} ... >
```
- Sets activeStep to clicked tab's ID
- Triggers display card animation

### Tab Styling Animation
```tsx
className={...transition-all duration-200...}
```
- Smooth border color transition (200ms)
- Smooth background transition
- Hover effect: border lightens

### Display Card Animation (via ProcessDisplayCard)
- Entry: Fade in (opacity 0→1) + slide up (y: 20→0)
- Duration: 400ms
- Timing: Spring (damping: 30, stiffness: 300)
- Exit: Reverse animation

## 4. Responsive Design

### Mobile (< lg)
- **Tabs**: Full-width, above display
- **Display**: Full-width, below tabs
- **Layout**: Single column stack
- **Vertical gap**: `gap-8`

### Desktop (lg+)
- **Tabs**: 25% width left sidebar
- **Display**: 75% width right column
- **Layout**: Side-by-side 2-column
- **Horizontal gap**: `gap-8`

### Dark Mode
- Tab border: `dark:border-gray-800`
- Tab background: `dark:bg-slate-900/50`
- Active tab: `dark:bg-slate-900 dark:border-blue-500`
- Text: `dark:text-white`

## 5. Component Architecture

### Imports
- **ProcessDisplayCard**: Displays step content with animation
- **ProcessStep**: Type definition

### State
- `activeStep`: Currently selected step ID
- `activeStepData`: Computed from PROCESS_STEPS array

### Rendering
- `.map()` PROCESS_STEPS for buttons
- `.find()` to get current step data
- Conditional: `{activeStepData && <ProcessDisplayCard />}`

## Usage Example

```tsx
import ProcessSection from '@/components/sections/home/ProcessSection';

export default function Home() {
  return (
    <>
      {/* Other sections */}
      <ProcessSection />
    </>
  );
}
```

### Customization Notes
- **Add/Remove Steps**: Modify PROCESS_STEPS array
- **Update Text**: Change Vietnamese descriptions
- **Change Colors**: Modify Tailwind border/bg classes
- **Animation**: Adjust ProcessDisplayCard timing
- **Add Icons**: Include lucide icons in step labels

### Integration Tips
- Explains project methodology clearly
- 6-step process shows comprehensive approach
- Tab interface allows step comparison
- Fully responsive and dark-mode compatible
- Animation enhances user engagement

---

Last updated: 2025-11-25