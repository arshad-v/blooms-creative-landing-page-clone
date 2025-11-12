import { Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

const FooterSection = () => {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-[#2C2C2C] text-foreground px-6 md:px-20 pt-20 md:pt-40 pb-10 md:pb-20"
      style={{
        backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/6799fa7534106d08fd817120_grain2-22.png'), url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/679a4b5fc8a7414f3b4ae38c_LINES-3.svg')`,
        backgroundPosition: '0px 0px, 50% 50%',
        backgroundSize: 'auto, cover',
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-8 relative z-10">
        <div className="flex flex-col">
          <div
            className="w-[72px] h-[72px] bg-accent mb-8"
            style={{
              maskImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67a0ddfe278dda42d3c85c24_B-icon_black-15.svg')`,
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67a0ddfe278dda42d3c85c24_B-icon_black-15.svg')`,
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
            }}
          ></div>

          <h2 className="font-display text-[56px] font-extrabold uppercase leading-[0.9]">
            Blooms
          </h2>
          <h2 className="font-display text-[56px] font-extrabold uppercase leading-[0.9]">
            Creative
          </h2>

          <p className="mt-6 text-foreground text-base font-body">
            Where creativity meets performance.
          </p>
          <p className="mt-2 text-sm font-body text-foreground/70">
            Amersfoort, Netherlands
          </p>
          <div className="mt-8 space-y-2 text-sm font-body">
            <p className="flex items-center gap-2">
              <span>📧</span>
              <a href="mailto:hi@bloomscreative.agency" className="hover:underline">hi@bloomscreative.agency</a>
            </p>
            <p className="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:(000) 000-0000" className="hover:underline">(000) 000-0000</a>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end gap-10 md:gap-[130px] pt-2">
          <div className="flex flex-col items-start md:items-end gap-5">
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-[#727272] flex items-center justify-center transition-colors hover:border-foreground group">
                <Linkedin className="w-5 h-5 text-foreground" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-[#727272] flex items-center justify-center transition-colors hover:border-foreground group">
                <Instagram className="w-5 h-5 text-foreground" />
              </a>
            </div>
            <a href="#" className="text-sm font-body text-foreground hover:underline underline-offset-4">
              General Terms and Conditions
            </a>
          </div>

          <div className="text-sm font-body text-[#727272]">
            © 2025 Blooms Creative. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;