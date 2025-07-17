import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const professionalSummary =
    "Results-driven and passionate Full-Stack Developer with 1.5 years of intensive self-study and practical experience in the MERN stack. Highly independent in problem solving and adept at technical decision-making, proficient in building scalable web applications from front-end to back-end, with a strong foundation in modern JavaScript frameworks, database management, and API development. Interested in contributing to innovative projects and grow within a dynamic team.";

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

      // Text typing effect
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
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
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-500/10 to-cyan-500/10 rounded-full blur-xl"></div>

      <div className="relative z-10">
        <div className="w-fit">
          <h2
            ref={titleRef}
            className="text-2xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent relative"
          >
            Professional Summary
            <div className="absolute bottom-0 left-0 w-[94%] h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
          </h2>
        </div>

        <p
          ref={textRef}
          className="text-xs md:text-lg text-slate-300 leading-relaxed tracking-wide "
        >
          {professionalSummary}
        </p>
      </div>
    </section>
  );
};

export default About;
