"use client";

import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { TiThMenuOutline } from "react-icons/ti";
import { socialLinks } from "@/lib/data";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="p-2.5 rounded-lg border border-border/80 bg-secondary/40 text-accent hover:border-accent hover:bg-secondary transition-all cursor-pointer"
        aria-label="Open Navigation Menu"
      >
        <TiThMenuOutline className="text-2xl" />
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[300px] sm:w-[350px] bg-[#070814]/95 border-l border-border/80 backdrop-blur-2xl flex flex-col justify-between p-8"
      >
        <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>

        <div>
          {/* Logo */}
          <div className="mt-6 mb-12">
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="text-3xl font-bold tracking-tight text-white flex items-center gap-1"
            >
              Ivan<span className="text-accent">.</span>
            </a>
            <p className="text-xs text-muted-foreground mt-1">Fullstack Web & AI</p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-muted-foreground hover:text-accent transition-colors flex items-center justify-between group"
              >
                <span>{link.name}</span>
                <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* Footer info in drawer */}
        <div className="pt-6 border-t border-border/60">
          <p className="text-xs text-muted-foreground mb-4">Connect with me</p>
          <div className="flex gap-3">
            {socialLinks.map((s, idx) => {
              const Icon = s.icon;
              return (
                <a
                  key={idx}
                  href={s.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all"
                  aria-label={s.name}
                >
                  <Icon className="text-sm" />
                </a>
              );
            })}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
