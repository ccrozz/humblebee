"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HoneycombBg from "./HoneycombBg";

export default function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center overflow-hidden bg-cream">
      <div className="absolute inset-0 overflow-hidden">
        <HoneycombBg color="#C8943E" opacity={0.14} scale={1.8} filled fillOpacity={0.04} />
        <div className="absolute -top-[40%] -right-[20%] w-[70vw] h-[70vw] rounded-full bg-seafoam/[0.06] blur-[120px]" />
        <div className="absolute -bottom-[30%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-honey/[0.05] blur-[100px]" />
        <div className="absolute top-[20%] left-[40%] w-[30vw] h-[30vw] rounded-full bg-coral/[0.04] blur-[100px]" />
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-seafoam/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-medium text-seafoam mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />
                Regeneratively Sourced
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[0.95] text-bark"
            >
              Clean Protein.
              <br />
              <span className="text-honey">Real Ingredients.</span>
              <br />
              No Shortcuts.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="mt-8 text-lg md:text-xl text-cocoa-light leading-relaxed max-w-[50ch]"
            >
              40+ grams of clean protein per pint. Sweetened with raw honey and
              organic maple syrup. No gums, no sugar alcohols, no artificial
              anything. Just real ice cream that works as hard as you do.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="flex flex-wrap items-center gap-4 mt-10"
            >
              <a
                href="#products"
                className="group inline-flex items-center gap-3 rounded-full bg-bark px-7 py-4 text-base font-semibold text-cream transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-cocoa active:scale-[0.98]"
              >
                Explore Flavors
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-seafoam/20 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
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
              </a>
              <a
                href="#membership"
                className="rounded-full border border-bark/15 px-7 py-4 text-base font-semibold text-bark transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-bark/5 active:scale-[0.98]"
              >
                Join the Hive
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex items-center gap-6 mt-14 pt-8 border-t border-bark/8"
            >
              <Stat value="30-40g" label="Protein / Pint" />
              <div className="w-px h-10 bg-seafoam/20" />
              <Stat value="6" label="Ingredients Max" />
              <div className="w-px h-10 bg-seafoam/20" />
              <Stat value="Zero" label="Artificial Anything" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.32, 0.72, 0, 1],
            }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-seafoam/[0.06] blur-[60px] scale-105 translate-y-4" />
              <div className="absolute inset-0 rounded-[2rem] bg-honey/[0.05] blur-[50px] scale-95 translate-y-6" />

              <div className="relative">
                <Image
                  src="/hero-pints.png"
                  alt="Humble Bee protein ice cream pints — Vanilla, Chocolate, and Salted Maple"
                  width={600}
                  height={600}
                  priority
                  className="w-[320px] h-[320px] md:w-[480px] md:h-[480px] lg:w-[540px] lg:h-[540px] object-contain drop-shadow-[0_30px_60px_rgba(21,44,44,0.2)] rounded-2xl"
                />
              </div>

              <div className="absolute -bottom-10 -left-12 w-20 h-20">
                <HoneycombDecor />
              </div>
              <div className="absolute -top-8 -right-10 w-16 h-16">
                <HoneycombDecor small />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[11px] uppercase tracking-[0.2em] text-warm-gray">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-seafoam/25 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-seafoam/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-serif text-2xl md:text-3xl font-semibold text-bark tracking-tight">
        {value}
      </p>
      <p className="text-xs text-warm-gray mt-0.5 tracking-wide uppercase">
        {label}
      </p>
    </div>
  );
}

function HoneycombDecor({ small }: { small?: boolean }) {
  const size = small ? 48 : 64;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-40"
    >
      <path
        d="M32 4L56 18V46L32 60L8 46V18L32 4Z"
        fill="#6EAFA5"
        fillOpacity="0.08"
        stroke="#C8943E"
        strokeWidth="1"
        strokeOpacity="0.2"
      />
      <path
        d="M32 16L44 23V37L32 44L20 37V23L32 16Z"
        fill="#C8943E"
        fillOpacity="0.12"
        stroke="#6EAFA5"
        strokeWidth="0.75"
        strokeOpacity="0.25"
      />
    </svg>
  );
}
