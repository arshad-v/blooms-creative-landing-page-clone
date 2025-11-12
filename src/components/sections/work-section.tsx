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

    const cardParallaxStyle = (speed: number, rotation: number) => ({
        transform: `translate3d(0, ${-scrollProgress * speed}px, 0) rotate(${rotation}deg)`,
        willChange: 'transform'
    });

    return (
        <section ref={sectionRef} id="work" className="relative bg-[#3a3a3a] text-foreground pt-40 pb-60 overflow-hidden">
            
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

            <div className="container relative mx-auto h-[110vh] min-h-[900px] z-[1]">
                
                <div style={cardParallaxStyle(180, -5)} className="absolute w-[30%] lg:w-[28%] top-[5%] left-[5%]">
                    <Link href="#" className="block rounded-xl md:rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
                        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                            <source src="https://cdn.prod.website-files.com/6791fcb8160a1d26db9b13c8%2F6900ed0560f459bd03bd42bf_ANVA_reel_25redenen-transcode.webm" type="video/webm" />
                        </video>
                    </Link>
                </div>
                
                <div style={cardParallaxStyle(280, 4)} className="absolute w-[28%] lg:w-[25%] top-[10%] left-[45%]">
                     <Link href="#" className="block rounded-xl md:rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
                        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                            <source src="https://cdn.prod.website-files.com/6791fcb8160a1d26db9b13c8%2F67cada8accb13b1085b6d88b_mlkh-transcode.webm" type="video/webm"/>
                         </video>
                    </Link>
                </div>

                <div style={cardParallaxStyle(120, -3)} className="absolute w-[25%] lg:w-[22%] top-[45%] left-[18%]">
                    <Link href="#" className="block rounded-xl md:rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
                        <Image 
                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/67c0885a237eb7894c50cba2_IMG_7125_20normaal-1.jpeg" 
                            alt="Construction site project"
                            width={450} height={560}
                            className="w-full h-full object-cover" 
                        />
                    </Link>
                </div>
                
                <div style={cardParallaxStyle(220, 5)} className="absolute w-[36%] lg:w-[33%] top-[55%] right-[5%]">
                    <Link href="#" className="block rounded-xl md:rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
                        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                            <source src="https://cdn.prod.website-files.com/6791fcb8160a1d26db9b13c8%2F67d0042a987bfba871efe0ce_rnet-transcode.webm" type="video/webm" />
                        </video>
                    </Link>
                </div>
                
                <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 z-20">
                    <Link href="/impressie"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-5 text-button font-semibold uppercase transition-all duration-300 hover:scale-105"
                    >
                        View our work
                    </Link>
                </div>
            </div>
            
            <div 
                className="absolute bottom-0 left-0 w-full h-[200px] bg-[#E8E4DC]"
                style={{
                  clipPath: 'polygon(100% 26%, 100% 100%, 0 100%, 0 71%, 10% 59%, 17% 69%, 28% 52%, 42% 70%, 50% 56%, 61% 72%, 70% 39%, 83% 62%, 92% 43%)',
                  transform: 'translateY(2px)'
                }}
            ></div>
        </section>
    );
};

export default WorkSection;