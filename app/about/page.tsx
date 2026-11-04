"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  GraduationCap,
  MapPin,
  Sparkles,
  Sun,
  Moon,
  Linkedin,
  Instagram,
  Download,
  Quote,
  Layers,
  Wheat,
  Stethoscope,
  Code2,
} from "lucide-react";

export default function AboutPage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme =
      (window.localStorage.getItem("portfolio-theme") as "dark" | "light") ||
      "dark";
    root.dataset.theme = savedTheme;
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("portfolio-theme", next);
    setTheme(next);
  };

  const featuredProjects = [
    {
      id: "krishiseva",
      name: "KrishiSeva",
      domain: "AgriTech & AI Advisory",
      icon: Wheat,
      description:
        "AI-powered smart agriculture platform designed for regional farming communities. Features on-field crop disease detection, soil analysis, and localized Gujarat meteorological alerts.",
      technologies: ["Python", "AI", "Gemini API", "Web Development"],
      image: "/project-covers/krishiseva.svg",
      link: "/projects",
      isExternal: false,
    },
    {
      id: "sanjeevni-ai",
      name: "Sanjeevni AI",
      domain: "Enterprise HealthTech & ERP",
      icon: Stethoscope,
      description:
        "Comprehensive hospital ERP and clinical management system. Automates OPD/IPD bed allocation, pharmacy prescriptions, and high-concurrency background AI parsing of medical lab reports.",
      technologies: ["NestJS", "PostgreSQL", "Prisma", "AI"],
      image: "/project-covers/sanjeevni-ai.svg",
      link: "/projects",
      isExternal: false,
    },
    {
      id: "vidyapath",
      name: "Vidyapath",
      domain: "EdTech & Career Platform",
      icon: Layers,
      description:
        "Career development and academic platform for Computer Science students. Integrates semester-wise learning resources, project repositories, active hackathon archives, and placement preparation.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/project-covers/vidyapath.webp",
      link: "https://shreejeelearning.netlify.app/",
      isExternal: true,
    },
  ];

  return (
    <main className="portfolio-shell about-page-wrap">
      <style>{`
        .about-page-wrap {
          min-height: 100vh;
          background: var(--background);
          color: var(--foreground);
          overflow-x: hidden;
        }

        /* Top Navigation */
        .about-page-wrap .site-nav {
          max-width: 1380px;
          margin: 0 auto;
          padding: 20px 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border);
          position: sticky;
          top: 0;
          background: var(--nav-bg, rgba(9, 10, 15, 0.88));
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          z-index: 100;
        }

        html[data-theme="light"] .about-page-wrap .site-nav {
          background: rgba(251, 248, 242, 0.9);
          border-color: #e5ded3;
        }

        .about-page-wrap .wordmark {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 24px;
          font-weight: 700;
          color: var(--foreground);
          text-decoration: none;
          letter-spacing: -0.5px;
        }

        .about-page-wrap .wordmark span {
          color: var(--primary);
        }

        .about-page-wrap .nav-links-row {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .about-page-wrap .nav-link-item {
          font-size: 13.5px;
          font-weight: 500;
          color: var(--muted);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .about-page-wrap .nav-link-item:hover,
        .about-page-wrap .nav-link-item.active {
          color: var(--foreground);
        }

        .about-page-wrap .nav-link-item.active {
          color: var(--primary);
          border-bottom: 1.5px solid var(--primary);
          padding-bottom: 2px;
        }

        .about-page-wrap .nav-actions-group {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .about-page-wrap .theme-toggle-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid var(--card-border);
          background: var(--card);
          color: var(--foreground);
          display: grid;
          place-items: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .about-page-wrap .theme-toggle-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
          transform: rotate(15deg);
        }

        .about-page-wrap .btn-nav-talk {
          padding: 8px 18px;
          border-radius: 9999px;
          background: var(--primary);
          color: #090a0f;
          font-size: 12.5px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .about-page-wrap .btn-nav-talk:hover {
          background: #edd39a;
          transform: translateY(-1px);
        }

        /* Container */
        .about-main-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 48px 32px 100px;
        }

        /* Back Breadcrumb */
        .about-breadcrumb {
          margin-bottom: 36px;
        }

        .about-breadcrumb a {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 12.5px;
          font-weight: 600;
          color: var(--muted);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .about-breadcrumb a:hover {
          color: var(--primary);
        }

        /* Profile Layout (Left: Image, Right: Intro) */
        .about-profile-hero {
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 56px;
          align-items: start;
        }

        /* Profile Card (Left Column) */
        .profile-media-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: sticky;
          top: 96px;
        }

        .profile-image-card {
          background: var(--card);
          border: 1px solid var(--card-border);
          border-radius: 18px;
          padding: 14px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
        }

        html[data-theme="light"] .profile-image-card {
          background: #ffffff;
          border-color: #e2e8f0;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05);
        }

        .profile-image-card:hover {
          transform: translateY(-3px);
          border-color: rgba(226, 194, 134, 0.5);
        }

        .profile-photo-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 14px;
          overflow: hidden;
          background: #090a0f;
        }

        html[data-theme="light"] .profile-photo-wrapper {
          background: #f1f5f9;
        }

        .profile-photo-img {
          object-fit: cover;
          object-position: center center;
          transition: transform 0.4s ease;
        }

        .profile-photo-wrapper:hover .profile-photo-img {
          transform: scale(1.02);
        }

        /* Status Strip below Photo */
        .profile-card-substatus {
          margin-top: 10px;
          padding: 8px 12px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 11.5px;
        }

        html[data-theme="light"] .profile-card-substatus {
          background: #f8fafc;
          border-color: #e2e8f0;
        }

        .status-dot-pulse {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          display: inline-block;
          box-shadow: 0 0 8px #10b981;
        }

        .badge-status-text {
          font-weight: 600;
          color: var(--foreground);
        }

        .badge-location-text {
          color: var(--muted);
          font-size: 11px;
        }

        /* Profile Actions Below Image */
        .profile-social-dock {
          background: var(--card);
          border: 1px solid var(--card-border);
          border-radius: 12px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        html[data-theme="light"] .profile-social-dock {
          background: #ffffff;
          border-color: #e2e8f0;
        }

        .profile-social-dock .meta-location {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: var(--muted);
        }

        .profile-social-dock .social-icons-cluster {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .dock-icon-btn {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: grid;
          place-items: center;
          border: 1px solid var(--card-border);
          color: var(--foreground);
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .dock-icon-btn.linkedin {
          color: #0a66c2;
        }

        .dock-icon-btn.linkedin:hover {
          background: #0a66c2;
          color: #ffffff;
          border-color: #0a66c2;
        }

        .dock-icon-btn.instagram {
          color: #e1306c;
        }

        .dock-icon-btn.instagram:hover {
          background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
          color: #ffffff;
          border-color: transparent;
        }

        .btn-download-resume {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          border-radius: 10px;
          background: rgba(226, 194, 134, 0.08);
          border: 1px solid rgba(226, 194, 134, 0.3);
          color: var(--primary);
          font-size: 12.5px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-download-resume:hover {
          background: var(--primary);
          color: #090a0f;
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(226, 194, 134, 0.25);
        }

        /* Introduction Content (Right Column) */
        .profile-content-column {
          display: flex;
          flex-direction: column;
          gap: 26px;
        }

        .profile-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--primary);
          font-weight: 700;
        }

        .profile-name-title {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(42px, 5vw, 62px);
          font-weight: 400;
          letter-spacing: -2px;
          margin: 0;
          line-height: 1.05;
          color: var(--foreground);
        }

        .profile-name-title span {
          color: var(--primary);
        }

        .profile-professional-subtitle {
          font-size: 17px;
          line-height: 1.45;
          font-weight: 600;
          color: var(--primary);
          margin: -8px 0 0;
          letter-spacing: -0.2px;
        }

        .profile-bio-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .profile-bio-paragraphs p {
          margin: 0;
          font-size: 16px;
          line-height: 1.8;
          color: var(--muted);
        }

        /* Core Philosophy Accent Card */
        .about-philosophy-quote {
          margin: 10px 0 4px;
          padding: 22px 26px;
          background: rgba(226, 194, 134, 0.05);
          border-left: 3px solid var(--primary);
          border-top: 1px solid var(--card-border);
          border-right: 1px solid var(--card-border);
          border-bottom: 1px solid var(--card-border);
          border-radius: 0 12px 12px 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        html[data-theme="light"] .about-philosophy-quote {
          background: #fbf8f2;
          border-color: #e5ded3;
          border-left-color: var(--primary);
        }

        .about-philosophy-quote:hover {
          transform: translateX(4px);
          background: rgba(226, 194, 134, 0.08);
        }

        .quote-kicker {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 10.5px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--primary);
          font-weight: 700;
        }

        .quote-body {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 18px;
          line-height: 1.5;
          font-style: italic;
          color: var(--foreground);
          margin: 0;
        }

        .quote-author-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: ui-monospace, monospace;
          font-size: 11.5px;
          color: var(--muted);
        }

        .quote-author-row b {
          color: var(--foreground);
          font-weight: 600;
        }

        .quote-author-row .dot {
          color: var(--primary);
        }

        .quote-author-row em {
          font-style: normal;
          color: var(--primary);
        }

        /* Interest Pills Strip */
        .profile-interest-pills {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .interest-tag-pill {
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 11px;
          padding: 5px 12px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--card-border);
          color: var(--muted);
        }

        html[data-theme="light"] .interest-tag-pill {
          background: #f1f5f9;
          color: #475569;
          border-color: #e2e8f0;
        }

        /* Subtle Section Divider */
        .about-subtle-divider {
          margin: 64px 0 54px;
          border: none;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            var(--border) 20%,
            var(--border) 80%,
            transparent 100%
          );
          position: relative;
        }

        /* Featured Projects Section */
        .featured-projects-section {
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .featured-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .featured-heading-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .featured-heading-group h2 {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(30px, 3.8vw, 42px);
          letter-spacing: -1px;
          margin: 0;
          font-weight: 400;
          color: var(--foreground);
        }

        .featured-heading-group h2 em {
          font-style: italic;
          color: var(--primary);
        }

        .featured-lead-desc {
          margin: 0;
          font-size: 14px;
          color: var(--muted);
          max-width: 540px;
          line-height: 1.6;
        }

        .btn-view-all-projects {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 9999px;
          background: rgba(226, 194, 134, 0.08);
          border: 1px solid rgba(226, 194, 134, 0.3);
          color: var(--primary);
          font-size: 12.5px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.25s ease;
          white-space: nowrap;
        }

        .btn-view-all-projects:hover {
          background: var(--primary);
          color: #090a0f;
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(226, 194, 134, 0.25);
        }

        /* 3-Card Responsive Grid */
        .featured-projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .about-project-card {
          background: var(--card);
          border: 1px solid var(--card-border);
          border-radius: 14px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 18px;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.25s ease,
                      box-shadow 0.25s ease;
          position: relative;
        }

        html[data-theme="light"] .about-project-card {
          background: #ffffff;
          border-color: #e2e8f0;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
        }

        .about-project-card:hover {
          transform: translateY(-4px);
          border-color: rgba(226, 194, 134, 0.5);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.35);
        }

        html[data-theme="light"] .about-project-card:hover {
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
          border-color: var(--primary);
        }

        .project-thumbnail-box {
          width: 100%;
          height: 140px;
          border-radius: 9px;
          overflow: hidden;
          background: #141724;
          position: relative;
          border: 1px solid var(--border);
        }

        html[data-theme="light"] .project-thumbnail-box {
          background: #f8fafc;
        }

        .project-thumbnail-img {
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .about-project-card:hover .project-thumbnail-img {
          transform: scale(1.05);
        }

        .project-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-top: 4px;
        }

        .project-domain-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 10px;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: var(--primary);
          font-weight: 700;
        }

        .project-title {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 21px;
          font-weight: 600;
          color: var(--foreground);
          margin: 6px 0 0;
          letter-spacing: -0.3px;
        }

        .project-desc-text {
          font-size: 13.5px;
          line-height: 1.65;
          color: var(--muted);
          margin: 8px 0 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .project-tech-tags {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
          margin-top: 10px;
        }

        .tech-pill-badge {
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 9.5px;
          padding: 3px 8px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--card-border);
          color: var(--muted);
        }

        html[data-theme="light"] .tech-pill-badge {
          background: #f1f5f9;
          color: #475569;
          border-color: #e2e8f0;
        }

        .project-card-footer {
          border-top: 1px solid var(--border);
          padding-top: 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .project-action-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          color: var(--foreground);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .project-action-link:hover {
          color: var(--primary);
        }

        .project-action-link.primary-action {
          color: var(--primary);
          font-weight: 700;
        }

        /* Bottom Callout Section */
        .about-footer-banner {
          margin-top: 60px;
          padding: 36px 40px;
          background: var(--card);
          border: 1px solid var(--card-border);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        html[data-theme="light"] .about-footer-banner {
          background: #ffffff;
          border-color: #e2e8f0;
        }

        .footer-banner-text h3 {
          font-family: Georgia, serif;
          font-size: 24px;
          margin: 0 0 6px;
          color: var(--foreground);
          letter-spacing: -0.4px;
        }

        .footer-banner-text p {
          margin: 0;
          font-size: 14px;
          color: var(--muted);
        }

        .footer-banner-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .btn-talk-action {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 8px;
          background: var(--primary);
          color: #090a0f;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-talk-action:hover {
          background: #edd39a;
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(226, 194, 134, 0.3);
        }

        /* Site Footer */
        .about-site-footer {
          max-width: 1200px;
          margin: 40px auto 0;
          padding: 24px 32px 40px;
          border-top: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 12.5px;
          color: var(--muted);
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-social-links {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .footer-social-link {
          color: var(--muted);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s ease;
        }

        .footer-social-link:hover {
          color: var(--primary);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .about-profile-hero {
            grid-template-columns: 300px 1fr;
            gap: 40px;
          }
          .featured-projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 820px) {
          .about-profile-hero {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .profile-media-column {
            position: static;
            max-width: 360px;
            margin: 0 auto;
          }
          .featured-projects-grid {
            grid-template-columns: 1fr;
          }
          .about-main-container {
            padding: 36px 20px 80px;
          }
          .about-page-wrap .site-nav {
            padding: 16px 20px;
          }
          .about-page-wrap .nav-links-row {
            display: none;
          }
          .about-footer-banner {
            padding: 26px 22px;
          }
        }
      `}</style>

      {/* Navigation Header */}
      <header className="site-nav">
        <Link href="/" className="wordmark" aria-label="Daksh Soni Home">
          ds<span>.</span>
        </Link>

        <nav className="nav-links-row" aria-label="Main Navigation">
          <Link href="/" className="nav-link-item">
            Home
          </Link>
          <Link href="/about" className="nav-link-item active">
            About
          </Link>
          <Link href="/#skills" className="nav-link-item">
            Skills
          </Link>
          <Link href="/projects" className="nav-link-item">
            Projects
          </Link>
          <Link href="/#contact" className="nav-link-item">
            Contact
          </Link>
        </nav>

        <div className="nav-actions-group">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <Link href="/#contact" className="btn-nav-talk">
            Let&apos;s Talk
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <div className="about-main-container">
        {/* Breadcrumb Bar */}
        <div className="about-breadcrumb">
          <Link href="/">
            <ArrowLeft size={15} />
            <span>Back to Portfolio Home</span>
          </Link>
        </div>

        {/* Profile Hero Layout (Image on LEFT, Introduction on RIGHT) */}
        <section className="about-profile-hero">
          {/* LEFT COLUMN: Profile Image & Personal Badges */}
          <div className="profile-media-column">
            <div className="profile-image-card">
              <div className="profile-photo-wrapper">
                <Image
                  src="/daksh-soni.jpg"
                  alt="Daksh Soni — Computer Science Engineering Student | Full-Stack Developer | AI Enthusiast"
                  fill
                  sizes="(max-width: 820px) 100vw, 360px"
                  priority
                  className="profile-photo-img"
                />
              </div>
              <div className="profile-card-substatus">
                <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                  <span className="status-dot-pulse" />
                  <span className="badge-status-text">Available to build</span>
                </div>
                <span className="badge-location-text">Patan, Gujarat</span>
              </div>
            </div>

            {/* Quick Meta Dock */}
            <div className="profile-social-dock">
              <div className="meta-location">
                <GraduationCap size={15} style={{ color: "var(--primary)" }} />
                <span>CSPIT, CHARUSAT</span>
              </div>
              <div className="social-icons-cluster">
                <a
                  href="https://www.linkedin.com/in/daksh-soni-7ab474372/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dock-icon-btn linkedin"
                  aria-label="Connect with Daksh Soni on LinkedIn"
                  title="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://www.instagram.com/dakshsoni_005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dock-icon-btn instagram"
                  aria-label="Follow Daksh Soni on Instagram (@dakshsoni_005)"
                  title="Instagram (@dakshsoni_005)"
                >
                  <Instagram size={16} />
                </a>
              </div>
            </div>

            {/* Resume Action */}
            <a
              href="/Daksh_Soni_Resume.pdf"
              download
              className="btn-download-resume"
            >
              <Download size={15} />
              <span>Download Résumé</span>
            </a>
          </div>

          {/* RIGHT COLUMN: Name, Professional Title, Introduction & Core Philosophy */}
          <div className="profile-content-column">
            <div className="profile-kicker">
              <Sparkles size={14} />
              <span>ABOUT ME</span>
            </div>

            <h1 className="profile-name-title">
              Daksh Soni<span>.</span>
            </h1>

            <p className="profile-professional-subtitle">
              Computer Science Engineering Student | Full-Stack Developer | AI Enthusiast
            </p>

            {/* Biography */}
            <div className="profile-bio-paragraphs">
              <p>
                Hi, I&apos;m Daksh Soni, a Computer Science Engineering student
                and passionate software developer. I enjoy building modern web
                applications, exploring artificial intelligence, and transforming
                innovative ideas into practical digital solutions.
              </p>
              <p>
                My interests include full-stack development, AI-powered
                applications, backend engineering, and startup innovation. I
                continuously explore new technologies and work on projects that
                solve real-world problems.
              </p>
            </div>

            {/* Core Philosophy Quote Card */}
            <div className="about-philosophy-quote">
              <div className="quote-kicker">
                <Quote size={13} /> CORE PHILOSOPHY
              </div>
              <blockquote className="quote-body">
                &ldquo;I don&apos;t just want to write code. I want to build
                products people remember.&rdquo;
              </blockquote>
              <div className="quote-author-row">
                <b>Daksh Soni</b>
                <span className="dot">•</span>
                <em>Engineering Mindset</em>
              </div>
            </div>

            {/* Focus Pills */}
            <div className="profile-interest-pills">
              <span className="interest-tag-pill">Full-Stack Development</span>
              <span className="interest-tag-pill">AI &amp; RAG Pipelines</span>
              <span className="interest-tag-pill">Backend Architecture</span>
              <span className="interest-tag-pill">Startup Innovation</span>
            </div>
          </div>
        </section>

        {/* Subtle Section Divider */}
        <hr className="about-subtle-divider" />

        {/* FEATURED PROJECTS SECTION */}
        <section className="featured-projects-section">
          <div className="featured-header-row">
            <div className="featured-heading-group">
              <div className="profile-kicker">
                <Code2 size={13} />
                <span>FEATURED PROJECTS</span>
              </div>
              <h2>
                Systems engineered for <em>practical impact.</em>
              </h2>
              <p className="featured-lead-desc">
                A clean showcase of key software solutions I&apos;ve designed across
                smart agriculture, healthcare infrastructure, and academic roadmaps.
              </p>
            </div>

            <Link href="/projects" className="btn-view-all-projects">
              <span>View All 11 Projects Catalog</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* 3-Card Responsive Grid */}
          <div className="featured-projects-grid">
            {featuredProjects.map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.id} className="about-project-card">
                  <div>
                    {/* Small Project Image / Thumbnail */}
                    <div className="project-thumbnail-box">
                      <Image
                        src={item.image}
                        alt={`${item.name} project cover`}
                        fill
                        className="project-thumbnail-img"
                        sizes="(max-width: 820px) 100vw, 360px"
                      />
                    </div>

                    <div className="project-card-header">
                      <span className="project-domain-pill">
                        <IconComp size={13} />
                        <span>{item.domain}</span>
                      </span>
                    </div>

                    <h3 className="project-title">{item.name}</h3>

                    <p className="project-desc-text">{item.description}</p>
                  </div>

                  <div>
                    {/* Technology Tags */}
                    <div className="project-tech-tags">
                      {item.technologies.map((tech) => (
                        <span key={tech} className="tech-pill-badge">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Link */}
                    <div className="project-card-footer">
                      {item.isExternal ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-action-link primary-action"
                        >
                          <span>Live Website</span>
                          <ExternalLink size={13} />
                        </a>
                      ) : (
                        <Link
                          href={`/projects`}
                          className="project-action-link primary-action"
                        >
                          <span>View Specifications</span>
                          <ArrowUpRight size={14} />
                        </Link>
                      )}

                      <Link href="/projects" className="project-action-link">
                        <span>All Details</span>
                        <ArrowUpRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom Banner */}
        <div className="about-footer-banner">
          <div className="footer-banner-text">
            <h3>Let&apos;s build something meaningful together.</h3>
            <p>
              Open for full-stack engineering internships, AI projects, and innovative software collaborations.
            </p>
          </div>
          <div className="footer-banner-actions">
            <Link href="/#contact" className="btn-talk-action">
              <span>Get In Touch</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Site Footer */}
        <footer className="about-site-footer">
          <span>
            <MapPin size={13} style={{ display: "inline", verticalAlign: "middle" }} /> Patan, Gujarat, India · CSE @ CHARUSAT
          </span>
          <div className="footer-social-links">
            <a
              href="https://www.linkedin.com/in/daksh-soni-7ab474372/"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
            >
              <Linkedin size={15} /> LinkedIn
            </a>
            <a
              href="https://www.instagram.com/dakshsoni_005"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
            >
              <Instagram size={15} /> Instagram
            </a>
          </div>
          <span>© 2026 Daksh Soni</span>
        </footer>
      </div>
    </main>
  );
}
