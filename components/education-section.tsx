import { GraduationCap, Calendar, Award, Languages } from "lucide-react";

const education = {
  degree: "B.Tech – Computer Science & Engineering",
  institute: "CSPIT, CHARUSAT",
  location: "Changa, Gujarat",
  duration: "2024 - 2029 (Expected)",
  cgpa: "8.87",
  highlights: [
    "Strong foundation in programming",
    "Active learner in data analytics",
    "Project-based learning approach",
  ],
};

const languages = [
  { name: "Gujarati", level: "Native", percentage: 100 },
  { name: "Hindi", level: "Fluent", percentage: 95 },
  { name: "English", level: "Professional Working", percentage: 85 },
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">My Journey</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Education & Languages
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <div className="p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-primary/10 rounded-xl">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Education</h3>
                <p className="text-muted-foreground">Academic Background</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-background rounded-xl border border-border">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {education.degree}
                </h4>
                <p className="text-primary font-medium mb-2">
                  {education.institute}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {education.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Award size={14} />
                    CGPA: {education.cgpa}
                  </span>
                </div>
                <ul className="space-y-2">
                  {education.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Languages Card */}
          <div className="p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-primary/10 rounded-xl">
                <Languages className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Languages</h3>
                <p className="text-muted-foreground">Communication Skills</p>
              </div>
            </div>

            <div className="space-y-6">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground">
                      {lang.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {lang.level}
                    </span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${lang.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Career Objective */}
        <div className="mt-8 p-8 bg-card rounded-2xl border border-border">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="w-2 h-8 bg-primary rounded-full" />
            Career Objective
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Seeking internships or entry-level roles in{" "}
            <span className="text-primary font-medium">Data Analytics</span> and{" "}
            <span className="text-primary font-medium">
              Software Development
            </span>{" "}
            where I can apply and expand my analytical and programming skills.
            Eager to learn from industry professionals and contribute to
            meaningful projects while building a strong foundation for a career
            in technology.
          </p>
        </div>
      </div>
    </section>
  );
}
