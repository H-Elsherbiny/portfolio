# Hossam Elsherbiny — AI Engineer & Data Scientist Portfolio

A recruiter-optimized, production-ready developer portfolio website built using Next.js 15+, TypeScript, Tailwind CSS, Turbopack, and MDX. 

This repository has undergone a comprehensive visual, structural, and performance audit to deliver an exceptional user experience, smooth animation sequences, and structured server-side content management.

---

## 🚀 Key Audits & Core Implementation Details

### 📂 MDX-Based Dynamic Content System
- **Server-Side Markdown Reader**: Migrated project cases and blog posts to frontmatter-based `.mdx` files stored under `/content/`.
- **Dynamic Routing**: Refactored the dynamic details page `/projects/[slug]` to read file content asynchronously on the server, compile frontmatter using `gray-matter`, and render the page body dynamically using `<MDXRemote>` from `next-mdx-remote`.
- **Decoupled Architecture**: Isolated static metadata types (e.g. project categories) in `types/index.ts` to prevent client-side components from compiling server-only Node.js file system (`fs`) modules.

### 📄 Targeted Multi-Resume Support (`/resumes`)
- **Specialized Resumes**: Replaced the singular resume layout with a specialized multi-resume grid under `/resumes`. Recruiters can select and download PDF resumes tailored for three focus areas:
  1. **AI & LLM Engineer** (focused on Generative AI, RAG, and LangGraph)
  2. **Machine Learning & CV Engineer** (focused on PyTorch, OpenCV, and Edge AI deployment)
  3. **Data Scientist** (focused on predictive analytics, pandas, and statistical modeling)
- **Responsive Text Handling**: Applied `break-all` and `inline-block` utilities to the card filename indicators to prevent long filenames from overflowing parent card boundaries on mobile viewports.

### 🎨 Visual & UI/UX Refinement
- **Hero & Navbar Polish**: Corrected spacing, z-indices, and positioning in the Hero section to ensure the name "Hossam Elsherbiny" is never obscured by background overlays, gradients, or the navigation bar.
- **Unified Theme Toggle Transition**: Synchronized the theme toggle animation between the fixed backdrop-blurred `<header>`, the `body`, and card containers by implementing matching transitions: `background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease, fill 0.3s ease, stroke 0.3s ease`.
- **Custom Select Arrow**: Stripped browser-specific dropdown select arrows using `appearance-none` on the project page filters and integrated a custom absolute-positioned chevron icon to ensure high-contrast alignment and perfect spacing from the right border.
- **Centered Contact Details**: Commented out the non-dispatching contact form while preserving its code, refactoring the layout to center contact items (Direct Email, Phone, Location, and Social links) into a clean single-column card stack.

### 🚫 Deactivated Blog Routing
- **Deindexed & Hidden**: Removed the blog section from sitemaps, RSS configurations, and header/footer navigations.
- **Route Interception**: Configured `/blog` and `/blog/[slug]` route handlers to immediately trigger Next.js `notFound()` (HTTP 404), with `generateStaticParams` returning empty arrays to disable build-time static pages.

---

## 🛠️ Tech Stack
- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router & Turbopack)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (V4 Utility Classes & CSS Custom Properties)
- **Content Engine**: `next-mdx-remote` & `gray-matter`
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **VCS**: Git

---

## 📁 Directory Structure
```text
├── app/                  # Next.js App Router (pages, sitemaps, robots)
├── components/           # Reusable UI components & layouts
│   ├── home/             # Hero, CTA, and home sections
│   ├── layout/           # Header, Footer, and ThemeProvider
│   ├── projects/         # Project filters and card layout
│   └── ui/               # Primary buttons, cards, and badges
├── content/              # Frontmatter-based MDX data files
│   ├── projects/         # Case studies (.mdx)
│   └── blog/             # Hidden posts (.mdx)
├── data/                 # Static configs and site navigation options
├── lib/                  # Server-side MDX files parser helper
├── public/               # Static assets (images, logos, PDF resumes)
│   └── resumes/          # Specialized resume PDF files
└── types/                # TypeScript interface declarations
```

---

## 💻 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Build for Production
```bash
npm run build
npm start
```
