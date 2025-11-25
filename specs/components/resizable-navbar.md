<!-- Reference: components/ui/resizable-navbar.tsx -->

# Resizable Navbar

**Status**: Production (Multi-component navbar system with Framer Motion)  
**Last Updated**: 2025-11-25

## 1. Visual Description

### Navbar Container (`Navbar`)
- **Position**: Sticky top, `top-10` (40px from top)
- **Width**: Full width (`w-full`)
- **Z-Index**: `z-40`
- **Layout**: Acts as scroll-aware wrapper
- **Note**: Can change `sticky` to `fixed` for fixed positioning

### NavBody (Desktop Navigation)
- **Visibility**: Hidden on mobile (`hidden lg:flex`)
- **Layout**: `flex-row items-center justify-between`
- **Max Width**: `max-w-7xl`, centered
- **Width**: Responsive via animation (60% when scrolled, 100% at top)
- **Padding**: `px-4 py-2` (16px horizontal, 8px vertical)

**Visibility States**:
- **Inactive** (scroll < 100px):
  - Width: 100%
  - Background: Transparent
  - Backdrop: None
  - Y offset: 0
  - Shadow: None
- **Active** (scroll > 100px):
  - Width: 60%
  - Background: `bg-white/80` (light) / `dark:bg-neutral-950/80` (dark)
  - Backdrop: `blur(10px)`
  - Y offset: 10px down
  - Shadow: Multi-layer elevation shadow
  - Border radius: Remains `rounded-full`

### NavItems (Desktop Links)
- **Visibility**: Hidden on mobile (`hidden lg:flex`)
- **Layout**: Horizontal flex (`flex-row`)
- **Spacing**: `space-x-2` (8px gaps)
- **Font**: `text-sm font-medium`, `text-neutral-600` (light) / `dark:text-neutral-300` (dark)

**Hover Behavior**:
- **Hover Pill**: `bg-gray-100` (light) / `dark:bg-neutral-800` (dark)
- **Position**: `rounded-full`, `inset-0` (covers entire link)
- **Animation**: Smooth layout transition (layoutId="hovered")
- **Text**: Slides above pill with `z-20` stacking

### MobileNav (Mobile Navigation)
- **Visibility**: Full-width on mobile (`lg:hidden`), hidden on desktop
- **Layout**: `flex-col` (vertical)
- **Responsive Width**:
  - Inactive: 100% width, `border-radius: 2rem` (rounded-full)
  - Active (scroll > 100px): 90% width, `border-radius: 4px` (smaller radius)
  - Padding: 12px on sides when active
  - Y offset: 20px down when active

**Styling**:
- Background: Transparent initially → `bg-white/80` (light) / `dark:bg-neutral-950/80` (scroll active)
- Backdrop: None → `blur(10px)` (scroll active)
- Shadow: Elevation shadow when active

### MobileNavHeader
- **Type**: Horizontal flex (`flex-row`)
- **Content**: Logo + toggle button
- **Spacing**: `justify-between` (spread apart)
- **Width**: Full width

### MobileNavMenu (Mobile Dropdown)
- **Visibility**: Conditional (`isOpen` prop)
- **Position**: `absolute inset-x-0 top-16` (below header)
- **Background**: `bg-white` (light) / `dark:bg-neutral-950` (dark)
- **Layout**: `flex-col items-start gap-4`
- **Padding**: `px-4 py-8`
- **Border Radius**: `rounded-lg`
- **Shadow**: Multi-layer elevation shadow
- **Animation**: Fade in/out on open/close

### NavbarLogo
- **Type**: SVG image (`/images/companylogo.svg`)
- **Size**: 110x110px
- **Positioning**: `relative z-20 mr-4`
- **Dark Mode**:
  - Light mode: Normal logo image
  - Dark mode: Inverted brightness + white (`dark:brightness-0 dark:invert`)

### NavbarButton
- **Base Styles**: `rounded-full`, `px-4 py-2`, `text-sm font-bold`
- **Hover**: `-translate-y-0.5` (lifts up on hover), `transition duration-200`
- **Cursor**: Pointer

**Variants**:
1. **primary** (default):
   - Background: `bg-black`
   - Text: `text-white`
   - Shadow: Elevation shadow
2. **secondary**:
   - Background: Transparent
   - Shadow: None
   - Dark mode: `dark:text-white`
3. **dark**:
   - Background: `bg-black`
   - Text: `text-white`
   - Shadow: Elevation shadow (same as primary)
4. **gradient**:
   - Background: `bg-gradient-to-b from-blue-500 to-blue-700`
   - Text: `text-white`
   - Shadow: Inset highlight (`rgba(255,255,255,0.3)`)

## 2. Props Interface

### Navbar Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | ✓ Required | Child components (NavBody, MobileNav) |
| `className` | `string` | N/A | Optional additional classes |

### NavBody Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | ✓ Required | Nav items/logo/buttons |
| `className` | `string` | N/A | Optional additional classes |
| `visible` | `boolean` | N/A | Passed from parent (scroll > 100px) |

### NavItems Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `NavItem[]` | ✓ Required | Array of nav links |
| `className` | `string` | N/A | Optional additional classes |
| `onItemClick` | `() => void` | N/A | Callback when link clicked |

**NavItem Interface**:
```tsx
{
  name: string;      // Display text
  link: string;      // Next.js route
}
```

### MobileNav Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | ✓ Required | Mobile nav header + menu |
| `className` | `string` | N/A | Optional additional classes |
| `visible` | `boolean` | N/A | Passed from parent (scroll > 100px) |

### MobileNavHeader Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | ✓ Required | Logo + toggle button |
| `className` | `string` | N/A | Optional additional classes |

### MobileNavMenu Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | ✓ Required | Menu items |
| `className` | `string` | N/A | Optional additional classes |
| `isOpen` | `boolean` | ✓ Required | Menu visibility state |
| `onClose` | `() => void` | ✓ Required | Callback to close menu |

### MobileNavToggle Props

| Name | Type | Description |
|------|------|-------------|
| `isOpen` | `boolean` | Current menu state |
| `onClick` | `() => void` | Toggle handler |

### NavbarButton Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | N/A | Link URL (if `as="a"`) |
| `as` | `React.ElementType` | `"a"` | Render as `<a>` or `<button>` |
| `children` | `React.ReactNode` | ✓ Required | Button label |
| `className` | `string` | N/A | Additional classes |
| `variant` | `"primary"\|"secondary"\|"dark"\|"gradient"` | `"primary"` | Visual variant |
| `...props` | `object` | N/A | Spread to underlying element |

## 3. Interaction & Motion

### Scroll Detection (`Navbar`)
```tsx
const { scrollY } = useScroll({ target: ref, offset: [...] })
useMotionValueEvent(scrollY, "change", (latest) => {
  if (latest > 100) setVisible(true)
  else setVisible(false)
})
```
- Tracks vertical scroll position
- Threshold: **100px**
- Passes `visible` boolean to children via `React.cloneElement`

### NavBody Animation (Desktop)

**Inactive (scroll < 100px)**:
```tsx
animate={{
  backdropFilter: "none",
  boxShadow: "none",
  width: "100%",
  y: 0,
}}
```

**Active (scroll > 100px)**:
```tsx
animate={{
  backdropFilter: "blur(10px)",
  boxShadow: "0 0 24px ... (complex elevation shadow)",
  width: "60%",
  y: 10,
}}
```

**Transition**:
```tsx
transition={{ type: "spring", stiffness: 200, damping: 30 }}
```
- Spring physics for smooth elastic animation
- `stiffness: 200` (responsive)
- `damping: 30` (bouncy feel)

### NavItems Hover Animation

**Link Hover**:
```tsx
onMouseEnter={() => setHovered(idx)}
{hovered === idx && (
  <motion.div layoutId="hovered" className="... bg-gray-100 ..." />
)}
```
- **layoutId**: Framer Motion shared layout (smooth morph)
- **Background**: Pill-shaped highlight
- **Stacking**: Text appears at `z-20` above pill
- **Exit**: Smooth fade when mouse leaves

### MobileNav Animation

**Inactive**:
```tsx
animate={{
  backdropFilter: "none",
  width: "100%",
  paddingRight: "0px",
  paddingLeft: "0px",
  borderRadius: "2rem",
  y: 0,
}}
```
- Full width, full border radius
- No backdrop blur

**Active (scroll > 100px)**:
```tsx
animate={{
  backdropFilter: "blur(10px)",
  width: "90%",
  paddingRight: "12px",
  paddingLeft: "12px",
  borderRadius: "4px",
  y: 20,
}}
```
- Shrinks to 90% with padding
- Border radius reduces to `4px`
- Moves down 20px with blur

**Transition**:
```tsx
transition={{ type: "spring", stiffness: 200, damping: 50 }}
```
- `damping: 50` (more damped than desktop, less bounce)

### MobileNavMenu Animation

**Open**:
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>
```
- Fade-in/fade-out animation
- `AnimatePresence mode="wait"` ensures clean exits

### Toggle Icon Animation
```tsx
return isOpen ? <IconX /> : <IconMenu2 />
```
- Icons from `@tabler/icons-react`
- Instant swap (no animation)
- Color: `text-black` (light) / `dark:text-white` (dark)

### NavbarButton Hover

```tsx
hover:-translate-y-0.5 transition duration-200
```
- Lifts button 2px upward on hover
- Smooth 200ms transition
- Works on all variants

## 4. Responsive Design

### Mobile (< lg)
- **NavBody**: Hidden (`hidden lg:flex`)
- **NavItems**: Hidden (`hidden lg:flex`)
- **MobileNav**: Visible, full-width, vertical
- **Width at scroll**: 90% with padding
- **Menu items**: Stacked vertically, `gap-4`

### Desktop (lg+)
- **NavBody**: Visible (`lg:flex`)
- **NavItems**: Visible (`lg:flex`)
- **MobileNav**: Hidden (`lg:hidden`)
- **Width at scroll**: 60% of viewport
- **Links**: Horizontal row, `space-x-2`

### Dark Mode
All components support dark mode:
- **NavBody/MobileNav**: `dark:bg-neutral-950/80`
- **NavItems**: `dark:text-neutral-300`, `dark:bg-neutral-800` (hover)
- **MobileNavMenu**: `dark:bg-neutral-950`
- **Icons**: `dark:text-white`
- **Buttons**: Variants adjust for dark mode

## 5. Component Architecture

### Exported Components

1. **Navbar** - Root wrapper, handles scroll detection
2. **NavBody** - Desktop navigation container
3. **NavItems** - Horizontal link list (desktop)
4. **MobileNav** - Mobile navigation wrapper
5. **MobileNavHeader** - Mobile logo + toggle
6. **MobileNavMenu** - Mobile dropdown menu
7. **MobileNavToggle** - Hamburger/X icon button
8. **NavbarLogo** - Company logo image
9. **NavbarButton** - Styled CTA button

### Dependencies
- **Framer Motion**: `motion`, `AnimatePresence`, `useScroll`, `useMotionValueEvent`
- **Tabler Icons**: `IconMenu2`, `IconX`
- **Utils**: `cn()` from `@/lib/utils`

## Usage Example

```tsx
"use client"

import { useState } from 'react';
import {
  Navbar, NavBody, NavItems, MobileNav, MobileNavHeader, MobileNavMenu,
  MobileNavToggle, NavbarLogo, NavbarButton,
} from '@/components/ui/resizable-navbar';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} onItemClick={() => setMobileMenuOpen(false)} />
        <NavbarButton href="/contact" variant="primary">
          Get Started
        </NavbarButton>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="w-full text-neutral-600 hover:text-neutral-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <NavbarButton href="/contact" variant="primary" className="w-full">
            Get Started
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
```

### Integration Notes
- **Scroll-aware**: Automatically adapts at 100px scroll threshold
- **Mobile-first**: Stacks all logic into mobile menu on small screens
- **Dark mode**: All components support theme switching
- **Button variants**: Use `variant` prop to change CTA appearance
- **Logo**: Replace `/images/companylogo.svg` with your company logo
- **Customizable**: All spacing/colors can be overridden via `className` prop

---

Last updated: 2025-11-25