"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import HoneycombBg from "./HoneycombBg";
import {
  Cow,
  Flask,
  Drop,
  Leaf,
  Egg,
  CookingPot,
} from "@phosphor-icons/react";

const baseBenefits = [
  "Regeneratively raised",
  "Rich in healthy fats",
  "Custard-like body & texture",
  "No hormones or antibiotics",
  "Year-round pasture access",
  "100% grass and forage diet",
];

const proteinSources = [
  {
    icon: Flask,
    title: "Grass-Fed Whey",
    color: "honey",
    benefits: [
      "Cold-processed",
      "Micro-filtered",
      "30-40g per pint",
      "Supports recovery",
    ],
  },
  {
    icon: Egg,
    title: "Pasture-Raised Egg Yolks",
    color: "coral",
    benefits: [
      "Deep orange yolks",
      "Rich in choline",
      "Natural emulsifier",
      "108 sq ft per bird",
    ],
  },
];

const sweeteners = [
  {
    icon: Drop,
    title: "Raw Honey",
    color: "honey",
    benefits: [
      "Unfiltered & unheated",
      "Never exceeds 95°F",
      "U.S.-based single-origin apiaries",
      "Annual pesticide & adulteration testing",
    ],
  },
  {
    icon: Leaf,
    title: "Organic Maple Syrup",
    color: "coral",
    benefits: [
      "USDA Certified Organic",
      "Grade A, Dark / Robust Taste",
      "Higher mineral content",
      "Zero additives — pure maple only",
    ],
  },
];

const marqueeIngredients = [
  { icon: Drop, name: "Raw Honey", detail: "Unfiltered & Unheated" },
  { icon: Leaf, name: "Organic Maple Syrup", detail: "Grade A Dark Robust" },
  { icon: CookingPot, name: "Organic Vanilla Bean", detail: "Whole Bean Scraped" },
  { icon: Cow, name: "Grass-Fed Cream", detail: "Regeneratively Raised" },
  { icon: Drop, name: "Organic Cocoa Powder", detail: "Non-Alkalized High-Cacao" },
  { icon: Leaf, name: "Sea Salt", detail: "Finishing Grade" },
];

export default function Story() {
  return (
    <section id="story" className="bg-cream-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <HoneycombBg color="#C8943E" opacity={0.15} scale={1} filled fillOpacity={0.05} />
        <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-seafoam/[0.04] blur-[100px]" />
        <div className="absolute bottom-[10%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-coral/[0.03] blur-[100px]" />
      </div>

      <div className="relative">
        {/* Base Ingredient Section */}
        <div className="pt-28 md:pt-40 pb-16 md:pb-20 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
              <span className="inline-flex items-center gap-2 rounded-full bg-coral/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-medium text-coral mb-6">
                What&apos;s Inside
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-bark leading-[0.95]">
                Our Clean-Label Formula Starts
                <br />
                With <span className="text-honey">Regenerative Dairy.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="rounded-[2rem] p-1.5 bg-bark/[0.02] ring-1 ring-bark/5">
                <div className="rounded-[calc(2rem-6px)] bg-cream p-8 md:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-seafoam/10 flex items-center justify-center">
                      <Cow size={28} weight="light" className="text-seafoam" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-bark tracking-tight">
                        Grass-Fed Whole Milk & Cream
                      </h3>
                      <p className="text-sm text-warm-gray mt-0.5">
                        The foundation of every pint
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {baseBenefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-center gap-3 rounded-xl bg-bark/[0.03] px-4 py-3"
                      >
                        <span className="w-2 h-2 rounded-full bg-seafoam flex-shrink-0" />
                        <span className="text-sm font-medium text-bark">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-lg mx-auto lg:mx-0">
                <p className="text-lg text-cocoa-light leading-relaxed">
                  The &ldquo;healthy&rdquo; ice cream market is flooded with
                  products hiding behind chemistry-lab ingredient lists. Gums,
                  stabilizers, sugar alcohols, artificial sweeteners.
                </p>
                <p className="mt-6 text-lg text-cocoa-light leading-relaxed">
                  We took a different approach: start with the best dairy on
                  earth, add clean protein, sweeten it with real honey or maple
                  syrup, and stop there.
                </p>
                <p className="mt-6 font-serif text-xl text-bark font-semibold tracking-tight">
                  If you can&apos;t picture it on a farm,
                  <br />
                  <span className="text-honey">
                    it&apos;s not in our pint.
                  </span>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Protein Sources */}
        <div className="py-12 md:py-16 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <span className="inline-flex items-center gap-2 rounded-full bg-honey/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-medium text-honey-muted mb-6">
                Protein Sources
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-bark leading-[0.95]">
                30-40g of Clean Protein.
                <br />
                <span className="text-seafoam">Per Pint.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {proteinSources.map((source, idx) => (
              <ScrollReveal key={source.title} delay={idx * 0.12}>
                <ProteinSourceCard {...source} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Sweeteners */}
        <div className="py-12 md:py-16 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <span className="inline-flex items-center gap-2 rounded-full bg-seafoam/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-medium text-seafoam mb-6">
                Real Sweeteners
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-bark leading-[0.95]">
                Sweetened by Nature.
                <br />
                <span className="text-honey">Nothing Artificial.</span>
              </h2>
              <p className="mt-6 text-lg text-cocoa-light leading-relaxed max-w-[50ch] mx-auto">
                No erythritol. No stevia. No monk fruit extract. Just raw honey
                and organic maple syrup — whole-food sweeteners with minerals
                and depth of flavor.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {sweeteners.map((source, idx) => (
              <ScrollReveal key={source.title} delay={idx * 0.12}>
                <ProteinSourceCard {...source} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Ingredient Marquee */}
        <div className="pt-12 md:pt-16 pb-28 md:pb-40">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto px-6 md:px-12 mb-12 md:mb-16">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-bark leading-[0.95]">
                ...And Ingredients You Can
                <br />
                <span className="text-coral">Actually Pronounce.</span>
              </h2>
              <p className="mt-6 text-lg text-cocoa-light leading-relaxed max-w-[50ch] mx-auto">
                Every single ingredient is real, whole, and traceable. No
                &ldquo;natural flavors.&rdquo; No mystery blends. What you read
                is what you eat.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-cream-dark to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-cream-dark to-transparent z-10" />

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex gap-5 w-max"
            >
              {[...marqueeIngredients, ...marqueeIngredients].map(
                (item, idx) => (
                  <IngredientPill key={`${item.name}-${idx}`} {...item} />
                )
              )}
            </motion.div>
          </div>

          <div className="relative overflow-hidden py-4 mt-4">
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-cream-dark to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-cream-dark to-transparent z-10" />

            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35,
                  ease: "linear",
                },
              }}
              className="flex gap-5 w-max"
            >
              {[...marqueeIngredients, ...marqueeIngredients]
                .reverse()
                .map((item, idx) => (
                  <IngredientPill key={`rev-${item.name}-${idx}`} {...item} />
                ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProteinSourceCard({
  icon: Icon,
  title,
  benefits,
  color,
}: (typeof proteinSources)[0]) {
  const colorMap = {
    honey: {
      iconBg: "bg-honey/10",
      iconText: "text-honey",
      dot: "bg-honey",
      ring: "ring-honey/10",
    },
    coral: {
      iconBg: "bg-coral/10",
      iconText: "text-coral",
      dot: "bg-coral",
      ring: "ring-coral/10",
    },
  };
  const c = colorMap[color as keyof typeof colorMap];

  return (
    <div className={`rounded-[2rem] p-1.5 bg-bark/[0.02] ring-1 ${c.ring}`}>
      <div className="rounded-[calc(2rem-6px)] bg-cream p-8 md:p-9 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]">
        <div className={`w-12 h-12 rounded-2xl ${c.iconBg} flex items-center justify-center mb-5`}>
          <Icon size={24} weight="light" className={c.iconText} />
        </div>
        <h3 className="font-serif text-xl font-semibold text-bark tracking-tight mb-5">
          {title}
        </h3>
        <div className="space-y-3">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-3">
              <span className={`w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0`} />
              <span className="text-sm text-cocoa-light">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function IngredientPill({
  icon: Icon,
  name,
  detail,
}: (typeof marqueeIngredients)[0]) {
  return (
    <div className="flex items-center gap-4 rounded-full bg-cream ring-1 ring-bark/5 pl-2 pr-6 py-2 shadow-[0_2px_8px_rgba(21,44,44,0.04)] flex-shrink-0">
      <div className="w-12 h-12 rounded-full bg-honey/10 flex items-center justify-center">
        <Icon size={20} weight="light" className="text-honey" />
      </div>
      <div>
        <p className="text-sm font-semibold text-bark whitespace-nowrap">
          {name}
        </p>
        <p className="text-xs text-warm-gray whitespace-nowrap">{detail}</p>
      </div>
    </div>
  );
}
