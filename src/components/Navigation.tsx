"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Our Story", href: "#story" },
  { label: "Founders", href: "#founders" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled
            ? "bg-cream/80 shadow-[0_8px_32px_-8px_rgba(21,44,44,0.12)] backdrop-blur-2xl ring-1 ring-bark/5"
            : "bg-cream/60 backdrop-blur-xl ring-1 ring-bark/[0.03]"
        }`}
      >
        <a
          href="#"
          className="flex shrink-0 items-center pl-2 pr-1 sm:pl-3 sm:pr-2"
        >
          <Image
            src="/humble-bee-logo.png?v=7"
            alt="Humble Bee Protein Ice Cream"
            width={1024}
            height={1024}
            priority
            unoptimized
            className="h-10 w-auto sm:h-11"
          />
        </a>

        <div className="hidden md:flex items-center gap-0.5 mx-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-cocoa-light transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-bark/5 hover:text-bark"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#membership"
          className="hidden md:flex items-center gap-2 rounded-full bg-bark px-5 py-2.5 text-sm font-semibold text-cream transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-cocoa active:scale-[0.98]"
        >
          Join the Hive
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-seafoam/20">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M1 9L9 1M9 1H3M9 1V7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>

        <button
          onClick={() => setIsOpen(true)}
          className="flex md:hidden items-center justify-center w-10 h-10 rounded-full text-bark hover:bg-bark/5 transition-colors duration-300"
          aria-label="Open menu"
        >
          <List size={22} weight="light" />
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-50 bg-cream/95 backdrop-blur-3xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 flex items-center justify-center w-12 h-12 rounded-full bg-bark/5 text-bark transition-colors duration-300 hover:bg-bark/10"
              aria-label="Close menu"
            >
              <X size={22} weight="light" />
            </button>

            <nav className="flex flex-col items-center gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{
                    delay: 0.1 + i * 0.06,
                    duration: 0.5,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  className="font-serif text-4xl font-medium text-bark tracking-tight hover:text-seafoam transition-colors duration-500"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#membership"
                onClick={() => setIsOpen(false)}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{
                  delay: 0.1 + navLinks.length * 0.06,
                  duration: 0.5,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="mt-6 rounded-full bg-bark px-8 py-4 text-base font-semibold text-cream transition-all duration-500 hover:bg-cocoa active:scale-[0.98]"
              >
                Join the Hive
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
