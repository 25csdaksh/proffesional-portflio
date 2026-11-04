"use client";

import Link from "next/link";
import {
  ExternalLink,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Cpu,
  Smartphone,
  Layers,
  Database,
  Building2,
  Stethoscope,
  Wheat,
  ShieldCheck,
  Gem,
} from "lucide-react";
import { projectsData, type Project } from "@/lib/projects";

interface FeaturedProjectInfo {
  id: string;
  domain: string;
  domainIcon: typeof Cpu;
  role: string;
  oneToTwoLineDesc: string;
  highlightPills: string[];
}

const featuredProjectsMeta: FeaturedProjectInfo[] = [
  {
    id: "studylm",
    domain: "AI & Knowledge Retrieval",
    domainIcon: Sparkles,
    role: "AI Study & Research Platform",
    oneToTwoLineDesc:
      "Document-grounded research platform using Retrieval-Augmented Generation (RAG) to generate verifiable summaries, interactive flashcards, and conceptual mind maps.",
    highlightPills: ["Gemini AI", "Vector Search", "RAG Pipeline", "React"],
  },
  {
    id: "hisabsetu",
    domain: "FinTech & Mobile Engineering",
    domainIcon: Smartphone,
    role: "Cross-Platform Expense & Budget System",
    oneToTwoLineDesc:
      "Personal finance tracker with visual monthly spending velocity charts, recurring budget goal alerts, encrypted Supabase cloud sync, and an Android APK build.",
    highlightPills: ["Supabase", "PostgreSQL", "Capacitor Mobile", "React"],
  },
  {
    id: "sanjeevni-ai",
    domain: "Enterprise HealthTech & ERP",
    domainIcon: Stethoscope,
    role: "Hospital ERP & Clinical Diagnostic System",
    oneToTwoLineDesc:
      "Enterprise healthcare platform coordinating OPD/IPD bed allocation, pharmacy prescriptions, and high-concurrency background AI parsing of medical lab reports.",
    highlightPills: ["NestJS", "PostgreSQL", "Prisma", "Redis & BullMQ"],
  },
  {
    id: "vidyapath",
    domain: "EdTech & Career Platform",
    domainIcon: Layers,
    role: "Engineering Academic & Career Roadmap",
    oneToTwoLineDesc:
      "Full-stack student platform connecting 4-year computer science coursework with placement interview kits, semester-wise archives, and an integrated AI tutor.",
    highlightPills: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: "krishiseva",
    domain: "AgriTech & Computer Vision",
    domainIcon: Wheat,
    role: "Edge AI Smart Agriculture Advisory",
    oneToTwoLineDesc:
      "Agricultural intelligence platform deploying edge MobileNetV2 vision models for on-field crop disease detection with localized Gujarat meteorological alerts.",
    highlightPills: ["PyTorch", "MobileNetV2", "Edge Inference", "Gemini AI"],
  },
  {
    id: "trialguard-ai",
    domain: "Clinical Trial Monitoring & AI",
    domainIcon: ShieldCheck,
    role: "Protocol Deviation & Risk Intelligence",
    oneToTwoLineDesc:
      "Proactive risk detection system engineered for the IBM BoB AI Innovation Hackathon 2026 to automatically audit clinical trial protocol compliance and deviations.",
    highlightPills: ["Python", "FastAPI", "Risk Modeling", "IBM Hackathon"],
  },
  {
    id: "swayur-agrotech",
    domain: "AgriBusiness & Commerce",
    domainIcon: Building2,
    role: "Bio-AgriTech Commercial Portal",
    oneToTwoLineDesc:
      "Authoritative distributor pipeline and certified product catalog for sustainable bio-fertilizers, soil revitalisation data, and B2B dealer workflows.",
    highlightPills: ["AgriTech", "E-Commerce", "React", "Next.js"],
  },
  {
    id: "devkrupa-jewellers",
    domain: "Luxury E-Commerce & Retail",
    domainIcon: Gem,
    role: "Fine Jewellery & Bullion Catalog",
    oneToTwoLineDesc:
      "E-commerce storefront showcasing handcrafted gold, diamond, and silver collections with festive making-charge discount engines and bespoke order booking.",
    highlightPills: ["E-Commerce", "React", "UI/UX", "Tailwind"],
  },
];

export function HomeProjectsSection() {
  const projectsList = featuredProjectsMeta
    .map((meta) => {
      const proj = projectsData.find((p) => p.id === meta.id);
      return proj ? { ...proj, ...meta } : null;
    })
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section id="projects" className="no-photo-projects-section">
      <style>{`
        .no-photo-projects-section {
          padding: 105px 0 115px;
          background: var(--background);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          position: relative;
        }
        .no-photo-projects-section .section-header-wrap {
          max-width: 1400px;
          margin: 0 auto 40px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 28px;
          flex-wrap: wrap;
          padding: 0 32px;
        }
        .no-photo-projects-section .header-title-box h2 {
          font-family: var(--font-heading), 'Outfit', sans-serif;
          font-size: clamp(38px, 5vw, 56px);
          line-height: 1.05;
          letter-spacing: -1.5px;
          margin: 16px 0 12px;
          font-weight: 700;
          color: var(--foreground);
        }
        .no-photo-projects-section .header-title-box h2 em {
          font-family: var(--font-heading), 'Outfit', sans-serif;
          font-style: normal;
          color: var(--golden-elixir);
        }
        .no-photo-projects-section .header-lead-desc {
          font-size: 14px;
          line-height: 1.7;
          color: var(--muted);
          max-width: 500px;
          margin: 0;
        }
        .no-photo-projects-section .btn-top-explore {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 9999px;
          background: rgba(226, 186, 101, 0.1);
          border: 1px solid rgba(226, 186, 101, 0.35);
          color: var(--golden-elixir);
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .no-photo-projects-section .btn-top-explore:hover {
          background: var(--golden-elixir);
          color: var(--velvet-eclipse-dark);
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(226, 186, 101, 0.3);
        }
        html[data-theme="light"] .no-photo-projects-section .btn-top-explore {
          background: rgba(62, 26, 62, 0.08);
          border-color: rgba(62, 26, 62, 0.25);
          color: #3E1A3E;
        }
        html[data-theme="light"] .no-photo-projects-section .btn-top-explore:hover {
          background: #3E1A3E;
          color: #F4ECDF;
        }
        .no-photo-projects-section .info-cards-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
          padding: 0 32px;
        }
        .no-photo-projects-section .info-project-card {
          background: var(--card);
          border: 1px solid var(--card-border);
          border-radius: 12px;
          padding: 22px 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 15px;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.25s ease,
                      box-shadow 0.25s ease,
                      background 0.25s ease;
          box-sizing: border-box;
          position: relative;
        }
        html[data-theme="light"] .no-photo-projects-section .info-project-card {
          background: #FAF6F0;
          border-color: #D2B19E;
          box-shadow: 0 4px 14px rgba(62, 26, 62, 0.04);
        }
        .no-photo-projects-section .info-project-card:hover {
          transform: translateY(-4px);
          border-color: var(--golden-elixir);
          box-shadow: 0 16px 36px rgba(36, 15, 36, 0.45);
          background: #3E1A3E;
        }
        html[data-theme="light"] .no-photo-projects-section .info-project-card:hover {
          background: #E6D4C6;
          border-color: #3E1A3E;
          box-shadow: 0 12px 28px rgba(62, 26, 62, 0.12);
        }
        .no-photo-projects-section .card-meta-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }
        .no-photo-projects-section .card-domain-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 9.5px;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          color: var(--primary);
          font-weight: 600;
        }
        .no-photo-projects-section .card-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 9px;
          padding: 2.5px 8px;
          border-radius: 9999px;
          font-weight: 600;
          white-space: nowrap;
        }
        .no-photo-projects-section .status-live-pill {
          background: rgba(16, 185, 129, 0.12);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }
        .no-photo-projects-section .status-dev-pill {
          background: rgba(226, 194, 134, 0.1);
          color: var(--primary);
          border: 1px solid rgba(226, 194, 134, 0.25);
        }
        .no-photo-projects-section .status-hackathon-pill {
          background: rgba(168, 85, 247, 0.12);
          color: #c084fc;
          border: 1px solid rgba(168, 85, 247, 0.3);
        }
        .no-photo-projects-section .status-dot-indicator {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: currentColor;
        }
        .no-photo-projects-section .card-main-content {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .no-photo-projects-section .card-title-row {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 8px;
        }
        .no-photo-projects-section .card-title-row h3 {
          font-family: var(--font-heading), 'Outfit', sans-serif;
          font-size: 19px;
          font-weight: 700;
          letter-spacing: -0.3px;
          color: var(--foreground);
          margin: 0;
          line-height: 1.25;
        }
        html[data-theme="light"] .no-photo-projects-section .card-title-row h3 {
          color: #3E1A3E;
        }
        .no-photo-projects-section .card-index-num {
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 11px;
          color: var(--golden-elixir);
          font-weight: 600;
        }
        .no-photo-projects-section .card-role-subtitle {
          font-size: 11.5px;
          font-weight: 500;
          color: var(--golden-elixir);
          margin: 0;
          letter-spacing: 0.1px;
        }
        html[data-theme="light"] .no-photo-projects-section .card-role-subtitle {
          color: #8E7365;
        }
        .no-photo-projects-section .one-two-line-box {
          background: rgba(36, 15, 36, 0.5);
          border: 1px solid rgba(213, 193, 220, 0.15);
          border-radius: 8px;
          padding: 11px 13px;
          margin: 4px 0 2px;
        }
        html[data-theme="light"] .no-photo-projects-section .one-two-line-box {
          background: #F4ECDF;
          border-color: #D2B19E;
        }
        .no-photo-projects-section .one-two-line-box p {
          font-size: 12.5px;
          line-height: 1.6;
          color: var(--sunlit-parchment);
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        html[data-theme="light"] .no-photo-projects-section .one-two-line-box p {
          color: #392F25;
        }
        .no-photo-projects-section .card-tech-pills {
          display: flex;
          align-items: center;
          gap: 5px;
          flex-wrap: wrap;
        }
        .no-photo-projects-section .tech-pill {
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 9.5px;
          padding: 3px 7px;
          border-radius: 4px;
          background: rgba(213, 193, 220, 0.12);
          border: 1px solid rgba(213, 193, 220, 0.2);
          color: #F4ECDF;
        }
        html[data-theme="light"] .no-photo-projects-section .tech-pill {
          background: #E6D4C6;
          color: #3E1A3E;
          border-color: #D2B19E;
        }
        .no-photo-projects-section .card-actions-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border);
          padding-top: 12px;
          gap: 10px;
        }
        .no-photo-projects-section .btn-live-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: var(--golden-elixir);
          color: var(--velvet-eclipse-dark);
          font-size: 11px;
          font-weight: 700;
          padding: 7px 12px;
          border-radius: 5px;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .no-photo-projects-section .btn-live-link:hover {
          background: var(--golden-elixir-hover);
          transform: translateY(-1px);
        }
        .no-photo-projects-section .btn-specs-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          color: var(--muted);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .no-photo-projects-section .btn-specs-link:hover {
          color: var(--golden-elixir);
        }
        .no-photo-projects-section .bottom-summary-banner {
          max-width: 1400px;
          margin: 36px auto 0;
          padding: 20px 28px;
          background: #341734;
          border: 1px solid #522752;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }
        html[data-theme="light"] .no-photo-projects-section .bottom-summary-banner {
          background: #FAF6F0;
          border-color: #D2B19E;
        }
        .no-photo-projects-section .summary-text-group {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .no-photo-projects-section .summary-badge {
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 10px;
          letter-spacing: 1.2px;
          color: var(--golden-elixir);
          font-weight: 700;
        }
        .no-photo-projects-section .summary-lead {
          font-size: 13px;
          color: var(--muted);
          margin: 0;
        }
        html[data-theme="light"] .no-photo-projects-section .summary-lead {
          color: #392F25;
        }
        .no-photo-projects-section .btn-explore-catalog {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--golden-elixir);
          color: var(--velvet-eclipse-dark);
          font-size: 12px;
          font-weight: 700;
          padding: 10px 20px;
          border-radius: 6px;
          text-decoration: none;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .no-photo-projects-section .btn-explore-catalog:hover {
          background: var(--golden-elixir-hover);
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(226, 186, 101, 0.3);
        }
        @media (max-width: 1240px) {
          .no-photo-projects-section .info-cards-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
          }
        }
        @media (max-width: 680px) {
          .no-photo-projects-section .info-cards-grid {
            grid-template-columns: 1fr;
            padding: 0 16px;
          }
          .no-photo-projects-section .section-header-wrap,
          .no-photo-projects-section .bottom-summary-banner {
            padding-left: 16px;
            padding-right: 16px;
          }
        }
      `}</style>

      <div className="section-header-wrap" data-reveal>
        <div className="header-title-box">
          <div className="section-kicker">
            <span>03</span> — WHAT I BUILD
          </div>
          <h2>
            Real-world systems<br />
            <em>engineered for impact.</em>
          </h2>
          <p className="header-lead-desc">
            A focused breakdown of the software and platforms I develop — from RAG &amp;
            multimodal AI pipelines to enterprise ERPs and full-stack mobile applications.
          </p>
        </div>

        <Link href="/projects" className="btn-top-explore">
          <span>Explore All 11 Projects</span>
          <ArrowRight size={15} />
        </Link>
      </div>

      {/* Information-Only Cards Grid (No Photos / Clean Developer Cards) */}
      <div className="info-cards-grid" data-reveal>
        {projectsList.map((item, index) => {
          const hasLiveUrl = Boolean(item.liveUrl && item.liveUrl.trim());
          const IconComponent = item.domainIcon;

          return (
            <div key={item.id} className="info-project-card">
              <div>
                {/* Top Meta Bar */}
                <div className="card-meta-bar">
                  <div className="card-domain-badge">
                    <IconComponent size={13} />
                    <span>{item.domain}</span>
                  </div>

                  <span
                    className={`card-status-badge ${
                      hasLiveUrl
                        ? "status-live-pill"
                        : item.hackathon
                        ? "status-hackathon-pill"
                        : "status-dev-pill"
                    }`}
                  >
                    <span className="status-dot-indicator" />
                    {hasLiveUrl
                      ? "Live Project"
                      : item.hackathon
                      ? "IBM Hackathon"
                      : item.status}
                  </span>
                </div>

                {/* Main Content */}
                <div className="card-main-content">
                  <div className="card-title-row">
                    <h3>{item.title}</h3>
                    <span className="card-index-num">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="card-role-subtitle">{item.role}</p>

                  {/* 1-2 Lines Information Box */}
                  <div className="one-two-line-box">
                    <p>{item.oneToTwoLineDesc}</p>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="card-tech-pills">
                    {item.highlightPills.map((pill) => (
                      <span key={pill} className="tech-pill">
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="card-actions-bar">
                {hasLiveUrl ? (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-live-link"
                    aria-label={`Open ${item.title} live website`}
                  >
                    <span>Live Website</span>
                    <ExternalLink size={12} />
                  </a>
                ) : (
                  <Link href="/projects" className="btn-specs-link">
                    <span>Architecture &amp; Specs</span>
                    <ArrowUpRight size={13} />
                  </Link>
                )}

                <Link
                  href="/projects"
                  className="btn-specs-link"
                  title="View full project details on projects catalog"
                >
                  <span>Full Details</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Summary Callout */}
      <div className="bottom-summary-banner" data-reveal>
        <div className="summary-text-group">
          <span className="summary-badge">FULL PROJECT REPOSITORY</span>
          <p className="summary-lead">
            Review detailed specifications, technical architectures, and problem statements for all <strong>11 projects</strong>.
          </p>
        </div>
        <Link href="/projects" className="btn-explore-catalog">
          <span>View All 11 Projects Showcase</span>
          <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}
