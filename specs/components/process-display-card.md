<!-- Reference: components/ui/process-display-card.tsx -->

# Process Display Card

**Status**: Production (Framer Motion with AnimatePresence)  
**Last Updated**: 2025-11-25

## 1. Visual Description

### Card Container
- **Type**: Rounded card with overflow hidden
- **Layout**: `relative h-full` (full height, positioned parent)
- **Shape**: `rounded-xl` (extra-large border radius)
- **Overflow**: `overflow-hidden` (clips content at edges)

### Background Layer
- **Type**: Solid color fill
- **Color**: `bg-slate-100` (light gray)
- **Position**: `absolute inset-0` (full coverage)
- **Depth**: Behind content (no z-index)

### Content Layer
- **Type**: Text content (title + details)
- **Position**: `absolute top-0 left-0 z-10`
- **Padding**: `p-[48px]` (48px all sides)
- **Layout**: `flex flex-col gap-4` (vertical stack, 16px gap)
- **Max Width**: `max-w-lg` (448px, prevents overflow)

### Title
- **Font Size**: `text-3xl md:text-4xl` (mobile 30px → desktop 36px)
- **Font Weight**: `font-bold`
- **Color**: `text-neutral-900` (near-black)
- **Line Height**: Default

### Details Text
- **Font Size**: `text-base` (16px)
- **Color**: `text-neutral-600` (medium gray)
- **Line Height**: `leading-relaxed` (1.625)
- **Content**: Step description text

## 2. Props Interface

### ProcessDisplayCardProps

| Name | Type | Description |
|------|------|-------------|
| `step` | `ProcessStep` | Process step data object (required) |

### ProcessStep Interface

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | `number` | ✓ | Unique identifier for the step |
| `title` | `string` | ✓ | Step title (displayed in header) |
| `description` | `string` | ✓ | Brief description (not currently used) |
| `details` | `string` | ✓ | Full details text (displayed in card) |

### Example Props

```tsx
const exampleStep: ProcessStep = {
  id: 1,
  title: "Discovery & Planning",
  description: "Initial phase",
  details: "We conduct in-depth meetings with stakeholders to understand your business objectives, target audience, and technical requirements. This phase ensures alignment and sets the foundation for success.",
};

<ProcessDisplayCard step={exampleStep} />
```

## 3. Interaction & Motion

### Animation Framework
```tsx
<AnimatePresence mode="wait">
  <motion.div key={step.id} ... />
</AnimatePresence>
```

**AnimatePresence**
- `mode="wait"`: Exit animation completes before enter animation starts
- Manages transition between different steps
- Prevents overlapping animations

### Entry Animation
```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.4, ease: "easeOut" }}
```

- **Opacity**: Fades in from 0 → 1 (invisible → visible)
- **Position**: Slides up from y: 20 (20px below) → y: 0 (final position)
- **Duration**: 400ms
- **Easing**: `easeOut` (starts fast, ends slow - smooth appearance)
- **Effect**: Content appears from below with fade-in

### Exit Animation
```tsx
exit={{ opacity: 0, y: -20 }}
```

- **Opacity**: Fades out from 1 → 0 (visible → invisible)
- **Position**: Slides up from y: 0 → y: -20 (20px above)
- **Direction**: Opposite of entry (slides up and fades out)
- **Duration**: Inherited from transition (400ms)

### Key Triggering
```tsx
key={step.id}
```
- Animation triggers when `step.id` changes
- Different step ID = new animation sequence
- Unique key ensures Framer Motion recognizes the change

## 4. Responsive Design

### Mobile (< md)
- **Title Size**: `text-3xl` (30px)
- **Details Font**: `text-base` (16px)
- **Padding**: `p-[48px]` (same on all sizes)
- **Max Width**: `max-w-lg` (448px, constrains text width)

### Desktop (md+)
- **Title Size**: `md:text-4xl` (36px)
- **Details Font**: `text-base` (unchanged)
- **Padding**: `p-[48px]` (same)
- **Max Width**: `max-w-lg` (same)

### Dark Mode
- No built-in dark mode styles currently
- Background: Always `bg-slate-100` (light gray)
- Text: Always light mode colors (`text-neutral-900`, `text-neutral-600`)
- **Suggestion**: Add dark mode variants if used in dark theme sections

## 5. Component Architecture

### Unique Aspects
- **No Props State**: Stateless presentation component
- **External Step Management**: Parent component manages step selection and changes
- **Animation Only on Step Change**: Animations trigger when `step.id` key changes

### Use Cases
- Process flow visualization (3-5 steps)
- Timeline display
- Sequential instructions
- Wizard step display

### Parent Responsibility
- Track `currentStepId` state
- Provide `ProcessStep` objects
- Handle step navigation (buttons, navigation controls)
- Pass updated `step` prop to trigger animation

## Usage Example

```tsx
"use client"

import { useState } from 'react';
import ProcessDisplayCard, { ProcessStep } from '@/components/ui/process-display-card';

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery & Planning",
    description: "Initial phase",
    details: "We conduct in-depth meetings with stakeholders to understand your business objectives, target audience, and technical requirements.",
  },
  {
    id: 2,
    title: "Design & Strategy",
    description: "Design phase",
    details: "Our team creates wireframes, mockups, and a comprehensive strategy document outlining the user experience and visual design direction.",
  },
  {
    id: 3,
    title: "Development & Testing",
    description: "Building phase",
    details: "We build your solution with modern technologies, implement rigorous testing protocols, and ensure code quality standards.",
  },
  {
    id: 4,
    title: "Launch & Support",
    description: "Final phase",
    details: "We deploy to production, provide comprehensive training, and offer ongoing support to ensure smooth operations.",
  },
];

export function ProcessTimeline() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentStep = processSteps[currentStepIndex];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Step Navigation */}
      <div className="flex flex-col gap-4">
        {processSteps.map((step, idx) => (
          <button
            key={step.id}
            onClick={() => setCurrentStepIndex(idx)}
            className={`text-left p-4 rounded-lg transition-colors ${
              currentStepIndex === idx
                ? 'bg-blue-600 text-white'
                : 'bg-slate-200 text-slate-900 hover:bg-slate-300'
            }`}
          >
            <div className="font-semibold">Step {step.id}</div>
            <div className="text-sm opacity-75">{step.title}</div>
          </button>
        ))}
      </div>

      {/* Display Card */}
      <div className="h-96">
        <ProcessDisplayCard step={currentStep} />
      </div>
    </div>
  );
}
```

### Integration Notes
- **Fixed Height**: Set explicit `h-96` or similar on wrapper
- **Step Changes**: Ensure `step.id` actually changes to trigger animation
- **Navigation**: Parent must provide buttons or controls to change steps
- **Content Length**: `max-w-lg` and padding ensure text doesn't overflow
- **Reusable**: Component works with any `ProcessStep` data structure

---

Last updated: 2025-11-25