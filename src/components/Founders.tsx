"use client";

import ScrollReveal from "./ScrollReveal";
import HoneycombBg from "./HoneycombBg";

export default function Founders() {
  return (
    <section id="founders" className="py-28 md:py-40 bg-bark relative overflow-hidden">
      <div className="absolute inset-0">
        <HoneycombBg color="#E0BF6A" opacity={0.16} scale={1.3} filled fillOpacity={0.05} />
        <div className="absolute top-[10%] right-[15%] w-[35vw] h-[35vw] rounded-full bg-seafoam/[0.08] blur-[120px]" />
        <div className="absolute bottom-[5%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-honey/[0.06] blur-[100px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-medium text-seafoam-light mb-6">
            The Twin Factor
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-cream leading-[0.95]">
            Two Brothers.
            <br />
            <span className="text-honey">One Obsession.</span>
            <br />
            Zero Shortcuts.
          </h2>
        </ScrollReveal>

        <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal delay={0.1}>
              <FounderCard
                initials="CC"
                name="Coleman Crozier"
                role="Founder & CEO"
                bio="Coleman holds a Bachelor of Science in Food and Resource Economics from the University of Florida, specializing in Food & Agribusiness Marketing and Management. With deep-rooted passion for land stewardship and ecological restoration, he leads strategic vision, regenerative farm partnerships, and investor relations."
                focus={[
                  "Strategic Vision",
                  "Farm Partnerships",
                  "Brand Identity",
                  "Regulatory Compliance",
                ]}
                accentColor="honey"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <FounderCard
                initials="GC"
                name="Grayson Crozier"
                role="CTO & Operations Manager"
                bio="Grayson is the engine behind day-to-day operations and digital infrastructure. An expert in project management and process optimization, he ensures the Humble Bee experience is seamless from the first click to the final delivery."
                focus={[
                  "E-Commerce Infrastructure",
                  "Cold-Chain Logistics",
                  "QC/QA Systems",
                  "Wholesale Fulfillment",
                ]}
                accentColor="seafoam"
              />
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5">
            <ScrollReveal delay={0.3}>
              <div className="sticky top-32">
                <div className="rounded-[2rem] p-1.5 bg-cream/5 ring-1 ring-cream/10">
                  <div className="rounded-[calc(2rem-6px)] bg-cocoa p-8 md:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                    <p className="font-serif text-2xl md:text-3xl text-cream tracking-tight leading-snug">
                      &ldquo;The duality of Coleman and Grayson mirrors the
                      duality of the product itself &mdash;{" "}
                      <span className="text-honey">
                        indulgent and functional, premium and honest, craveable
                        and clean.
                      </span>
                      &rdquo;
                    </p>

                    <div className="mt-10 pt-8 border-t border-cream/10 space-y-4">
                      <DualityRow
                        left="Strategic Vision"
                        right="Operational Precision"
                      />
                      <DualityRow
                        left="Land Stewardship"
                        right="Tech Infrastructure"
                      />
                      <DualityRow
                        left="Farm to Freezer"
                        right="Click to Delivery"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function FounderCard({
  initials,
  name,
  role,
  bio,
  focus,
  accentColor,
}: {
  initials: string;
  name: string;
  role: string;
  bio: string;
  focus: string[];
  accentColor: "honey" | "seafoam";
}) {
  const accentMap = {
    honey: { bg: "bg-honey/15", text: "text-honey", role: "text-coral-light" },
    seafoam: { bg: "bg-seafoam/15", text: "text-seafoam", role: "text-seafoam-light" },
  };
  const a = accentMap[accentColor];

  return (
    <div className="rounded-[2rem] p-1.5 bg-cream/5 ring-1 ring-cream/10">
      <div className="rounded-[calc(2rem-6px)] bg-cocoa p-8 md:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
        <div className="flex items-start gap-5">
          <div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${a.bg} flex items-center justify-center`}>
            <span className={`font-serif text-xl font-semibold ${a.text}`}>
              {initials}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-serif text-2xl font-semibold text-cream tracking-tight">
              {name}
            </h3>
            <p className={`text-sm ${a.role} mt-0.5`}>{role}</p>
          </div>
        </div>

        <p className="mt-6 text-base text-warm-gray-light leading-relaxed">
          {bio}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {focus.map((item) => (
            <span
              key={item}
              className="rounded-full bg-cream/5 ring-1 ring-cream/10 px-3 py-1.5 text-xs font-medium text-cream/70"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function DualityRow({ left, right }: { left: string; right: string }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="text-cream/60 flex-1 text-right">{left}</span>
      <div className="flex-shrink-0 w-6 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-seafoam" />
      </div>
      <span className="text-cream/60 flex-1">{right}</span>
    </div>
  );
}
