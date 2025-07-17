import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Github, Linkedin, Code } from "lucide-react";

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  const personalDetails = {
    name: "Mohammed Faizal T",
    phone: "+91-7034595039",
    email: "faizalt.official@gmail.com",
    location: "Palakkad, Kerala, India",
    links: [
      { name: "GitHub", url: "https://github.com/Faizal661", icon: Github },
      {
        name: "LeetCode",
        url: "https://leetcode.com/u/faisalt661/",
        icon: Code,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohammed-faizal-t",
        icon: Linkedin,
      },
    ],
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set(
        [
          nameRef.current,
          titleRef.current,
          contactRef.current,
          linksRef.current,
        ],
        {
          opacity: 0,
          y: 50,
        }
      );

      // Header container animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, scale: 0.9, y: -10 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          delay: 0.2,
        }
      );

      // Staggered text animations
      const tl = gsap.timeline({ delay: 0.5 });

      tl.to(nameRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      })
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          contactRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          linksRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2"
        );

      // Floating animation for the header
      gsap.to(headerRef.current, {
        y: "+=20",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl p-8 rounded-lg shadow-2xl mb-12 text-center relative overflow-hidden border border-slate-700/50"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-emerald-500/10 opacity-50"></div>

      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-emerald-500/20 blur-sm animate-pulse"></div>

      <div className="relative z-10">
        <h1
          ref={nameRef}
          className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent mb-3"
        >
          {personalDetails.name}
        </h1>

        <p
          ref={titleRef}
          className="text-lg md:text-2xl text-slate-300 mb-6 font-medium"
        >
          Full-Stack Developer
        </p>

        <div
          ref={contactRef}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 md:text-lg text-slate-400 mb-8"
        >
          <span className="flex items-center hover:text-cyan-400 transition-colors duration-300">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></span>
            {personalDetails.phone}
          </span>
          <span className="flex items-center hover:text-purple-400 transition-colors duration-300">
            <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></span>
            {personalDetails.email}
          </span>
          <span className="flex items-center hover:text-emerald-400 transition-colors duration-300">
            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></span>
            {personalDetails.location}
          </span>
        </div>

        <div
          ref={linksRef}
          className="flex flex-wrap gap-4 justify-center"
        >
          {personalDetails.links.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-slate-600/50 hover:border-cyan-500/50"
              >
                <IconComponent className="w-5 h-5 mr-2 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
                <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                  {link.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
