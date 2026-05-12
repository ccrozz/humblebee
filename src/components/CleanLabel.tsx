"use client";

import ScrollReveal from "./ScrollReveal";
import HoneycombBg from "./HoneycombBg";
import { Check, X } from "@phosphor-icons/react";

const competitors = [
  {
    brand: "Humble Bee",
    highlight: true,
    protein: "30-40g",
    sweetener: "Raw Honey / Maple Syrup",
    gums: false,
    sugarAlcohols: false,
    artificial: false,
    price: "$8-$10",
  },
  {
    brand: "Halo Top",
    highlight: false,
    protein: "5-6g",
    sweetener: "Stevia + Erythritol",
    gums: true,
    sugarAlcohols: true,
    artificial: true,
    price: "$5-$7",
  },
  {
    brand: "Enlightened",
    highlight: false,
    protein: "7-8g",
    sweetener: "Erythritol + Stevia",
    gums: true,
    sugarAlcohols: true,
    artificial: true,
    price: "$5-$7",
  },
  {
    brand: "Ice Cream for Bears",
    highlight: false,
    protein: "8-10g",
    sweetener: "Monk Fruit",
    gums: true,
    sugarAlcohols: false,
    artificial: true,
    price: "$8-$10",
  },
];

export default function CleanLabel() {
  return (
    <section className="py-28 md:py-40 bg-cream-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <HoneycombBg color="#6EAFA5" opacity={0.13} scale={0.8} filled fillOpacity={0.03} />
        <div className="absolute top-[30%] left-[50%] w-[50vw] h-[50vw] rounded-full bg-seafoam/[0.04] blur-[120px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-honey/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-medium text-honey-muted mb-6">
              The Comparison
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-bark leading-[0.95]">
              Our Label Is
              <br />
              <span className="text-seafoam">Our Billboard.</span>
            </h2>
            <p className="mt-6 text-lg text-cocoa-light leading-relaxed max-w-[50ch] mx-auto">
              See how Humble Bee stacks up against the competition. The
              difference isn&apos;t just what we put in &mdash; it&apos;s what
              we leave out.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-16 md:mt-20">
          <div className="rounded-[2rem] p-1.5 bg-bark/[0.02] ring-1 ring-bark/5">
            <div className="rounded-[calc(2rem-6px)] bg-cream overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px]">
                  <thead>
                    <tr className="border-b border-bark/8">
                      <th className="text-left py-5 px-6 text-xs uppercase tracking-[0.15em] text-warm-gray font-medium">
                        Brand
                      </th>
                      <th className="text-left py-5 px-4 text-xs uppercase tracking-[0.15em] text-warm-gray font-medium">
                        Protein / Serving
                      </th>
                      <th className="text-left py-5 px-4 text-xs uppercase tracking-[0.15em] text-warm-gray font-medium">
                        Sweetener
                      </th>
                      <th className="text-center py-5 px-4 text-xs uppercase tracking-[0.15em] text-warm-gray font-medium">
                        Gums
                      </th>
                      <th className="text-center py-5 px-4 text-xs uppercase tracking-[0.15em] text-warm-gray font-medium">
                        Sugar Alcohols
                      </th>
                      <th className="text-center py-5 px-4 text-xs uppercase tracking-[0.15em] text-warm-gray font-medium">
                        Artificial
                      </th>
                      <th className="text-right py-5 px-6 text-xs uppercase tracking-[0.15em] text-warm-gray font-medium">
                        Price / Pint
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitors.map((comp) => (
                      <tr
                        key={comp.brand}
                        className={`border-b border-bark/5 last:border-b-0 transition-colors duration-300 ${
                          comp.highlight
                            ? "bg-seafoam/[0.06]"
                            : "hover:bg-bark/[0.02]"
                        }`}
                      >
                        <td className="py-5 px-6">
                          <span
                            className={`font-serif text-base font-semibold tracking-tight ${
                              comp.highlight ? "text-bark" : "text-cocoa-light"
                            }`}
                          >
                            {comp.brand}
                          </span>
                        </td>
                        <td className="py-5 px-4">
                          <span
                            className={`text-sm font-semibold ${
                              comp.highlight ? "text-honey" : "text-cocoa-light"
                            }`}
                          >
                            {comp.protein}
                          </span>
                        </td>
                        <td className="py-5 px-4">
                          <span className="text-sm text-cocoa-light">
                            {comp.sweetener}
                          </span>
                        </td>
                        <td className="py-5 px-4">
                          <div className="flex justify-center">
                            {comp.gums ? (
                              <Check
                                size={18}
                                weight="bold"
                                className="text-coral/70"
                              />
                            ) : (
                              <X
                                size={18}
                                weight="bold"
                                className="text-seafoam/80"
                              />
                            )}
                          </div>
                        </td>
                        <td className="py-5 px-4">
                          <div className="flex justify-center">
                            {comp.sugarAlcohols ? (
                              <Check
                                size={18}
                                weight="bold"
                                className="text-coral/70"
                              />
                            ) : (
                              <X
                                size={18}
                                weight="bold"
                                className="text-seafoam/80"
                              />
                            )}
                          </div>
                        </td>
                        <td className="py-5 px-4">
                          <div className="flex justify-center">
                            {comp.artificial ? (
                              <Check
                                size={18}
                                weight="bold"
                                className="text-coral/70"
                              />
                            ) : (
                              <X
                                size={18}
                                weight="bold"
                                className="text-seafoam/80"
                              />
                            )}
                          </div>
                        </td>
                        <td className="py-5 px-6 text-right">
                          <span
                            className={`text-sm font-medium ${
                              comp.highlight ? "text-bark" : "text-cocoa-light"
                            }`}
                          >
                            {comp.price}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs text-warm-gray text-center">
            Check = contains it. X = free of it.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
