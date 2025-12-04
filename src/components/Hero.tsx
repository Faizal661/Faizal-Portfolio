import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="geometric-line top-20 left-10 animate-fade-in" />
        <div
          className="geometric-line top-40 right-20 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        />
        <div className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl top-0 right-0 animate-glow-pulse" />
        <div
          className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl bottom-0 left-0 animate-glow-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="section-container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                Full-Stack Developer
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Building <span className="gradient-text">Scalable</span> Web
                Solutions
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                MERN stack specialist with 1.5 years of hands-on experience
                creating modern, high-performance applications from concept to
                deployment.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#projects">
                <Button
                  size="lg"
                  className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>

              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-primary/30 hover:border-primary hover:bg-primary/10"
              >
                <Download className="w-4 h-4" /> Download Resume
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Built
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">1.5+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">
                  Technologies
                </div>
              </div>
            </div>
          </div>

          {/* Right: Portrait */}
          {/* <div className="relative animate-slide-in-right"> */}
            {/* <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-card">
              <img
                src={heroPortrait}
                alt="Mohammed Faizal T - Full-Stack Developer"
                className="w-full h-auto object-cover"
              />
            </div> */}
            {/* Glow effect */}
            {/* <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl blur-2xl -z-10" /> */}
          {/* </div> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
