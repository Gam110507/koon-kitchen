"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/menu", label: "MENU" },
  { href: "/reservation", label: "RESERVATION" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-transparent border-b border-white/10">
        <div className="max-w-7xl mx-auto px-[24px] py-[16px] flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="font-display text-[24px] leading-[1.4] font-bold text-tertiary tracking-tighter">
            Koon Kitchen
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`uppercase tracking-widest text-[16px] font-body transition-colors ${
                    isActive
                      ? "text-tertiary border-b-2 border-tertiary pb-1"
                      : "text-on-background/80 hover:text-tertiary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Book a Table button (desktop) */}
          <Link
            href="/reservation"
            className="hidden md:block btn-terracotta px-6 py-3 rounded-[0.125rem] text-sm font-medium tracking-wider uppercase"
          >
            Book a Table
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-on-background"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className="material-symbols-outlined text-tertiary">menu</span>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] backdrop-blur-xl bg-background/95 flex flex-col items-center justify-center">
          {/* Close button */}
          <button
            className="absolute top-[16px] right-[24px] text-on-background"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Mobile nav links */}
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`uppercase tracking-widest text-[20px] font-body transition-colors ${
                    isActive
                      ? "text-tertiary border-b-2 border-tertiary pb-1"
                      : "text-on-background/80 hover:text-tertiary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/reservation"
              onClick={() => setMobileOpen(false)}
              className="btn-terracotta px-6 py-3 rounded-[0.125rem] text-sm font-medium tracking-wider uppercase mt-4"
            >
              Book a Table
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
