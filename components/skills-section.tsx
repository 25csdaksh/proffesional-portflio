"use client";

import { useState, useMemo } from "react";
import {
  skillCategories,
  skillsData,
  type SkillCategory,
  type SkillItem,
} from "@/data/skills-data";
import { SkillIcon } from "@/components/skill-icons";
import { Terminal, Code2 } from "lucide-react";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);

  // Filter skills based on category
  const filteredSkills = useMemo(() => {
    return skillsData.filter((skill) => {
      return activeCategory === "all" || skill.allCategories.includes(activeCategory);
    });
  }, [activeCategory]);

  // Count per category
  const categoryCounts = useMemo(() => {
    const counts: Record<SkillCategory, number> = {
      all: skillsData.length,
      languages: 0,
      frontend: 0,
      backend: 0,
      database: 0,
      "ai-ml": 0,
      tools: 0,
    };

    skillsData.forEach((skill) => {
      skill.allCategories.forEach((cat) => {
        if (cat !== "all") {
          counts[cat] = (counts[cat] || 0) + 1;
        }
      });
    });

    return counts;
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="section-wrap">
        <div className="skills-dashboard-layout">
          {/* ===================================================================
              LEFT COLUMN: Skills Command Center Introduction & Dev Terminal
             =================================================================== */}
          <div className="skills-intro-col" data-reveal>
            <div className="section-kicker">
              <span>02</span> — MY TOOLKIT
            </div>

            <h2 className="skills-editorial-heading">
              The tools behind<br />
              <em>what I build.</em>
            </h2>

            <p className="skills-lead-desc">
              From programming fundamentals to full-stack development and AI-powered
              applications, these are the technologies I use to turn ideas into
              real products.
            </p>

            {/* Developer Badge */}
            <div className="dev-identity-badge">
              <span className="live-status-dot" aria-hidden="true" />
              <span className="badge-text">
                CSE Student / Developer <span>·</span> CSPIT, CHARUSAT
              </span>
            </div>

            {/* Developer Terminal Box */}
            <div className="dev-terminal-card">
              <div className="dev-terminal-bar">
                <div className="terminal-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="terminal-title">
                  <Terminal size={12} className="terminal-icon" />
                  <span>daksh@workspace:~ (stack-v2.6)</span>
                </div>
              </div>

              <div className="dev-terminal-body">
                <div className="terminal-line command-line">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-cmd">inspect-stack --summary</span>
                </div>

                <div className="terminal-response">
                  <div className="term-stat-item">
                    <span className="term-key">[SYSTEM]</span>
                    <span className="term-val highlight">Ready for High-Impact Roles</span>
                  </div>
                  <div className="term-stat-item">
                    <span className="term-key">[TOTAL]</span>
                    <span className="term-val">{skillsData.length} Core Technologies Deployed</span>
                  </div>
                  <div className="term-stat-item">
                    <span className="term-key">[FOCUS]</span>
                    <span className="term-val">Full-Stack Web, AI/RAG &amp; Scalable Systems</span>
                  </div>
                  <div className="term-stat-item">
                    <span className="term-key">[STATUS]</span>
                    <span className="term-val term-val-accent">Production Ready &amp; Actively Evolving</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="skills-quick-metrics">
              <div className="quick-metric-item">
                <span className="metric-number">30+</span>
                <span className="metric-label">Technologies</span>
              </div>
              <div className="quick-metric-divider" />
              <div className="quick-metric-item">
                <span className="metric-number">6</span>
                <span className="metric-label">Core Domains</span>
              </div>
              <div className="quick-metric-divider" />
              <div className="quick-metric-item">
                <span className="metric-number">100%</span>
                <span className="metric-label">Hands-On Built</span>
              </div>
            </div>
          </div>

          {/* ===================================================================
              RIGHT COLUMN: Compact & Modern Icon-First Grid
             =================================================================== */}
          <div className="skills-interactive-col" data-reveal>
            {/* Category Filter Tabs */}
            <div className="skills-controls-header">
              <div
                className="skills-category-tabs"
                role="tablist"
                aria-label="Filter skills by domain"
              >
                {skillCategories.map((category) => {
                  const isActive = activeCategory === category.id;
                  const count = categoryCounts[category.id];

                  return (
                    <button
                      key={category.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      tabIndex={0}
                      className={`skill-tab-pill ${isActive ? "active" : ""}`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      <span className="tab-pill-label">{category.label}</span>
                      <span className="tab-pill-badge">{count}</span>
                    </button>
                  );
                })}
              </div>

              {/* Status Header with Dynamic Hover Detail */}
              <div className="skills-status-strip">
                <span className="skills-count-text">
                  Showing <strong>{filteredSkills.length}</strong> technologies
                </span>

                {hoveredSkill ? (
                  <span className="skills-hover-detail-preview">
                    <strong>{hoveredSkill.name}</strong> · <span className="preview-level">{hoveredSkill.level}</span> — {hoveredSkill.tagline}
                  </span>
                ) : (
                  <span className="skills-hover-helper-text">
                    Hover on any technology for details
                  </span>
                )}
              </div>
            </div>

            {/* Clean Icon-First Skills Grid */}
            <div
              className="skills-icons-matrix"
              role="region"
              aria-label="Technology skills showcase"
            >
              {filteredSkills.map((skill: SkillItem) => (
                <div
                  key={skill.id}
                  className={`skill-matrix-tile ${skill.featured ? "is-featured" : ""}`}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  title={`${skill.name} (${skill.level})\n${skill.tagline}\n${skill.description}`}
                  tabIndex={0}
                >
                  <div className="skill-matrix-icon-box" aria-hidden="true">
                    <SkillIcon id={skill.id} size={30} />
                  </div>
                  <span className="skill-matrix-name">{skill.name}</span>
                  {skill.featured && (
                    <span className="skill-featured-dot" title="Core Daily Stack" />
                  )}
                </div>
              ))}
            </div>

            {/* Empty State Fallback (if filtered to 0) */}
            {filteredSkills.length === 0 && (
              <div className="skills-empty-state">
                <Code2 size={28} className="empty-state-icon" />
                <p>No technologies found for the selected filter.</p>
                <button
                  type="button"
                  className="btn-reset-filter"
                  onClick={() => setActiveCategory("all")}
                >
                  View All Technologies
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
