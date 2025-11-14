"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67e3c35719a6b4fa2ce47ee9_icon-binoc-14.svg",
    title: "Explore",
    description: "We step into your world and want to know everything. About your market, your customer, your brand — but also about obstacles, doubts, and motivations. Only when we truly understand your business can we make smart choices. No standard questionnaire, but sharp conversations that get to the core. This is the starting point.",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67e3cb23974af19787cae7a6_icon-compass2-9.svg",
    title: "Strategy",
    description: "Together we determine the route. You bring market knowledge and customer insight, we add direction, communication power, and creative thinking. This creates a clear brand strategy that guides your organization and stands out in a complex market.",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67e3d12b17839048da3d8c4c_icon-merge2-10.svg",
    title: "Concept & Creation",
    description: "Here strategy, brand positioning, and activation merge. We develop concepts that touch people, influence choices, and trigger action. From brand campaigns to content platforms, from social storytelling to direct marketing. No empty creativity, but ideas with purpose. Strong, surprising, and effective — always aligned with your brand story and strategy.",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67e3cf3bf7882ee771324879_icon-draft-11.svg",
    title: "Content & Design",
    description: "We bring the concept to life in content that works, stands out, and sticks. With a visual identity that's perfect down to the last detail, and content that fits the channel and the audience. Web, video, copy, social assets, photography, or motion: everything comes together in one consistent, recognizable brand experience. Creative and thoughtful.",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67e3c8aa6af16f02a7d6e6ae_icon-cook-12.svg",
    title: "Production & Realization",
    description: "Where the magic happens. Here we turn ideas into concrete output, from websites to video, from content flows to complete campaigns. Fast, flexible, and with tight project management. We produce in-house or work with trusted specialists from our network. Everything we make fits your strategy and moves people.",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67e3c43a211df2e37b7f257c_icon-mountains-13.svg",
    title: "Optimization & Growth",
    description: "A brand never stands still. That's why we keep analyzing, learning, and improving. We measure, evaluate, and adjust. What works, we do more of. What can be better, we improve. This way we build sustainable growth together, with the energy and creativity that keep your brand fresh and relevant.",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !pathRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate smooth progress as user scrolls through section
      const scrollPosition = windowHeight - rect.top;
      const sectionHeight = rect.height;
      const progress = Math.max(0, Math.min(1, scrollPosition / (sectionHeight * 0.7)));

      setScrollProgress(progress);

      // Animate the path drawing
      const pathLength = pathRef.current.getTotalLength();
      const drawLength = pathLength * progress;
      pathRef.current.style.strokeDashoffset = `${pathLength - drawLength}`;
    };

    // Initialize path with full dasharray
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = `${pathLength}`;
      pathRef.current.style.strokeDashoffset = `${pathLength}`;
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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

      {/* Animated Smooth Curved Path Line */}
      <svg
        className="absolute left-0 top-0 w-full h-full z-[3] pointer-events-none"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Smooth curved path from heading to mountain peak */}
        <path
          ref={pathRef}
          d="M 500,180 C 420,280 380,380 400,480 C 420,580 460,680 490,780 C 495,820 498,860 500,900"
          fill="none"
          stroke="#9BCFC4"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            filter: 'drop-shadow(0 0 8px rgba(155, 207, 196, 0.7))',
          }}
        />
      </svg>

      {/* Mountain Divider at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-[4] pointer-events-none">
        <svg
          viewBox="0 0 1440 300"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          {/* Mountain range with peak at center */}
          <path
            d="M 0,300 L 0,250 L 300,230 L 600,200 L 720,150 L 840,200 L 1140,230 L 1440,250 L 1440,300 Z"
            fill="#9BCFC4"
            opacity="0.3"
          />
        </svg>
        
        {/* Red Flag at Mountain Peak - positioned to align with path endpoint */}
        <div
          className="absolute transition-all duration-500 ease-out"
          style={{
            left: '50%',
            bottom: '150px',
            transform: `translateX(-50%) scale(${scrollProgress > 0.85 ? 1 : 0}) translateY(${scrollProgress > 0.85 ? 0 : 20}px)`,
            opacity: scrollProgress > 0.85 ? 1 : 0,
          }}
        >
          <svg width="28" height="40" viewBox="0 0 28 40">
            {/* Flag pole */}
            <line x1="2" y1="0" x2="2" y2="40" stroke="#777" strokeWidth="2" />
            {/* Red/coral flag */}
            <path
              d="M 2,3 L 24,3 L 24,16 L 14,13 L 2,16 Z"
              fill="#D77A6A"
              stroke="#C66958"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>

      <div className="container relative z-[5]">
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-32">
          <h2 className="text-4xl md:text-[60px] font-black uppercase font-display leading-none text-foreground/90">
            The route to strong concepts that conquer markets
          </h2>
          <p className="text-body-large mt-6 text-foreground/80 max-w-3xl mx-auto">
            Naturally starts with Blooms Creative. You determine the goal — together we determine the path to it. From strategy to reality. At full speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col items-start gap-5 ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              <Image src={service.icon} alt={`${service.title} icon`} width={70} height={70} />
              <h3 className="text-feature text-foreground/90">{service.title}</h3>
              <p className="text-body-regular text-foreground/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;