"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Linkedin,
  MapPin,
  Moon,
  Sun,
  X,
  Info,
  Smartphone,
  Clock,
  Sparkles,
  Layers,
  ArrowLeft,
} from "lucide-react";
import { projectsData, type Project, type ProjectCategory } from "@/lib/projects";
import { ContactForm } from "@/components/contact-form";

const categories: ProjectCategory[] = [
  "All Projects",
  "AI / Machine Learning",
  "Full-Stack Web & Mobile",
  "ERP & Business",
];

export default function ProjectsPage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("All Projects");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(
    null
  );

  // Initialize theme from localStorage
  useEffect(() => {
    const root = document.documentElement;
    const savedTheme =
      (window.localStorage.getItem("portfolio-theme") as "dark" | "light") ||
      "dark";
    root.dataset.theme = savedTheme;
    setTheme(savedTheme);

    // Escape key listener for modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("portfolio-theme", next);
    setTheme(next);
  };

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All Projects") {
      return projectsData;
    }
    return projectsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <main className="portfolio-shell projects-page-wrap">
      {/* Navigation */}
      <header className="site-nav">
        <Link href="/" className="wordmark" aria-label="Daksh Soni home">
          ds<span>.</span>
        </Link>

        <nav aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/#skills">Skills</Link>
          <Link
            href="/projects"
            style={{
              color: "var(--primary)",
              borderBottom: "1px solid var(--primary)",
              paddingBottom: "2px",
            }}
          >
            Projects
          </Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            <span>{theme === "dark" ? "Light" : "Dark"}</span>
          </button>

          <a className="nav-cta" href="mailto:dakshsoni1023@gmail.com">
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
        </div>
      </header>

      {/* Projects Page Header */}
      <div className="section-wrap projects-hero-header">
        <div style={{ marginBottom: "16px" }}>
          <Link
            href="/"
            className="text-link"
            style={{ display: "inline-flex", gap: "6px" }}
          >
            <ArrowLeft size={14} /> Back to Homepage
          </Link>
        </div>

        <div className="section-kicker">
          <span>PORTFOLIO ARCHIVE</span> 2026 WORK COLLECTION
        </div>

        <h1
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(42px, 6.5vw, 76px)",
            lineHeight: 1.05,
            letterSpacing: "-2.5px",
            margin: "18px 0 16px",
            fontWeight: 400,
            color: "var(--foreground)",
          }}
        >
          Things I&apos;ve <em>Built.</em>
        </h1>

        <p
          style={{
            maxWidth: "680px",
            fontSize: "15px",
            lineHeight: 1.8,
            color: "var(--muted)",
            margin: "0 0 16px",
          }}
        >
          A collection of projects exploring AI, full-stack development,
          healthcare technology, education, and business solutions.
        </p>

        {/* Dynamic Project Count Badge */}
        <div className="projects-count-pill">
          <span className="status-dot" style={{ width: 6, height: 6 }} />
          <span>
            {projectsData.length} Total Projects · {filteredProjects.length} Displayed
          </span>
        </div>

        {/* Category Filters */}
        <div className="category-filters-bar" role="tablist" aria-label="Project categories">
          {categories.map((category) => {
            const count =
              category === "All Projects"
                ? projectsData.length
                : projectsData.filter((p) => p.category === category).length;
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`category-filter-pill ${isActive ? "is-active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                <span>{category}</span>
                <span className="pill-count">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="section-wrap" style={{ paddingBottom: "60px" }}>
        <div className="project-grid">
          {filteredProjects.map((project, index) => {
            const hasLiveUrl = Boolean(
              project.liveUrl &&
                project.liveUrl.trim() !== "" &&
                project.liveUrl !== "#"
            );

            return (
              <article
                className="project-tile"
                key={project.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {/* Project Art / Thumbnail */}
                  <div
                    className="project-tile-art"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(12, 14, 18, 0.15) 30%, rgba(12, 14, 18, 0.85) 100%), url('${project.image}')`,
                    }}
                  >
                    <span className="tile-index">
                      {project.number} / {String(projectsData.length).padStart(2, "0")}
                    </span>

                    <span className="tile-caption">
                      <span>{project.category}</span>
                      <i>↗</i>
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="project-tile-body">
                    <div className="tile-meta" style={{ flexWrap: "wrap", gap: "6px" }}>
                      <span className="project-status-tag">
                        <span className="status-dot" style={{ width: 5, height: 5 }} />
                        {project.status}
                      </span>
                      {project.hackathon && (
                        <span
                          style={{
                            fontSize: "8px",
                            padding: "3px 6px",
                            borderRadius: "4px",
                            background: "rgba(168, 85, 247, 0.15)",
                            color: "#c084fc",
                            border: "1px solid rgba(168, 85, 247, 0.3)",
                          }}
                        >
                          {project.hackathon}
                        </span>
                      )}
                    </div>

                    <h3 style={{ marginTop: "14px", marginBottom: "8px" }}>
                      {project.title}
                    </h3>

                    {project.brand && (
                      <p
                        style={{
                          fontSize: "11px",
                          fontStyle: "italic",
                          color: "var(--primary)",
                          margin: "0 0 8px",
                        }}
                      >
                        {project.brand}
                      </p>
                    )}

                    <p style={{ minHeight: "65px" }}>{project.description}</p>

                    {/* Tech Stack Tags */}
                    <div className="tag-row" style={{ marginTop: "16px" }}>
                      {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div style={{ padding: "0 26px 22px" }}>
                  <div className="project-card-actions">
                    <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
                      {/* Click Here button */}
                      {hasLiveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-click-here"
                          aria-label={`Visit ${project.title} live website`}
                        >
                          <span>Click Here</span>
                          <ExternalLink size={13} />
                        </a>
                      ) : (
                        <button
                          type="button"
                          disabled
                          className="btn-coming-soon"
                          title="Website URL will be updated soon"
                        >
                          <Clock size={12} />
                          <span>Coming Soon</span>
                        </button>
                      )}

                      {/* Optional Android App Button */}
                      {project.hasAndroidApp && (
                        <a
                          href={project.androidAppUrl || "#"}
                          target={project.androidAppUrl ? "_blank" : undefined}
                          rel={project.androidAppUrl ? "noopener noreferrer" : undefined}
                          onClick={(e) => {
                            if (!project.androidAppUrl) {
                              e.preventDefault();
                              setActiveModalProject(project);
                            }
                          }}
                          className="btn-apk-pill"
                          title="Android APK Build Available"
                        >
                          <Smartphone size={12} />
                          <span>Android App</span>
                        </a>
                      )}
                    </div>

                    {/* View Details Button */}
                    <button
                      type="button"
                      className="btn-details-trigger"
                      onClick={() => setActiveModalProject(project)}
                    >
                      <Info size={13} />
                      <span>View Details</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Project Details Modal */}
      {activeModalProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setActiveModalProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="project-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Thumbnail Banner */}
            <div className="modal-header-banner">
              <img
                src={activeModalProject.image}
                alt={`${activeModalProject.title} banner`}
              />
              <button
                type="button"
                className="modal-close-button"
                onClick={() => setActiveModalProject(null)}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body Content */}
            <div className="modal-body-content">
              <div className="modal-category-row">
                <span className="project-status-tag">
                  <span className="status-dot" style={{ width: 5, height: 5 }} />
                  {activeModalProject.status}
                </span>

                <span
                  style={{
                    fontSize: "9px",
                    letterSpacing: "1px",
                    color: "var(--muted)",
                    fontFamily: "ui-monospace, monospace",
                  }}
                >
                  PROJECT #{activeModalProject.number} · {activeModalProject.category}
                </span>

                {activeModalProject.hackathon && (
                  <span
                    style={{
                      fontSize: "9px",
                      padding: "3px 8px",
                      borderRadius: "4px",
                      background: "rgba(168, 85, 247, 0.15)",
                      color: "#c084fc",
                      border: "1px solid rgba(168, 85, 247, 0.3)",
                    }}
                  >
                    🏆 {activeModalProject.hackathon}
                  </span>
                )}
              </div>

              <h2 id="modal-title" className="modal-project-title">
                {activeModalProject.title}
              </h2>

              {activeModalProject.brand && (
                <p
                  style={{
                    fontSize: "13px",
                    fontStyle: "italic",
                    color: "var(--primary)",
                    margin: "0 0 14px",
                  }}
                >
                  {activeModalProject.brand}
                </p>
              )}

              <p className="modal-description">{activeModalProject.description}</p>

              {/* Project Objectives */}
              {activeModalProject.objectives && (
                <div className="modal-info-block">
                  <h4>Project Objective</h4>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "13px",
                      color: "var(--muted)",
                      lineHeight: 1.7,
                    }}
                  >
                    {activeModalProject.objectives}
                  </p>
                </div>
              )}

              {/* Key Features */}
              {activeModalProject.keyFeatures && (
                <div className="modal-info-block">
                  <h4>Key Capabilities &amp; Features</h4>
                  <ul className="modal-feature-list">
                    {activeModalProject.keyFeatures.map((feat) => (
                      <li key={feat}>{feat}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technology Stack */}
              <div style={{ marginBottom: "24px" }}>
                <h4
                  style={{
                    fontSize: "11px",
                    letterSpacing: "1.2px",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    margin: "0 0 10px",
                    fontWeight: 700,
                  }}
                >
                  Technologies &amp; Architecture
                </h4>
                <div className="tag-row">
                  {activeModalProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: "7px 12px",
                        fontSize: "11px",
                        fontWeight: 500,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="modal-footer-actions">
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {activeModalProject.liveUrl &&
                  activeModalProject.liveUrl.trim() !== "" &&
                  activeModalProject.liveUrl !== "#" ? (
                    <a
                      href={activeModalProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-click-here"
                      style={{ padding: "9px 18px", fontSize: "12px" }}
                    >
                      <span>Live Website</span>
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="btn-coming-soon"
                      style={{ padding: "9px 18px", fontSize: "12px" }}
                    >
                      <Clock size={13} />
                      <span>Live Demo Coming Soon</span>
                    </button>
                  )}

                  {activeModalProject.githubUrl &&
                    activeModalProject.githubUrl.trim() !== "" && (
                      <a
                        href={activeModalProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-details-trigger"
                        style={{ padding: "9px 16px", fontSize: "12px" }}
                      >
                        <Github size={14} />
                        <span>GitHub Repository</span>
                      </a>
                    )}
                </div>

                <button
                  type="button"
                  className="btn-details-trigger"
                  onClick={() => setActiveModalProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer matching portfolio */}
      <footer id="contact" className="contact-section">
        <div className="contact-inner">
          <ContactForm />

          <div className="contact-bottom">
            <span>
              <MapPin size={14} /> Patan, Gujarat, India
            </span>
            <div className="social-links">
              <a
                href="https://github.com/25csdaksh"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/daksh-soni-7ab474372/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
            <span>© 2026 Daksh Soni</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

