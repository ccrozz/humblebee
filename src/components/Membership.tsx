"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import HoneycombBg from "./HoneycombBg";
import { Package, Truck, Crown } from "@phosphor-icons/react";

const tiers = [
  {
    icon: Package,
    name: "Starter",
    pints: "3 Pints",
    frequency: "Monthly",
    discount: "10% off",
    price: "$27",
    priceNote: "$9 / pint",
    features: [
      "Choose any 3 flavors",
      "Free shipping on first order",
      "Skip or cancel anytime",
    ],
    popular: false,
  },
  {
    icon: Crown,
    name: "Hive",
    pints: "6 Pints",
    frequency: "Monthly",
    discount: "15% off",
    price: "$48",
    priceNote: "$8 / pint",
    features: [
      "Choose any 6 flavors",
      "Free shipping always",
      "Early access to new flavors",
      "Exclusive member merch drops",
    ],
    popular: true,
  },
  {
    icon: Truck,
    name: "Colony",
    pints: "12 Pints",
    frequency: "Monthly",
    discount: "15% off + bonus",
    price: "$84",
    priceNote: "$7 / pint",
    features: [
      "Choose any 12 flavors",
      "Free priority shipping",
      "Early access to everything",
      "Quarterly farm partner spotlight",
      "Loyalty points 2x multiplier",
    ],
    popular: false,
  },
];

export default function Membership() {
  return (
    <section id="membership" className="py-28 md:py-40 bg-cream relative overflow-hidden">
      <div className="absolute inset-0">
        <HoneycombBg color="#CF7E60" opacity={0.12} scale={1.1} filled fillOpacity={0.03} />
        <div className="absolute top-[20%] left-[30%] w-[50vw] h-[50vw] rounded-full bg-seafoam/[0.05] blur-[120px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[30vw] h-[30vw] rounded-full bg-coral/[0.04] blur-[100px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-coral/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-medium text-coral mb-6">
              Hive Membership
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-bark leading-[0.95]">
              Your Monthly
              <br />
              <span className="text-honey">Protein Fix.</span>
            </h2>
            <p className="mt-6 text-lg text-cocoa-light leading-relaxed max-w-[50ch] mx-auto">
              Subscribe to the Hive and get clean protein ice cream delivered to
              your door every month. Build your box, save on every pint, and
              never run out.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, idx) => (
            <ScrollReveal key={tier.name} delay={idx * 0.1}>
              <TierCard tier={tier} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-20">
          <div className="rounded-[2rem] p-1.5 bg-bark/[0.02] ring-1 ring-bark/5">
            <div className="rounded-[calc(2rem-6px)] bg-gradient-to-br from-bark to-cocoa p-10 md:p-14 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl font-semibold text-cream tracking-tight leading-snug">
                    Not ready to subscribe?
                    <br />
                    <span className="text-coral-light">Try a one-time box.</span>
                  </h3>
                  <p className="mt-4 text-base text-warm-gray-light leading-relaxed max-w-[45ch]">
                    Minimum order of 3 pints. Choose your flavors, we handle the
                    cold-chain. Nationwide delivery in 2 days guaranteed.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:justify-end">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="inline-flex items-center gap-3 rounded-full bg-honey px-7 py-4 text-base font-semibold text-bark transition-colors duration-500 hover:bg-honey-light"
                  >
                    Build Your Box
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-bark/10">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 10L10 2M10 2H4M10 2V8"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </motion.a>
                  <span className="text-sm text-warm-gray-light">
                    Starting at $27 for 3 pints
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function TierCard({ tier }: { tier: (typeof tiers)[0] }) {
  return (
    <div
      className={`rounded-[2rem] p-1.5 h-full ${
        tier.popular
          ? "bg-seafoam/20 ring-2 ring-seafoam/30"
          : "bg-bark/[0.02] ring-1 ring-bark/5"
      }`}
    >
      <div
        className={`rounded-[calc(2rem-6px)] p-8 md:p-9 h-full flex flex-col ${
          tier.popular
            ? "bg-bark shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
            : "bg-cream shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]"
        }`}
      >
        {tier.popular && (
          <span className="inline-flex self-start items-center rounded-full bg-coral/20 px-3 py-1 text-[10px] uppercase tracking-[0.15em] font-semibold text-coral-light mb-4">
            Most Popular
          </span>
        )}

        <div className="flex items-center gap-3 mb-4">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              tier.popular ? "bg-seafoam/15" : "bg-honey/10"
            }`}
          >
            <tier.icon
              size={20}
              weight="light"
              className={tier.popular ? "text-seafoam" : "text-honey-muted"}
            />
          </div>
          <div>
            <h3
              className={`font-serif text-xl font-semibold tracking-tight ${
                tier.popular ? "text-cream" : "text-bark"
              }`}
            >
              {tier.name}
            </h3>
            <p
              className={`text-xs ${
                tier.popular ? "text-warm-gray-light" : "text-warm-gray"
              }`}
            >
              {tier.pints} / {tier.frequency}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-baseline gap-1">
            <span
              className={`font-serif text-4xl font-bold tracking-tight ${
                tier.popular ? "text-cream" : "text-bark"
              }`}
            >
              {tier.price}
            </span>
            <span
              className={`text-sm ${
                tier.popular ? "text-warm-gray-light" : "text-warm-gray"
              }`}
            >
              / mo
            </span>
          </div>
          <p
            className={`text-xs mt-1 ${
              tier.popular ? "text-seafoam-light" : "text-honey-muted"
            }`}
          >
            {tier.priceNote} &middot; {tier.discount}
          </p>
        </div>

        <ul className="space-y-3 mb-8 flex-1">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5">
              <span
                className={`w-1 h-1 rounded-full mt-2 flex-shrink-0 ${
                  tier.popular ? "bg-seafoam" : "bg-honey-muted"
                }`}
              />
              <span
                className={`text-sm leading-relaxed ${
                  tier.popular ? "text-cream/80" : "text-cocoa-light"
                }`}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <motion.a
          href="#"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`block text-center rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            tier.popular
              ? "bg-honey text-bark hover:bg-honey-light"
              : "bg-bark text-cream hover:bg-cocoa"
          }`}
        >
          Subscribe Now
        </motion.a>
      </div>
    </div>
  );
}
