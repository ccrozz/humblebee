"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import HoneycombBg from "./HoneycombBg";

const flavors = [
  {
    name: "Signature Vanilla",
    subtitle: "Raw Honey & Grass-Fed Whey",
    description:
      "Clean, floral sweetness from raw honey. Deep vanilla warmth from whole bean. Rich, custard-like body from egg yolks and whole milk fat.",
    ingredients: [
      "Grass-fed whole milk",
      "Grass-fed cream",
      "Raw honey",
      "Organic vanilla bean",
      "Grass-fed whey protein",
      "Pasture-raised egg yolks",
    ],
    occasion: "Post-workout recovery, everyday treat, breakfast protein boost",
    image: "/products/vanilla.png",
    color: {
      bg: "bg-[#F3EFE4]",
      accentBg: "bg-honey/10",
      accentText: "text-honey",
      border: "ring-honey/10",
    },
  },
  {
    name: "Salted Maple",
    subtitle: "Organic Maple Syrup & Grass-Fed Whey",
    description:
      "Buttery maple depth, balanced by a clean salt finish. Caramel-forward. Deeply satisfying.",
    ingredients: [
      "Grass-fed whole milk",
      "Grass-fed cream",
      "Organic maple syrup",
      "Organic vanilla bean",
      "Grass-fed whey protein",
      "Pasture-raised egg yolks",
      "Sea salt",
    ],
    occasion:
      "Fall/winter seasonal indulgence, pre-bed treat, pairing with warm desserts",
    image: "/products/maple.png",
    color: {
      bg: "bg-[#EFE8D4]",
      accentBg: "bg-coral/10",
      accentText: "text-coral",
      border: "ring-coral/10",
    },
  },
  {
    name: "Deep Chocolate",
    subtitle: "Raw Honey & Grass-Fed Whey",
    description:
      "Deep, roasted chocolate bitterness softened by floral honey. Complex and rich without being sweet.",
    ingredients: [
      "Grass-fed whole milk",
      "Grass-fed cream",
      "Raw honey",
      "Organic vanilla bean",
      "Grass-fed whey protein",
      "Pasture-raised egg yolks",
      "Organic cocoa powder",
    ],
    occasion: "Dessert replacement, chocolate cravings, post-training indulgence",
    image: "/products/chocolate.png",
    color: {
      bg: "bg-[#E8E2D2]",
      accentBg: "bg-cocoa-light/10",
      accentText: "text-cocoa-light",
      border: "ring-cocoa-light/10",
    },
  },
];

export default function Products() {
  return (
    <section id="products" className="py-28 md:py-40 bg-cream relative overflow-hidden">
      <HoneycombBg color="#6EAFA5" opacity={0.12} scale={1.2} filled fillOpacity={0.03} />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-seafoam/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-medium text-seafoam mb-6">
            Three Flavors
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-bark leading-[0.95]">
            Built Different.
            <br />
            <span className="text-honey">Tastes Better.</span>
          </h2>
          <p className="mt-6 text-lg text-cocoa-light leading-relaxed max-w-[55ch]">
            Every pint starts with regeneratively sourced, whole-food
            ingredients. No shortcuts, no fillers, no compromises.
          </p>
        </ScrollReveal>

        <div className="mt-20 space-y-16 md:space-y-24">
          {flavors.map((flavor, idx) => (
            <ScrollReveal key={flavor.name} delay={0.1}>
              <FlavorCard flavor={flavor} reversed={idx % 2 === 1} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-24">
          <NutritionBar />
        </ScrollReveal>
      </div>
    </section>
  );
}

function FlavorCard({
  flavor,
  reversed,
}: {
  flavor: (typeof flavors)[0];
  reversed: boolean;
}) {
  return (
    <div
      className={`rounded-[2rem] p-1.5 ring-1 ${flavor.color.border} bg-bark/[0.02]`}
    >
      <div
        className={`rounded-[calc(2rem-6px)] ${flavor.color.bg} p-8 md:p-12 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]`}
      >
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
            reversed ? "lg:direction-rtl" : ""
          }`}
          style={reversed ? { direction: "rtl" } : undefined}
        >
          <div
            className="flex items-center justify-center"
            style={reversed ? { direction: "ltr" } : undefined}
          >
            <motion.div
              whileHover={{ scale: 1.04, rotate: -2 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-bark/[0.03] blur-[40px] scale-75 translate-y-8" />
              <Image
                src={flavor.image}
                alt={`${flavor.name} pint`}
                width={380}
                height={380}
                className="relative w-[260px] h-[260px] md:w-[340px] md:h-[340px] object-contain drop-shadow-[0_25px_50px_rgba(21,44,44,0.15)]"
                priority
              />
            </motion.div>
          </div>

          <div style={reversed ? { direction: "ltr" } : undefined}>
            <span
              className={`inline-block rounded-full ${flavor.color.accentBg} px-3 py-1 text-[10px] uppercase tracking-[0.15em] font-medium ${flavor.color.accentText} mb-4`}
            >
              {flavor.subtitle}
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-bark">
              {flavor.name}
            </h3>
            <p className="mt-4 text-base text-cocoa-light leading-relaxed max-w-[50ch]">
              {flavor.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {flavor.ingredients.map((ing) => (
                <span
                  key={ing}
                  className="rounded-full bg-bark/[0.04] px-3 py-1.5 text-xs font-medium text-cocoa-light"
                >
                  {ing}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm text-warm-gray">
              <span className="font-medium text-cocoa-light">Best for:</span>{" "}
              {flavor.occasion}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NutritionBar() {
  const stats = [
    { label: "Protein", value: "30-40g", note: "per pint" },
    { label: "Sweetener", value: "Raw Honey / Maple", note: "never artificial" },
    { label: "Gums", value: "None", note: "zero stabilizers" },
    { label: "Sugar Alcohols", value: "None", note: "zero erythritol" },
  ];

  return (
    <div className="rounded-[2rem] bg-bark p-1.5">
      <div className="rounded-[calc(2rem-6px)] bg-bark p-8 md:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <div key={stat.label}>
              <p className="text-xs uppercase tracking-[0.15em] text-warm-gray mb-2">
                {stat.label}
              </p>
              <p className={`font-serif text-2xl md:text-3xl font-semibold tracking-tight ${idx === 0 ? "text-honey" : "text-cream"}`}>
                {stat.value}
              </p>
              <p className="text-xs text-warm-gray mt-1">{stat.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
