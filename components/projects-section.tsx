import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "SHREEJEE PUBLICATION",
    subtitle: "Educational Website",
    description:
      "A static educational website serving as a JEE study resource platform. Built the website structure, layout, and UI design while organizing educational content for easy access.",
    tags: ["HTML", "CSS", "UI Design", "Content Organization"],
    github: "https://github.com",
    live: "#",
    featured: true,
  },
  {
    title: "Rakeshkumar Jewellers",
    subtitle: "Jewellery E-commerce Site",
    description: "An e-commerce platform for a jewellery business, allowing users to browse and purchase products.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "#",
    live: "https://rakeshkumarjwellers.vercel.app/",
    featured: true,
  },
];

const upcomingProjects = [
  {
    title: "Data Analytics Dashboard",
    description: "Planning to build interactive dashboards using Python and data visualization libraries.",
    status: "Coming Soon",
  },
  {
    title: "Personal Blog",
    description: "A blog to share my learning journey in data analytics and software development.",
    status: "Coming Soon",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">My Recent Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Projects
          </h2>
        </div>

        {/* Featured Project */}
        {projects.map((project) => (
          <div
            key={project.title}
            className="mb-12 p-6 sm:p-8 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  Featured Project
                </span>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-primary font-medium mb-4">
                  {project.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-video bg-secondary rounded-xl flex items-center justify-center border border-border">
                  <div className="text-center p-8">
                    <Folder className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">
                      Educational Platform
                    </p>
                    <p className="text-sm text-muted-foreground">
                      JEE Study Resources
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Upcoming Projects */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Upcoming Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingProjects.map((project) => (
              <div
                key={project.title}
                className="p-6 bg-background rounded-xl border border-dashed border-border hover:border-primary/50 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h4>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
