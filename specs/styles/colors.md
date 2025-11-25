# Colors

**Status**: Active  
**Last Updated**: 2025-11-25

## Primary Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Blue | `#3b82f6` | rgb(59, 130, 246) | Primary CTA, Spotlight (light mode) |
| Indigo | `#6366f1` | rgb(99, 102, 241) | Accents, gradients |
| Pink | `#ec4899` | rgb(236, 72, 153) | Secondary accents |

## Neutral

| Color | Hex | Usage |
|-------|-----|-------|
| Slate 900 | `#0f172a` | Dark text (light mode) |
| Slate 50 | `#f8fafc` | Light backgrounds |
| White | `#ffffff` | Card backgrounds (light) |
| Black | `#000000` | Text, borders (dark mode) |

## Dark Mode

- **Background**: `#000000` (true black) or `#111827` (gray-900)
- **Text**: `#ffffff` (white) with 90-95% opacity for secondary text
- **Spotlight**: White, low opacity (0.0005-0.08 depending on context)
- **Cards**: `dark:bg-black` with light border

## CSS Variables

Defined in `app/globals.css`:

```css
:root {
  --color-primary: #3b82f6;
  --color-secondary: #6366f1;
  --color-accent: #ec4899;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-text: #ffffff;
    --color-bg: #000000;
  }
}
```

## Accessibility

- **Contrast Ratio**: WCAG AA minimum (4.5:1 for text)
- **Color Blind**: Avoid red-green alone; pair with shape/text
- **Focus States**: Always use outline (2-3px) for keyboard navigation

---

Last updated: 2025-11-25
