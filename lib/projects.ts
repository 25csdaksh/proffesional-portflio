export type ProjectCategory =
  | "All Projects"
  | "AI / Machine Learning"
  | "Full-Stack Web & Mobile"
  | "ERP & Business";

export interface Project {
  id: string;
  number: string;
  title: string;
  category: "AI / Machine Learning" | "Full-Stack Web & Mobile" | "ERP & Business";
  status: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  hackathon?: string;
  brand?: string;
  hasAndroidApp?: boolean;
  androidAppUrl?: string;
  objectives?: string;
  keyFeatures?: string[];
}

export const projectsData: Project[] = [
  // ==========================================
  // AI / MACHINE LEARNING
  // ==========================================
  {
    id: "studylm",
    number: "01",
    title: "StudyLM / AdhyayanLM",
    category: "AI / Machine Learning",
    status: "Implemented / In Progress",
    description:
      "AI-powered Study & Research Platform inspired by NotebookLM. It helps students learn efficiently using AI-generated summaries, flashcards, quizzes, mind maps, and document-based research with RAG.",
    technologies: ["React", "Gemini AI", "MongoDB Atlas Vector Search", "RAG"],
    image: "/project-covers/adhyayanlm.webp",
    liveUrl: "https://adhyayanlm.vercel.app/",
    githubUrl: "",
    objectives:
      "Help students, researchers, and self-learners synthesize complex study material into structured learning aids with verifiable citations.",
    keyFeatures: [
      "Document-grounded research powered by Retrieval-Augmented Generation (RAG)",
      "Automated study aids: summaries, interactive flashcards, and practice quizzes",
      "Dynamic mind map visualization of textbook topics and concepts",
      "Page-level citation and document source tracking for hallucination prevention",
    ],
  },
  {
    id: "krishiseva",
    number: "02",
    title: "KrishiSeva",
    category: "AI / Machine Learning",
    status: "Implemented / In Progress",
    description:
      "Gujarat-focused AI Smart Agriculture Platform providing agricultural advisory, pest and disease detection, soil analysis, crop recommendations, and weather alerts.",
    technologies: ["PyTorch", "MobileNetV2", "Gemini AI", "Node.js", "Express"],
    image: "/project-covers/krishiseva.svg",
    liveUrl: "", // Configurable: add live website URL when deployed
    githubUrl: "",
    objectives:
      "Equip regional Gujarat farming communities with edge-capable AI disease detection, crop recommendations, and actionable meteorological guidance.",
    keyFeatures: [
      "Computer vision pest and crop leaf disease detection powered by MobileNetV2",
      "Localized agronomy advisory tuned for Gujarat agricultural regions",
      "Soil nutrient analysis and yield-optimizing crop recommendations",
      "Real-time meteorological weather warning alerts and irrigation advisory",
    ],
  },
  {
    id: "nidan-ai",
    number: "03",
    title: "NIDAN AI",
    category: "AI / Machine Learning",
    status: "Planned / Development",
    description:
      "Intelligent Clinical Insights platform and Clinical Decision Support System designed to assist with medical report analysis and clinical insights. Includes safety guardrails and confidence policies. It is not intended to replace doctors.",
    technologies: ["FastAPI", "PostgreSQL", "Next.js", "TypeScript"],
    image: "/project-covers/nidan-ai.svg",
    liveUrl: "", // Configurable: add live website URL when deployed
    githubUrl: "",
    objectives:
      "Provide physician-assistive report interpretation while strictly preserving clinical safety boundaries and transparent uncertainty scoring.",
    keyFeatures: [
      "Automated extraction and structuring of lab reports and clinical summaries",
      "Clinical Decision Support System (CDSS) advisory for physician review",
      "Built-in safety guardrails and multi-tier confidence score policies",
      "Explicit diagnostic boundaries (designed as a clinical assist tool, not a doctor replacement)",
    ],
  },
  {
    id: "trialguard-ai",
    number: "04",
    title: "TrialGuard AI",
    category: "AI / Machine Learning",
    status: "Hackathon Project",
    hackathon: "IBM BoB AI Innovation Hackathon 2026",
    description:
      "AI-powered Clinical Trial Risk Monitor designed to identify risks and detect protocol deviations in clinical trials.",
    technologies: ["Python", "FastAPI", "AI"],
    image: "/project-covers/trialguard-ai.svg",
    liveUrl: "", // Configurable: add live website URL when deployed
    githubUrl: "",
    objectives:
      "Safeguard clinical trial integrity and patient safety through proactive risk modeling and automated protocol deviation alerts.",
    keyFeatures: [
      "Automated protocol compliance monitoring across clinical trial phases",
      "Early warning deviation detection for patient dosage and follow-up schedules",
      "Clinical audit trail logging and regulatory risk assessments",
      "Developed for the IBM BoB AI Innovation Hackathon 2026",
    ],
  },

  // ==========================================
  // FULL-STACK WEB & MOBILE
  // ==========================================
  {
    id: "hisabsetu",
    number: "05",
    title: "HisabSetu / PaisaTrack",
    category: "Full-Stack Web & Mobile",
    status: "APK Build Successful",
    description:
      "Personal expense tracker and finance management platform with expense tracking, analytics, reports, authentication, and Android application support.",
    technologies: ["React", "Vite", "Supabase", "PostgreSQL", "Capacitor"],
    image: "/project-covers/hisabsetu.webp",
    liveUrl: "https://hisabsetu.vercel.app/",
    githubUrl: "",
    hasAndroidApp: true,
    androidAppUrl: "", // Configurable: add APK download URL when ready
    objectives:
      "Empower users to take control of their daily finances with frictionless entry, clear visualizations, and mobile availability.",
    keyFeatures: [
      "Daily expense and recurring income logging with category breakdowns",
      "Budget goal alerts and visual monthly spending velocity charts",
      "Secure authentication and encrypted cloud sync via Supabase",
      "Cross-platform Android APK compilation using Capacitor",
      "Exportable financial reports in CSV/PDF formats",
    ],
  },
  {
    id: "vidyapath",
    number: "06",
    title: "Vidyapath — CSE Career Portal",
    category: "Full-Stack Web & Mobile",
    status: "Development",
    description:
      "Student career and learning platform for CSE students, featuring notes, courses, project resources, hackathons, resume guidance, placement resources, and an AI assistant.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/project-covers/vidyapath.webp",
    liveUrl: "https://shreejeelearning.netlify.app/",
    githubUrl: "",
    objectives:
      "Provide computer science undergrads with a 4-year roadmap connecting academic fundamentals to industry placement standards.",
    keyFeatures: [
      "Semester-by-semester course notes, textbook archives, and question banks",
      "Curated project repositories and technical certification guides",
      "Active hackathon directory, resume builder, and placement interview kits",
      "AI study assistant answering programming and curriculum questions",
    ],
  },
  {
    id: "studenthub",
    number: "07",
    title: "StudentHub / Student Portal",
    category: "Full-Stack Web & Mobile",
    status: "Development",
    description:
      "Student management and academic portal providing student-specific dashboards, academic information, and student-focused features.",
    technologies: ["Web Development", "Student Management"],
    image: "/project-covers/studenthub.svg",
    liveUrl: "", // Configurable: add live website URL when deployed
    githubUrl: "",
    objectives:
      "Simplify academic communication and student workflows with a single sign-on self-service student portal.",
    keyFeatures: [
      "Personalized student dashboard with attendance and course metrics",
      "Assignment submissions, deadlines, and gradebook tracking",
      "Timetable schedule views and university circular notifications",
      "Direct instructor messaging and academic support channels",
    ],
  },

  // ==========================================
  // ERP & BUSINESS
  // ==========================================
  {
    id: "sanjeevni-ai",
    number: "08",
    title: "Sanjeevni AI — Hospital ERP",
    category: "ERP & Business",
    status: "Development",
    description:
      "Hospital Management and Medical AI platform with patient management, appointments, medical records, prescriptions, laboratory management, billing, IPD, and AI-powered medical report analysis.",
    technologies: ["NestJS", "PostgreSQL", "Prisma", "Redis", "BullMQ"],
    image: "/project-covers/sanjeevni-ai.svg",
    liveUrl: "", // Configurable: add live website URL when deployed
    githubUrl: "",
    objectives:
      "Modernize healthcare operations with an enterprise-grade ERP architecture combining high concurrency queues with AI diagnostic assistance.",
    keyFeatures: [
      "End-to-end outpatient (OPD) and inpatient (IPD) bed management",
      "Electronic Health Records (EHR) and digital pharmacy prescriptions",
      "Laboratory management workflows and automated diagnostic reports",
      "Comprehensive patient billing, insurance claims, and audit ledgers",
      "Asynchronous background AI analysis of medical reports via Redis and BullMQ",
    ],
  },
  {
    id: "dakshkumar-school",
    number: "09",
    title: "Dakshkumar School Management System",
    category: "ERP & Business",
    status: "Development",
    description:
      "School website and ERP system with multi-role dashboards, fee billing, hostel management, student information, and school administration features.",
    technologies: ["React", "Vite", "Node.js", "Express", "MongoDB"],
    image: "/project-covers/dakshkumar-school.svg",
    liveUrl: "", // Configurable: add live website URL when deployed
    githubUrl: "",
    objectives:
      "Deliver a unified administration platform for schools to coordinate admissions, fees, student life, and academic reporting.",
    keyFeatures: [
      "Role-based portals for School Administrators, Teachers, Students, and Parents",
      "Fee payment processing, automated receipt generation, and fee arrears tracking",
      "Hostel room allocation, mess management, and student attendance logs",
      "Report card generation with automated grade point calculation",
    ],
  },
  {
    id: "swayur-agrotech",
    number: "10",
    title: "Swayur Agrotech LLP — KshetraPal",
    category: "ERP & Business",
    status: "Business Website",
    brand: "KshetraPal — “Revitalise Soil. Sustain Life.”",
    description:
      "Premium AgriTech business website for agricultural products, crop solutions, product management, dealer inquiries, and business information.",
    technologies: ["Web Development", "Business Website"],
    image: "/project-covers/swayur-agrotech.webp",
    liveUrl: "https://swayuragrotech.vercel.app/",
    githubUrl: "",
    objectives:
      "Establish an authoritative digital presence and distributor pipeline for certified biofertilizer and biopesticide innovations.",
    keyFeatures: [
      "Comprehensive digital catalog for KshetraPal biofertilizers and bio-pesticides",
      "Crop-specific organic solutions and soil revitalisation application guides",
      "Dealer partnership and commercial wholesale inquiry submission workflows",
      "Company certification, technical lab data, and sustainability mission showcase",
    ],
  },
  {
    id: "devkrupa-jewellers",
    number: "11",
    title: "Devkrupa Jewellers",
    category: "ERP & Business",
    status: "Enhancement Planned",
    description:
      "Jewellery website and e-commerce enhancement project featuring gold, silver, diamond jewellery, gold coins, and premium festive offers including making-charge discounts.",
    technologies: ["Web Development", "E-commerce", "Marketing"],
    image: "/project-covers/devkrupa-jewellers.webp",
    liveUrl: "https://devkrupajwellers.vercel.app/",
    githubUrl: "",
    objectives:
      "Celebrate century-old family craftsmanship while expanding digital sales through interactive collections and bespoke custom consultations.",
    keyFeatures: [
      "Luxury online catalog highlighting gold, diamond, and handcrafted silver jewellery",
      "Festive promotional campaign engine with automated making-charge discounts",
      "Gold and silver coin catalog for religious festivals and investment buyers",
      "Bespoke jewellery customization inquiry and in-person consultation booking",
    ],
  },
];

