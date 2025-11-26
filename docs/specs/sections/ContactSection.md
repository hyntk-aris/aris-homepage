<!-- Reference: components/sections/home/ContactSection.tsx -->

# Contact Section

**Status**: Production (Contact form with state management)  
**Last Updated**: 2025-11-25

## 1. Visual Description

### Section Container
- **Max Width**: `max-w-[1440px]` (1440px)
- **Min Height**: `min-h-screen` (full viewport height)
- **Padding**: `px-4 md:px-8` (responsive horizontal)
- **Background**: `bg-background`
- **Grid**: 2-column on desktop, single column on mobile

### Left Column (Form Area)
- **Flex**: `flex flex-col justify-center`
- **Padding**: `p-8 lg:p-24` (32px → 96px)
- **Background**: `bg-background`

### Form Title
- **Text**: "Liên hệ tư vấn" (Contact Consultation)
- **Font**: `text-3xl md:text-4xl font-bold`
- **Color**: `text-slate-900` / `dark:text-white`

### Form Inputs (5 Fields)

**Layout**:
- Row 1: Name (50%) + Email (50%) - `grid-cols-1 md:grid-cols-2`
- Row 2: Phone (50%) + Subject (50%) - `grid-cols-1 md:grid-cols-2`
- Row 3: Message (100%) - full width textarea

**Input Styling**:
- **Padding**: `px-4 py-3`
- **Border**: `border border-gray-200` / `dark:border-gray-800`
- **Border Radius**: `rounded-md`
- **Background**: `bg-white` / `dark:bg-slate-900`
- **Text Color**: `text-slate-900` / `dark:text-white`
- **Placeholder**: `placeholder-gray-500` / `dark:placeholder-gray-400`
- **Focus**: `focus:ring-2 focus:ring-slate-900` / `dark:focus:ring-white`
- **Focus Offset**: `focus:ring-offset-0` (no offset)
- **Transition**: `transition-all`

**Labels**:
- **Font**: `text-sm font-medium`
- **Color**: `text-slate-900` / `dark:text-white`
- **Margin**: `mb-2`

## 2. Props Interface

### ContactSection Props
```tsx
export function ContactSection() {
  // No props - self-contained
}
```

### Form State
```tsx
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
```

## 3. Interaction & Motion

### State Management
```tsx
const [formData, setFormData] = useState({
  name: "", email: "", phone: "", subject: "", message: ""
})
```

### Input Change Handler
```tsx
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
}
```
- Updates state on every keystroke
- Works for both `<input>` and `<textarea>`

### Form Submission
```tsx
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("Form submitted:", formData);
  // Handle form submission here
}
```
- Prevents default page reload
- Logs form data to console (currently)
- Ready for backend API integration

### Focus Styling
- Custom focus ring: 2px blue/white border
- No outline (focus-outline-none)
- Visible on all form elements

## 4. Responsive Design

### Mobile (< lg)
- **Layout**: Single column
- **Form Fields**: All full-width, stacked
- **Padding**: `p-8` (32px)
- **Name/Email**: `grid-cols-1` (stacked)
- **Phone/Subject**: `grid-cols-1` (stacked)

### Desktop (lg+)
- **Layout**: 2-column grid (form left, space right)
- **Form Padding**: `p-24` (96px)
- **Name/Email**: `md:grid-cols-2` (side-by-side)
- **Phone/Subject**: `md:grid-cols-2` (side-by-side)
- **Message**: Full-width on both

### Dark Mode
- Inputs: `dark:border-gray-800`, `dark:bg-slate-900`
- Text: `dark:text-white`
- Placeholder: `dark:placeholder-gray-400`
- Focus: `dark:focus:ring-white`
- Labels: `dark:text-white`

## 5. Component Architecture

### Imports
- **ArrowRight**: Lucide icon (for future button)
- **Button**: Shadcn component (for submit)
- **React Hooks**: `useState`

### State Management
- Single state object for all form fields
- Updates via `handleChange` handler
- Submitted via `handleSubmit` handler

### Form Structure
- Semantic `<form>` with `onSubmit`
- Named inputs matching state keys
- Controlled inputs (value bound to state)
- Proper label associations

## Usage Example

```tsx
import { ContactSection } from '@/components/sections/home/ContactSection';

export default function Home() {
  return (
    <>
      {/* Other sections */}
      <ContactSection />
    </>
  );
}
```

### Customization Notes
- **API Integration**: Replace `console.log()` with API call
- **Validation**: Add form validation before submit
- **Error Handling**: Add error/success messages
- **Loading State**: Add loading spinner on submit
- **Right Column**: Add map, contact info, or other content
- **Email Service**: Integrate with SendGrid/Resend/Nodemailer

### Integration Tips
- Currently ready for backend integration
- Form state properly managed with React hooks
- Proper accessibility with labels
- Responsive layout works on all screens
- Dark mode fully supported
- Form submission prevents reload (good UX)

---

Last updated: 2025-11-25