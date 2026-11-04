"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowUpRight,
  MapPin,
  MessageCircle,
  ExternalLink,
  Sparkles,
  Instagram,
} from "lucide-react";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  projectType: string;
  budget: string;
  message: string;
  honeypot: string; // Hidden spam defense
}

const initialFormState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  projectType: "Website Development",
  budget: "Not decided",
  message: "",
  honeypot: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [lastSubmitted, setLastSubmitted] = useState<FormState | null>(null);

  // WhatsApp number
  const whatsappNumber = "918799288538";

  // Build formatted WhatsApp message
  const buildWhatsAppUrl = (data: FormState) => {
    const text = `Hello Daksh,
I am contacting you through your portfolio.

Name: ${data.fullName || "Visitor"}
Email: ${data.email || "Not provided"}
Phone: ${data.phone || "Not provided"}
Subject: ${data.subject || "Portfolio Inquiry"}
Project Type: ${data.projectType}
Budget: ${data.budget}

Message:
${data.message || "Hello, I would like to connect with you."}

Please contact me regarding this inquiry.`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setLoading(true);
    setStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setStatusMessage(
          result.emailSent
            ? "Your inquiry has been sent to dakshsoni1023@gmail.com! Daksh will get back to you shortly."
            : result.message || "Thank you! Your inquiry has been received."
        );
        setLastSubmitted({ ...formData });
        setFormData(initialFormState);
      } else {
        setStatus("error");
        setStatusMessage(
          result.error ||
            "Unable to deliver email inquiry right now. You can still message Daksh directly via WhatsApp below."
        );
        setLastSubmitted({ ...formData });
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setStatusMessage(
        "Network connection issue. Please reach out to Daksh directly via WhatsApp below."
      );
      setLastSubmitted({ ...formData });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-component-wrap">
      <div className="contact-grid-layout">
        {/* ===================================================================
            LEFT COLUMN: Get In Touch Overview & Modern Social Logo Buttons
           =================================================================== */}
        <div className="contact-info-col">
          <div className="section-kicker">
            <span>04</span> GET IN TOUCH
          </div>

          <h2 className="contact-main-heading">
            Let&apos;s make<br />
            <em>something matter.</em>
          </h2>

          <p className="contact-col-intro">
            Have a project in mind, an internship opportunity, or want to collaborate
            on full-stack &amp; AI development? Send a message through the form or
            connect with me directly on social channels.
          </p>

          {/* Quick Meta Information Card */}
          <div className="contact-meta-card">
            <div className="meta-row-item">
              <MapPin size={16} className="meta-icon" />
              <span>Patan, Gujarat, India · CSPIT, CHARUSAT University</span>
            </div>
            <div className="meta-row-item">
              <Clock size={16} className="meta-icon" />
              <span>Response time: Usually within 24 hours</span>
            </div>
          </div>

          {/* LinkedIn & Instagram Icon Only Buttons */}
          <div className="contact-social-icons-bar">
            <span className="social-icons-label">Connect with me</span>
            <div className="social-icons-cluster">
              {/* LinkedIn Icon Button */}
              <a
                href="https://www.linkedin.com/in/daksh-soni-7ab474372/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn linkedin-btn"
                aria-label="Connect with Daksh Soni on LinkedIn"
                title="LinkedIn Profile"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Instagram Icon Button */}
              <a
                href="https://www.instagram.com/dakshsoni_005"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn instagram-btn"
                aria-label="Follow Daksh Soni on Instagram (@dakshsoni_005)"
                title="Instagram (@dakshsoni_005)"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* ===================================================================
            RIGHT COLUMN: Sleek Contact Form Card
           =================================================================== */}
        <div className="contact-form-col">
          <div className="contact-form-card">
            <div className="form-card-header">
              <h3 className="form-card-title">Send a Message</h3>
              <p className="form-card-subtitle">
                Fill out the form below. All required fields are marked with an asterisk (*).
              </p>
            </div>

            {/* Success Alert */}
            {status === "success" && (
              <div className="form-alert form-alert-success" role="status">
                <div className="alert-content-wrap">
                  <CheckCircle2 size={18} className="alert-icon-success" />
                  <div style={{ flex: 1 }}>
                    <h5 className="alert-heading">Inquiry Sent Successfully!</h5>
                    <p className="alert-body">{statusMessage}</p>

                    {lastSubmitted && (
                      <div className="whatsapp-followup-box">
                        <p className="whatsapp-followup-text">
                          Want an instant response? You can also send a pre-filled copy directly
                          to Daksh on WhatsApp:
                        </p>
                        <a
                          href={buildWhatsAppUrl(lastSubmitted)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-whatsapp-followup"
                        >
                          <MessageCircle size={15} />
                          <span>Open in WhatsApp (Pre-filled)</span>
                          <ExternalLink size={13} />
                        </a>
                        <small className="whatsapp-helper-note">
                          * Clicking opens WhatsApp with your inquiry pre-filled. Simply tap
                          &quot;Send&quot; to deliver it to Daksh.
                        </small>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Error Alert */}
            {status === "error" && (
              <div className="form-alert form-alert-error" role="alert">
                <div className="alert-content-wrap">
                  <AlertCircle size={18} className="alert-icon-error" />
                  <div style={{ flex: 1 }}>
                    <h5 className="alert-heading">Notice</h5>
                    <p className="alert-body">{statusMessage}</p>

                    {lastSubmitted && (
                      <div style={{ marginTop: "12px" }}>
                        <a
                          href={buildWhatsAppUrl(lastSubmitted)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-whatsapp-followup"
                        >
                          <MessageCircle size={15} />
                          <span>Send via WhatsApp Instead</span>
                          <ExternalLink size={13} />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* Spam Honeypot (hidden from real users) */}
              <div style={{ display: "none" }} aria-hidden="true">
                <label htmlFor="contact_hp">Leave this empty</label>
                <input
                  type="text"
                  id="contact_hp"
                  name="honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={handleChange}
                />
              </div>

              {/* Row 1: Full Name & Email Address */}
              <div className="form-row-2">
                <div className="form-field-group">
                  <label htmlFor="fullName" className="field-label">
                    Full Name <span className="field-required">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="e.g. Alex Johnson"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`field-input ${errors.fullName ? "field-error-border" : ""}`}
                    disabled={loading}
                    required
                  />
                  {errors.fullName && (
                    <span className="field-error-text">{errors.fullName}</span>
                  )}
                </div>

                <div className="form-field-group">
                  <label htmlFor="email" className="field-label">
                    Email Address <span className="field-required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`field-input ${errors.email ? "field-error-border" : ""}`}
                    disabled={loading}
                    required
                  />
                  {errors.email && (
                    <span className="field-error-text">{errors.email}</span>
                  )}
                </div>
              </div>

              {/* Row 2: Phone Number & Subject */}
              <div className="form-row-2">
                <div className="form-field-group">
                  <label htmlFor="phone" className="field-label">
                    Phone Number <span className="field-optional">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="field-input"
                    disabled={loading}
                  />
                </div>

                <div className="form-field-group">
                  <label htmlFor="subject" className="field-label">
                    Subject <span className="field-required">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry / Collaboration"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`field-input ${errors.subject ? "field-error-border" : ""}`}
                    disabled={loading}
                    required
                  />
                  {errors.subject && (
                    <span className="field-error-text">{errors.subject}</span>
                  )}
                </div>
              </div>

              {/* Row 3: Project Type & Estimated Budget */}
              <div className="form-row-2">
                <div className="form-field-group">
                  <label htmlFor="projectType" className="field-label">
                    Project Type <span className="field-required">*</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="field-select"
                    disabled={loading}
                  >
                    <option value="Website Development">Website Development</option>
                    <option value="Full-Stack Development">Full-Stack Development</option>
                    <option value="AI / Machine Learning">AI / Machine Learning</option>
                    <option value="Mobile Application">Mobile Application</option>
                    <option value="ERP / Business Software">ERP / Business Software</option>
                    <option value="Freelance Collaboration">Freelance Collaboration</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-field-group">
                  <label htmlFor="budget" className="field-label">
                    Estimated Budget <span className="field-optional">(Optional)</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="field-select"
                    disabled={loading}
                  >
                    <option value="Not decided">Not decided</option>
                    <option value="Below ₹10,000">Below ₹10,000</option>
                    <option value="₹10,000–₹25,000">₹10,000–₹25,000</option>
                    <option value="₹25,000–₹50,000">₹25,000–₹50,000</option>
                    <option value="₹50,000+">₹50,000+</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Message */}
              <div className="form-field-group">
                <label htmlFor="message" className="field-label">
                  Your Message <span className="field-required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Describe your project, goals, timeline, or whatever you would like to discuss..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`field-textarea ${errors.message ? "field-error-border" : ""}`}
                  disabled={loading}
                  required
                />
                {errors.message && (
                  <span className="field-error-text">{errors.message}</span>
                )}
              </div>

              {/* Form Actions: Submit Button & WhatsApp Button */}
              <div className="form-submit-row">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-form-submit"
                >
                  {loading ? (
                    <>
                      <span className="submit-spinner" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={15} />
                    </>
                  )}
                </button>

                <a
                  href={buildWhatsAppUrl(formData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-quick-whatsapp"
                  title="Open WhatsApp with your message prefilled"
                >
                  <MessageCircle size={15} />
                  <span>Send via WhatsApp</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
