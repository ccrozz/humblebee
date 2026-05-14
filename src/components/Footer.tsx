"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import HoneycombBg from "./HoneycombBg";
import {
  InstagramLogo,
  TiktokLogo,
  YoutubeLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react";

const footerLinks = {
  product: [
    { label: "Signature Vanilla", href: "#products" },
    { label: "Salted Maple", href: "#products" },
    { label: "Deep Chocolate", href: "#products" },
    { label: "Build a Box", href: "#membership" },
  ],
  company: [
    { label: "Our Story", href: "#story" },
    { label: "Meet the Founders", href: "#founders" },
    { label: "Farm Partners", href: "#" },
  ],
  support: [
    { label: "Shipping & Returns", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Wholesale Inquiries", href: "#" },
  ],
};

const socialLinks = [
  { icon: InstagramLogo, href: "#", label: "Instagram" },
  { icon: TiktokLogo, href: "#", label: "TikTok" },
  { icon: YoutubeLogo, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-bark pt-24 pb-10 relative overflow-hidden">
      <div className="absolute inset-0">
        <HoneycombBg color="#6EAFA5" opacity={0.14} scale={1.4} filled fillOpacity={0.04} />
        <div className="absolute bottom-0 left-[20%] w-[40vw] h-[30vw] rounded-full bg-seafoam/[0.05] blur-[120px]" />
        <div className="absolute top-[20%] right-[10%] w-[25vw] h-[25vw] rounded-full bg-coral/[0.03] blur-[100px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-cream/8">
            <div className="lg:col-span-4">
              <div className="mb-6">
                <Image
                  src="/humble-bee-logo.png?v=7"
                  alt="Humble Bee Protein Ice Cream"
                  width={1024}
                  height={1024}
                  unoptimized
                  className="h-20 w-auto md:h-24"
                />
              </div>
              <p className="text-base text-warm-gray-light leading-relaxed max-w-[35ch]">
                Clean Protein. Real Ingredients. No Shortcuts. High-protein ice cream
                built from regeneratively sourced, whole-food ingredients.
              </p>

              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.15em] text-warm-gray mb-3">
                  Stay in the Loop
                </p>
                <form
                  className="flex items-center gap-2"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="flex-1 rounded-full bg-cream/5 ring-1 ring-cream/10 px-4 py-3">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full bg-transparent text-sm text-cream placeholder:text-warm-gray outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex-shrink-0 rounded-full bg-honey px-5 py-3 text-sm font-semibold text-bark transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-honey-light active:scale-[0.98]"
                  >
                    <EnvelopeSimple size={18} weight="light" />
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <FooterLinkGroup title="Products" links={footerLinks.product} />
                <FooterLinkGroup title="Company" links={footerLinks.company} />
                <FooterLinkGroup title="Support" links={footerLinks.support} />
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-cream/5 ring-1 ring-cream/8 text-cream/60 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-seafoam/15 hover:text-seafoam hover:ring-seafoam/20"
              >
                <Icon size={18} weight="light" />
              </a>
            ))}
          </div>

          <p className="text-xs text-warm-gray text-center">
            &copy; {new Date().getFullYear()} Humble Bee Protein Ice Cream. Est.
            2024. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs text-warm-gray">
            <a
              href="#"
              className="hover:text-seafoam-light transition-colors duration-300"
            >
              Privacy
            </a>
            <span className="text-cream/15">|</span>
            <a
              href="#"
              className="hover:text-seafoam-light transition-colors duration-300"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.15em] text-warm-gray font-medium mb-4">
        {title}
      </p>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-cream/60 transition-colors duration-300 hover:text-cream"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
