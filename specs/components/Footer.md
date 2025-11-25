<!-- Reference: components/layout/Footer.tsx -->

# Footer

**Status**: Production  
**Last Updated**: 2025-11-25

## 1. Visual Description

### Layout
- **Type**: Multi-section footer with collapsible content
- **Top Section**: 4-column grid (3 offices + 1 map widget)
- **Middle Section**: Services & Industries links (2 columns)
- **Bottom Section**: Newsletter, social links, copyright
- **Container**: `max-w-[1440px] mx-auto px-4 md:px-8` (responsive padding)
- **Background**: `bg-background` (light/dark mode aware)

### Styling
- **Office Cards**:
  - Heading: `font-bold text-slate-900 dark:text-white text-sm`
  - Address: `text-xs text-gray-600 dark:text-gray-400 leading-relaxed`
  - Details: `text-xs text-gray-600 dark:text-gray-400 space-y-1`
- **Map Widget**: `relative w-full h-64 rounded-lg overflow-hidden bg-gray-200 dark:bg-slate-900`
- **Links**: `text-xs` hover effects
- **Padding**: Vertical `pt-16 pb-8` (sections)

### Sections

| Section | Content | Layout |
|---------|---------|--------|
| **Office Info** | 3 office locations (HCM, HN, Tokyo) | 4-col grid (lg) / 1-col (mobile) |
| **Map** | Embedded Google Maps iframe | Maximize button overlay |
| **Services** | 12 service links | 2-column list |
| **Industries** | 7 industry links | 2-column list |
| **Newsletter** | Email signup with Framer Motion | Flex row (sm+) |
| **Social Links** | Icon buttons (GitHub, LinkedIn, Twitter, etc.) | Flex row |
| **Copyright** | ARIS Vietnam © 2024 | Text center |

## 2. Office Data & Contact

### 3 Offices

**Hồ Chí Minh (HQ)**
- Address: (Tòa nhà Waseco) Số 10, đường Phố Quang, Phường Tân Sơn Hòa, TP Hồ Chí Minh, Việt Nam
- Email: contact@aris-vn.com
- Phone: (+84) 28.3842 - 4484
- Fax: (+84) 28.3842 - 4473

**Hà Nội Branch**
- Address: Tầng 08, Tòa nhà Detech Tower II, 107 Nguyễn Phong Sắc, Phường Cầu Giấy, Hà Nội
- Email: contact@aris-vn.com
- Phone: (+84) 28.3842 - 4484
- Fax: (+84) 28.3842 - 4473

**Tokyo Office**
- Address: Shinjuku Nomura Bldg 10F, 1-26-2 Nishi-Shinjuku, Shinjuku-ku, Tokyo, 163-0510, Japan
- Email: contact@aris-vn.com
- Phone: (+81) 3.3340 - 1053
- Fax: (+81) 3.3340 - 1054

### Services (12 items)
1. Phát triển phần mềm dịch vụ trong gói ONE-STOP
2. Phát triển hệ thống/ứng dụng
3. Phát triển ứng dụng di động
4. Kiểm soát chất lượng kiểm thử phần mềm
5. Thiết kế UI/UX - Thiết kế đồ họa
6. Hợp tác nghiên cứu và phát triển (R&D)
7. Tư vấn chuyên đổi số, giải pháp chuyên đổi số
8. Thuê ngoài quy trình với dịch vụ (BPO)
9. Giám sát - Vận hành, Bảo trì hệ thống
10. OT Security, TXONE Element
11. Dịch vụ cung cấp kỹ sư
12. AI/ML/Automation

### Industries (7 sectors)
- Ngành Sản Xuất / Nhà Máy
- Bán Lẻ & Thương Mại Điện Tử
- Chăm Sóc Sức Khoẻ
- An Ninh Mạng
- Bất Động Sản
- Tài Chính / Ngân Hàng
- Giao Thông / Vận Tải / Logistics

## 3. Interaction & Motion

### Map Widget
- **Default**: Embedded Google Maps iframe (600x600)
- **Expand Button**: Absolute positioned `bottom-2 right-2`
  - Icon: `Maximize2` (lucide-react)
  - Style: `bg-white p-2 rounded shadow hover:bg-gray-100 cursor-pointer`
  - State: `isMapOpen` (useState)
- **Modal**: Full-screen map overlay (Framer Motion AnimatePresence)

### Newsletter Signup
- **Input**: Email text field
- **Button**: Subscribe CTA
- **Animation**: Framer Motion (entrance animation on mount)
- **Variants**: Slide-in + fade-in effect

### Scroll to Top
- **Button**: Floating button (bottom-right)
- **Icon**: `ArrowUp` (lucide-react)
- **Behavior**: `window.scrollTo({ top: 0, behavior: "smooth" })`
- **Visibility**: Appears after scroll threshold

### Motion Details
- **Library**: Framer Motion (`motion`, `AnimatePresence`)
- **Map Modal**: 
  - Enter: Fade + slide from bottom
  - Exit: Fade + slide to bottom
  - Duration: 300ms
- **Newsletter Input**:
  - Enter: Slide from left + fade-in
  - Duration: 500ms

## 4. Responsive Design

### Mobile (< md)
- **Grid**: 1 column (offices + map stack vertically)
- **Spacing**: `px-4` (narrower)
- **Map Height**: `h-48` or `h-64` (reduced)
- **Newsletter**: Single column (input full-width)

### Tablet (md)
- **Grid**: 2 columns (offices + map side-by-side)
- **Spacing**: `px-8` (responsive padding)

### Desktop (lg+)
- **Grid**: 4 columns (3 offices + map)
- **Links**: 2-column layout (side-by-side)
- **Newsletter**: Horizontal layout (input + button inline)

## Usage

```tsx
import Footer from '@/components/layout/Footer';

export default function Layout() {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
```

---

Last updated: 2025-11-25