<!-- Reference: components/ui/floating-navbar.tsx -->

# Floating Navbar

**Status**: Production (Framer Motion scroll detection)  
**Last Updated**: 2025-11-25

## 1. Visual Description

### Navbar Container
- **Position**: Fixed top, `top-10` (40px from top)
- **Layout**: `flex items-center justify-center`, centered horizontally (`inset-x-0 mx-auto`)
- **Max Width**: `max-w-fit` (shrink to content)
- **Shape**: `rounded-full` (pill-shaped)
- **Background**: White (light) / black (dark) with semi-transparent border
- **Border**: `border-transparent` light → `dark:border-white/[0.2]` dark mode
- **Shadow**: Multi-layer shadow (0px 2px 3px, 0px 1px 0px, 0px 0px 0px 1px)
- **Z-Index**: `z-[5000]` (above most content)

### Nav Items Layout
- **Spacing**: `space-x-4` (horizontal 16px gaps)
- **Padding**: `pl-8 pr-2 py-2` (left 32px, right 8px, vertical 8px)
- **Link Behavior**:
  - **Mobile** (`sm:hidden`): Show icon only
  - **Desktop** (`sm:block`): Show text label, `text-sm`
- **Colors**:
  - Light: `text-neutral-600`, hover `text-neutral-500`
  - Dark: `text-neutral-50`, hover `text-neutral-300`

### Contact Button
- **Type**: Solid border button
- **Border**: `border-neutral-200` light / `dark:border-white/[0.2]` dark
- **Text**: `text-sm font-medium`, centered
- **Padding**: `px-4 py-2`
- **Shape**: `rounded-full` (pill)
- **Accent**: Blue gradient underline (`bg-gradient-to-r from-transparent via-blue-500 to-transparent`)
  - Position: `absolute inset-x-0 -bottom-px`
  - Height: `h-px` (1px)

## 2. Props Interface

### FloatingNav Props

| Name | Type | Description |
|------|------|-------------|
| `navItems` | `NavItem[]` | Array of navigation links |
| `className` | `string` | Optional additional CSS classes |

### NavItem Interface

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | `string` | ✓ | Display text (shown on desktop) |
| `link` | `string` | ✓ | Next.js route or external URL |
| `icon` | `JSX.Element` | ✗ | Icon component (shown on mobile) |

### Example NavItems

```tsx
const navItems = [
  {
    name: "About",
    link: "/about",
    icon: <InfoIcon />,
  },
  {
    name: "Services",
    link: "/services",
    icon: <ServicesIcon />,
  },
  {
    name: "Portfolio",
    link: "/projects",
    icon: <FolderIcon />,
  },
]
```

## 3. Interaction & Motion

### Scroll Detection
```tsx
const { scrollYProgress } = useScroll()
useMotionValueEvent(scrollYProgress, "change", (current) => {
  // Scroll detection logic
})
```

**Logic**:
- Tracks vertical scroll progress (0 = top, 1 = bottom)
- Compares current scroll with previous: `direction = current - previous`
- **Visible condition**:
  - `scrollYProgress < 0.05` (near top) → Always show
  - `direction < 0` (scrolling up) → Show
  - `direction > 0` (scrolling down) → Hide

### Navbar Animation

**Entry (Initial)**
```tsx
initial={{ opacity: 1, y: -100 }}
```
- Positioned 100px above viewport (off-screen)

**Visible State**
```tsx
animate={{
  y: visible ? 0 : -100,
  opacity: visible ? 1 : 0,
}}
```
- Slide down + fade-in (0px, opacity 1)

**Hidden State**
```tsx
animate={{
  y: -100,
  opacity: 0,
}}
```
- Slide up + fade-out

**Transition**
```tsx
transition={{ duration: 0.2 }}
```
- Quick 200ms animation

**AnimatePresence**
```tsx
<AnimatePresence mode="wait">
  {/* Motion component */}
</AnimatePresence>
```
- Manages exit animation (smoothly animate out before unmount)

### Link Interactions
```tsx
hover:text-neutral-500        // Light mode hover
dark:hover:text-neutral-300   // Dark mode hover
```
- Text color shift on hover (subtle contrast increase)

### Contact Button Gradient Underline
```tsx
<span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px 
                   bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
```
- **Gradient**: Left (transparent) → center (blue-500) → right (transparent)
- **Width**: 50% (`w-1/2`) of button, centered
- **Position**: Bottom edge (`-bottom-px`, 1px below)
- **Effect**: Blue accent line, visible on any background

## 4. Responsive Design

### Mobile (< sm)
- **Nav Items**: Icon only (`.block sm:hidden`)
- **Text**: Hidden (`.hidden sm:block`)
- **Spacing**: `space-x-4` (16px)
- **Font**: N/A for icons

### Desktop (sm+)
- **Nav Items**: Text label (`.hidden sm:block`)
- **Icon**: Hidden (`.block sm:hidden`)
- **Spacing**: `space-x-4` (16px)
- **Font**: `text-sm`
- **Button**: Full "Contact Us" text visible

### Dark Mode
- Background: `dark:bg-black`
- Border: `dark:border-white/[0.2]`
- Text: `dark:text-neutral-50`
- Hover: `dark:hover:text-neutral-300`

## 5. Component Architecture

### Dependencies
- **Framer Motion**: `motion`, `AnimatePresence`, `useScroll`, `useMotionValueEvent`
- **Next.js**: `Link` component
- **Utils**: `cn()` from `@/lib/utils` (classname merge)

### Use of Utility Functions
```tsx
className={cn(
  "base-classes",
  className  // User-provided overrides
)}
```
- Merges Tailwind classes with optional prop

## Usage Example

```tsx
"use client"

import { FloatingNav } from '@/components/ui/floating-navbar';
import { Home, Info, Briefcase, Mail } from 'lucide-react';

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home className="w-4 h-4" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <Info className="w-4 h-4" />,
    },
    {
      name: "Services",
      link: "/services",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <Mail className="w-4 h-4" />,
    },
  ];

  return (
    <FloatingNav navItems={navItems} />
  );
}
```

### Integration Notes
- **Client Component**: Use `"use client"` directive
- **Scroll Detection**: Works with any page that has scrollable content
- **Link Targets**: Use relative paths (`/about`) for internal routes
- **Icons**: From lucide-react or any JSX element
- **Styling**: Optional `className` prop can override default styles

---

Last updated: 2025-11-25