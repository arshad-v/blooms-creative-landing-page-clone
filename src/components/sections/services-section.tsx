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

      // Calculate scroll progress through the section
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      // Start animation when section enters viewport
      const startPoint = windowHeight - sectionTop;
      const progress = Math.max(0, Math.min(1, startPoint / (sectionHeight * 0.8)));

      setScrollProgress(progress);

      // Animate path drawing smoothly
      const pathLength = pathRef.current.getTotalLength();
      const drawLength = pathLength * progress;
      pathRef.current.style.strokeDashoffset = `${pathLength - drawLength}`;
    };

    // Initialize path animation
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
        viewBox="0 0 1000 1200"
        preserveAspectRatio="xMidYMid slice"
        style={{ overflow: 'visible' }}
      >
        {/* Smooth flowing path from heading area down to mountain peak */}
        <path
          ref={pathRef}
          d="M 500,200 C 450,300 420,420 440,540 C 455,640 480,740 495,840 C 498,900 500,960 500,1020"
          fill="none"
          stroke="#9BCFC4"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            filter: 'drop-shadow(0 0 10px rgba(155, 207, 196, 0.8))',
            transition: 'stroke-dashoffset 0.3s ease-out',
          }}
        />
      </svg>

      {/* Mountain Divider with Peak */}
      <div className="absolute bottom-0 left-0 right-0 z-[4] pointer-events-none h-[200px] md:h-[280px]">
        <svg
          viewBox="0 0 1440 280"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Mountain range with prominent peak at center where path ends */}
          <path
            d="M 0,280 L 0,220 L 200,200 L 400,180 L 600,160 L 700,100 L 740,80 L 780,100 L 840,140 L 1040,180 L 1240,200 L 1440,220 L 1440,280 Z"
            fill="#9BCFC4"
            opacity="0.35"
          />
          {/* Secondary mountain layer */}
          <path
            d="M 0,280 L 0,240 L 300,230 L 500,210 L 680,190 L 720,150 L 760,190 L 940,210 L 1140,230 L 1440,240 L 1440,280 Z"
            fill="#9BCFC4"
            opacity="0.2"
          />
        </svg>
        
        {/* Red Flag at Mountain Peak */}
        <div
          className="absolute transition-all duration-700 ease-out"
          style={{
            left: '50%',
            bottom: '180px',
            transform: `translateX(-50%) scale(${scrollProgress > 0.75 ? 1 : 0})`,
            opacity: scrollProgress > 0.75 ? 1 : 0,
            zIndex: 10,
          }}
        >
          <svg width="32" height="48" viewBox="0 0 32 48">
            {/* Flag pole */}
            <line 
              x1="3" 
              y1="0" 
              x2="3" 
              y2="48" 
              stroke="#888" 
              strokeWidth="2.5" 
              strokeLinecap="round"
            />
            {/* Red/coral flag with wave effect */}
            <path
              d="M 3,4 L 28,4 C 28,4 28,10 26,12 C 24,14 22,14 20,12 C 18,10 16,10 14,12 C 12,14 10,14 8,12 C 6,10 4,10 3,12 Z"
              fill="#D77A6A"
              stroke="#B85E4E"
              strokeWidth="1"
            />
            {/* Flag shadow for depth */}
            <path
              d="M 3,12 L 28,12 C 28,12 28,18 26,20 C 24,22 22,22 20,20 C 18,18 16,18 14,20 C 12,22 10,22 8,20 C 6,18 4,18 3,20 Z"
              fill="#D77A6A"
              opacity="0.7"
              stroke="#B85E4E"
              strokeWidth="1"
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