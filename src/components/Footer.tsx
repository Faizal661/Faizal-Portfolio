import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const personalDetails = {
    name: "Mohammed Faizal T"
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(footerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="text-center text-slate-400 mt-12 p-6 bg-gradient-to-t from-slate-900/50 to-transparent rounded-xl border-t border-slate-700/50"
    >
      <div className="space-y-2">
        <p className="text-sm md:text-lg">
          &copy; {new Date().getFullYear()} {personalDetails.name}. All rights reserved.
        </p>
        <p className="text-xs md:text-sm text-slate-500">
          Built with <span className="text-cyan-400">React</span>, <span className="text-purple-400">Tailwind CSS</span>, and <span className="text-emerald-400">GSAP</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;