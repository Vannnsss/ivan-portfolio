"use client";

import React from "react";
import { motion } from "framer-motion";
import { experienceData, educationData, workPrinciples } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { FiBriefcase, FiBookOpen, FiCalendar, FiCompass } from "react-icons/fi";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 xl:py-28 relative scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-2">
              Career, Academia & Engineering Principles
            </span>
            <h2 className="text-gradient">Experience & Education</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-purple-500 mx-auto mt-4 rounded-full" />
            <p className="text-muted-foreground text-sm sm:text-base mt-4 font-mono max-w-2xl mx-auto">
              Perjalanan profesional mengelola aplikasi bisnis produksi, penelitian akademis komputasi, dan prinsip rekayasa sistem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            {/* Professional Experience Column */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-3 mb-6 pb-2 border-b border-border/50">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <FiBriefcase className="text-lg" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Work Experience</h3>
                  <span className="text-xs text-muted-foreground font-mono">Produksi & Rekayasa Perangkat Lunak</span>
                </div>
              </div>

              <div className="space-y-6">
                {experienceData.map((exp, index) => (
                  <div
                    key={index}
                    className="cosmic-glass cosmic-glass-hover rounded-3xl p-6 sm:p-7 relative overflow-hidden group border border-border/80"
                  >
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs text-accent font-mono flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                        <FiCalendar /> {exp.duration}
                      </span>
                      <span className="text-[11px] font-mono text-cyan-300/80 bg-cyan-950/40 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                        Active Full-time
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                      {exp.position}
                    </h4>
                    <p className="text-sm font-semibold text-cyan-300 font-mono mb-4">{exp.company}</p>

                    <p className="text-sm text-muted-foreground leading-relaxed font-mono mb-5">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary/50 text-cyan-200/90 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Academic Education Column */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-3 mb-6 pb-2 border-b border-border/50">
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
                  <FiBookOpen className="text-lg" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Academic Education</h3>
                  <span className="text-xs text-muted-foreground font-mono">Formal Degrees & Advanced Research</span>
                </div>
              </div>

              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <div
                    key={index}
                    className="cosmic-glass cosmic-glass-hover rounded-3xl p-6 sm:p-7 relative overflow-hidden group border border-border/80"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs text-purple-300 font-mono flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/20">
                        <FiCalendar /> {edu.duration}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-muted-foreground font-mono mb-3">
                      {edu.institution}
                    </p>

                    <p className="text-xs sm:text-sm text-muted-foreground font-mono leading-relaxed">
                      {edu.detail}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Section 4 of Prompt: Cara Bekerja Sebagai Developer (Engineering Principles) */}
          <motion.div variants={fadeInUp} className="pt-8 border-t border-border/40">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center text-xl">
                <FiCompass />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Engineering Principles & Work Values</h3>
                <p className="text-xs sm:text-sm text-muted-foreground font-mono">
                  Prinsip kerja yang membedakan developer yang sekadar menulis kode dengan developer yang menjaga sistem tetap berjalan stabil di produksi.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {workPrinciples.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="cosmic-glass cosmic-glass-hover rounded-2xl p-6 border border-border/70 relative group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-accent flex items-center justify-center text-lg group-hover:scale-110 group-hover:bg-accent group-hover:text-black transition-all">
                          <Icon />
                        </div>
                        <span className="text-xs font-mono text-muted-foreground/60">{item.id}</span>
                      </div>
                      <h4 className="text-base font-bold text-white mb-2 font-mono group-hover:text-accent transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground font-mono leading-relaxed">
                        {item.description}
                      </p>
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
