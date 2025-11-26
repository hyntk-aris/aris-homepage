<!-- Reference: components/layout/Header.tsx -->

# Header

**Status**: Production  
**Last Updated**: 2025-11-25

## 1. Visual Description

### Layout
- **Type**: Sticky/Fixed header with scroll detection
- **Desktop**: Flex row with logo, nav items (horizontal), dark mode toggle, CTA button
- **Mobile**: Hamburger menu (ResizableNavbar) with drawer navigation
- **Logo Placement**: Far left (flex items-center)
- **Navigation**: Horizontal menu (hidden on mobile, md+ breakpoint)
- **Actions**: Dark toggle + Contact button (far right)

### Styling
- **Container**: `w-full transition-all duration-200`
- **Position**: `relative` (default) → `fixed top-0 left-0 right-0 z-50` (when scrolled > 24px)
- **Background**: Transparent (default) → White/dark (on fixed)
- **Text Color**: 
  - Default: `text-neutral-700 dark:text-neutral-300`
  - Hover: `text-neutral-900 dark:text-white`
- **Border Radius**: Default (no border radius)
- **Shadow**: Applied when fixed (via Navbar component)

### Variants / States

| State | Behavior | Visual |
|-------|----------|--------|
| **Scrolled** | Fixed to top | Shadow added, z-50 |
| **Normal** | Relative position | No shadow, relative z-index |
| **Mobile Menu Open** | Drawer overlay | Full-width, dark background |
| **Services Dropdown** | Hover group | Dropdown list appears (desktop only) |

## 2. Props & Data

### Internal State
- `isOpen`: boolean (mobile menu toggle)
- `scrolled`: boolean (scroll position > 24px)
- `servicesDropdownOpen`: boolean (mobile services dropdown)

### Navigation Items

**Services Dropdown (9 items)**
- Dịch vụ Toàn diện → `/services/one-stop`
- Phát triển Hệ thống → `/services/system-development`
- Phát triển Mobile → `/services/mobile-development`
- Kiểm soát Chất lượng → `/services/quality-control`
- Thiết kế UI/UX → `/services/ui-ux`
- Nghiên cứu & Phát triển → `/services/research-development`
- Chuyển đổi Số → `/services/digital-transformation`
- Dịch vụ BPO → `/services/bpo`
- Bảo trì Hệ thống → `/services/maintenance`

**Main Navigation (5 items)**
- Case Studies → `/use-cases`
- Sản phẩm → `/products`
- Tin tức → `/news`
- Blog → `/blog`
- Tuyển dụng → `/recruitments`

**Other Links**
- Home → `/`
- About → `/about-us`
- Contact → `/contact`

## 3. Interaction & Motion

### Desktop Navigation
- **Hover Effect**: Text color transitions (`transition-colors`)
- **Services Dropdown**: Hover group visibility
  - Default: `opacity-0 invisible`
  - Hover: `opacity-100 visible`
  - Animation: Smooth transition (200ms)
- **Dropdown**: Absolute positioned, z-50

### Mobile Navigation
- **Hamburger Toggle**: Click to open/close drawer
- **Drawer**: Slides in from left (ResizableNavbar handles animation)
- **Services Dropdown**: Click-based toggle (`servicesDropdownOpen` state)
  - ChevronDown icon rotates 180° on open (`rotate-180`)
- **Menu Close**: Auto-closes after navigation link click

### Scroll Behavior
- **Listener**: `window.addEventListener("scroll", onScroll, { passive: true })`
- **Threshold**: `scrollY > 24px` triggers fixed position
- **Duration**: `transition-all duration-200` (smooth animation)

### Animation Details
- **Library**: React state + CSS transitions (no Framer Motion)
- **Type**: CSS class-based (Tailwind transitions)
- **Duration**: 200ms default (`duration-200`)

## 4. Responsive Design

### Mobile (< md)
- **Logo**: Visible (full width, flex start)
- **Desktop Nav**: Hidden (`hidden md:flex`)
- **Mobile Drawer**: Visible (ResizableNavbar)
- **Menu Toggle**: Hamburger icon
- **Dark Toggle + CTA**: Always visible

### Tablet (md)
- **Desktop Nav**: Shows (md:flex)
- **Mobile Drawer**: Hidden
- **Full Navigation**: Horizontal layout

### Desktop (lg+)
- **Services Dropdown**: Full hover menu
- **All Nav Items**: Visible inline
- **Drawer**: Hidden

## 5. Sub-Components

### Navbar (Wrapper)
- Container for header structure
- Handles layout/spacing

### NavBody
- Flex row container
- Distributes logo, nav, actions

### NavItems
- Container for nav links

### NavbarLogo
- Logo display (imported from resizable-navbar)

### NavbarButton
- CTA button wrapper

### MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle
- All from ResizableNavbar component

### DarkModeToggle
- Theme switcher (separate component)

## Usage

```tsx
import Header from '@/components/layout/Header';

export default function Layout() {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
```

---

Last updated: 2025-11-25