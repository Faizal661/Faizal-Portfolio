import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import fitAndCoreImg from "@/assets/project-fitandcore.jpg";
import inkerImg from "@/assets/project-inker.jpg";
import luxeScentsImg from "@/assets/project-luxescents.jpg";
import learningAssistantImg from "@/assets/project-learning-assistant.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Fit And Core Platform",
      tagline: "Comprehensive fitness platform connecting trainees with professional trainers",
      image: fitAndCoreImg,
      tags: ["MERN Stack", "WebRTC", "Socket.io", "AI"],
      github: "https://github.com/Faizal661/Fit-And-Core",
      live: "https://www.fitandcore.shop",
      featured: true,
    },
    {
      title: "Inker",
      tagline: "Open-source blog application with advanced comment functionality",
      image: inkerImg,
      tags: ["MERN", "Zustand", "Docker"],
      github: "https://github.com/TheByteFlow/Inker",
      live: "https://inker-app.vercel.app/",
      featured: true,
    },
    {
      title: "LuxeScents E-commerce",
      tagline: "Full-featured e-commerce platform for online perfume sales",
      image: luxeScentsImg,
      tags: ["Express", "MongoDB", "Razorpay", "OAuth"],
      github: "https://github.com/Faizal661/LuxeScents",
      live: "",
      featured: true,
    },
    {
      title: "Emotion-Based Learning Assistant",
      tagline: "Personalized educational content for autistic students using emotion detection",
      image: learningAssistantImg,
      tags: ["Python Flask", "Java", "Android"],
      github: "https://github.com/Faizal661/Emotion-based-Intelligent-Learning-Assistant-Web",
      live: "",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work building scalable, modern web applications
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card border-border hover:border-primary/50 card-hover"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.github && (
                    <Button
                      size="sm"
                      variant="secondary"
                      className="gap-2"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4" /> Code
                    </Button>
                  )}
                  {project.live && (
                    <Button
                      size="sm"
                      className="gap-2 bg-primary hover:bg-primary/90"
                      onClick={() => window.open(project.live, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </Button>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.tagline}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-secondary/50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
