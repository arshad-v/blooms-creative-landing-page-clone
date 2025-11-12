"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: "/", label: "Home" },
  { href: "/impressie", label: "Impressie" },
  { href: "#contact", label: "Contact" },
];

export default function StickyNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isNl = !pathname.startsWith('/en');

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(prev => !prev);

  const overlayClasses = isOpen 
    ? 'translate-y-0 opacity-100' 
    : '-translate-y-full opacity-0';

  const getMenuItemClasses = (index: number) => {
    return `transition-all duration-500 ease-in-out ${
      isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
    }`;
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-background z-[9990] flex flex-col justify-center items-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${overlayClasses}`}
      >
        <nav className="flex flex-col items-center gap-y-4 md:gap-y-8">
          {navItems.map((item, index) => (
            <Link 
              key={item.label} 
              href={item.href} 
              className={`font-display text-[12vw] sm:text-[8vw] md:text-[6vw] text-foreground uppercase tracking-tight leading-none hover:text-primary transition-colors duration-300 ${getMenuItemClasses(index)}`} 
              style={{ transitionDelay: `${isOpen ? 200 + index * 100 : (navItems.length - index - 1) * 50}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div 
            className={`absolute bottom-10 flex gap-4 items-center ${getMenuItemClasses(navItems.length)}`}
            style={{ transitionDelay: `${isOpen ? 200 + navItems.length * 100 : 0}ms` }}
        >
            <a 
                href="/" 
                className={`flex items-center gap-2 transition-opacity duration-300 ${isNl ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
            >
                <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/6903854a4b1afbf31fe633c4_flag_nl-1.svg" alt="NL Flag" width={24} height={16} className="w-6 h-auto" />
                <span className="text-foreground font-body font-semibold text-sm">NL</span>
            </a>
            <a 
                href="/en"
                className={`flex items-center gap-2 transition-opacity duration-300 ${!isNl ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
            >
                <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/6903854a4b1afbf31fe633c3_uk-flag-2.svg" alt="EN Flag" width={24} height={16} className="w-6 h-auto" />
                <span className="text-foreground font-body font-semibold text-sm">EN</span>
            </a>
        </div>
      </div>

      <header className="fixed top-0 left-0 right-0 z-[9999] p-5 sm:p-10 pointer-events-none">
        <div className="max-w-[1600px] mx-auto flex justify-between items-start">
            <Link href="/" className="pointer-events-auto" aria-label="Home">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-accent rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
                    <Image 
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/icons/679a426827442a74b0bd6753_8fc34e8ad47e5962ba7a157e5-1.png"
                        alt="Basecamp Logo"
                        width={40}
                        height={40}
                        className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
                        priority
                    />
                </div>
            </Link>
            
            <button 
                onClick={toggleMenu} 
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-md pointer-events-auto transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
                style={{ backgroundColor: isOpen ? 'var(--color-primary)' : 'var(--color-secondary)' }}
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
                <div className="relative w-7 h-5 sm:w-8 sm:h-6">
                    <span className={`block absolute h-[3px] w-full rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? 'rotate-45 top-1/2 -translate-y-1/2' : 'top-0'}`} style={{backgroundColor: 'var(--color-secondary-foreground)'}}></span>
                    <span className={`block absolute h-[3px] w-full rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] top-1/2 -translate-y-1/2 ${isOpen ? 'opacity-0' : 'opacity-100'}`} style={{backgroundColor: 'var(--color-secondary-foreground)'}}></span>
                    <span className={`block absolute h-[3px] w-full rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? '-rotate-45 top-1/2 -translate-y-1/2' : 'bottom-0'}`} style={{backgroundColor: 'var(--color-secondary-foreground)'}}></span>
                </div>
            </button>
        </div>
      </header>
      
      <div className="fixed top-1/2 right-3 sm:right-5 -translate-y-1/2 z-50 bg-accent text-accent-foreground p-2 rounded-md hidden md:block">
          <p className="font-display font-bold text-lg" style={{ writingMode: 'vertical-rl' }}>W.</p>
      </div>
    </>
  );
}