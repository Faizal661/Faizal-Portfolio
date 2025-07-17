import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const educationDetails = [
    {
      degree: "Bachelor of Computer Application",
      percentage: "CGPA 80.75%",
      institution: "University of Calicut",
      years: "June 2020 - Apr 2023",
      details: [],
    },
    {
      degree: "PCMB Science",
      percentage: "76.08%",
      institution: "Higher Secondary Examination (Plus Two)",
      years: "June 2018 - Mar 2020",
      details: [],
    },
    {
      degree: "Kerala State Syllabus",
      percentage: "98.79%",
      institution: "SSLC (Secondary School Leaving Certificate) Examination",
      years: "March 2018",
      details: [],
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

      // Staggered education item animations
      gsap.fromTo(
        ".education-item",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: timelineRef.current,
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
      <div className="absolute top-0 right-1/4 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 rounded-full blur-2xl"></div>

      <div className="relative z-10">
        <div className="w-fit">
          <h2
            ref={titleRef}
            className="text-2xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent relative"
          >
            Education
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"></div>
          </h2>
        </div>

        <div ref={timelineRef} className="space-y-8">
          {educationDetails.map((edu, index) => (
            <div
              key={index}
              className="education-item flex items-start space-x-4 p-6 bg-gradient-to-r from-slate-700/30 to-slate-800/30 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 size-6 md:size-12 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="size-4 md:size-6 text-white" />
              </div> 
 
              <div className="flex-1">
                <h3 className=" text-lg md:text-2xl font-semibold text-cyan-300 mb-2 group-hover:text-cyan-200 transition-colors duration-300">
                  {edu.degree}
                </h3> 
                <div className="text-xs md:text-md flex flex-wrap items-center gap-4 text-slate-300 mb-2">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                    {edu.percentage}
                  </span>
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    {edu.institution}
                  </span>
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                    {edu.years}
                  </span>
                </div>
                {edu.details.length > 0 && (
                  <ul className="list-disc list-inside text-slate-400 space-y-1 mt-3">
                    {edu.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
