"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import HoneycombBg from "./HoneycombBg";
import {
  Cow,
  Drop,
  Leaf,
  CookingPot,
} from "@phosphor-icons/react";

const svgColors: Record<string, string> = {
  seafoam: "#6EAFA5",
  honey: "#C8943E",
  coral: "#D2886F",
};

const allIngredients = [
  {
    image: "/ingredients/milk.jpg",
    label: "Milk & Cream",
    title: "Grass-Fed Whole Milk & Cream",
    subtitle: "The foundation of every pint",
    color: "seafoam",
    leftBenefits: [
      "Regeneratively raised",
      "Rich in healthy fats",
      "Custard-like body & texture",
    ],
    rightBenefits: [
      "No hormones or antibiotics",
      "Year-round pasture access",
      "100% grass & forage diet",
    ],
  },
  {
    image: "/ingredients/whey.jpg",
    label: "Grass-Fed Whey",
    title: "Grass-Fed Whey Protein",
    subtitle: "Clean protein that fuels recovery",
    color: "honey",
    leftBenefits: [
      "Cold-processed",
      "Micro-filtered",
      "No acid processing",
    ],
    rightBenefits: [
      "30-40g per pint",
      "Supports recovery",
      "80%+ protein by weight",
    ],
  },
  {
    image: "/ingredients/egg-yolks.jpg",
    label: "Egg Yolks",
    title: "Pasture-Raised Egg Yolks",
    subtitle: "Nature\u2019s perfect emulsifier",
    color: "coral",
    leftBenefits: [
      "Deep orange yolks",
      "Rich in choline",
      "Fat-soluble vitamins",
    ],
    rightBenefits: [
      "Supports brain health",
      "Omega-3 rich",
      "Boosts nutrient absorption",
    ],
  },
  {
    image: "/ingredients/honey.jpg",
    label: "Raw Honey",
    title: "Raw Honey",
    subtitle: "Whole-food sweetness with depth",
    color: "honey",
    leftBenefits: [
      "Unfiltered & unheated",
      "Never exceeds 95\u00B0F",
      "Natural enzymes intact",
    ],
    rightBenefits: [
      "U.S. single-origin",
      "Purity tested annually",
      "No blending or additives",
    ],
  },
  {
    image: "/ingredients/maple-syrup.jpg",
    label: "Maple Syrup",
    title: "Organic Maple Syrup",
    subtitle: "Mineral-rich, robust sweetener",
    color: "coral",
    leftBenefits: [
      "USDA Certified Organic",
      "Higher mineral content",
      "Rich in manganese",
    ],
    rightBenefits: [
      "Grade A, Dark / Robust",
      "Zero additives",
      "Pure maple only",
    ],
  },
  {
    image: "/ingredients/vanilla.jpg",
    label: "Vanilla Bean",
    title: "Organic Vanilla Bean",
    subtitle: "Whole bean scraped, never extract",
    color: "honey",
    leftBenefits: [
      "Whole bean scraped",
      "Deep, warm aroma",
      "Certified Organic",
    ],
    rightBenefits: [
      "No artificial vanillin",
      "Complex flavor profile",
      "Ethically sourced",
    ],
  },
  {
    image: "/ingredients/sea-salt.jpg",
    label: "Sea Salt",
    title: "Finishing Sea Salt",
    subtitle: "A pinch of balance in every bite",
    color: "seafoam",
    leftBenefits: [
      "Finishing grade quality",
      "Trace minerals retained",
      "Enhances natural flavor",
    ],
    rightBenefits: [
      "Balances sweetness",
      "Unrefined & unbleached",
      "Minimal processing",
    ],
  },
  {
    image: "/ingredients/cacao.jpg",
    label: "Cocoa Powder",
    title: "Organic Cocoa Powder",
    subtitle: "Deep chocolate, nothing artificial",
    color: "coral",
    leftBenefits: [
      "Non-alkalized process",
      "High-cacao content",
      "Rich in antioxidants",
    ],
    rightBenefits: [
      "Deep, complex flavor",
      "Natural magnesium source",
      "Zero added sugar",
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
  const [active, setActive] = useState(0);
  const current = allIngredients[active];
  const sc = svgColors[current.color] ?? "#6EAFA5";

  return (
    <section id="story" className="bg-cream-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <HoneycombBg color="#C8943E" opacity={0.15} scale={1} filled fillOpacity={0.05} />
        <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-seafoam/[0.04] blur-[100px]" />
        <div className="absolute bottom-[10%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-coral/[0.03] blur-[100px]" />
      </div>

      <div className="relative">
        {/* Header */}
        <div className="pt-20 md:pt-40 pb-4 md:pb-10 max-w-[1400px] mx-auto px-5 md:px-12 lg:px-16">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full bg-coral/10 px-3 md:px-4 py-1 md:py-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium text-coral mb-4 md:mb-6">
                What&apos;s Inside
              </span>
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-bark leading-[0.95]">
                Our Clean-Label Formula Starts
                <br />
                With <span className="text-honey">Regenerative Dairy.</span>
              </h2>
              <p className="mt-4 md:mt-6 text-base md:text-lg text-cocoa-light leading-relaxed max-w-[55ch] mx-auto">
                If you can&apos;t picture it on a farm, it&apos;s not in our pint.
                Every ingredient is real, whole, and traceable.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Active Ingredient Diagram */}
        <div className="pt-6 md:pt-16 pb-4 md:pb-10 max-w-[900px] mx-auto px-4 md:px-12 lg:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
              transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
            >
              <RadialIngredient
                image={current.image}
                title={current.title}
                subtitle={current.subtitle}
                color={current.color}
                leftBenefits={current.leftBenefits}
                rightBenefits={current.rightBenefits}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Ingredient Photo Selector */}
        <div className="pb-10 md:pb-16">
          {/* Mobile: horizontal scroll */}
          <div className="md:hidden overflow-x-auto scrollbar-hide -mx-2 px-6">
            <div className="flex items-start gap-4 w-max px-2 pb-2">
              {allIngredients.map((ing, idx) => {
                const isActive = idx === active;
                const tabColor = svgColors[ing.color] ?? "#6EAFA5";
                return (
                  <button
                    key={ing.label}
                    onClick={() => setActive(idx)}
                    className="flex flex-col items-center gap-1.5 flex-shrink-0"
                  >
                    <motion.div
                      className="rounded-full overflow-hidden"
                      animate={{
                        scale: isActive ? 1 : 0.88,
                        opacity: isActive ? 1 : 0.45,
                      }}
                      transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                      style={{
                        boxShadow: isActive ? `0 4px 16px ${tabColor}40` : "none",
                        outline: isActive ? `2.5px solid ${tabColor}` : "2.5px solid transparent",
                        outlineOffset: "2px",
                      }}
                    >
                      <Image
                        src={ing.image}
                        alt={ing.label}
                        width={100}
                        height={100}
                        className="w-[52px] h-[52px] object-cover rounded-full"
                      />
                    </motion.div>
                    <motion.span
                      className="text-[10px] font-semibold tracking-tight text-center leading-tight w-[56px]"
                      animate={{ color: isActive ? tabColor : "#3B2F2F60" }}
                      transition={{ duration: 0.35 }}
                    >
                      {ing.label}
                    </motion.span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Desktop: centered row */}
          <div className="hidden md:block max-w-[1100px] mx-auto px-12 lg:px-16">
            <div className="flex items-start justify-center gap-10">
              {allIngredients.map((ing, idx) => {
                const isActive = idx === active;
                const tabColor = svgColors[ing.color] ?? "#6EAFA5";
                return (
                  <button
                    key={ing.label}
                    onClick={() => setActive(idx)}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <motion.div
                      className="rounded-full overflow-hidden flex-shrink-0"
                      animate={{
                        scale: isActive ? 1 : 0.85,
                        opacity: isActive ? 1 : 0.5,
                      }}
                      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                      style={{
                        boxShadow: isActive
                          ? `0 4px 20px ${tabColor}40`
                          : "0 2px 8px rgba(0,0,0,0.06)",
                        outline: isActive
                          ? `3px solid ${tabColor}`
                          : "3px solid transparent",
                        outlineOffset: "2px",
                      }}
                    >
                      <Image
                        src={ing.image}
                        alt={ing.label}
                        width={160}
                        height={160}
                        className="w-[110px] h-[110px] object-cover rounded-full"
                      />
                    </motion.div>
                    <motion.span
                      className="text-[13px] font-medium tracking-tight text-center leading-tight max-w-[110px]"
                      animate={{ color: isActive ? tabColor : "#3B2F2F80" }}
                      transition={{ duration: 0.4 }}
                    >
                      {ing.label}
                    </motion.span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="pt-6 md:pt-12 pb-12 md:pb-20">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto px-5 md:px-12 mb-8 md:mb-16">
              <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-bark leading-[0.95]">
                ...And Ingredients You Can
                <br />
                <span className="text-coral">Actually Pronounce.</span>
              </h2>
              <p className="mt-4 md:mt-6 text-base md:text-lg text-cocoa-light leading-relaxed max-w-[50ch] mx-auto">
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
              transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
              className="flex gap-3 md:gap-5 w-max"
            >
              {[...marqueeIngredients, ...marqueeIngredients].map((item, idx) => (
                <IngredientPill key={`${item.name}-${idx}`} {...item} />
              ))}
            </motion.div>
          </div>

          <div className="relative overflow-hidden py-4 mt-3 md:mt-4">
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-cream-dark to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-cream-dark to-transparent z-10" />
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" } }}
              className="flex gap-3 md:gap-5 w-max"
            >
              {[...marqueeIngredients, ...marqueeIngredients].reverse().map((item, idx) => (
                <IngredientPill key={`rev-${item.name}-${idx}`} {...item} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Radial Web Diagram ────────────────────────────────────── */

const toRad = (deg: number) => (deg * Math.PI) / 180;
const ptX = (cx: number, a: number, r: number) => cx + r * Math.sin(toRad(a));
const ptY = (cy: number, a: number, r: number) => cy - r * Math.cos(toRad(a));

function RadialIngredient({
  image,
  title,
  subtitle,
  color,
  leftBenefits,
  rightBenefits,
}: {
  image: string;
  title: string;
  subtitle?: string;
  color: string;
  leftBenefits: string[];
  rightBenefits: string[];
}) {
  const sc = svgColors[color] ?? "#6EAFA5";
  const uid = title.replace(/[^a-zA-Z0-9]/g, "").slice(0, 20);

  const viewW = 750;
  const viewH = 400;
  const cx = 375;
  const cy = 150;
  const circleR = 85;
  const dashedR = circleR + 10;
  const labelR = 175;
  const fs = 17;
  const titleFs = 26;
  const titleY = 340;
  const subY = titleY + 26;

  const lAngles = [325, 270, 215];
  const rAngles = [35, 90, 145];

  const callouts = [
    ...leftBenefits.map((t, i) => ({ t, a: lAngles[i], s: "l" as const })),
    ...rightBenefits.map((t, i) => ({ t, a: rAngles[i], s: "r" as const })),
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Desktop */}
      <div className="hidden md:block w-full max-w-[850px] mx-auto">
        <svg
          viewBox={`0 0 ${viewW} ${viewH}`}
          overflow="visible"
          className="w-full h-auto"
          role="img"
          aria-label={`${title}: ${[...leftBenefits, ...rightBenefits].join(", ")}`}
        >
          <defs>
            <clipPath id={`c-${uid}`}>
              <circle cx={cx} cy={cy} r={circleR} />
            </clipPath>
            <radialGradient id={`g-${uid}`} cx="50%" cy="48%" r="35%">
              <stop offset="0%" stopColor={sc} stopOpacity="0.12" />
              <stop offset="100%" stopColor={sc} stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx={cx} cy={cy} r={circleR * 2.8} fill={`url(#g-${uid})`} />

          <circle
            cx={cx} cy={cy} r={dashedR}
            fill="none" stroke={sc} strokeWidth="1.8"
            strokeDasharray="6 4" strokeOpacity="0.45"
          />

          <image
            href={image}
            x={cx - circleR} y={cy - circleR}
            width={circleR * 2} height={circleR * 2}
            clipPath={`url(#c-${uid})`}
            preserveAspectRatio="xMidYMid slice"
          />

          <circle
            cx={cx} cy={cy} r={circleR}
            fill="none" stroke={sc} strokeWidth="2" strokeOpacity="0.3"
          />

          {callouts.map(({ t, a, s }) => {
            const ex = ptX(cx, a, dashedR + 4);
            const ey = ptY(cy, a, dashedR + 4);
            const lx = ptX(cx, a, labelR);
            const ly = ptY(cy, a, labelR);
            const tx = s === "l" ? lx - 10 : lx + 10;

            return (
              <g key={t}>
                <line
                  x1={ex} y1={ey} x2={lx} y2={ly}
                  stroke={sc} strokeWidth="1.5" strokeOpacity="0.5"
                />
                <circle cx={ex} cy={ey} r="4" fill={sc} fillOpacity="0.6" />
                <circle cx={lx} cy={ly} r="5" fill={sc} />
                <text
                  x={tx} y={ly + fs * 0.36}
                  textAnchor={s === "l" ? "end" : "start"}
                  fontSize={fs} fontWeight="500"
                  fill="#3B2F2F"
                >
                  {t}
                </text>
              </g>
            );
          })}

          <text
            x={cx} y={titleY} textAnchor="middle"
            fontSize={titleFs} fontWeight="600" fill="#1C2B2B"
            style={{ fontFamily: "serif" }}
          >
            {title}
          </text>
          {subtitle && (
            <text
              x={cx} y={subY} textAnchor="middle"
              fontSize="14" fill="#8B7D7B"
            >
              {subtitle}
            </text>
          )}
        </svg>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col items-center w-full px-4">
        <div className="relative">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              border: `2px dashed ${sc}35`,
              transform: "scale(1.2)",
            }}
          />
          <div
            className="w-36 h-36 rounded-full overflow-hidden relative z-10"
            style={{ boxShadow: `0 8px 32px ${sc}30` }}
          >
            <Image
              src={image} alt={title}
              width={240} height={240}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h3 className="font-serif text-[22px] font-semibold text-bark tracking-tight text-center mt-5">
          {title}
        </h3>
        {subtitle && (
          <p className="text-[13px] text-warm-gray mt-1 text-center">{subtitle}</p>
        )}
        <div className="mt-5 w-full max-w-[300px]">
          <div className="grid grid-cols-1 gap-2.5">
            {[...leftBenefits, ...rightBenefits].map((b) => (
              <div key={b} className="flex items-center gap-3">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: sc }}
                />
                <span className="text-[13.5px] font-medium text-bark leading-snug">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Marquee Pill ──────────────────────────────────────────── */

function IngredientPill({
  icon: Icon,
  name,
  detail,
}: (typeof marqueeIngredients)[0]) {
  return (
    <div className="flex items-center gap-3 md:gap-4 rounded-full bg-cream ring-1 ring-bark/5 pl-1.5 md:pl-2 pr-4 md:pr-6 py-1.5 md:py-2 shadow-[0_2px_8px_rgba(21,44,44,0.04)] flex-shrink-0">
      <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-honey/10 flex items-center justify-center">
        <Icon size={18} weight="light" className="text-honey md:!text-[20px]" />
      </div>
      <div>
        <p className="text-xs md:text-sm font-semibold text-bark whitespace-nowrap">{name}</p>
        <p className="text-[10px] md:text-xs text-warm-gray whitespace-nowrap">{detail}</p>
      </div>
    </div>
  );
}
