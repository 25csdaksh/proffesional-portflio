import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Daksh Soni | Things I've Built",
  description:
    "A collection of projects exploring AI, full-stack development, healthcare technology, education, and business solutions by Daksh Soni.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

