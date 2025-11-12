import Image from "next/image";

const logos = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/67e2cffd8610210bcf289996_Schaap_20Van_20Dijk-7.png", alt: "Schaap Van Dijk Logo", width: 147, height: 40 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/67e2cffdaa1b7c6af53a810c_MLKH-8.png", alt: "MLKH Logo", width: 110, height: 40 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/67e2cffd0deae7aa3e20013a_Fedet-9.png", alt: "Fedet Logo", width: 104, height: 40 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/67e2cffd986c1fedc21ce500_ZWDG-10.png", alt: "ZWDG Logo", width: 133, height: 40 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/67e2cffd483b44589f5d95ef_Rnet-11.png", alt: "R-net Logo", width: 93, height: 40 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/67e2cffd45cdd59a9ab00485_VX_20company-12.png", alt: "VX Company Logo", width: 139, height: 40 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/67e2cffd9ca61421d3e59b47_Arlande-13.png", alt: "Arlande Logo", width: 137, height: 40 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/67e2cffdb3fc99334ad40ff8_Menzis-14.png", alt: "Menzis Logo", width: 114, height: 40 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/67e2cffdd55b3b26895e45e2_ANVA-15.png", alt: "ANVA Logo", width: 106, height: 40 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/67e2cffd7ac48fc5abeba6ef_TRILUX-16.png", alt: "TRILUX Logo", width: 114, height: 40 },
];

const ClientLogosSection = () => {
  return (
    <section className="relative bg-[#E8E4DC] text-[#3A3A3A] pt-24 pb-32 md:pb-48 overflow-hidden">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 80s linear infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-marquee {
              animation-play-state: paused;
            }
          }
        `}
      </style>
      
      <div className="container mb-16 md:mb-20 text-center">
        <h2 className="font-display text-[90px] md:text-[120px] font-black uppercase leading-none mb-8">
          There's<br />
          more to<br />
          explore
        </h2>
        <p className="text-body-large max-w-2xl mx-auto text-[#3A3A3A]/80">
          We work with ambitious brands that dare to challenge their market. Together, we create campaigns that move people and grow businesses.
        </p>
      </div>
      
      <div className="flex">
        <div className="flex animate-marquee shrink-0 items-center">
          {[...logos, ...logos].map((logo, index) => (
            <div className="px-10" key={index}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-10 w-auto object-contain grayscale opacity-80"
              />
            </div>
          ))}
        </div>
      </div>

      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/679cb26509e276acb0aec280_border_20mountains-7.svg"
        alt="Mountain range divider"
        width={1920}
        height={160}
        className="absolute bottom-0 left-0 w-full h-auto object-cover -mb-1 z-10"
        quality={100}
        unoptimized
      />
    </section>
  );
};

export default ClientLogosSection;