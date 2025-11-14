"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const WorkSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const { top, height } = sectionRef.current.getBoundingClientRect();
                const progress = Math.max(
                    0,
                    Math.min(1, (window.innerHeight - top) / (window.innerHeight + height))
                );
                setScrollProgress(progress);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const textParallaxStyle = (speed: number) => ({
        transform: `translateY(${scrollProgress * speed}px)`,
        willChange: 'transform'
    });

    // Image cards data - placeholder until user provides original images
    const imageCards = [
        { id: 1, type: 'video', src: 'https://cdn.prod.website-files.com/6791fcb8160a1d26db9b13c8%2F6900ed0560f459bd03bd42bf_ANVA_reel_25redenen-transcode.webm' },
        { id: 2, type: 'video', src: 'https://cdn.prod.website-files.com/6791fcb8160a1d26db9b13c8%2F67cada8accb13b1085b6d88b_mlkh-transcode.webm' },
        { id: 3, type: 'image', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/67c0885a237eb7894c50cba2_IMG_7125_20normaal-1.jpeg' },
        { id: 4, type: 'video', src: 'https://cdn.prod.website-files.com/6791fcb8160a1d26db9b13c8%2F67cec642341ad266ff4fabdd_zwdg_leader-transcode.webm' },
        { id: 5, type: 'video', src: 'https://cdn.prod.website-files.com/6791fcb8160a1d26db9b13c8%2F67d0042a987bfba871efe0ce_rnet-transcode.webm' },
        { id: 6, type: 'image', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/67c082ddfee8cc452c991277_IMG_1135_20normaal-3.jpeg' },
    ];

    // Duplicate array for seamless loop
    const duplicatedCards = [...imageCards, ...imageCards, ...imageCards];

    return (
        <section ref={sectionRef} id="work" className="relative bg-[#3a3a3a] text-foreground pt-40 pb-60 overflow-hidden">
            
            {/* Background text layers with parallax */}
            <div 
                className="absolute top-0 left-0 w-full font-display font-black text-[#4F4F4F]/40 whitespace-nowrap select-none z-0"
                style={{ ...textParallaxStyle(150), fontSize: 'clamp(100px, 20vw, 250px)', lineHeight: '0.9', top: '5%' }}
            >
                WORK WORK WORK WORK
            </div>
            <div 
                className="absolute top-0 left-0 w-full font-display font-black text-[#4F4F4F]/40 whitespace-nowrap select-none z-0"
                style={{ ...textParallaxStyle(80), fontSize: 'clamp(100px, 20vw, 250px)', lineHeight: '0.9', top: '45%' }}
            >
                WORK WORK WORK WORK
            </div>

            {/* Sloped image cards container with automatic animation */}
            <div className="container relative mx-auto h-[110vh] min-h-[900px] z-[1] flex items-center justify-center">
                <div className="relative w-full overflow-visible">
                    {/* Sloped structure container - rotated for diagonal effect */}
                    <div 
                        className="relative"
                        style={{
                            transform: 'rotate(-8deg)',
                            transformOrigin: 'center center'
                        }}
                    >
                        {/* Auto-scrolling image strip */}
                        <div className="relative w-full overflow-hidden py-8">
                            <div 
                                className="flex gap-6 animate-marquee-slow"
                                style={{
                                    animation: 'marquee 40s linear infinite',
                                }}
                            >
                                {duplicatedCards.map((card, index) => (
                                    <div
                                        key={`${card.id}-${index}`}
                                        className="flex-shrink-0 w-[320px] h-[400px] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105 hover:z-10"
                                        style={{
                                            boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
                                        }}
                                    >
                                        <Link href="#" className="block w-full h-full">
                                            {card.type === 'video' ? (
                                                <video 
                                                    className="w-full h-full object-cover" 
                                                    autoPlay 
                                                    loop 
                                                    muted 
                                                    playsInline
                                                >
                                                    <source src={card.src} type="video/webm" />
                                                </video>
                                            ) : (
                                                <Image 
                                                    src={card.src} 
                                                    alt="Project showcase"
                                                    width={320}
                                                    height={400}
                                                    className="w-full h-full object-cover" 
                                                />
                                            )}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* CTA Button */}
                <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 z-20">
                    <Link href="/impressie"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-5 text-button font-semibold uppercase transition-all duration-300 hover:scale-105"
                    >
                        View our work
                    </Link>
                </div>
            </div>
            
            {/* Mountain divider */}
            <div 
                className="absolute bottom-0 left-0 w-full h-[200px] bg-[#E8E4DC]"
                style={{
                  clipPath: 'polygon(100% 26%, 100% 100%, 0 100%, 0 71%, 10% 59%, 17% 69%, 28% 52%, 42% 70%, 50% 56%, 61% 72%, 70% 39%, 83% 62%, 92% 43%)',
                  transform: 'translateY(2px)'
                }}
            ></div>

            {/* Inline keyframes for marquee animation */}
            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.333%);
                    }
                }
            `}</style>
        </section>
    );
};

export default WorkSection;