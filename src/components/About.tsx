import { Code2, Database, Cloud } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const topSkills = [
    {
      icon: Code2,
      title: "Frontend Excellence",
      description: "React, TypeScript, Tailwind CSS",
    },
    {
      icon: Database,
      title: "Backend Mastery",
      description: "Node.js, Express, MongoDB, PostgreSQL",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "AWS, Docker, Redis",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto" />
          </div>

          {/* Description */}
          <div className="mb-12 space-y-4 text-center text-lg text-muted-foreground">
            <p>
              Results-driven and passionate <span className="text-foreground font-semibold">Full-Stack Developer</span> with 
              1.5 years of intensive self-study and practical experience in the MERN stack.
            </p>
            <p>
              Highly independent in problem solving and adept at technical decision-making, 
              I specialize in building <span className="text-primary font-semibold">scalable web applications</span> from 
              front-end to back-end with a strong foundation in modern JavaScript frameworks, 
              database management, and API development.
            </p>
          </div>

          {/* Top Skills */}
          <div className="grid md:grid-cols-3 gap-6">
            {topSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary/50 card-hover text-center space-y-4"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 text-primary">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
