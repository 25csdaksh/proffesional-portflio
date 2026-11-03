export type SkillCategory =
  | "all"
  | "languages"
  | "frontend"
  | "backend"
  | "database"
  | "ai-ml"
  | "tools";

export type SkillLevel =
  | "Project Experience"
  | "Working Knowledge"
  | "Familiar"
  | "Learning";

export interface SkillItem {
  id: string;
  name: string;
  primaryCategory: "languages" | "frontend" | "backend" | "database" | "ai-ml" | "tools";
  allCategories: SkillCategory[];
  level: SkillLevel;
  tagline: string;
  description: string;
  featured?: boolean;
}

export interface CategoryTab {
  id: SkillCategory;
  label: string;
  shortLabel?: string;
}

export const skillCategories: CategoryTab[] = [
  { id: "all", label: "All" },
  { id: "languages", label: "Languages" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "ai-ml", label: "AI / ML" },
  { id: "tools", label: "Tools" },
];

export const skillsData: SkillItem[] = [
  // --- PROGRAMMING LANGUAGES ---
  {
    id: "python",
    name: "Python",
    primaryCategory: "languages",
    allCategories: ["all", "languages", "backend", "ai-ml"],
    level: "Project Experience",
    tagline: "Core Programming & AI",
    description: "Primary language for AI pipelines, machine learning, FastAPI backends, and data workflows.",
    featured: true,
  },
  {
    id: "typescript",
    name: "TypeScript",
    primaryCategory: "languages",
    allCategories: ["all", "languages", "frontend", "backend"],
    level: "Project Experience",
    tagline: "Type-Safe Full-Stack",
    description: "Strict typing across Next.js frontend applications, scalable Node.js services, and APIs.",
    featured: true,
  },
  {
    id: "javascript",
    name: "JavaScript",
    primaryCategory: "languages",
    allCategories: ["all", "languages", "frontend", "backend"],
    level: "Project Experience",
    tagline: "Modern ES6+ Web",
    description: "Asynchronous programming, DOM manipulation, interactive client logic, and full-stack runtime.",
  },
  {
    id: "cpp",
    name: "C++",
    primaryCategory: "languages",
    allCategories: ["all", "languages"],
    level: "Working Knowledge",
    tagline: "Systems & DSA",
    description: "Object-oriented programming, data structures, algorithms, and performance fundamentals.",
  },
  {
    id: "c",
    name: "C",
    primaryCategory: "languages",
    allCategories: ["all", "languages"],
    level: "Working Knowledge",
    tagline: "Low-Level Computing",
    description: "Memory management, pointers, and foundational computer architecture principles.",
  },
  {
    id: "java",
    name: "Java",
    primaryCategory: "languages",
    allCategories: ["all", "languages"],
    level: "Working Knowledge",
    tagline: "OOP & Enterprise Fundamentals",
    description: "Object-oriented software design, class hierarchies, and JVM computing foundations.",
  },
  {
    id: "sql",
    name: "SQL",
    primaryCategory: "languages",
    allCategories: ["all", "languages", "database"],
    level: "Project Experience",
    tagline: "Relational Queries",
    description: "Complex joins, indexing, query optimization, schema migrations, and relational design.",
  },
  {
    id: "html",
    name: "HTML",
    primaryCategory: "languages",
    allCategories: ["all", "languages", "frontend"],
    level: "Project Experience",
    tagline: "Semantic Structure",
    description: "Semantic HTML5 document architecture, accessibility standards (a11y), and SEO-friendly markup.",
  },
  {
    id: "css",
    name: "CSS",
    primaryCategory: "languages",
    allCategories: ["all", "languages", "frontend"],
    level: "Project Experience",
    tagline: "Responsive Styling",
    description: "CSS Grid, Flexbox, keyframe animations, CSS variables, and cross-browser styling.",
  },

  // --- FRONTEND FRAMEWORKS & LIBRARIES ---
  {
    id: "react",
    name: "React",
    primaryCategory: "frontend",
    allCategories: ["all", "frontend"],
    level: "Project Experience",
    tagline: "Component Architecture",
    description: "Declarative UI engineering, custom hooks, state management, and optimized render lifecycles.",
    featured: true,
  },
  {
    id: "nextjs",
    name: "Next.js",
    primaryCategory: "frontend",
    allCategories: ["all", "frontend", "backend"],
    level: "Project Experience",
    tagline: "Full-Stack App Router",
    description: "Server-side rendering (SSR), static site generation, API route handlers, and performance optimization.",
    featured: true,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    primaryCategory: "frontend",
    allCategories: ["all", "frontend"],
    level: "Project Experience",
    tagline: "Utility-First Design",
    description: "Rapid responsive styling, dark theme customization, design systems, and modern component styles.",
  },
  {
    id: "vite",
    name: "Vite",
    primaryCategory: "tools",
    allCategories: ["all", "tools", "frontend"],
    level: "Project Experience",
    tagline: "Lightning-Fast Bundler",
    description: "Next-gen frontend tooling, instant Hot Module Replacement (HMR), and optimized production builds.",
  },

  // --- BACKEND FRAMEWORKS & RUNTIMES ---
  {
    id: "nodejs",
    name: "Node.js",
    primaryCategory: "backend",
    allCategories: ["all", "backend"],
    level: "Project Experience",
    tagline: "Async Server Runtime",
    description: "Event-driven asynchronous microservices, REST APIs, and backend business logic.",
    featured: true,
  },
  {
    id: "express",
    name: "Express.js",
    primaryCategory: "backend",
    allCategories: ["all", "backend"],
    level: "Project Experience",
    tagline: "Robust REST APIs",
    description: "Middleware pipelines, routing, authentication, error handling, and server architectures.",
  },
  {
    id: "fastapi",
    name: "FastAPI",
    primaryCategory: "backend",
    allCategories: ["all", "backend", "ai-ml"],
    level: "Project Experience",
    tagline: "High-Performance Python",
    description: "Asynchronous Python REST backends, Pydantic type safety, and real-time AI model endpoints.",
  },
  {
    id: "django",
    name: "Django",
    primaryCategory: "backend",
    allCategories: ["all", "backend"],
    level: "Working Knowledge",
    tagline: "Batteries-Included Python",
    description: "Full-featured web framework, ORM models, admin dashboard integration, and authentication.",
  },
  {
    id: "nestjs",
    name: "NestJS",
    primaryCategory: "backend",
    allCategories: ["all", "backend"],
    level: "Familiar",
    tagline: "Enterprise Architecture",
    description: "Modular TypeScript backend development with dependency injection and clean architectural patterns.",
  },

  // --- DATABASES ---
  {
    id: "mongodb",
    name: "MongoDB",
    primaryCategory: "database",
    allCategories: ["all", "database"],
    level: "Project Experience",
    tagline: "Document NoSQL",
    description: "Flexible schema modeling, aggregation pipelines, replica sets, and Atlas cloud deployment.",
    featured: true,
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    primaryCategory: "database",
    allCategories: ["all", "database"],
    level: "Project Experience",
    tagline: "Relational Powerhouse",
    description: "ACID transactions, relational indexing, foreign keys, JSONB structures, and complex querying.",
  },
  {
    id: "supabase",
    name: "Supabase",
    primaryCategory: "database",
    allCategories: ["all", "database", "backend"],
    level: "Project Experience",
    tagline: "PostgreSQL & Auth Platform",
    description: "Row-level security (RLS), real-time database listeners, auth providers, and cloud storage.",
  },
  {
    id: "mongodb-vector",
    name: "MongoDB Atlas Vector Search",
    primaryCategory: "database",
    allCategories: ["all", "database", "ai-ml"],
    level: "Project Experience",
    tagline: "Semantic Embeddings",
    description: "High-dimensional vector indexing, similarity search, and semantic knowledge retrieval for RAG.",
  },

  // --- AI / MACHINE LEARNING ---
  {
    id: "pytorch",
    name: "PyTorch",
    primaryCategory: "ai-ml",
    allCategories: ["all", "ai-ml"],
    level: "Working Knowledge",
    tagline: "Deep Learning Framework",
    description: "Tensor computations, deep neural network training, model evaluation, and inference pipelines.",
    featured: true,
  },
  {
    id: "gemini",
    name: "Google Gemini",
    primaryCategory: "ai-ml",
    allCategories: ["all", "ai-ml"],
    level: "Project Experience",
    tagline: "Multimodal LLM API",
    description: "Gemini 1.5/2.0 API integrations, function calling, multimodal reasoning, and structured prompting.",
  },
  {
    id: "ai-rag",
    name: "AI / RAG",
    primaryCategory: "ai-ml",
    allCategories: ["all", "ai-ml"],
    level: "Project Experience",
    tagline: "Retrieval-Augmented Gen",
    description: "Chunking, vector embeddings, contextual retrieval, prompt orchestration, and accurate LLM answers.",
  },
  {
    id: "mobilenetv2",
    name: "MobileNetV2",
    primaryCategory: "ai-ml",
    allCategories: ["all", "ai-ml"],
    level: "Project Experience",
    tagline: "Edge Computer Vision",
    description: "Lightweight convolutional neural networks for image classification, inference, and mobile edge deployment.",
  },

  // --- DEVELOPER TOOLS & DEVOPS ---
  {
    id: "git",
    name: "Git",
    primaryCategory: "tools",
    allCategories: ["all", "tools"],
    level: "Project Experience",
    tagline: "Version Control",
    description: "Branching strategies, interactive rebasing, merge resolution, and distributed commit workflows.",
  },
  {
    id: "github",
    name: "GitHub",
    primaryCategory: "tools",
    allCategories: ["all", "tools"],
    level: "Project Experience",
    tagline: "Collaboration & CI/CD",
    description: "Repository management, pull requests, code reviews, GitHub Actions, and release tracking.",
  },
  {
    id: "vscode",
    name: "VS Code",
    primaryCategory: "tools",
    allCategories: ["all", "tools"],
    level: "Project Experience",
    tagline: "Primary Code Studio",
    description: "Productivity shortcuts, integrated debugging, multi-root workspaces, and language tooling.",
  },
  {
    id: "docker",
    name: "Docker",
    primaryCategory: "tools",
    allCategories: ["all", "tools", "backend"],
    level: "Working Knowledge",
    tagline: "Containerization",
    description: "Dockerfiles, multi-stage builds, container isolation, and consistent cross-environment deployment.",
  },
];

