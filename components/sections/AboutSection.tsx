"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { FiUser, FiMail, FiPhone, FiMapPin, FiAward, FiCheckCircle, FiServer, FiLayers, FiDatabase } from "react-icons/fi";

const attributes = [
  { label: "Full Name", value: personalInfo.name, icon: FiUser },
  { label: "Current Role", value: "Software Engineer (PT Indah Logistik)", icon: FiAward },
  { label: "Email Address", value: personalInfo.email, icon: FiMail },
  { label: "Direct Phone", value: personalInfo.phone, icon: FiPhone },
  { label: "Location", value: personalInfo.location, icon: FiMapPin },
  { label: "Core Focus", value: "Fullstack Web & Linux SysAdmin", icon: FiCheckCircle },
];

const coreHighlights = [
  {
    icon: FiLayers,
    title: "Fullstack & API Engineering",
    desc: "Pengembangan backend PHP/Yii2 teruji, RESTful API, integrasi payment & shipping, serta frontend interaktif.",
  },
  {
    icon: FiDatabase,
    title: "Data Integrity & Performance",
    desc: "Perancangan skema relasional MySQL, transaksi data multi-toko, penanganan constraint unik, dan optimasi query.",
  },
  {
    icon: FiServer,
    title: "Linux & Production Operations",
    desc: "Pengelolaan server Linux via SSH, virtualisasi Proxmox VE, konfigurasi Nginx/Cloudflare, dan minimal downtime.",
  },
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
          className="max-w-5xl mx-auto"
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
            className="cosmic-glass rounded-3xl p-5 sm:p-8 md:p-10 border border-border/80 shadow-2xl relative overflow-hidden mb-8"
          >
            {/* Subtle glow border corner */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-block max-w-full px-3 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-400/20 text-cyan-300 text-[11px] sm:text-xs font-mono mb-4 break-words">
              Fullstack Developer | Linux Server & System Administration
            </div>

            <h3 className="text-xl sm:text-3xl font-bold text-white mb-4 sm:mb-5 leading-snug">
              Bridging Applications, Databases, and Server Infrastructure
            </h3>

            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg mb-6 font-mono">
              {personalInfo.aboutDescription}
            </p>

            {/* Engineering Mindset Callout */}
            <div className="p-4 sm:p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 mb-6 sm:mb-8">
              <p className="text-xs sm:text-sm text-cyan-200/90 font-mono leading-relaxed">
                <span className="text-accent font-semibold">Karakter Teknis:</span> Developer yang memahami hubungan erat antara logika aplikasi, relasi database, integrasi API, infrastruktur server, dan kebutuhan operasional bisnis — bukan sekadar berfokus pada pembuatan tampilan antarmuka.
              </p>
            </div>

            {/* Quick Details Attributes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5 pt-6 border-t border-border/40">
              {attributes.map((attr, index) => {
                const Icon = attr.icon;
                return (
                  <div
                    key={index}
                    className="p-3.5 rounded-xl bg-secondary/30 border border-white/5 flex items-center gap-3.5 hover:border-accent/30 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                      <Icon className="text-base" />
                    </div>
                    <div className="overflow-hidden min-w-0">
                      <span className="text-[11px] text-muted-foreground block font-mono">
                        {attr.label}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-white break-words block">
                        {attr.value}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Core Highlights Pillars */}
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {coreHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="cosmic-glass cosmic-glass-hover rounded-2xl p-5 sm:p-6 border border-border/70 relative group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent group-hover:text-black transition-all duration-300">
                    <Icon className="text-xl" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 font-mono group-hover:text-accent transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground font-mono leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
