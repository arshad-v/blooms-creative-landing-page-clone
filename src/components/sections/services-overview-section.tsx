"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Branding & Strategy",
    tagline: "Build an unforgettable brand identity",
  },
  {
    title: "Digital Marketing",
    tagline: "Drive visibility, engagement & growth",
  },
  {
    title: "Social Media Marketing",
    tagline: "Turn followers into loyal communities",
  },
  {
    title: "Influencer Marketing",
    tagline: "Authentic collaborations that convert",
  },
  {
    title: "Content & Production",
    tagline: "Visual stories that resonate",
  },
  {
    title: "Web & E-Commerce",
    tagline: "Design meets conversion",
  },
  {
    title: "AI Automation",
    tagline: "Streamline workflows with smart systems",
  },
  {
    title: "Managed Growth",
    tagline: "Scale sustainably with data-driven insights",
  },
];

const ServicesOverviewSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(services.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('[data-card-index]');
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards(prev => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-background text-foreground py-20 md:py-32 overflow-hidden">
      {/* Map Overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-10"
        style={{
          backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/679a4b5fc8a7414f3b4ae38c_LINES-3.svg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      
      {/* Grain Overlay */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.03]"
        style={{
          backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/6799fa7534106d08fd817120_grain2-22.png')`,
          backgroundRepeat: 'repeat',
        }}
      ></div>

      {/* Floating Accent Circles */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent/5 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-40 h-40 rounded-full bg-primary/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container relative z-[5]">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <h2 className="text-4xl md:text-[60px] font-black uppercase font-display leading-none text-foreground/90 mb-6">
            Our Services
          </h2>
          <p className="text-body-large text-foreground/70 max-w-2xl mx-auto">
            From strategy to execution, we deliver comprehensive solutions that drive real results for your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-card-index={index}
              className={`group relative bg-muted/40 backdrop-blur-sm border border-border/30 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:bg-muted/60 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 ${
                visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: visibleCards[index] ? '0ms' : `${index * 100}ms`,
              }}
            >
              {/* Accent Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-accent/20 to-transparent group-hover:from-accent/40 transition-all duration-300"></div>
              </div>

              {/* Number Badge */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center border-2 border-background group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <span className="text-sm font-bold text-background">{(index + 1).toString().padStart(2, '0')}</span>
              </div>

              <div className="relative">
                <h3 className="text-xl md:text-2xl font-display uppercase font-bold text-foreground/90 mb-3 leading-tight group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                  {service.tagline}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 to-primary/0 group-hover:from-accent/5 group-hover:to-primary/5 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
