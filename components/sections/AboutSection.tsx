"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { FiUser, FiMail, FiPhone, FiMapPin, FiAward, FiCheckCircle } from "react-icons/fi";

const attributes = [
  { label: "Full Name", value: personalInfo.name, icon: FiUser },
  { label: "Email Address", value: personalInfo.email, icon: FiMail },
  { label: "Direct Phone", value: personalInfo.phone, icon: FiPhone },
  { label: "Location", value: personalInfo.location, icon: FiMapPin },
  { label: "Field Experience", value: personalInfo.experienceYears, icon: FiAward },
  { label: "Availability", value: "Open for Opportunities", icon: FiCheckCircle },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 xl:py-28 relative scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-2">
              Background & Overview
            </span>
            <h2 className="text-gradient">About Me</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-purple-500 mx-auto mt-4 rounded-full" />
          </motion.div>

          {/* Editorial Card */}
          <motion.div
            variants={fadeInUp}
            className="cosmic-glass rounded-2xl p-6 sm:p-10 border border-border/80 shadow-2xl relative overflow-hidden"
          >
            {/* Subtle glow border corner */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <h3 className="text-2xl font-bold text-white mb-4">
              Building Robust Web Applications & Intelligent Systems
            </h3>

            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-8 font-mono">
              {personalInfo.aboutDescription}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-border/40">
              {attributes.map((attr, index) => {
                const Icon = attr.icon;
                return (
                  <div
                    key={index}
                    className="p-3.5 rounded-xl bg-secondary/30 border border-white/5 flex items-center gap-3.5 hover:border-accent/30 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                      <Icon className="text-lg" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-xs text-muted-foreground block">
                        {attr.label}
                      </span>
                      <span className="text-sm font-semibold text-white truncate block">
                        {attr.value}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

