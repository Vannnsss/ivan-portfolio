"use client";

import React from "react";
import { motion } from "framer-motion";
import { experienceData, educationData } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { FiBriefcase, FiBookOpen, FiCalendar } from "react-icons/fi";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 xl:py-28 relative scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-2">
              Career & Academia
            </span>
            <h2 className="text-gradient">Experience & Education</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-purple-500 mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Professional Experience Column */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-3 mb-6 pb-2 border-b border-border/50">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <FiBriefcase className="text-lg" />
                </div>
                <h3 className="text-xl font-bold text-white">Work Experience</h3>
              </div>

              <div className="space-y-6">
                {experienceData.map((exp, index) => (
                  <div
                    key={index}
                    className="cosmic-glass cosmic-glass-hover rounded-2xl p-6 relative overflow-hidden group"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs text-accent font-mono flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20">
                        <FiCalendar /> {exp.duration}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-accent transition-colors">
                      {exp.position}
                    </h4>
                    <p className="text-sm text-cyan-300 font-mono mb-4">{exp.company}</p>

                    <p className="text-sm text-muted-foreground leading-relaxed font-mono mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-muted-foreground border border-white/5"
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
                <h3 className="text-xl font-bold text-white">Academic & Studies</h3>
              </div>

              <div className="space-y-5">
                {educationData.map((edu, index) => (
                  <div
                    key={index}
                    className="cosmic-glass cosmic-glass-hover rounded-2xl p-5 relative overflow-hidden group"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs text-purple-400 font-mono flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-950/40 border border-purple-500/20">
                        <FiCalendar /> {edu.duration}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-muted-foreground font-mono mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-muted-foreground/80 leading-relaxed font-mono">
                      {edu.detail}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

