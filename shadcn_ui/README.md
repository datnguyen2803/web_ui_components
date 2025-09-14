# shadcn/ui Components Showroom

Một web showroom đẹp mắt để showcase các component từ thư viện [shadcn/ui](https://ui.shadcn.com/).

## 🚀 Tech Stack

- **Framework**: Next.js 15.5.3 với App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Library**: [shadcn/ui](https://ui.shadcn.com/)
- **Theme**: Dark/Light mode với next-themes
- **Icons**: Lucide React

## 📦 Components được sử dụng

### Core Components
- **Button** - Các loại button với variants và sizes
- **Card** - Layout component cho content
- **Input, Label, Textarea** - Form elements
- **Badge** - Status indicators
- **Avatar** - User profile images

### Form Components
- **Checkbox** - Checkbox input
- **Radio Group** - Radio button selection
- **Switch** - Toggle switches
- **Slider** - Range input
- **Select** - Dropdown selection
- **Input OTP** - One-time password input

### Navigation Components
- **Breadcrumb** - Navigation breadcrumbs
- **Menubar** - Desktop-style menu
- **Navigation Menu** - Complex navigation
- **Pagination** - Page navigation
- **Tabs** - Tab navigation

### Overlay Components
- **Dialog** - Modal dialogs
- **Alert Dialog** - Confirmation dialogs
- **Drawer** - Mobile-friendly drawer
- **Sheet** - Side sheet
- **Popover** - Popover overlays
- **Hover Card** - Rich hover cards
- **Tooltip** - Hover tooltips

### Display Components
- **Alert** - Notification alerts
- **Progress** - Progress bars
- **Skeleton** - Loading skeletons
- **Separator** - Visual separators
- **Table** - Data tables
- **Accordion** - Collapsible content

### Media Components
- **Carousel** - Image/content carousel
- **Aspect Ratio** - Responsive aspect ratios

### Layout Components
- **Resizable** - Resizable panels
- **Scroll Area** - Custom scrollable areas

### Interactive Components
- **Toggle Group** - Toggle button groups
- **Dropdown Menu** - Dropdown menus
- **Context Menu** - Right-click menus

### Notification Components
- **Sonner** - Toast notifications

## 🎨 Features

- **Dark/Light Theme** - Tự động detect system theme
- **Responsive Design** - Mobile-first approach
- **Interactive Demos** - Live component interactions
- **Modern UI** - Beautiful gradient backgrounds
- **Hover Effects** - Smooth transitions
- **TypeScript** - Full type safety

## 🛠️ Cài đặt

```bash
# Clone repository
git clone <repository-url>
cd shadcn_ui

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev
```

## 📁 Cấu trúc Project

```
shadcn_ui/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Trang chính
│   │   ├── components/
│   │   │   └── page.tsx      # Trang components bổ sung
│   │   ├── layout.tsx        # Root layout với theme provider
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   ├── ui/               # shadcn/ui components
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   └── lib/
│       └── utils.ts          # Utility functions
├── components.json           # shadcn/ui config
└── package.json
```

## 🔧 Cấu hình shadcn/ui

File `components.json` chứa cấu hình cho shadcn/ui:

```json
{
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

## 🎯 Bằng chứng sử dụng shadcn/ui

1. **Import statements** - Tất cả components đều import từ `@/components/ui/`
2. **components.json** - File cấu hình shadcn/ui
3. **CLI commands** - Sử dụng `npx shadcn@latest add` để thêm components
4. **Component structure** - Theo đúng pattern của shadcn/ui
5. **Styling** - Sử dụng Tailwind CSS classes theo shadcn/ui design system

## 🌟 Highlights

- **30+ Components** được showcase
- **Interactive demos** với state management
- **Theme switching** mượt mà
- **Responsive design** cho mọi device
- **Modern UI/UX** với gradient backgrounds
- **TypeScript support** đầy đủ

## 📚 Tài liệu tham khảo

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)

---

Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and shadcn/ui