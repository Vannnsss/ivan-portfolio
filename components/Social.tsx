"use client";

import React from "react";
import { socialLinks } from "@/lib/data";

interface SocialProps {
  containerStyles?: string;
  iconStyles?: string;
}

export default function Social({
  containerStyles = "flex items-center gap-4",
  iconStyles = "w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent hover:shadow-[0_0_15px_rgba(0,215,255,0.4)] transition-all duration-300",
}: SocialProps) {
  return (
    <div className={containerStyles}>
      {socialLinks.map((item, index) => {
        const Icon = item.icon;
        return (
          <a
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
            aria-label={item.name}
          >
            <Icon className="text-lg" />
          </a>
        );
      })}
    </div>
  );
}
