import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Heart } from "lucide-react";

const Interests = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const interestsRef = useRef<HTMLDivElement>(null);

  const interests = [
    "DIY & Repair",
    "Continuous Learning",
    "Thriller/Mystery Movies",
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

      // Staggered interest animations
      gsap.fromTo(
        ".interest-item",
        { opacity: 0, scale: 0.8, rotationY: 45 },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: interestsRef.current,
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
      <div className="absolute bottom-0 left-1/3 w-28 h-28 bg-gradient-to-tr from-purple-500/10 to-cyan-500/10 rounded-full blur-2xl"></div>

      <div className="relative z-10">
        <div className="w-fit">
          <h2
            ref={titleRef}
            className="text-2xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent relative"
          >
            Interests
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
          </h2>
        </div>
        <div ref={interestsRef} className="flex flex-wrap gap-4">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="interest-item flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full shadow-lg border border-purple-500/30 hover:border-cyan-500/50 transition-all duration-300 group hover:shadow-xl hover:shadow-purple-500/20"
            >
              <Heart className="size-4 md:size-5 mr-3 text-purple-400 group-hover:text-cyan-400 transition-colors duration-300" />
              <span className="text-sm md:text-lg text-slate-300 group-hover:text-white transition-colors duration-300 font-medium">
                {interest}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
