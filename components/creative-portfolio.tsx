"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { ContactForm } from "@/components/contact-form";
import { SkillsSection } from "@/components/skills-section";
import { HomeProjectsSection } from "@/components/home-projects-section";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram,
  MapPin,
  Moon,
  MoveUpRight,
  Sparkles,
  Sun,
} from "lucide-react";

export function CreativePortfolio() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = (window.localStorage.getItem("portfolio-theme") as "dark" | "light") || "dark";
    root.dataset.theme = savedTheme;
    setTheme(savedTheme);
    root.classList.add("motion-ready");

    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add("is-visible");
                  observer?.unobserve(entry.target);
                }
              });
            },
            { threshold: 0.14, rootMargin: "0px 0px -35px 0px" }
          )
        : null;

    document.querySelectorAll("[data-reveal]").forEach((element) => {
      if (observer) observer.observe(element);
      else element.classList.add("is-visible");
    });

    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = root.scrollHeight - window.innerHeight;
        root.style.setProperty(
          "--scroll-progress",
          `${max > 0 ? (window.scrollY / max) * 100 : 0}%`
        );
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      root.classList.remove("motion-ready");
    };
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("portfolio-theme", next);
    setTheme(next);
  };

  return (
    <main className="portfolio-shell">
      {/* Top progress line */}
      <div className="scroll-progress" aria-hidden="true" />

      {/* Navigation */}
      <header className="site-nav">
        <a href="#home" className="wordmark" aria-label="Daksh Soni home">
          ds<span>.</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
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

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-copy" data-reveal="left">
          <div className="eyebrow">
            <span className="status-dot" /> CSE UNDERGRAD · DEVELOPER{" "}
            <span className="eyebrow-line" />
          </div>

          <h1>
            Daksh<br />
            <span>Soni.</span>
          </h1>

          <p className="hero-intro">
            I&apos;m a Computer Science &amp; Engineering student at CHARUSAT,
            building thoughtful digital experiences across AI, education, finance,
            and commerce.
          </p>

          <div className="hero-actions">
            <a className="button button-dark" href="/projects">
              Explore my work <ArrowDownRight size={17} />
            </a>
            <a
              className="text-link"
              href="/Daksh_Soni_Resume.pdf"
              download
            >
              Download résumé <MoveUpRight size={15} />
            </a>
          </div>

          <div className="hero-location">
            <MapPin size={14} /> Patan, Gujarat, India <span>·</span> CSE @ CHARUSAT
          </div>
        </div>

        <div
          className="hero-art"
          data-reveal="right"
          aria-label="Decorative abstract portrait illustration"
        >
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-sun" />
          <div className="art-card">
            <span className="art-index">PORTFOLIO / 2026</span>
            <span className="art-monogram">
              D<span>S</span>
            </span>
            <span className="art-caption">
              BUILDING WITH<br />
              CURIOSITY<span>✳</span>
            </span>
          </div>
          <span className="art-note">
            A little code.<br />
            A lot of curiosity.
          </span>
          <span className="art-spark spark-a">✳</span>
          <span className="art-spark spark-b">✳</span>
        </div>

        <a className="scroll-cue" href="#about">
          <span /> SCROLL TO EXPLORE
        </a>
      </section>

      {/* Running Ticker */}
      <div className="ticker" aria-label="Curiosity, creativity, and code">
        <div className="ticker-track">
          {Array.from({ length: 4 }, (_, i) => (
            <span key={i}>
              CURIOUS BY NATURE <i>✳</i> BUILT WITH PURPOSE <i>✳</i> ALWAYS
              LEARNING <i>✳</i>
            </span>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="about-section section-wrap">
        <div className="section-kicker" data-reveal>
          <span>01</span> A LITTLE ABOUT ME
        </div>
        <div className="about-content">
          <h2 data-reveal>
            I like making<br />
            the complex <em>click.</em>
          </h2>
          <div className="about-text" data-reveal>
            <p>
              I&apos;m currently pursuing a B.Tech in Computer Science &amp;
              Engineering at CSPIT, CHARUSAT. I enjoy learning how technology
              works, finding patterns in data, and building useful things along the
              way.
            </p>
            <p>
              From my first lines of C to exploring Python and analytics,
              I&apos;m always looking for the next problem that teaches me
              something new.
            </p>
            <div className="interest-row">
              <span>
                <Sparkles size={15} /> Currently curious about
              </span>
              <b>Data analytics · Software · The next big idea</b>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Featured Projects Section */}
      <HomeProjectsSection />

      {/* Contact Section */}
      <footer id="contact" className="contact-section">
        <div className="contact-inner" data-reveal>
          <ContactForm />

          <div className="contact-bottom">
            <span>
              <MapPin size={14} /> Patan, Gujarat, India <span>·</span> CSE @ CHARUSAT
            </span>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/daksh-soni-7ab474372/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="https://www.instagram.com/dakshsoni_005"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={16} /> Instagram
              </a>
            </div>
            <span>© 2026 Daksh Soni</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
