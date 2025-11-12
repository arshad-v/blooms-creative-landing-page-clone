"use client";

import Image from "next/image";
import { Phone, Mail, ArrowDown } from "lucide-react";

export default function HeroSection() {
  const headlineWords = "creative agency for market leaders & challengers".split(
    " ",
  );

  return (
    <>
      <div
        className="fixed inset-0 z-50 pointer-events-none"
        style={{
          backgroundImage:
            'url("https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/6799fa7534106d08fd817120_grain2-22.png")',
          opacity: 0.04,
          backgroundSize: "auto",
          backgroundRepeat: "repeat",
        }}
      />
      <section
        id="top"
        className="relative flex flex-col items-center justify-center min-h-screen bg-muted text-foreground overflow-hidden pt-24 pb-12"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/679a4b5fc8a7414f3b4ae38c_LINES-3.svg"
            alt="Topographic lines background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="opacity-[0.07] mix-blend-screen"
          />
        </div>

        <div
          className="absolute text-foreground/30 text-[10px] leading-tight font-mono hidden md:block"
          style={{ top: "20%", left: "15%" }}
        >
          <p>52.0907° N</p>
          <p>5.1214° E</p>
        </div>
        <div
          className="absolute text-foreground/30 text-[10px] leading-tight font-mono hidden md:block"
          style={{ top: "35%", right: "12%" }}
        >
          <p>48.8566° N</p>
          <p>2.3522° E</p>
        </div>
        <div
          className="absolute text-foreground/30 text-[10px] leading-tight font-mono hidden md:block"
          style={{ bottom: "25%", left: "10%" }}
        >
          <p>51.5072° N</p>
          <p>0.1276° W</p>
        </div>
        <div
          className="absolute text-foreground/30 text-[10px] leading-tight font-mono hidden md:block"
          style={{ bottom: "15%", right: "20%" }}
        >
          <p>35.6762° N</p>
          <p>139.6503° E</p>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center animate-fade-in animate-duration-1000">
          <div className="font-body text-[12rem] sm:text-[15rem] lg:text-[18rem] font-extralight leading-[0.8] text-accent/90">
            B
          </div>
          <div className="font-display text-2xl sm:text-3xl lg:text-4xl -mt-4 sm:-mt-6 lg:-mt-8 tracking-[0.2em]">
            <p>BLOOMS</p>
            <p>CREATIVE</p>
          </div>
        </div>

        <div className="absolute bottom-16 z-10 animate-fade-in animate-delay-1000">
          <div className="animate-bounce">
            <ArrowDown className="text-primary" size={32} />
          </div>
        </div>
      </section>

      <section className="relative bg-muted text-foreground pt-10 pb-20 md:pb-32 lg:pb-40 overflow-hidden">
        <div className="container px-6 md:px-20 mx-auto">
          <h1 className="font-display text-5xl sm:text-6xl md:text-[6.5rem] lg:text-[7.5rem] leading-none text-foreground uppercase">
            {headlineWords.map((word, i) => (
              <span
                key={i}
                className="inline-block animate-fade-up animate-ease-in-out"
                style={{ animationFillMode: "backwards", animationDelay: `${i * 100}ms` }}
              >
                {word}{" "}
              </span>
            ))}
          </h1>
        </div>

        <div className="relative mt-20 md:mt-28">
          <div className="absolute inset-0">
            <div className="h-full w-full relative">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/679b7b43fb5ada969717ebe1_terradriehoek-4.svg"
                alt="Coral decorative shape"
                layout="fill"
                objectFit="cover"
                objectPosition="right"
                priority
              />
            </div>
          </div>

          <div className="container mx-auto px-6 md:px-20 py-10 md:py-16 lg:py-24 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="md:col-start-2 text-secondary-foreground">
                <h2 className="text-feature text-3xl md:text-4xl font-bold">
                  Blooms Creative is a marketing and creative agency from Amersfoort that goes the extra mile for its clients.
                </h2>
                <div className="mt-8 space-y-6 text-body-regular font-normal">
                  <p>
                    We work at the intersection of commerce and creative communication. We understand business processes and get excited when they become more complex — because that&apos;s where we can make a real impact.
                  </p>
                  <p>
                    Vision is essential, and that&apos;s where we stand out — through measurable results or a distinctive creative approach. We respect traditions, but we love to question them if it brings us closer to the goal.
                  </p>
                  <p>
                    From creative idea, to partnership, to results.
                  </p>
                  <p className="font-semibold">
                    Ready to work with us? Call or email us directly!
                  </p>
                </div>
                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:(000) 000-0000"
                    className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground rounded-full px-6 py-3 text-button font-semibold hover:bg-secondary/90 transition-colors"
                  >
                    <Phone size={18} />
                    <span>(000) 000-0000</span>
                  </a>
                  <a
                    href="mailto:hi@bloomscreative.agency"
                    className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground rounded-full px-6 py-3 text-button font-semibold hover:bg-secondary/90 transition-colors"
                  >
                    <Mail size={18} />
                    <span>hi@bloomscreative.agency</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}