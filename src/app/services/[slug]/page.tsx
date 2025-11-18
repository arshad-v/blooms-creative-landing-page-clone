import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle, ArrowRight, Target, Zap, Shield } from "lucide-react";
import { notFound } from "next/navigation";

const servicesData = {
  "branding-strategy": {
    title: "Branding & Strategy",
    tagline: "Build an unforgettable brand identity",
    description: "We create powerful brand identities that resonate with your audience and stand the test of time. Our strategic approach ensures your brand not only looks exceptional but also drives meaningful business results.",
    features: [
      "Brand identity design and development",
      "Strategic positioning and messaging",
      "Visual identity systems and guidelines",
      "Brand architecture and naming",
      "Market research and competitive analysis",
      "Brand storytelling and narrative development",
    ],
    benefits: [
      "Stand out in crowded markets with a distinctive identity",
      "Build emotional connections with your target audience",
      "Create consistency across all touchpoints",
      "Increase brand recognition and recall",
    ],
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67e3cb23974af19787cae7a6_icon-compass2-9.svg",
  },
  "digital-marketing": {
    title: "Digital Marketing",
    tagline: "Drive visibility, engagement & growth",
    description: "Transform your online presence with data-driven digital marketing strategies that deliver measurable results. We combine creativity with analytics to maximize your ROI across all digital channels.",
    features: [
      "Search engine optimization (SEO)",
      "Pay-per-click advertising (PPC)",
      "Email marketing campaigns",
      "Marketing automation",
      "Conversion rate optimization",
      "Analytics and performance tracking",
    ],
    benefits: [
      "Increase qualified traffic to your website",
      "Generate more leads and conversions",
      "Optimize marketing spend with data insights",
      "Build sustainable growth engines",
    ],
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67e3ca3c87cecd2b40e61d1f_icon-plan-8.svg",
  },
  "social-media-marketing": {
    title: "Social Media Marketing",
    tagline: "Turn followers into loyal communities",
    description: "Build engaged communities and amplify your brand voice across social platforms. Our strategic approach to social media transforms followers into brand advocates and drives meaningful business outcomes.",
    features: [
      "Social media strategy development",
      "Content creation and curation",
      "Community management",
      "Paid social advertising",
      "Influencer partnerships",
      "Social listening and insights",
    ],
    benefits: [
      "Build authentic relationships with your audience",
      "Increase brand awareness and reach",
      "Drive traffic and conversions from social",
      "Create viral moments and shareable content",
    ],
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67e3d12b17839048da3d8c4c_icon-merge2-10.svg",
  },
  "influencer-marketing": {
    title: "Influencer Marketing",
    tagline: "Authentic collaborations that convert",
    description: "Connect with your audience through trusted voices. We create authentic influencer partnerships that drive real results, from brand awareness to direct conversions.",
    features: [
      "Influencer identification and vetting",
      "Campaign strategy and management",
      "Contract negotiation and execution",
      "Content collaboration and approval",
      "Performance tracking and ROI analysis",
      "Relationship management",
    ],
    benefits: [
      "Tap into established, engaged audiences",
      "Build credibility through third-party endorsement",
      "Create authentic, relatable content at scale",
      "Achieve measurable ROI from influencer partnerships",
    ],
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67e3c35719a6b4fa2ce47ee9_icon-binoc-14.svg",
  },
  "content-production": {
    title: "Content & Production",
    tagline: "Visual stories that resonate",
    description: "Bring your brand to life with compelling content that captures attention and drives action. From concept to final production, we create visual stories that resonate with your audience.",
    features: [
      "Video production and editing",
      "Photography and image creation",
      "Copywriting and storytelling",
      "Motion graphics and animation",
      "Podcast production",
      "Content strategy and planning",
    ],
    benefits: [
      "Create thumb-stopping content that engages",
      "Tell your story in visually compelling ways",
      "Maintain consistent quality across all content",
      "Maximize content ROI with strategic repurposing",
    ],
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67e3cf3bf7882ee771324879_icon-draft-11.svg",
  },
  "web-ecommerce": {
    title: "Web & E-Commerce",
    tagline: "Design meets conversion",
    description: "Create digital experiences that convert visitors into customers. Our web and e-commerce solutions combine beautiful design with conversion-optimized functionality.",
    features: [
      "Website design and development",
      "E-commerce platform setup",
      "User experience (UX) optimization",
      "Mobile-first responsive design",
      "Payment gateway integration",
      "Performance optimization",
    ],
    benefits: [
      "Increase online sales and conversions",
      "Provide seamless user experiences",
      "Scale your online business efficiently",
      "Reduce cart abandonment and friction",
    ],
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67e3c8aa6af16f02a7d6e6ae_icon-cook-12.svg",
  },
  "ai-automation": {
    title: "AI Solutions",
    tagline: "AI-first systems that run your business — reliably and intelligently",
    subhead: "Automate routine work, host secure AI services, and unlock insights that drive decisions",
    description: "AI Solutions is the core of Blooms Creatives. We design and deliver production-ready AI systems that integrate with your existing tools, automate business processes, and surface actionable insights. Our work spans from small automation wins (lead qualification bots, email workflows) to full AI platform builds (model hosting, pipelines, MLOps).",
    
    collaboration: {
      title: "Collaboration with Blooms Creative & Qryp.ai",
      content: "Qryp.ai is the dedicated AI sub-brand of Blooms Creative — built to accelerate how businesses adopt automation, AI infrastructure, and real-time intelligence.",
      points: [
        "Blooms Creative leads strategy, creative engineering, and system architecture",
        "Qryp.ai delivers AI automation, model hosting, and intelligent pipelines"
      ],
      conclusion: "This collaboration ensures every project combines business understanding, creative clarity, and deep technical execution — resulting in AI systems that are powerful, scalable, and truly aligned with your operational goals."
    },

    coreAreas: [
      {
        title: "Business Process Automation",
        items: [
          "Automate lead capture → qualification → routing (CRM integration)",
          "Automate repetitive marketing tasks: scheduling, reporting, ad optimisation triggers",
          "Build event-driven workflows that reduce manual intervention and human error"
        ]
      },
      {
        title: "AI Infrastructure Setup",
        items: [
          "Design secure, scalable AI hosting (Cloud Run / GKE / managed inference)",
          "Dockerize models and set up CI/CD for model updates",
          "Configure logging, monitoring, rollbacks and cost-optimised runtimes"
        ]
      },
      {
        title: "AI Chatbots & Customer Experience",
        items: [
          "Build conversational assistants for sales, support and onboarding",
          "Integrate conversation history with CRM and helpdesk systems",
          "Provide fallback escalation, analytics, and human handoff workflows"
        ]
      },
      {
        title: "Predictive Analytics & Insights",
        items: [
          "Build pipelines to transform raw data into forecasting models",
          "Dashboarding for customer churn, LTV, and campaign performance",
          "A/B testing orchestration and automated action recommendations"
        ]
      },
      {
        title: "Data Pipelines & ETL",
        items: [
          "Ingest data from web, ads, CRM and product telemetry",
          "Clean, enrich and store datasets for modelling",
          "Provide secure access controls and GDPR-aware storage patterns"
        ]
      }
    ],

    process: [
      {
        step: "01",
        title: "Discovery & Audit",
        description: "Map data sources, systems, and business KPIs"
      },
      {
        step: "02",
        title: "Prototype",
        description: "Rapid PoC automation or chatbot to validate value"
      },
      {
        step: "03",
        title: "Build & Integrate",
        description: "Production-grade pipelines, APIs, and monitoring"
      },
      {
        step: "04",
        title: "Train & Iterate",
        description: "Refine models, add data sources, reduce drift"
      },
      {
        step: "05",
        title: "Operate & Support",
        description: "SLA-backed hosting, retraining cycles, and optimization sprints"
      }
    ],

    whyItMatters: "AI tooling is powerful only when it's reliable and aligned to business workflows. We translate AI research into systems that actually reduce cost, increase throughput, and surface insights your team can act on — not just shiny demos.",

    deliverables: [
      "Architecture diagram and cost estimates",
      "Deployed automation flows with logs and runbooks",
      "Hosted model endpoints with health checks and versioning",
      "Analytics dashboard and scheduled reports",
      "Admin panel for toggles and retraining triggers"
    ],

    targetAudience: [
      {
        icon: Target,
        title: "SMEs",
        description: "Scaling customer touchpoints without hiring more staff"
      },
      {
        icon: Zap,
        title: "SaaS Companies",
        description: "Wanting smarter lead routing and demo booking"
      },
      {
        icon: Shield,
        title: "E-commerce Brands",
        description: "Automating recommendations and personalization"
      }
    ],

    ctaTitle: "Ready to make your business intelligent?",
    ctaDescription: "Start with a free systems audit — we'll map one 30-day automation that pays back within months.",

    features: [
      "Business process automation: Lead capture, qualification, routing with CRM integration",
      "AI infrastructure setup: Secure, scalable hosting (Cloud Run / GKE), CI/CD for models",
      "AI chatbots & customer experience: Conversational assistants with CRM integration",
      "Predictive analytics & insights: Forecasting models, churn prediction, LTV dashboards",
      "Data pipelines & ETL: Ingest, clean, enrich data from web, ads, CRM, and telemetry",
      "Event-driven workflows: Reduce manual intervention and human error",
      "Model hosting with monitoring: Logging, rollbacks, cost-optimized runtimes",
      "A/B testing orchestration: Automated action recommendations",
    ],
    benefits: [
      "Translate AI research into reliable systems that reduce costs and increase throughput",
      "Surface insights your team can act on — not just shiny demos",
      "Automate routine work to free teams for strategic initiatives",
      "Deploy production-grade pipelines with SLA-backed hosting and support",
      "Scale customer touchpoints without proportional staff increases",
      "Get 30-day automation that pays back within months",
    ],
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67e3ca3c87cecd2b40e61d1f_icon-plan-8.svg",
  },
  "managed-growth": {
    title: "Managed Growth",
    tagline: "Scale sustainably with data-driven insights",
    description: "Achieve sustainable, predictable growth with our comprehensive growth management services. We combine strategy, execution, and continuous optimization to drive long-term success.",
    features: [
      "Growth strategy development",
      "Data analytics and reporting",
      "A/B testing and experimentation",
      "Customer lifecycle optimization",
      "Revenue forecasting and planning",
      "Ongoing performance management",
    ],
    benefits: [
      "Achieve predictable, sustainable growth",
      "Make data-driven decisions with confidence",
      "Optimize customer lifetime value",
      "Scale efficiently without waste",
    ],
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67e3c43a211df2e37b7f257c_icon-mountains-13.svg",
  },
};

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  // Check if this is the AI automation page
  const isAIPage = params.slug === "ai-automation";

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Map Overlay */}
        <div
          className="absolute inset-0 z-[1] opacity-10"
          style={{
            backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/679a4b5fc8a7414f3b4ae38c_LINES-3.svg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Grain Overlay */}
        <div
          className="absolute inset-0 z-[2] opacity-[0.03]"
          style={{
            backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/6799fa7534106d08fd817120_grain2-22.png')`,
            backgroundRepeat: 'repeat',
          }}
        />

        {/* Floating Accent Circles */}
        <div className="absolute top-20 right-10 w-48 h-48 rounded-full bg-accent/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

        <div className="container relative z-[5]">
          {/* Back Button */}
          <Link 
            href="/#services" 
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-semibold uppercase">Back to Services</span>
          </Link>

          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Icon */}
            <div className="shrink-0">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-accent/10 border-2 border-accent/30 flex items-center justify-center p-6">
                <Image src={service.icon} alt={service.title} width={80} height={80} className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h1 className="text-5xl md:text-7xl font-black uppercase font-display leading-none text-foreground/90 mb-4">
                {service.title}
              </h1>
              <p className="text-2xl md:text-3xl text-accent font-medium mb-6">
                {service.tagline}
              </p>
              {isAIPage && 'subhead' in service && (
                <p className="text-xl text-primary/80 font-medium mb-6">
                  {service.subhead}
                </p>
              )}
              <p className="text-body-large text-foreground/70 max-w-3xl">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Page Specific Sections */}
      {isAIPage && 'collaboration' in service && (
        <>
          {/* Collaboration Section */}
          <section className="relative py-20 md:py-32 bg-muted/30">
            <div className="container relative z-[5]">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black uppercase font-display leading-none text-foreground/90 mb-8 text-center">
                  {service.collaboration.title}
                </h2>
                <p className="text-body-large text-foreground/80 mb-8 text-center">
                  {service.collaboration.content}
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 my-12">
                  {service.collaboration.points.map((point, index) => (
                    <div key={index} className="bg-muted/50 rounded-2xl p-8 border border-accent/20">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                          <ArrowRight className="w-5 h-5 text-accent" />
                        </div>
                        <p className="text-body-regular text-foreground/90 font-medium">
                          {point}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-body-large text-foreground/70 text-center italic">
                  {service.collaboration.conclusion}
                </p>
              </div>
            </div>
          </section>

          {/* Core Areas Section */}
          <section className="relative py-20 md:py-32 overflow-hidden">
            {/* Background Effects */}
            <div
              className="absolute inset-0 z-[1] opacity-10"
              style={{
                backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/679a4b5fc8a7414f3b4ae38c_LINES-3.svg')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            />

            <div className="container relative z-[5]">
              <h2 className="text-4xl md:text-6xl font-black uppercase font-display leading-none text-foreground/90 mb-16 text-center">
                What We Offer
              </h2>

              <div className="grid gap-12">
                {service.coreAreas.map((area, index) => (
                  <div key={index} className="bg-muted/20 rounded-3xl p-8 md:p-12 border border-accent/10 hover:border-accent/30 transition-all">
                    <div className="flex items-start gap-6">
                      <div className="shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-display text-2xl text-primary">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-black uppercase font-display leading-none text-foreground/90 mb-6">
                          {area.title}
                        </h3>
                        <ul className="space-y-3">
                          {area.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-1" />
                              <span className="text-body-regular text-foreground/80">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="relative py-20 md:py-32 bg-muted/20">
            <div className="container relative z-[5]">
              <h2 className="text-4xl md:text-6xl font-black uppercase font-display leading-none text-foreground/90 mb-16 text-center">
                How We Deliver
              </h2>

              <div className="max-w-5xl mx-auto">
                <div className="space-y-8">
                  {service.process.map((step, index) => (
                    <div key={index} className="group">
                      <div className="flex items-start gap-8">
                        <div className="shrink-0">
                          <div className="w-20 h-20 rounded-2xl bg-accent/10 border-2 border-accent/30 flex items-center justify-center font-display text-3xl text-accent group-hover:scale-110 transition-transform">
                            {step.step}
                          </div>
                        </div>
                        <div className="flex-1 pt-4">
                          <h3 className="text-2xl md:text-3xl font-black uppercase font-display leading-none text-foreground/90 mb-3">
                            {step.title}
                          </h3>
                          <p className="text-body-large text-foreground/70">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      {index < service.process.length - 1 && (
                        <div className="ml-10 my-6 h-12 w-0.5 bg-accent/20"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Why It Matters Section */}
          <section className="relative py-20 md:py-32 overflow-hidden">
            <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            <div className="container relative z-[5]">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-black uppercase font-display leading-none text-foreground/90 mb-12">
                  Why It Matters
                </h2>
                <p className="text-2xl md:text-3xl text-foreground/80 leading-relaxed">
                  {service.whyItMatters}
                </p>
              </div>
            </div>
          </section>

          {/* Deliverables Section */}
          <section className="relative py-20 md:py-32 bg-muted/20">
            <div className="container relative z-[5]">
              <h2 className="text-4xl md:text-6xl font-black uppercase font-display leading-none text-foreground/90 mb-16 text-center">
                Deliverables
              </h2>

              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                {service.deliverables.map((deliverable, index) => (
                  <div key={index} className="bg-muted/40 rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all group">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-body-regular text-foreground/90 font-medium pt-1">
                        {deliverable}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Who It's For Section */}
          <section className="relative py-20 md:py-32 overflow-hidden">
            <div
              className="absolute inset-0 z-[1] opacity-10"
              style={{
                backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/679a4b5fc8a7414f3b4ae38c_LINES-3.svg')`,
              }}
            />

            <div className="container relative z-[5]">
              <h2 className="text-4xl md:text-6xl font-black uppercase font-display leading-none text-foreground/90 mb-16 text-center">
                Who It's For
              </h2>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {service.targetAudience.map((audience, index) => {
                  const Icon = audience.icon;
                  return (
                    <div key={index} className="bg-muted/20 rounded-3xl p-8 border border-accent/10 hover:border-accent/30 transition-all text-center group">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="text-2xl font-black uppercase font-display leading-none text-foreground/90 mb-4">
                        {audience.title}
                      </h3>
                      <p className="text-body-regular text-foreground/70">
                        {audience.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Features & Benefits Section - For all services */}
      {!isAIPage && (
        <section className="relative py-20 md:py-32 bg-muted/20">
          <div className="container relative z-[5]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
              {/* What We Do */}
              <div>
                <h2 className="text-3xl md:text-5xl font-black uppercase font-display leading-none text-foreground/90 mb-8">
                  What We Do
                </h2>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 group-hover:bg-accent/40 transition-colors">
                        <CheckCircle className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-body-regular text-foreground/80 group-hover:text-foreground/90 transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-3xl md:text-5xl font-black uppercase font-display leading-none text-foreground/90 mb-8">
                  The Results
                </h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 group-hover:bg-primary/40 transition-colors">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-body-regular text-foreground/80 group-hover:text-foreground/90 transition-colors">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-muted/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>

        <div className="container relative z-[5] text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase font-display leading-none text-foreground/90 mb-6">
            {isAIPage && 'ctaTitle' in service ? service.ctaTitle : "Ready to get started?"}
          </h2>
          <p className="text-body-large text-foreground/70 max-w-2xl mx-auto mb-10">
            {isAIPage && 'ctaDescription' in service 
              ? service.ctaDescription 
              : `Let's discuss how ${service.title.toLowerCase()} can transform your business. Contact us today for a free consultation.`
            }
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent hover:bg-accent/90 text-background font-bold text-lg uppercase transition-all hover:scale-105 shadow-lg hover:shadow-accent/20"
            >
              Contact Us
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-muted hover:bg-muted/80 text-foreground font-bold text-lg uppercase transition-all hover:scale-105"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}