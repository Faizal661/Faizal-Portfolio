import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Client Name",
      role: "CEO, Tech Startup",
      content: "Outstanding developer who delivers high-quality work on time. The attention to detail and technical expertise is exceptional.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
    },
    {
      name: "Team Lead",
      role: "Senior Developer",
      content: "A pleasure to work with. Great communication skills and always brings innovative solutions to complex problems.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
    },
    {
      name: "Project Manager",
      role: "Product Manager",
      content: "Faizal consistently exceeds expectations. His ability to understand requirements and translate them into working solutions is impressive.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
    },
  ];

  return (
    <section id="testimonials" className="py-24">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What people say about working with me
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 card-hover space-y-4"
            >
              <Quote className="w-10 h-10 text-primary/20" />
              
              <p className="text-muted-foreground italic">"{testimonial.content}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-primary/20"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
