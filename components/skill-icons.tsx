import React from "react";

interface SkillIconProps {
  id: string;
  className?: string;
  size?: number;
}

export function SkillIcon({ id, className = "", size = 24 }: SkillIconProps) {
  const commonProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className,
    "aria-hidden": "true",
  };

  switch (id) {
    case "python":
      return (
        <svg {...commonProps} viewBox="0 0 24 24" fill="none">
          <path
            d="M11.91 2c-5.18 0-4.86 2.25-4.86 2.25l.01 2.33h4.94v.7H5.06S2 7.03 2 12.23c0 5.2 2.68 5.01 2.68 5.01h1.6v-2.25s-.09-2.68 2.64-2.68h4.54s2.55.04 2.55-2.48V4.48S16.48 2 11.91 2zm-2.7 1.48a.86.86 0 11.01 1.72.86.86 0 01-.01-1.72z"
            fill="#38bdf8"
          />
          <path
            d="M12.09 22c5.18 0 4.86-2.25 4.86-2.25l-.01-2.33h-4.94v-.7h6.94s3.06.25 3.06-4.95c0-5.2-2.68-5.01-2.68-5.01h-1.6v2.25s.09 2.68-2.64 2.68H10.2s-2.55-.04-2.55 2.48v5.35S7.52 22 12.09 22zm2.7-1.48a.86.86 0 11-.01-1.72.86.86 0 01.01 1.72z"
            fill="#e2c286"
          />
        </svg>
      );

    case "typescript":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path
            d="M11.75 14.5c-.3.4-.77.7-1.42.7-.87 0-1.47-.53-1.47-1.48V8.5h-1.6V7h4.82v1.5H10.5v5.18c0 .48.24.72.63.72.3 0 .5-.1.62-.22v1.32zm2.52 1.4c1.17 0 1.95-.53 2.45-1.12l-1.07-.85c-.32.4-.73.68-1.38.68-.78 0-1.3-.4-1.3-1.05 0-.7.54-.95 1.48-1.28l.45-.16c1.37-.48 2.05-1.14 2.05-2.28 0-1.5-1.22-2.34-2.67-2.34-1.17 0-2.05.47-2.63 1.25l1.06.87c.37-.5.85-.75 1.57-.75.75 0 1.25.43 1.25.98 0 .6-.44.87-1.33 1.18l-.45.16c-1.37.48-2.19 1.17-2.19 2.37 0 1.44 1.13 2.39 2.76 2.39z"
            fill="#ffffff"
          />
        </svg>
      );

    case "javascript":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            d="M7.5 17.5c.8 0 1.4-.4 1.7-1.1l1.5.9c-.6 1.3-1.8 1.9-3.2 1.9-2.2 0-3.5-1.4-3.5-3.6V8.5h1.9v7.1c0 1.2.6 1.9 1.6 1.9zm8.2 1.7c-2.3 0-3.6-1.4-3.6-3.4 0-2.2 1.5-3.1 3.2-3.7l.6-.2c.8-.3 1.2-.6 1.2-1.1 0-.6-.5-1-1.3-1-.9 0-1.5.4-1.9 1l-1.4-1c.8-1.2 2-1.7 3.3-1.7 2 0 3.3 1.1 3.3 2.8 0 1.9-1.3 2.7-3 3.3l-.6.2c-.8.3-1.2.6-1.2 1.2 0 .7.6 1.2 1.5 1.2 1 0 1.7-.5 2.2-1.2l1.3 1.1c-.8 1.1-2 1.6-3.7 1.6z"
            fill="#000000"
          />
        </svg>
      );

    case "cpp":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <path
            d="M22.38 12.87l-2.07 1.2v-2.07l2.07 1.2c.2.11.32.32.32.55s-.12.44-.32.55zm-4.38 0l-2.07-1.2v2.07l2.07-1.2c.2-.11.32-.32.32-.55s-.12-.44-.32-.55zm1.5-3.26l1.2-2.07-2.07 1.2 1.2 2.07c.11.2.32.32.55.32s.44-.12.55-.32zm-7.5-3.41L4.85 9.87c-.8.46-1.3 1.32-1.3 2.25s.5 1.79 1.3 2.25l7.15 4.13c.8.46 1.79.46 2.59 0l7.15-4.13c.8-.46 1.3-1.32 1.3-2.25s-.5-1.79-1.3-2.25L14.59 6.2c-.8-.46-1.79-.46-2.59 0zm-1.04 8.7c-1.47 0-2.66-1.19-2.66-2.66s1.19-2.66 2.66-2.66c.86 0 1.61.41 2.09 1.05l-1.3 1.05c-.19-.27-.49-.45-.79-.45-.56 0-1.01.45-1.01 1.01s.45 1.01 1.01 1.01c.3 0 .6-.18.79-.45l1.3 1.05c-.48.64-1.23 1.05-2.09 1.05z"
            fill="#00599C"
          />
        </svg>
      );

    case "c":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.8 14.8c-1.05.8-2.38 1.2-3.8 1.2-3.31 0-6-2.69-6-6s2.69-6 6-6c1.42 0 2.75.4 3.8 1.2l-1.8 2.4c-.6-.4-1.27-.6-2-.6-1.66 0-3 1.34-3 3s1.34 3 3 3c.73 0 1.4-.2 2-.6l1.8 2.4z"
            fill="#659AD2"
          />
        </svg>
      );

    case "java":
      return (
        <svg {...commonProps} viewBox="0 0 24 24" fill="none">
          <path
            d="M8.5 17.5s-1.5.5 0 1c2 .7 4.5.6 7 0 1.5-.4 0-1 0-1s-3 .5-7 0zM7 20s-2 .8 0 1.2c3 1 7.5.8 10 0 1.5-.5 0-1.2 0-1.2s-4 .8-10 0z"
            fill="#e2c286"
          />
          <path
            d="M13.5 10c0-1.5-1-2.5-.5-4.5 1 2 2 2.5 1.5 4.5M11.5 8c0-1.5-1-2-.5-4 1 1.5 2 2 1.5 4M15 13.5c2.5-1 4.5-2.5 2-4.5-1-1-2.5.5-2.5.5s1-.5 1.5 0c1 1-1.5 2.5-3 3 1.5 0 2 1 2 1z"
            stroke="#ea580c"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "sql":
      return (
        <svg {...commonProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#e2c286" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" stroke="#e2c286" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke="#e2c286" />
        </svg>
      );

    case "html":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3zm14.8 5.7h-8l.2 2.3h7.6l-.6 6.5-5 1.4-5-1.4-.3-3.6h2.2l.2 1.9 2.9.8 2.9-.8.3-3.1H7.4L6.8 5.7h11.2l-.2 2z" fill="#E34F26" />
        </svg>
      );

    case "css":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3zm14.8 5.7H9.8l.2 2.3h7.6l-.6 6.5-5 1.4-5-1.4-.3-3.6h2.2l.2 1.9 2.9.8 2.9-.8.3-3.1H6.8l-.4-4.5h11.8l-.4 2z" fill="#1572B6" />
        </svg>
      );

    case "react":
      return (
        <svg {...commonProps} viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
        </svg>
      );

    case "nextjs":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="11" fill="currentColor" />
          <path
            d="M15.5 16.5l-5.6-7.3H8.5v6.2h1.4v-4.6l4.9 6.4c.2-.2.4-.4.7-.7zm1.1-6.2h-1.4v3.5l1.4 1.8v-5.3z"
            fill="#000"
          />
        </svg>
      );

    case "tailwind":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <path
            d="M12 6c-2.4 0-3.9 1.2-4.5 3.6 1-1.4 2.2-1.9 3.6-1.5 1 .3 1.7 1.1 2.5 1.9 1.3 1.3 2.8 2.8 6.4 2.8 2.4 0 3.9-1.2 4.5-3.6-1 1.4-2.2 1.9-3.6 1.5-1-.3-1.7-1.1-2.5-1.9C17.1 7.5 15.6 6 12 6zM6 12.8c-2.4 0-3.9 1.2-4.5 3.6 1-1.4 2.2-1.9 3.6-1.5 1 .3 1.7 1.1 2.5 1.9 1.3 1.3 2.8 2.8 6.4 2.8 2.4 0 3.9-1.2 4.5-3.6-1 1.4-2.2 1.9-3.6 1.5-1-.3-1.7-1.1-2.5-1.9C11.1 14.3 9.6 12.8 6 12.8z"
            fill="#38BDF8"
          />
        </svg>
      );

    case "nodejs":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <path
            d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2zm0 2.3L4.8 8.5v7l7.2 4.2 7.2-4.2v-7L12 4.3z"
            fill="#68A063"
          />
          <path
            d="M12 7.8c-2.3 0-3.7 1.2-3.7 2.9 0 1.4.9 2.2 2.6 2.5l.8.2c1 .2 1.4.5 1.4 1 0 .6-.6 1-1.6 1-1 0-1.7-.4-2.2-.9l-1 1.2c.8.9 1.9 1.3 3.2 1.3 2.4 0 3.8-1.2 3.8-3 0-1.4-.9-2.2-2.5-2.5l-.8-.2c-1-.2-1.5-.5-1.5-1 0-.6.5-1 1.4-1 .8 0 1.5.3 1.9.7l1-1.2c-.7-.7-1.7-1-2.6-1z"
            fill="#ffffff"
          />
        </svg>
      );

    case "express":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="rgba(255,255,255,0.08)" />
          <path
            d="M5 8h4.5v1.6H6.7v2.3h2.5v1.6H6.7V16H5V8zm5.5 0h2l1.6 3.2L15.7 8h2l-2.6 4.3L17.9 16h-2.1l-1.8-3.4L12.2 16h-2l2.7-4L10.5 8z"
            fill="currentColor"
          />
        </svg>
      );

    case "fastapi":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="#009688" />
          <path d="M12 4L7 13h4l-1 7 7-10h-4l1-6z" fill="#ffffff" />
        </svg>
      );

    case "django":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#092E20" />
          <path
            d="M15.5 5.5h2.2v10.8c-.7.2-1.5.3-2.3.3-2.7 0-4.3-1.4-4.3-3.8 0-2.3 1.6-3.8 3.9-3.8.3 0 .5 0 .5.1V5.5zm0 5.4c-.2 0-.4 0-.6.1-1.1.2-1.7 1-1.7 2.1 0 1.2.6 1.9 1.7 1.9.3 0 .4 0 .6-.1v-4zm-7.9 4.3c-.6.6-1.3.9-2.1.9-.9 0-1.6-.4-1.6-1.3 0-.9.6-1.3 1.8-1.5l1.9-.3v2.2zm0-3.6l-2.1.3c-2.3.4-3.5 1.4-3.5 3.1 0 1.8 1.4 2.8 3.3 2.8 1.4 0 2.3-.5 2.8-1.2v1.1h2V9h-2.5v2.6z"
            fill="#ffffff"
          />
        </svg>
      );

    case "nestjs":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <path
            d="M18.8 2.5c-.3 0-.6.2-.8.4L12 9.5 6 3.5c-.5-.5-1.3-.5-1.8 0L2.5 5.2c-.5.5-.5 1.3 0 1.8l6.7 6.7-7 7c-.5.5-.5 1.3 0 1.8l1.7 1.7c.5.5 1.3.5 1.8 0l7-7 7 7c.5.5 1.3.5 1.8 0l1.7-1.7c.5-.5.5-1.3 0-1.8l-7-7 5.7-5.7c.7-.7.5-1.9-.4-2.4l-2.7-1.5c-.3-.1-.6-.1-.9-.1z"
            fill="#E0234E"
          />
        </svg>
      );

    case "mongodb":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <path
            d="M12.2 2s-.3.3-.6.9C10.5 5 8 8.6 8 12.8c0 3.7 2.4 7.2 4.2 9.2.2-.1.3-.3.4-.6v-8.9c0-.6.4-1.1 1-1.1.5 0 1 .4 1 1v8.9c.2.3.3.5.4.6 1.8-2 4.2-5.5 4.2-9.2 0-4.2-2.5-7.8-3.6-9.9-.3-.6-.6-.9-.6-.9z"
            fill="#47A248"
          />
        </svg>
      );

    case "postgresql":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <path
            d="M12 2C6.5 2 2 6.5 2 12c0 3.8 2.1 7.1 5.3 8.8l1.2-2.1C6.2 17.5 5 14.9 5 12c0-3.9 3.1-7 7-7s7 3.1 7 7c0 2.2-.9 4.1-2.4 5.4l1.3 2.1c2-1.7 3.1-4.2 3.1-7.5 0-5.5-4.5-10-10-10z"
            fill="#336791"
          />
          <path
            d="M10.5 8.5c-.8 0-1.5.7-1.5 1.5v6c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-6c0-.8-.7-1.5-1.5-1.5h-3zm1 2h1v4h-1v-4z"
            fill="#336791"
          />
        </svg>
      );

    case "supabase":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <path
            d="M13.2 2.6c-.6-.8-1.9-.3-1.8.7l.6 8H3.6c-.9 0-1.4 1-1 1.7l8.2 13.4c.6.8 1.9.3 1.8-.7l-.6-8h8.4c.9 0 1.4-1 1-1.7L13.2 2.6z"
            fill="#3ECF8E"
          />
        </svg>
      );

    case "mongodb-vector":
      return (
        <svg {...commonProps} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" fill="#47A248" />
          <circle cx="4" cy="7" r="2" fill="#38BDF8" />
          <circle cx="20" cy="7" r="2" fill="#e2c286" />
          <circle cx="5" cy="18" r="2" fill="#e2c286" />
          <circle cx="19" cy="18" r="2" fill="#38BDF8" />
          <line x1="6" y1="8" x2="10" y2="10.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeDasharray="2 2" />
          <line x1="18" y1="8" x2="14" y2="10.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeDasharray="2 2" />
          <line x1="7" y1="17" x2="10" y2="13.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeDasharray="2 2" />
          <line x1="17" y1="17" x2="14" y2="13.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeDasharray="2 2" />
        </svg>
      );

    case "pytorch":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <path
            d="M13.4 3.1l-1.3 1.3 2.7 2.7c1.8 1.8 2.7 4.1 2.7 6.6 0 5.2-4.2 9.4-9.4 9.4S-1.3 19 0 13.7c0-2.5 1-4.9 2.7-6.6l2.7-2.7-1.3-1.3L1.4 5.8C-.5 7.8-1.5 10.7-1.5 13.7c0 7.3 5.9 13.2 13.2 13.2S24.9 21 24.9 13.7c0-3-1-5.9-3-7.9l-8.5-2.7z"
            transform="scale(0.85) translate(2, 2)"
            fill="#EE4C2C"
          />
          <circle cx="15.5" cy="7" r="1.5" fill="#EE4C2C" />
        </svg>
      );

    case "gemini":
      return (
        <svg {...commonProps} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z"
            fill="url(#geminiGrad)"
          />
          <defs>
            <linearGradient id="geminiGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="0.5" stopColor="#818CF8" />
              <stop offset="1" stopColor="#e2c286" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "ai-rag":
      return (
        <svg {...commonProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#38BDF8" />
          <path d="M7 8h10M7 12h6M7 16h4" stroke="#e2c286" strokeLinecap="round" />
          <circle cx="17" cy="14" r="3" stroke="#10b981" />
          <path d="M19.5 16.5L22 19" stroke="#10b981" strokeLinecap="round" />
        </svg>
      );

    case "mobilenetv2":
      return (
        <svg {...commonProps} viewBox="0 0 24 24" fill="none" stroke="#e2c286" strokeWidth="1.6">
          <rect x="5" y="2" width="14" height="20" rx="3" stroke="#38BDF8" strokeWidth="1.8" />
          <circle cx="12" cy="18" r="1" fill="#38BDF8" />
          <circle cx="9" cy="8" r="1.5" fill="#e2c286" />
          <circle cx="15" cy="8" r="1.5" fill="#e2c286" />
          <circle cx="12" cy="12" r="1.5" fill="#10b981" />
          <line x1="9" y1="8" x2="12" y2="12" stroke="rgba(255,255,255,0.4)" />
          <line x1="15" y1="8" x2="12" y2="12" stroke="rgba(255,255,255,0.4)" />
        </svg>
      );

    case "git":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <path
            d="M21.7 10.9L13.1 2.3c-.4-.4-1.1-.4-1.5 0L9.8 4.1l2.4 2.4c.5-.2 1.1 0 1.4.3.4.4.5 1 .3 1.5l2.3 2.3c.5-.2 1.1 0 1.5.3.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.4-.4-.5-1-.3-1.5L13 9.2v5.6c.2.1.3.3.4.4.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1.2-.2.4-.3.6-.4V8.9c-.2-.1-.4-.2-.6-.4-.4-.4-.5-1-.3-1.5L8.6 4.6 2.3 10.9c-.4.4-.4 1.1 0 1.5l8.6 8.6c.4.4 1.1.4 1.5 0l8.6-8.6c.4-.4.4-1.1.7-1.5z"
            fill="#F05032"
          />
        </svg>
      );

    case "github":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <path
            d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
            fill="currentColor"
          />
        </svg>
      );

    case "vscode":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <path
            d="M17.6 2.1l-8 7.3L5.4 6 2 8l4.4 3.7L2 15.4l3.4 2 4.2-3.4 8 7.3c.7.6 1.8.3 2.1-.5l2.2-1.7V4.3l-2.2-1.7c-.3-.8-1.4-1.1-2.1-.5zM18 17.5l-6-4.9 6-4.9v9.8z"
            fill="#007ACC"
          />
        </svg>
      );

    case "docker":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <path
            d="M13 5.5h2V7h-2V5.5zm-3 0h2V7h-2V5.5zm-3 0h2V7H7V5.5zm6 2.5h2V9.5h-2V8zm-3 0h2V9.5h-2V8zm-3 0h2V9.5H7V8zm-3 0h2V9.5H4V8zm17.9 3.2c-.3-.2-1.2-.4-2.4-.2-.2-.5-.6-1-1.2-1.4l-.8-.5-.5.8c-.5.8-.6 1.9-.3 2.8-.4.2-1.2.4-2.4.4H2.4c-.4 0-.8.3-.9.7-.8 3.5.3 6.6 2.7 8.5 2.2 1.7 5.2 2.1 8.5 2.1 6.5 0 10.7-3.6 11.2-9.7v-.4c0-.7-.4-1.5-.7-1.9z"
            fill="#2496ED"
          />
        </svg>
      );

    case "vite":
      return (
        <svg {...commonProps} viewBox="0 0 24 24" fill="none">
          <path
            d="M21.5 3.5L12.5 20.8c-.2.4-.8.4-1 0L2.5 3.5c-.3-.5.2-1.1.7-.9l8.5 3.5 8.5-3.5c.6-.2 1.1.4.7.9z"
            fill="url(#viteGrad1)"
          />
          <path
            d="M14.5 2.5L7.8 13.5h4.2l-2 6.5 7.5-11.5h-4.2l1.2-6z"
            fill="url(#viteGrad2)"
          />
          <defs>
            <linearGradient id="viteGrad1" x1="2.5" y1="3.5" x2="21.5" y2="20.8" gradientUnits="userSpaceOnUse">
              <stop stopColor="#41D1FF" />
              <stop offset="1" stopColor="#BD34FE" />
            </linearGradient>
            <linearGradient id="viteGrad2" x1="7.8" y1="2.5" x2="18.7" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFEA83" />
              <stop offset="1" stopColor="#FFDD35" />
            </linearGradient>
          </defs>
        </svg>
      );

    default:
      return (
        <svg {...commonProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
  }
}

