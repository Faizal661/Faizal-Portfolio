import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const technicalSkills = {
    Languages: ["JavaScript", "TypeScript", "Python", "SQL"],
    Frontend: [
      "HTML5",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "React",
      "TanStack Query",
    ],
    "State Management": ["Redux", "Zustand"],
    Backend: ["Node.js", "Express.js", "Flask", "Socket.io", "WebRTC"],
    Databases: ["MongoDB", "PostgreSQL", "Redis"],
    "Cloud Platforms": ["AWS (EC2, S3, SES, CloudFront, ACM)"],
    Tools: ["Git", "Postman", "Figma"],
    "Security/Auth": ["JWT", "OAuth"],
    "Payment Gateways": ["Stripe", "RazorPay"],
  };

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

      // Staggered card animations
      gsap.fromTo(
        ".skill-card",
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-2xl shadow-2xl mb-12 border border-slate-700/50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl transform -translate-x-1/2"></div>

      <div className="relative z-10">
        <div className="w-fit">
          <h2
            ref={titleRef}
            className="text-2xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent relative"
          >
            Technical Skills
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-emerald-400 rounded-full"></div>
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {Object.entries(technicalSkills).map(([category, skills]) => (
            <div
              key={category}
              className="skill-card bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-6 rounded-xl shadow-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <h3 className="text-md md:text-xl font-semibold text-cyan-300 mb-4 group-hover:text-cyan-200 transition-colors duration-300">
                {category}
              </h3>
              <div className="space-y-2">
                {skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="text-xs md:text-lg flex items-center text-slate-300 group-hover:text-slate-200 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3 group-hover:animate-pulse"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
