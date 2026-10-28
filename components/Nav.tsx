"use client";

import React from "react";
import { motion } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSection";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Nav() {
  const activeSection = useActiveSection([
    "about",
    "skills",
    "experience",
    "projects",
    "contact",
  ]);

  return (
    <nav className="flex items-center gap-7">
      {links.map((link) => {
        const id = link.href.replace("#", "");
        const isActive = activeSection === id;

        return (
          <a
            key={link.name}
            href={link.href}
            className={`relative py-1 text-sm font-medium transition-colors duration-200 ${
              isActive ? "text-accent" : "text-muted-foreground hover:text-white"
            }`}
          >
            {link.name}
            {isActive && (
              <motion.span
                layoutId="activeNavIndicator"
                className="absolute left-0 bottom-0 w-full h-[2px] bg-accent rounded-full shadow-[0_0_8px_rgba(0,215,255,0.8)]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </a>
        );
      })}
    </nav>
  );
}
