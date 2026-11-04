"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  GraduationCap,
  MapPin,
  Sparkles,
  Code2,
  Cpu,
  Compass,
  Rocket,
  Heart,
  Quote,
  Sun,
  Moon,
  Linkedin,
  Instagram,
  ArrowRight,
  CheckCircle2,
  Calendar,
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

  return (
    <main className="portfolio-shell about-page-wrap">
      <style>{`
        .about-page-wrap {
          min-height: 100vh;
          background: var(--background);
          color: var(--foreground);
          overflow-x: hidden;
        }

        /* Top Nav */
        .about-page-wrap .site-nav {
          max-width: 1380px;
          margin: 0 auto;
          padding: 22px 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border);
          position: sticky;
          top: 0;
          background: var(--nav-bg, rgba(9, 10, 15, 0.85));
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          z-index: 100;
        }

        html[data-theme="light"] .about-page-wrap .site-nav {
          background: rgba(251, 248, 242, 0.88);
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

        .about-page-wrap .nav-action-btns {
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

        .about-page-wrap .btn-contact-nav {
          padding: 8px 18px;
          border-radius: 9999px;
          background: var(--primary);
          color: #090a0f;
          font-size: 12.5px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .about-page-wrap .btn-contact-nav:hover {
          background: #edd39a;
          transform: translateY(-1px);
        }

        /* Container */
        .about-container {
          max-width: 1120px;
          margin: 0 auto;
          padding: 60px 32px 100px;
        }

        /* Back Button Bar */
        .about-back-bar {
          margin-bottom: 34px;
        }

        .about-back-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 12.5px;
          font-weight: 600;
          color: var(--muted);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .about-back-link:hover {
          color: var(--primary);
        }

        /* Hero Section */
        .about-hero-section {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 48px;
          align-items: center;
          padding-bottom: 54px;
          border-bottom: 1px solid var(--border);
        }

        .about-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--primary);
          font-weight: 700;
          margin-bottom: 16px;
        }

        .about-hero-title {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(38px, 4.5vw, 56px);
          line-height: 1.08;
          letter-spacing: -1.8px;
          margin: 0 0 20px;
          color: var(--foreground);
          font-weight: 400;
        }

        .about-hero-title em {
          font-family: Georgia, serif;
          font-style: italic;
          color: var(--primary);
        }

        .about-hero-subtitle {
          font-size: 15px;
          line-height: 1.7;
          color: var(--muted);
          margin: 0 0 24px;
          max-width: 580px;
        }

        .about-hero-pills {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .about-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 12px;
          background: rgba(226, 194, 134, 0.08);
          border: 1px solid rgba(226, 194, 134, 0.25);
          color: var(--foreground);
        }

        .about-pill svg {
          color: var(--primary);
        }

        /* Quick Stat Card (Hero Right) */
        .about-quick-profile-card {
          background: var(--card);
          border: 1px solid var(--card-border);
          border-radius: 16px;
          padding: 30px 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.25);
        }

        html[data-theme="light"] .about-quick-profile-card {
          background: #ffffff;
          border-color: #e2e8f0;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05);
        }

        .profile-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .profile-avatar-initials {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary) 0%, #c49e53 100%);
          color: #090a0f;
          font-family: Georgia, serif;
          font-size: 22px;
          font-weight: 700;
          display: grid;
          place-items: center;
          box-shadow: 0 6px 18px rgba(226, 194, 134, 0.35);
        }

        .profile-meta-title h3 {
          margin: 0;
          font-size: 18px;
          font-weight: 700;
          color: var(--foreground);
        }

        .profile-meta-title p {
          margin: 3px 0 0;
          font-size: 12.5px;
          color: var(--primary);
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        }

        .profile-facts-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 16px 0;
        }

        .fact-item {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          font-size: 13px;
          gap: 12px;
        }

        .fact-label {
          color: var(--muted);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-family: ui-monospace, monospace;
        }

        .fact-value {
          font-weight: 600;
          color: var(--foreground);
          text-align: right;
        }

        .profile-social-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .btn-profile-social {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px 14px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-profile-social.linkedin {
          background: rgba(10, 102, 194, 0.12);
          border: 1px solid rgba(10, 102, 194, 0.3);
          color: #0a66c2;
        }

        .btn-profile-social.linkedin:hover {
          background: #0a66c2;
          color: #ffffff;
        }

        .btn-profile-social.instagram {
          background: rgba(225, 48, 108, 0.12);
          border: 1px solid rgba(225, 48, 108, 0.3);
          color: #e1306c;
        }

        .btn-profile-social.instagram:hover {
          background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
          color: #ffffff;
          border-color: transparent;
        }

        /* Core Philosophy Quote Block */
        .about-philosophy-callout {
          margin: 50px 0;
          padding: 30px 36px;
          background: rgba(226, 194, 134, 0.05);
          border-left: 4px solid var(--primary);
          border-top: 1px solid var(--card-border);
          border-right: 1px solid var(--card-border);
          border-bottom: 1px solid var(--card-border);
          border-radius: 0 14px 14px 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        html[data-theme="light"] .about-philosophy-callout {
          background: #fbf8f2;
          border-color: #e5ded3;
          border-left-color: var(--primary);
        }

        .about-philosophy-kicker {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 11px;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: var(--primary);
          font-weight: 700;
        }

        .about-philosophy-text {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(21px, 2.5vw, 27px);
          line-height: 1.45;
          font-style: italic;
          color: var(--foreground);
          margin: 0;
        }

        .about-philosophy-author {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: ui-monospace, monospace;
          font-size: 12px;
          color: var(--muted);
        }

        .about-philosophy-author b {
          color: var(--foreground);
          font-weight: 700;
        }

        .about-philosophy-author span.dot {
          color: var(--primary);
        }

        .about-philosophy-author em {
          font-style: normal;
          color: var(--primary);
        }

        /* Narrative Story Sections */
        .about-story-section {
          padding: 30px 0 60px;
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        .story-block {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 36px;
          align-items: baseline;
        }

        .story-block-label {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .story-label-kicker {
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 11px;
          letter-spacing: 1.2px;
          color: var(--primary);
          text-transform: uppercase;
          font-weight: 700;
        }

        .story-label-title {
          font-family: Georgia, serif;
          font-size: 24px;
          font-weight: 600;
          color: var(--foreground);
          letter-spacing: -0.5px;
          margin: 0;
        }

        .story-block-body {
          font-size: 15px;
          line-height: 1.8;
          color: var(--muted);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .story-block-body p {
          margin: 0;
        }

        .story-block-body strong {
          color: var(--foreground);
          font-weight: 600;
        }

        /* 3-Pillar Cards Grid */
        .about-pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 10px;
        }

        .pillar-card {
          background: var(--card);
          border: 1px solid var(--card-border);
          border-radius: 12px;
          padding: 26px 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        html[data-theme="light"] .pillar-card {
          background: #ffffff;
          border-color: #e2e8f0;
        }

        .pillar-card:hover {
          transform: translateY(-4px);
          border-color: rgba(226, 194, 134, 0.45);
        }

        .pillar-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(226, 194, 134, 0.1);
          border: 1px solid rgba(226, 194, 134, 0.25);
          color: var(--primary);
          display: grid;
          place-items: center;
        }

        .pillar-card h4 {
          margin: 0;
          font-size: 16px;
          font-weight: 700;
          color: var(--foreground);
          letter-spacing: -0.2px;
        }

        .pillar-card p {
          margin: 0;
          font-size: 13.5px;
          line-height: 1.65;
          color: var(--muted);
        }

        /* Bottom Callout Banner */
        .about-bottom-cta {
          margin-top: 30px;
          padding: 38px 44px;
          border-radius: 14px;
          background: var(--card);
          border: 1px solid var(--card-border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        html[data-theme="light"] .about-bottom-cta {
          background: #ffffff;
          border-color: #e2e8f0;
        }

        .cta-text-group h3 {
          margin: 0 0 6px;
          font-family: Georgia, serif;
          font-size: 26px;
          color: var(--foreground);
          letter-spacing: -0.5px;
        }

        .cta-text-group p {
          margin: 0;
          font-size: 14px;
          color: var(--muted);
        }

        .cta-action-btns {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn-primary-explore {
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

        .btn-primary-explore:hover {
          background: #edd39a;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(226, 194, 134, 0.3);
        }

        .btn-secondary-contact {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 22px;
          border-radius: 8px;
          border: 1px solid var(--card-border);
          color: var(--foreground);
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-secondary-contact:hover {
          border-color: var(--primary);
          color: var(--primary);
        }

        /* Responsive */
        @media (max-width: 960px) {
          .about-hero-section {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .story-block {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .about-pillars-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 680px) {
          .about-page-wrap .site-nav {
            padding: 16px 20px;
          }
          .about-page-wrap .nav-links-row {
            display: none;
          }
          .about-container {
            padding: 36px 20px 80px;
          }
          .about-philosophy-callout {
            padding: 22px 20px;
          }
          .about-bottom-cta {
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

        <div className="nav-action-btns">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <Link href="/#contact" className="btn-contact-nav">
            Get In Touch
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <div className="about-container">
        {/* Back Link */}
        <div className="about-back-bar">
          <Link href="/" className="about-back-link">
            <ArrowLeft size={15} />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="about-hero-section">
          <div>
            <div className="about-hero-eyebrow">
              <Sparkles size={14} />
              <span>01 — THE DEVELOPER BEHIND THE CODE</span>
            </div>
            <h1 className="about-hero-title">
              Engineering thoughtful systems with <em>curiosity &amp; intent.</em>
            </h1>
            <p className="about-hero-subtitle">
              I&apos;m Daksh Soni, a Computer Science &amp; Engineering undergrad at
              CHARUSAT. I bridge the gap between abstract algorithmic ideas and
              real-world products that solve genuine everyday friction.
            </p>
            <div className="about-hero-pills">
              <span className="about-pill">
                <GraduationCap size={14} /> B.Tech CSE @ CSPIT, CHARUSAT
              </span>
              <span className="about-pill">
                <MapPin size={14} /> Patan, Gujarat, India
              </span>
              <span className="about-pill">
                <Code2 size={14} /> Full-Stack &amp; AI Engineering
              </span>
            </div>
          </div>

          {/* Quick Snapshot Card */}
          <div className="about-quick-profile-card">
            <div className="profile-card-header">
              <div className="profile-avatar-initials">DS</div>
              <div className="profile-meta-title">
                <h3>Daksh Soni</h3>
                <p>@25csdaksh • CHARUSAT</p>
              </div>
            </div>

            <div className="profile-facts-list">
              <div className="fact-item">
                <span className="fact-label">University</span>
                <span className="fact-value">CHARUSAT, CSPIT</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Specialization</span>
                <span className="fact-value">Computer Science &amp; Engg.</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Primary Stack</span>
                <span className="fact-value">Next.js, Python, TypeScript</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Focus Areas</span>
                <span className="fact-value">RAG AI, FinTech, Hospital ERP</span>
              </div>
            </div>

            <div className="profile-social-actions">
              <a
                href="https://www.linkedin.com/in/daksh-soni-7ab474372/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-profile-social linkedin"
              >
                <Linkedin size={15} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/dakshsoni_005"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-profile-social instagram"
              >
                <Instagram size={15} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </section>

        {/* Core Philosophy Callout Block */}
        <section className="about-philosophy-callout">
          <div className="about-philosophy-kicker">
            <Quote size={14} />
            <span>CORE PHILOSOPHY</span>
          </div>
          <blockquote className="about-philosophy-text">
            &ldquo;I don&apos;t just want to write code. I want to build products
            people remember.&rdquo;
          </blockquote>
          <div className="about-philosophy-author">
            <b>Daksh Soni</b>
            <span className="dot">•</span>
            <em>Engineering Mindset</em>
          </div>
        </section>

        {/* Narrative Journey */}
        <section className="about-story-section">
          {/* Block 1: The Beginning */}
          <div className="story-block">
            <div className="story-block-label">
              <span className="story-label-kicker">CHAPTER 01</span>
              <h2 className="story-label-title">The Spark &amp; Curiosity</h2>
            </div>
            <div className="story-block-body">
              <p>
                My journey into computing began with a simple question:{" "}
                <strong>how do millions of lines of invisible logic translate into things people use every day?</strong>{" "}
                From writing my earliest terminal programs in C to exploring data structures
                and Python scripting, every problem solved felt like finding the missing piece
                of a giant puzzle.
              </p>
              <p>
                As I entered <strong>CSPIT at CHARUSAT</strong>, that curiosity turned into
                a rigorous commitment to building full-scale applications. I realized
                that learning syntax was only the baseline—the real art is designing
                systems that handle edge cases gracefully, maintain clean architecture, and
                provide seamless user experiences.
              </p>
            </div>
          </div>

          {/* Block 2: What I Build & Why */}
          <div className="story-block">
            <div className="story-block-label">
              <span className="story-label-kicker">CHAPTER 02</span>
              <h2 className="story-label-title">Real-World Engineering</h2>
            </div>
            <div className="story-block-body">
              <p>
                Rather than building generic clones, I focus on solving problems
                observed in local agriculture, healthcare operations, and student productivity:
              </p>
              <p>
                In <strong>StudyLM / AdhyayanLM</strong>, I implemented document-grounded
                Retrieval-Augmented Generation (RAG) with vector databases so students could
                study complex textbooks with verifiable citations without hallucinations.
                In <strong>HisabSetu</strong>, I engineered an offline-first financial tracker
                compiled to a native Android APK with encrypted cloud sync.
              </p>
              <p>
                Whether it is building multi-role hospital ERPs with NestJS and Redis queues
                (<strong>Sanjeevni AI</strong>) or auditing clinical trial risks for the
                <strong> IBM BoB AI Innovation Hackathon 2026</strong>, my work is always
                grounded in real impact.
              </p>
            </div>
          </div>

          {/* Block 3: Engineering Pillars */}
          <div className="story-block">
            <div className="story-block-label">
              <span className="story-label-kicker">CHAPTER 03</span>
              <h2 className="story-label-title">Guiding Principles</h2>
            </div>
            <div>
              <div className="about-pillars-grid">
                <div className="pillar-card">
                  <div className="pillar-icon-box">
                    <Compass size={20} />
                  </div>
                  <h4>Product-First Mindset</h4>
                  <p>
                    Code is only a means to an end. Understanding the human workflow
                    and friction always precedes picking the technical architecture.
                  </p>
                </div>

                <div className="pillar-card">
                  <div className="pillar-icon-box">
                    <Cpu size={20} />
                  </div>
                  <h4>AI Grounded in Truth</h4>
                  <p>
                    Deploying generative AI with strict safety guardrails, verified source
                    citations, and domain-specific confidence scoring.
                  </p>
                </div>

                <div className="pillar-card">
                  <div className="pillar-icon-box">
                    <Rocket size={20} />
                  </div>
                  <h4>Clean Scalability</h4>
                  <p>
                    Writing modular TypeScript, structuring relational schemas with
                    referential integrity, and designing responsive interfaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Callout Banner */}
        <div className="about-bottom-cta">
          <div className="cta-text-group">
            <h3>Interested in collaborating?</h3>
            <p>
              Explore my complete catalog of 11 projects or reach out for internships &amp; software development.
            </p>
          </div>
          <div className="cta-action-btns">
            <Link href="/projects" className="btn-primary-explore">
              <span>Explore All 11 Projects</span>
              <ArrowRight size={15} />
            </Link>
            <Link href="/#contact" className="btn-secondary-contact">
              <span>Get In Touch</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
