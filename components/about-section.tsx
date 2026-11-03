import { MapPin, GraduationCap, Target, Code } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "B.Tech CSE at CHARUSAT",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Patan, Gujarat, India",
  },
  {
    icon: Target,
    title: "Focus",
    description: "Data Analytics & Development",
  },
  {
    icon: Code,
    title: "Skills",
    description: "C, C++, Python, Web Dev",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Get To Know</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Visual */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              <div className="absolute inset-4 bg-primary/10 rounded-2xl transform rotate-6" />
              <div className="absolute inset-0 bg-secondary rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold text-primary mb-4">1+</div>
                  <p className="text-muted-foreground font-medium">
                    Year of Learning
                  </p>
                  <div className="mt-6 text-4xl font-bold text-primary">
                    8.87
                  </div>
                  <p className="text-muted-foreground font-medium">CGPA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am Daksh Rakeshbhai Soni, a first-year Computer Science &
              Engineering student at CSPIT, CHARUSAT. With a strong foundation
              in programming languages like C and C++, I am building my
              expertise in data analytics and software development.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              My passion lies in leveraging technology to solve real-world
              problems. I am currently focused on strengthening my programming
              skills while exploring data-driven approaches to create meaningful
              impact. I am actively seeking internship opportunities where I can
              apply my analytical and programming abilities.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-4 bg-background rounded-xl border border-border hover:border-primary/50 transition-colors"
                >
                  <item.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
