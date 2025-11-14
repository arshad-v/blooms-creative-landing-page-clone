"use client";

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import { Compass, Binoculars } from 'lucide-react';
import Link from 'next/link';

export default function PhilosophySection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    });

    const mapY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
    const cloud1Y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
    const cloud2Y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

    return (
        <section 
            ref={sectionRef}
            className="relative bg-background text-foreground overflow-hidden"
        >
            <div 
                className="absolute inset-0 bg-repeat opacity-[0.03]"
                style={{ backgroundImage: 'url("https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/6799fa7534106d08fd817120_grain2-22.png")' }}
            />
            <motion.div style={{ y: mapY }} className="absolute inset-0 z-0">
                <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/679a4b5fc8a7414f3b4ae38c_LINES-3.svg"
                    alt="Topographic map background"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-10"
                />
            </motion.div>
            
            <svg 
                className="absolute inset-0 w-full h-full z-[2] pointer-events-none"
                viewBox="0 0 1920 1080"
                preserveAspectRatio="xMidYMid slice"
            >
                <motion.path
                    d="M 200 150 Q 400 200 600 400 T 900 750 L 950 820"
                    fill="none"
                    stroke="#9BCFC4"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ 
                        duration: 2.5, 
                        ease: "easeInOut",
                        delay: 0.3
                    }}
                />
            </svg>

            <motion.div 
                className="absolute z-[3] bg-accent rounded-full p-3 shadow-lg"
                style={{ top: '12%', left: '8%' }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <Binoculars className="text-accent-foreground" size={32} strokeWidth={2} />
            </motion.div>

            <motion.div 
                className="absolute z-[3]"
                style={{ bottom: '15%', left: '47%' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 1.5 }}
            >
                <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
                    <path 
                        d="M 10 80 L 35 45 L 50 60 L 60 40 L 80 60 L 110 80 Z" 
                        fill="#9BCFC4" 
                        stroke="#3A3A3A" 
                        strokeWidth="1.5"
                    />
                    <line 
                        x1="60" 
                        y1="40" 
                        x2="60" 
                        y2="15" 
                        stroke="#9BCFC4" 
                        strokeWidth="2"
                    />
                    <motion.path 
                        d="M 60 15 L 80 20 L 80 28 L 60 25 Z" 
                        fill="#D77A6A"
                        stroke="#3A3A3A"
                        strokeWidth="1"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.4, delay: 2.0 }}
                        style={{ transformOrigin: "60px 20px" }}
                    />
                </svg>
            </motion.div>

            <motion.div style={{ y: cloud1Y }} className="absolute top-[8%] left-[5%] w-[150px] h-[100px] z-[1] opacity-60 pointer-events-none md:w-[200px] md:h-[133px]">
                <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/679c9e45861427f70627651f_cloud01-5.svg"
                    alt="Cloud decoration"
                    layout="fill"
                    objectFit="contain"
                />
            </motion.div>

            <motion.div style={{ y: cloud2Y }} className="absolute bottom-[12%] right-[8%] w-[200px] h-[130px] z-[1] opacity-60 pointer-events-none md:w-[250px] md:h-[162px]">
                <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/679ca21e660dfa9e9b186312_cloud02-6.svg"
                    alt="Cloud decoration"
                    layout="fill"
                    objectFit="contain"
                />
            </motion.div>


            <div className="container relative z-10 py-[120px] lg:py-[200px]">
                <div className="max-w-[840px] mx-auto flex flex-col items-center text-center gap-10">
                    <h2 className="font-display text-[60px] md:text-[80px] lg:text-[90px] font-black uppercase leading-none">
                      We believe in the power of strong ideas
                    </h2>

                    <div className="w-[140px] h-[140px] bg-accent rounded-full flex items-center justify-center shrink-0">
                        <Compass className="text-accent-foreground" size={64} strokeWidth={1.5} />
                    </div>

                    <p className="text-[18px] leading-[1.7]">
                        Developing innovative creative concepts and smart strategies, constantly experimenting and improving — that&apos;s where our strength lies on the path to results. We believe in the impact of strong concepts that truly touch people. Not fleeting ads, but campaigns that connect with the real lives of real people — people who are busy, easily distracted, and only pay attention to what truly interests them. People with their own motivations to choose something — or not. That&apos;s why we seek deep, strategic collaborations focused on sustainable, long-term growth.
                    </p>

                    <Link
                      href="#contact"
                      className="inline-block bg-accent text-accent-foreground rounded-full px-8 py-4 text-button font-semibold uppercase tracking-wider hover:scale-105 transition-transform duration-300"
                    >
                      Don't wait any longer — contact us!
                    </Link>
                </div>
            </div>
        </section>
    );
}