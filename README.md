# ∂Path Labs Website - TypeScript Framework

A modern, easily editable website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd dlabs_landing_typescript
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open browser:**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
dlabs_landing_typescript/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Home page
│   ├── team/page.tsx      # Team page
│   ├── research/page.tsx  # Research page
│   ├── publications/page.tsx # Publications page
│   ├── about/page.tsx     # About page
│   └── contact/page.tsx   # Contact page
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Main navigation
│   ├── TeamMemberCard.tsx # Team member display
│   ├── PublicationCard.tsx# Publication display
│   └── FloatingObjects.tsx# 3D animations
├── context/               # React contexts
│   └── ThemeContext.tsx   # Theme switching logic
├── data/                  # Centralized data management
│   └── index.ts          # All site data (easy to edit!)
├── types/                 # TypeScript type definitions
│   └── index.ts          # Interface definitions
└── styles/                # Global styles
    └── globals.css        # Tailwind + custom CSS
```

## ✏️ Easy Editing Guide

### 1. **Edit Team Members**
File: `data/index.ts`

```typescript
export const teamMembers: TeamMember[] = [
  {
    id: 'new-member',
    name: 'NEW TEAM MEMBER',
    role: 'Position Title',
    description: 'Bio description here...',
    initials: 'NM',
    links: {
      publications: '/publications',
      linkedin: 'https://linkedin.com/in/username',
      github: 'https://github.com/username'
    }
  },
  // Add more members...
];
```

### 2. **Edit Publications**
File: `data/index.ts`

```typescript
export const publications: Publication[] = [
  {
    id: 'new-paper',
    title: 'Your Paper Title',
    authors: ['Author 1', 'Author 2'],
    venue: 'Conference 2025',
    year: 2025,
    category: 'ml', // 'aerial' | 'swarm' | 'ml' | 'perception' | 'ground'
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    link: '/paper-link',
    award: 'Best Paper Award' // optional
  },
  // Add more publications...
];
```

### 3. **Edit Research Areas**
File: `data/index.ts`

```typescript
export const researchAreas: ResearchArea[] = [
  {
    id: 'new-research',
    name: 'RESEARCH AREA NAME',
    type: 'Research Type',
    description: 'Detailed description of the research...',
    links: {
      paper: '/paper-link',
      demo: '/demo-link',
      code: 'https://github.com/repo'
    }
  },
  // Add more research areas...
];
```

### 4. **Edit Navigation**
File: `data/index.ts`

```typescript
export const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Research', href: '/research' },
  { name: 'Team', href: '/team' },
  // Add/remove navigation items...
];
```

### 5. **Customize Styling**
File: `tailwind.config.js` - Edit colors, fonts, animations
File: `styles/globals.css` - Add custom CSS

### 6. **Add New Pages**
Create new files in `app/` directory:
- `app/new-page/page.tsx` for `/new-page` route

## 🎨 Key Features

### ✅ **TypeScript Benefits:**
- **Type Safety**: Catch errors before runtime
- **IntelliSense**: Auto-completion and suggestions
- **Refactoring**: Safe renaming and restructuring
- **Documentation**: Self-documenting interfaces

### ✅ **Easy Content Management:**
- **Centralized Data**: All content in `data/index.ts`
- **Type-Safe Editing**: TypeScript prevents data errors
- **Component Reuse**: Consistent styling across pages
- **Hot Reload**: See changes instantly during development

### ✅ **Modern Framework Benefits:**
- **Fast Development**: Next.js hot reload and optimization
- **SEO Friendly**: Server-side rendering
- **Production Ready**: Optimized builds and deployment
- **Scalable**: Add pages and features easily

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages
```bash
npm run export
# Upload `out/` directory to GitHub Pages
```

## 🛠️ Advanced Customization

### Add New Component Types
1. Define interface in `types/index.ts`
2. Add data to `data/index.ts`
3. Create component in `components/`
4. Use in pages

### Customize Theme Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#your-color', // Change accent color
  },
  // Add custom colors...
}
```

### Add Animations
Use Framer Motion (already included):
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

## 📊 Migration from HTML

The original HTML website has been converted to:

1. **Static HTML** → **React Components**
2. **Vanilla CSS** → **Tailwind CSS + CSS Variables**
3. **Manual Editing** → **TypeScript Data Management**
4. **Single Files** → **Modular Structure**

All original functionality is preserved:
- ✅ Light/Dark theme switching
- ✅ 3D floating animations
- ✅ Responsive design
- ✅ Publication filtering
- ✅ Team member cards

## 🆘 Need Help?

1. **Development Server Issues**: Ensure Node.js 18+ is installed
2. **TypeScript Errors**: Check `types/index.ts` for correct interfaces
3. **Styling Issues**: Verify Tailwind classes in `tailwind.config.js`
4. **Data Updates**: All content is in `data/index.ts` - edit there!

---

**Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS**