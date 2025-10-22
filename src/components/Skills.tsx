import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "SQL"],
    },
    {
      category: "Frontend",
      skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "TanStack Query"],
    },
    {
      category: "State Management",
      skills: ["Redux", "Zustand"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "Flask", "Socket.io", "WebRTC"],
    },
    {
      category: "Databases",
      skills: ["MongoDB", "PostgreSQL", "Redis"],
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS (EC2, S3, SES, CloudFront, ACM)", "Docker"],
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Postman", "Figma", "JWT", "OAuth"],
    },
    {
      category: "Payment Integration",
      skills: ["Stripe", "RazorPay"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/20">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, full-stack applications
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 card-hover"
            >
              <h3 className="text-lg font-bold mb-4 text-primary">{category.category}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            <span className="text-primary font-semibold">Continuous learner</span> staying up-to-date 
            with the latest technologies and best practices
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
