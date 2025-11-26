# Featured Services Section

**Status**: Production  
**Last Updated**: 2025-11-25

## Description

A showcase of core services using a 50/50 split grid layout. The left card is large (spanning 2 cols × 2 rows) and features the main service offering, while the right side displays 4 smaller cards for individual services.

## Layout

```
┌─────────────────────────┬──────────┬──────────┐
│                         │  Card 2  │  Card 3  │
│   Main Service          ├──────────┼──────────┤
│   (Hero One)            │  Card 4  │  Card 5  │
│                         └──────────┴──────────┘
└─────────────────────────┘
```

- **Column Split**: 2 cols big + 2 cols (4×1 small cards)
- **Gap**: 24px
- **Min Height**: 384px (big card)

## Services

1. **Phát triển phần mềm dịch vụ trọn gói ONE-STOP** (Big card)
   - Image: `/images/services/hero-one.webp`
   - Title positioning: Bottom (via header spacer)

2. **AI/AL/AUTOMATION** (Small card)
   - Image: `/images/services/ai-automation.webp`
   - Title positioning: Bottom center

3. **Tư vấn chuyển đổi số, giải pháp chuyển đổi số**
   - Image: `/images/services/dx-consulting.webp`

4. **Phát triển ứng dụng di động**
   - Image: `/images/services/mobile-apps.webp`

5. **Thiết kế UI/UX Thiết kế đồ họa**
   - Image: `/images/services/ui-ux.webp`

## Component Usage

```tsx
<FeaturedServicesSection />
```

Source: `components/sections/home/FeaturedServicesSection.tsx`

## Styling Notes

- **Cards**: BentoGridItem with background images
- **Text**: `text-slate-900` on image backgrounds
- **Responsive**: 1 column (mobile) → 4 columns (md+)
- **Dark Mode**: Text adapts to `dark:text-white`

## Images

All service images are stored in `public/images/services/` as WebP format (~10-60KB each).

Recommended dimensions:
- **Small cards**: 400×400px
- **Big card**: 600×600px

## Accessibility

- All cards have descriptive titles
- Alt text auto-generated from card title
- Sufficient color contrast for readability
- Focus states maintained

---

Last updated: 2025-11-25
