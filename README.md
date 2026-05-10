# Developer Portfolio

A modern, responsive portfolio website built with Next.js 16, TypeScript, and Tailwind CSS v4. Showcases full-stack development projects with a focus on clean architecture, security, and user experience.

## Projects

### 1. Portfolio Website
A personal portfolio website featuring dark/light mode, smooth animations, and responsive design.
- **Stack:** HTML5, CSS3, JavaScript, Tailwind CSS
- **Role:** Solo Developer
- **Live:** [View Site](https://perhisi.vercel.app)

### 2. C.R.A.C.K Project Backend
Comprehensive educational platform backend with secure authentication, role-based access control, and robust database architecture.
- **Stack:** Nest.js, PostgreSQL, Prisma ORM, Passport-JWT, Bcrypt
- **Role:** Backend Developer
- **Repo:** [crack-be-perhisi](https://github.com/Revou-FSSE-Jun25/crack-be-perhisi)

### 3. C.R.A.C.K Project Frontend
Frontend for the educational platform featuring role-based access control, dynamic course management, and responsive UI.
- **Stack:** Next.js, Tailwind CSS, Axios, TypeScript
- **Role:** Frontend Developer
- **Repo:** [crack-fe-perhisi](https://github.com/Revou-FSSE-Jun25/crack-fe-perhisi)

### 4. Milestone 4 Backend
Backend API for financial account management with dual-token authentication, secure CRUD operations, and robust data validation.
- **Stack:** Nest.js, TypeScript, PostgreSQL, Prisma ORM, JWT, Railway
- **Role:** Backend Developer
- **Repo:** [milestone-4-perhisi](https://github.com/Revou-FSSE-Jun25/milestone-4-perhisi)

### 5. WeRent Backend System *(Current)*
Scalable rental platform backend with comprehensive RESTful APIs, role-based access control, and robust business logic for property and booking management.
- **Stack:** Nest.js, PostgreSQL, Prisma ORM, JWT, Bcrypt, Docker
- **Role:** Backend Engineer
- **Timeline:** Mar 2026 – Apr 2026
- **Repo:** [werent-backend](https://github.com/Revou-FSSE-Jun25/werent-backend)

## Features

- **Dark/Light Mode** — Toggle between themes with smooth transitions
- **Responsive Design** — Optimized for mobile, tablet, and desktop
- **Glassmorphism UI** — Modern glass-effect cards and headers
- **Image Gallery** — Interactive gallery with modal lightbox
- **Smooth Animations** — Fade-in effects, hover states, and transitions

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 + custom CSS
- **Deployment:** Vercel

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Repository Structure

```
src/app/
├── layout.tsx          # Root layout with metadata
├── page.tsx            # Home page (landing)
├── globals.css         # Global styles & Tailwind
├── components/         # Shared components
│   ├── header.tsx      # Homepage navbar
│   ├── header-project.tsx # Project page navbar
│   ├── footer.tsx      # Site footer
│   ├── project.tsx     # Projects grid section
│   ├── image-galery.tsx # Image lightbox modal
│   └── image-data.ts   # Centralized image paths
├── project1/           # Portfolio Website
├── project2/           # C.R.A.C.K Backend
├── project3/           # C.R.A.C.K Frontend
├── project4/           # Milestone 4 Backend
└── project5/           # WeRent Backend (current)
```

## License

MIT
