"use client";

import React from "react";
import Social from "@/components/Social";
import { personalInfo } from "@/lib/data";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border/40 relative z-10 bg-[#030308]/90">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Note */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight text-white inline-flex items-center gap-1">
              Ivan<span className="text-accent">.</span>
            </a>
            <p className="text-xs text-muted-foreground mt-1 font-mono">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <Social />
          </div>

          {/* Back to top */}
          <div>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full border border-border/80 bg-secondary/30 text-muted-foreground hover:text-accent hover:border-accent hover:shadow-[0_0_12px_rgba(0,215,255,0.3)] transition-all cursor-pointer flex items-center justify-center"
              aria-label="Back to Top"
            >
              <FiArrowUp className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

