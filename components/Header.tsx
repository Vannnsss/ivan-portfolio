"use client";

import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-[#040409]/80 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Cosmic Logo */}
        <a href="#" className="group flex items-center gap-1.5 focus:outline-none">
          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-accent transition-colors duration-200">
            Ivan
          </span>
          <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_#00d7ff] inline-block animate-pulse" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <a href="#contact" className="no-underline">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-cyan-500/40 text-accent bg-cyan-950/20 hover:bg-accent hover:text-black hover:border-accent hover:shadow-[0_0_20px_rgba(0,215,255,0.4)] transition-all duration-300 font-medium px-5"
            >
              Contact Me
            </Button>
          </a>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
