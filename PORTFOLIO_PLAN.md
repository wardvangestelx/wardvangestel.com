# Ward van Gestel Portfolio Platform

A minimal, white & black personal portfolio website inspired by mindynguyen.me.
Built with Next.js, TypeScript, and Tailwind CSS.

---

## Design Philosophy

- **Minimal**: White background, black text, no unnecessary elements
- **Clean typography**: Geist font (already in project)
- **Responsive**: Works perfectly on mobile, tablet, and desktop
- **Fast**: Optimized images, minimal JavaScript
- **Personal**: Photos, personality, your story

---

## Site Structure

### Public Pages

```
/                     → Landing page (hero + featured projects)
/about                → About you, bio, photos, skills
/projects             → All projects overview
/projects/[slug]      → Individual project detail pages
/contact              → Contact form or info
```

### Password-Protected Pages

```
/cv                   → Full CV/Resume (protected)
/projects/[slug]      → Some projects can be protected
/private              → Any private content you want
```

---

## Page-by-Page Breakdown

### 1. Landing Page (`/`)

**Hero Section**
- Your name: "Ward van Gestel"
- Title: "Creative Developer"
- One-liner tagline (we'll write this together)
- Optional: A nice photo of you or your workspace

**Featured Projects**
- 2-4 highlighted projects in a grid
- Large images with hover effects
- Project title + short description
- Links to live sites or detail pages

**Quick Links**
- About, Projects, Contact in a minimal way

---

### 2. About Page (`/about`)

**Sections to include:**
- **Intro**: Who you are in 2-3 sentences
- **Photo**: A good photo of yourself
- **Background**: Where you're from, what you studied
- **What you do**: Your skills, what excites you
- **Currently**: What you're working on now
- **Fun facts**: Hobbies, interests, music, etc.

**Layout options:**
- Split layout: Text left, photo right
- Or: Photo hero at top, text below

---

### 3. Projects Page (`/projects`)

**Grid layout showing all projects:**
- Project thumbnail (screenshot or custom image)
- Project name
- Tags (e.g., "Next.js", "TypeScript", "Personal")
- Year created
- Public/Private indicator

**Filtering (optional, for later):**
- By type: Web App, Tool, Experiment
- By tech: React, Python, etc.

---

### 4. Project Detail Page (`/projects/[slug]`)

**For each project:**
- Hero image/screenshot
- Project title & description
- The problem it solves
- Tech stack used
- Your role
- Link to live site
- Link to GitHub (if public)
- Gallery of screenshots

---

### 5. CV Page (`/cv`) - Password Protected

**Professional resume including:**
- Education
- Work experience
- Skills (technical & soft)
- Languages
- Certifications
- Download PDF option

---

### 6. Contact Page (`/contact`)

- Email link
- Social links (GitHub, LinkedIn, etc.)
- Optional: Contact form

---

## Components to Build

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          → Navigation bar
│   │   ├── Footer.tsx          → Footer with links
│   │   └── Layout.tsx          → Main layout wrapper
│   │
│   ├── ui/
│   │   ├── Logo.tsx            → WVG logo (done)
│   │   ├── Button.tsx          → Reusable button
│   │   ├── Card.tsx            → Project card
│   │   ├── Modal.tsx           → Generic modal
│   │   └── PasswordGate.tsx    → Password protection
│   │
│   ├── sections/
│   │   ├── Hero.tsx            → Landing hero
│   │   ├── FeaturedProjects.tsx
│   │   ├── AboutPreview.tsx    → Short about on landing
│   │   └── ContactCTA.tsx      → Contact call-to-action
│   │
│   └── project/
│       ├── ProjectGrid.tsx     → Grid of project cards
│       ├── ProjectCard.tsx     → Individual card (done)
│       └── ProjectGallery.tsx  → Image gallery
```

---

## Data Structure

### Projects Data (`src/data/projects.ts`)

```typescript
interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  year: number;
  featured: boolean;
  protected: boolean;
  password?: string;
}
```

### Your Info (`src/data/personal.ts`)

```typescript
interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  location: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  skills: string[];
  currentlyWorking: string;
  funFacts: string[];
}
```

---

## Implementation Phases

### Phase 1: Foundation (Week 1)
- [ ] Set up proper layout with Header and Footer
- [ ] Create navigation that works on mobile (hamburger menu)
- [ ] Build reusable UI components (Button, Card)
- [ ] Set up data files for projects and personal info
- [ ] Create basic About page structure

### Phase 2: Core Pages (Week 2)
- [ ] Redesign landing page with proper hero section
- [ ] Build Projects page with grid layout
- [ ] Create Project detail page template
- [ ] Add image optimization and galleries
- [ ] Implement smooth page transitions

### Phase 3: Content & Polish (Week 3)
- [ ] Add your photos (hero, about, etc.)
- [ ] Write all copy (bio, project descriptions)
- [ ] Add more projects with proper images
- [ ] Password protect CV and specific projects
- [ ] Add contact page or section

### Phase 4: Enhancements (Week 4+)
- [ ] Add subtle animations (scroll, hover)
- [ ] SEO optimization (meta tags, og images)
- [ ] Performance optimization
- [ ] Analytics (optional)
- [ ] Blog section (optional, for later)

---

## Design Tokens

### Colors
```css
--white: #ffffff
--black: #000000
--gray-50: #fafafa
--gray-100: #f5f5f5
--gray-200: #e5e5e5
--gray-400: #a3a3a3
--gray-500: #737373
--gray-600: #525252
```

### Typography
```css
--font-sans: 'Geist', sans-serif
--font-mono: 'Geist Mono', monospace

/* Sizes */
--text-xs: 0.75rem
--text-sm: 0.875rem
--text-base: 1rem
--text-lg: 1.125rem
--text-xl: 1.25rem
--text-2xl: 1.5rem
--text-3xl: 1.875rem
--text-4xl: 2.25rem
--text-5xl: 3rem
```

### Spacing
```css
/* Consistent spacing scale */
4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px
```

### Breakpoints
```css
--mobile: 640px
--tablet: 768px
--desktop: 1024px
--wide: 1280px
```

---

## Questions to Answer Together

Before we start building, think about these:

### About You
1. What's your one-liner tagline? (e.g., "Building tools that make life simpler")
2. What's your background? (Study, work, where you're from)
3. What are you passionate about in tech?
4. Any hobbies or interests to mention?

### Projects
1. Besides Todo and Investment Dashboard, what other projects do you have?
2. Do you have screenshots/images for each project?
3. Which projects should be public vs protected?

### Visuals
1. Do you have professional photos of yourself?
2. Any photos of your workspace, city, travels?
3. Do you want a custom favicon/logo beyond WVG?

### Features
1. Do you want a contact form or just email link?
2. Should the CV be downloadable as PDF?
3. Any other pages you want (blog, experiments, etc.)?

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Images**: Next.js Image optimization
- **Fonts**: Geist (already set up)
- **Hosting**: Vercel
- **Domain**: wardvangestel.com

---

## Next Steps

1. Answer the questions above
2. Gather your photos and project screenshots
3. We start building Phase 1

Let's make this your platform!
