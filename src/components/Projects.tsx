import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Fit And Core Platform",
      role: "Full-Stack Developer",
      technologies: ["MERN Stack", "Generative AI", "Socket.io", "WebRTC"],
      github: "https://github.com/Faizal661/Fit-And-Core",
      liveDemo: "https://www.fitandcore.shop",
      description: [
        "Developed a comprehensive MERN stack platform connecting trainees with professional trainers online.",
        "Implemented core features including trainer subscriptions, time slot booking, video call sessions, and real-time chat.",
        "Integrated advanced functionalities like blog management, progression tracking, AI-powered nutrition tracking, communities, and a review system.",
        "Designed and built features such as a streak system, wallet management, reporting, and notification services.",
      ],
    },
    {
      title: "Inker (Open Source Contribution)",
      role: "Contributor / Frontend Developer",
      technologies: ["MERN stack", "Zustand", "Docker"],
      github: "https://github.com/TheByteFlow/Inker",
      liveDemo: "https://inker-app.vercel.app/",
      description: [
        "Contributed a significant feature to 'Inker,' an open-source blog application.",
        "Designed and implemented a robust comment section, enabling users to view, add, and reply to comments.",
        "Gained hands-on experience with Zustand for state management and Docker for containerization during development.",
      ],
    },
    {
      title: "LuxeScents E-commerce Platform",
      role: "Full-Stack Developer",
      technologies: [
        "Express",
        "MongoDB",
        "Ejs",
        "Google Authentication",
        "Razorpay",
      ],
      github: "https://github.com/Faizal661/LuxeScents",
      liveDemo: "#",
      description: [
        "Built a full-featured e-commerce platform specializing in online perfume sales.",
        "Integrated secure Google Authentication for user logins and Razorpay for seamless payment processing.",
        "Developed essential e-commerce functionalities including product management, shopping cart, wishlists, order processing, coupons, offers, and a wallet system.",
      ],
    },
    {
      title: "Emotion-Based Intelligent Learning Assistant",
      role: "Team Lead / Android Developer",
      technologies: ["Python Flask", "Jinja 2", "Java"],
      github:
        "https://github.com/Faizal661/Emotion-based-Intelligent-Learning-Assistant-Web",
      liveDemo:
        "https://github.com/Faizal661/Emotion-based-Intelligent-Learning-Assistant-Android",
      description: [
        "Led backend development for a final year project aimed at tailoring syllabi for autistic students based on emotional responses.",
        "Implemented Deep Learning for emotion recognition and Association Rule Mining for emotion classification.",
        "Developed the Python Flask backend, including robust authentication and staff management modules.",
        "Collaborated on frontend development using Jinja2 and an Android application built with Java.",
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Staggered project card animations
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 50, rotationX: 10 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Hover animations for project cards
      const projectCards = document.querySelectorAll(".project-card");
      projectCards.forEach((card) => {
        const cardElement = card as HTMLElement;

        cardElement.addEventListener("mouseenter", () => {
          gsap.to(cardElement, {
            scale: 1.02,
            y: -5,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        cardElement.addEventListener("mouseleave", () => {
          gsap.to(cardElement, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-2xl shadow-2xl mb-12 border border-slate-700/50 relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-emerald-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <div className="w-fit">
          <h2
            ref={titleRef}
            className="text-2xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent relative"
          >
            Featured Projects
            <div className="absolute bottom-0 left-0 w-[70%] h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-6 rounded-xl shadow-xl border border-slate-600/50 hover:border-emerald-500/50 transition-all duration-300 group"
            >
              <h3 className="text-lg md:text-2xl font-semibold text-emerald-300 mb-3 group-hover:text-emerald-200 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-sm md:text-lg text-purple-300 mb-4 font-medium">
                {project.role}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full border border-cyan-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="text-sm md:text-md space-y-2 text-slate-300 mb-6">
                {project.description.map((desc, descIndex) => (
                  <li key={descIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>

              <div className="flex space-x-4">
                {project.liveDemo && project.liveDemo !== "#" && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-sm md:text-md flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-sm md:text-md flex items-center px-4 py-2 bg-slate-600/50 hover:bg-slate-500/50 text-slate-300 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-105 border border-slate-500/50 hover:border-slate-400/50"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
