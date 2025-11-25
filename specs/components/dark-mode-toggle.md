<!-- Reference: components/ui/dark-mode-toggle.tsx -->

# Dark Mode Toggle

**Status**: Production  
**Last Updated**: 2025-11-25

## 1. Visual Description

### Layout
- **Type**: Icon button (inline-flex, centered)
- **Container**: `relative z-20 inline-flex items-center justify-center`
- **Padding**: `p-2` (8px)
- **Border Radius**: `rounded-md` (medium rounded)
- **Size**: `h-5 w-5` (icon, 20px × 20px)

### Styling
- **Button**: `relative z-20 inline-flex items-center justify-center rounded-md p-2`
- **Hover**: `transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-800`
- **Icon Light**: `Moon h-5 w-5 text-neutral-700`
- **Icon Dark**: `Sun h-5 w-5 text-yellow-500`

### States

| State | Icon | Color | Background (Hover) |
|-------|------|-------|-------------------|
| **Light Mode** | Moon | `text-neutral-700` | `hover:bg-neutral-200` |
| **Dark Mode** | Sun | `text-yellow-500` | `dark:hover:bg-neutral-800` |

## 2. Props & State

### No Props (Stateless Component)

| Mechanism | Purpose |
|-----------|---------|
| `next-themes` hook | Manages theme state (`"light"` \| `"dark"`) |
| `useTheme()` | Returns `{ theme, setTheme, resolvedTheme }` |
| `mounted` state | Prevents hydration mismatch (SSR safety) |

### State Management

```tsx
const { theme, setTheme, resolvedTheme } = useTheme()
const [mounted, setMounted] = useState(false)

useEffect(() => {
  setMounted(true)
}, [])
```

- **`theme`**: User preference (may be `undefined` on load)
- **`resolvedTheme`**: Computed theme after mount (always "light" or "dark")
- **`mounted`**: Hydration guard (SSR-safe)

## 3. Interaction & Motion

### Click Handler
```tsx
const handleToggle = () => {
  const newTheme = isDark ? "light" : "dark"
  setTheme(newTheme)
}
```

- **Logic**: Toggles between "light" and "dark"
- **Console**: Logs theme change (`console.log`)
- **Side Effect**: Updates HTML/document theme attribute

### Hover Animation
- **Transition**: `transition-colors` (smooth color change)
- **Duration**: 150ms (default)
- **Light Mode Hover**: `bg-neutral-200` (light gray)
- **Dark Mode Hover**: `bg-neutral-800` (dark gray)

### Accessibility
- **aria-label**: `"Toggle dark mode"`
- **title**: Shows current theme on hover (e.g., "Current: dark")
- **Keyboard**: Focusable button (Tab navigation works)

## 4. Responsive Design

### Mobile
- **Size**: `h-5 w-5` (small icon, mobile-friendly)
- **Padding**: `p-2` (enough touch target)
- **Hover**: Works on long-press (depending on browser)

### Desktop
- **Same**: No breakpoint changes
- **Hover**: Standard mouse hover effect
- **Transition**: Smooth color change visible

## 5. Hydration & SSR Safety

### Problem
- **Client-side Mismatch**: `useTheme()` may not have resolved theme on first render
- **SSR Hydration**: Server renders before client knows theme

### Solution
```tsx
const [mounted, setMounted] = useState(false)

useEffect(() => {
  setMounted(true)
}, [])

if (!mounted) {
  return <div className="h-9 w-9 rounded-md" />
}
```

- **Placeholder**: Renders empty `<div>` until mounted
- **Safety**: Prevents hydration mismatch warning
- **UX**: Avoids flashing icon

## Usage

```tsx
import { DarkModeToggle } from '@/components/ui/dark-mode-toggle';

export function Header() {
  return (
    <header>
      <nav>
        {/* Navigation items */}
      </nav>
      <DarkModeToggle />
    </header>
  );
}
```

### Requirements
- Wrap app with `<ThemeProvider>` from `next-themes`:
  ```tsx
  import { ThemeProvider } from 'next-themes';
  
  export default function RootLayout({ children }) {
    return (
      <ThemeProvider attribute="class" defaultTheme="system">
        {children}
      </ThemeProvider>
    );
  }
  ```

---

Last updated: 2025-11-25