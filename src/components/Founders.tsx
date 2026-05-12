"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import HoneycombBg from "./HoneycombBg";

export default function Founders() {
  return (
    <section id="founders" className="py-20 md:py-32 bg-bark relative overflow-hidden">
      <div className="absolute inset-0">
        <HoneycombBg color="#E0BF6A" opacity={0.16} scale={1.3} filled fillOpacity={0.05} />
        <div className="absolute top-[10%] right-[15%] w-[35vw] h-[35vw] rounded-full bg-seafoam/[0.08] blur-[120px]" />
        <div className="absolute bottom-[5%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-honey/[0.06] blur-[100px]" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-5 md:px-12 lg:px-16">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-3 md:px-4 py-1 md:py-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium text-seafoam-light mb-4 md:mb-6">
              The Twin Factor
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-cream leading-[0.95]">
              Built by Brothers Who
              <br />
              <span className="text-honey">Live What They Make.</span>
            </h2>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-warm-gray-light leading-relaxed max-w-[52ch] mx-auto">
              We&apos;re twin brothers from Florida who surf before sunrise, obsess over
              clean ingredients, and believe ice cream should fuel your life &mdash; not slow it down.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollReveal delay={0.1}>
            <div className="rounded-[2rem] p-1.5 bg-cream/5 ring-1 ring-cream/10 h-full">
              <div className="rounded-[calc(2rem-6px)] bg-cocoa p-7 md:p-9 h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] flex flex-col">
                <div className="w-full aspect-[3/4] rounded-xl overflow-hidden">
                  <Image
                    src="/founders/coleman.png"
                    alt="Coleman Crozier with surfboard on the beach"
                    width={480}
                    height={640}
                    className="w-full h-full object-cover object-[center_20%]"
                  />
                </div>

                <div className="mt-5">
                  <h3 className="font-serif text-2xl font-semibold text-cream tracking-tight">
                    Coleman Crozier
                  </h3>
                  <p className="text-sm text-coral-light mt-0.5">Co-Founder &middot; Strategy & Brand</p>
                </div>

                <p className="mt-4 text-[15px] text-warm-gray-light leading-relaxed">
                  Born and raised in Fort Lauderdale. Went to UF where he studied
                  Food & Agribusiness &mdash; basically an excuse to nerd out about
                  regenerative farming. When he&apos;s not building Humble Bee,
                  he&apos;s surfing, training, or trying to convince Grayson his
                  wave was bigger.
                </p>

                <div className="mt-auto pt-5 flex flex-wrap gap-2">
                  {["UF Gator", "Regenerative Ag", "Brand Obsessed"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-cream/5 ring-1 ring-cream/10 px-3 py-1.5 text-xs font-medium text-cream/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-[2rem] p-1.5 bg-cream/5 ring-1 ring-cream/10 h-full">
              <div className="rounded-[calc(2rem-6px)] bg-cocoa p-7 md:p-9 h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] flex flex-col">
                <div className="w-full aspect-[3/4] rounded-xl overflow-hidden">
                  <Image
                    src="/founders/grayson.png"
                    alt="Grayson Crozier with surfboard on the beach"
                    width={480}
                    height={640}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="mt-5">
                  <h3 className="font-serif text-2xl font-semibold text-cream tracking-tight">
                    Grayson Crozier
                  </h3>
                  <p className="text-sm text-seafoam-light mt-0.5">Co-Founder &middot; Operations & Tech</p>
                </div>

                <p className="mt-4 text-[15px] text-warm-gray-light leading-relaxed">
                  Fort Lauderdale raised, UCF grad, and full-stack developer turned
                  ice cream operator. Catches waves at sunrise, practices yoga for
                  clarity, and brings that same patience and precision to building
                  our cold-chain logistics and e-commerce from scratch.
                </p>

                <div className="mt-auto pt-5 flex flex-wrap gap-2">
                  {["UCF Knight", "Cold-Chain Expert", "Better Surfer (Debatable)"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-cream/5 ring-1 ring-cream/10 px-3 py-1.5 text-xs font-medium text-cream/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 md:mt-12 rounded-[2rem] p-1.5 bg-cream/5 ring-1 ring-cream/10">
            <div className="rounded-[calc(2rem-6px)] bg-cocoa p-7 md:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                <div className="flex-shrink-0 w-full md:w-[240px] rounded-xl overflow-hidden">
                  <Image
                    src="/founders/twins-kids.png"
                    alt="Coleman and Grayson as kids climbing trees"
                    width={480}
                    height={270}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
                <div className="text-center md:text-left flex-1">
                  <p className="font-serif text-xl md:text-2xl text-cream tracking-tight leading-snug">
                    &ldquo;We wanted something we could eat after a morning surf that
                    didn&apos;t have 30 ingredients we couldn&apos;t pronounce. So we
                    made it ourselves.&rdquo;
                  </p>
                  <p className="mt-4 text-sm text-warm-gray">
                    &mdash; Coleman & Grayson, somewhere between sets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
