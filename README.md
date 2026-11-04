<div align="center">

# 🌟 Daksh Soni — Creative Developer Portfolio

<p align="center">
  <strong>Modern, High-Performance Personal Portfolio & Engineering Showcase</strong>
</p>

<p align="center">
  <a href="https://dakshsoni0511.vercel.app">
    <img src="https://img.shields.io/badge/Live%20Demo-dakshsoni0511.vercel.app-E2C286?style=for-the-badge&logo=vercel&logoColor=090a0f" alt="Live Demo" />
  </a>
  <a href="https://github.com/25csdaksh/proffesional-portflio">
    <img src="https://img.shields.io/badge/GitHub-25csdaksh%2Fproffesional--portflio-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repo" />
  </a>
  <a href="https://www.linkedin.com/in/daksh-soni-7ab474372/">
    <img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://www.instagram.com/dakshsoni_005">
    <img src="https://img.shields.io/badge/Instagram-Follow-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.0.10-black?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel" alt="Vercel" />
</p>

---

</div>

## 📌 Overview

This repository houses the source code for the personal portfolio of **Daksh Soni**, a Computer Science & Engineering undergraduate at **CSPIT, CHARUSAT University**, Gujarat, India.

Engineered with **Next.js 16 (App Router)**, **React 19**, and **TypeScript**, the website is designed around editorial typography, clean visual hierarchy, and an information-first philosophy highlighting real-world engineering across AI/ML, Full-Stack systems, and Enterprise ERPs.

---

## ✨ Key Highlights & Features

### 🌓 Creative Day / Night Experience
- **Fluid Ambient Toggle:** Smooth transition between deep midnight obsidian (`#090a0f`) and warm editorial paper ivory (`#fbf8f2`).
- **Persistent State:** Saves user theme preference across browser sessions with zero layout shift.
- **Editorial Typography:** Georgia serif headlines paired with precise SFMono technical kicks.

### 🛠️ Developer Skills Command Center
- **30+ Vector Icons:** 100% official brand SVGs for languages, AI frameworks, databases, and DevOps tools.
- **Interactive Matrix:** Category tab filtering (Frontend, Backend, AI/ML, Database, Tools) with smooth transitions.
- **Live Status Strip:** Shows current learning tracks, primary stack, and real-time engineering focus.

### 💼 4-Column What I Build Grid
- **Text-Only Precision:** Project cards designed with crisp, 1-2 line architectural overviews without distracting thumbnail bloat.
- **Responsive 4-Column Layout:** Elegant 4-per-row grid on desktop, scaling cleanly to tablet and mobile.
- **Direct Live Links:** One-click access to deployed applications and detailed modal architecture sheets.

### 📂 Dedicated `/projects` Repository
- **11 In-Depth Projects:** Full breakdown of real systems including **StudyLM** (RAG AI), **HisabSetu** (FinTech & Android APK), **Sanjeevni AI** (Hospital ERP), **KrishiSeva** (AgriTech Edge AI), **TrialGuard AI** (IBM Hackathon 2026), and more.
- **Dynamic Category Filtering:** Instantly filter across *All Projects*, *AI / Machine Learning*, *Full-Stack Web & Mobile*, and *ERP & Business*.
- **Interactive Deep-Dive Modals:** Detailed problem statements, technical architecture, and key feature lists.

### ✉️ Functional Contact Engine
- **Resend Email API:** Sends inquiries directly via `/api/contact` route with spam defense.
- **Instant WhatsApp Link:** Prefilled dynamic WhatsApp message trigger.
- **Clean Social Action Buttons:** Sleek icon-only buttons for **LinkedIn** and **Instagram** with hover brand glow effects.

---

## 🏗️ Project Architecture

```plaintext
portfolio-website-prd/
├── app/
│   ├── api/
│   │   └── contact/route.ts       # Serverless contact form email handler (Resend API)
│   ├── projects/
│   │   └── page.tsx               # Dedicated /projects catalog route
│   ├── globals.css                # Global CSS tokens, day/night themes & responsive styles
│   ├── layout.tsx                 # Root layout with metadata and analytics
│   └── page.tsx                   # Main home route rendering CreativePortfolio
├── components/
│   ├── creative-portfolio.tsx     # Hero, About, Day/Night toggle & layout coordinator
│   ├── home-projects-section.tsx  # 4-column text-first featured projects showcase
│   ├── skills-section.tsx         # Developer Skills Command Center & filterable matrix
│   ├── skill-icons.tsx            # 30+ official vector SVG icons dictionary
│   ├── contact-form.tsx           # Contact form with validation & social icon buttons
│   ├── ui/                        # Reusable Radix UI & design primitive components
│   └── theme-provider.tsx         # Theme provider wrapper
├── lib/
│   ├── projects.ts                # Comprehensive data dictionary for all 11 projects
│   └── utils.ts                   # Utility functions (cn class merging)
├── public/                        # Static assets, project cover SVGs, and resume PDF
├── package.json                   # Dependencies and npm scripts
└── tsconfig.json                  # TypeScript configuration
```

---

## 🛠️ Tech Stack & Tooling

| Domain | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (Turbopack, App Router) |
| **Core** | [React 19](https://react.dev/), [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com/), Custom Vanilla CSS Variables |
| **Icons** | [Lucide React](https://lucide.dev/), Custom Inline Vector SVGs |
| **Components** | [Radix UI](https://www.radix-ui.com/) Primitives |
| **Deployment** | [Vercel](https://vercel.com/) (Fluid Compute Edge Network) |

---

## 🚀 Getting Started Locally

### 1. Clone the Repository
```bash
git clone https://github.com/25csdaksh/proffesional-portflio.git
cd proffesional-portflio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env.local` file in the root directory:
```env
# Optional: Resend API Key for live email deliveries
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=your_email@example.com
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 5. Production Build
```bash
npm run build
npm start
```

---

## 🌐 Live Deployments

- **Production URL:** [https://dakshsoni0511.vercel.app](https://dakshsoni0511.vercel.app)
- **Projects Catalog:** [https://dakshsoni0511.vercel.app/projects](https://dakshsoni0511.vercel.app/projects)

---

## 📬 Connect with Me

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/daksh-soni-7ab474372/)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/dakshsoni_005)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/25csdaksh)
[![Portfolio](https://img.shields.io/badge/Website-dakshsoni0511.vercel.app-E2C286?style=for-the-badge&logo=safari&logoColor=090a0f)](https://dakshsoni0511.vercel.app)

<br/>

Designed & Engineered with ❤️ by **Daksh Soni** · © 2026 All Rights Reserved.

</div>
