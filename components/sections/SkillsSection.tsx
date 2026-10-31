"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillClusters, skillsList } from "@/lib/data";
import { fadeInUp, staggerContainer, scaleUp } from "@/lib/animations";
import { FiCheck, FiGrid, FiList } from "react-icons/fi";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<"clusters" | "grid">("clusters");

  return (
    <section id="skills" className="py-20 xl:py-28 relative scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-12 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-2">
              Capabilities & Tooling
            </span>
            <h2 className="text-gradient">Technical Competencies</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-purple-500 mx-auto mt-4 rounded-full" />
            <p className="text-muted-foreground text-sm sm:text-base mt-4 font-mono">
              Kompetensi teknis yang diprioritaskan berdasarkan implementasi nyata di lingkungan produksi, arsitektur server, dan riset komputasi.
            </p>

            {/* View Switcher */}
            <div className="inline-flex flex-col sm:flex-row items-stretch sm:items-center p-1.5 sm:p-1 rounded-2xl sm:rounded-xl bg-secondary/40 border border-white/10 mt-6 gap-1.5 sm:gap-1 max-w-full">
              <button
                onClick={() => setActiveTab("clusters")}
                className={`px-3.5 sm:px-4 py-2 rounded-xl sm:rounded-lg text-[11px] sm:text-xs font-mono transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === "clusters"
                    ? "bg-accent text-black font-semibold shadow-[0_0_15px_rgba(0,215,255,0.4)]"
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                <FiList className="text-sm shrink-0" />
                <span>6 Core Competency Areas</span>
              </button>
              <button
                onClick={() => setActiveTab("grid")}
                className={`px-3.5 sm:px-4 py-2 rounded-xl sm:rounded-lg text-[11px] sm:text-xs font-mono transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === "grid"
                    ? "bg-accent text-black font-semibold shadow-[0_0_15px_rgba(0,215,255,0.4)]"
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                <FiGrid className="text-sm shrink-0" />
                <span>Quick Stack View</span>
              </button>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {activeTab === "clusters" ? (
              /* 6 Structured Clusters with Practical Engineering Points */
              <motion.div
                key="clusters"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              >
                {skillClusters.map((cluster, index) => {
                  const Icon = cluster.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={scaleUp}
                      whileHover={{ y: -6, transition: { duration: 0.2 } }}
                      className="cosmic-glass cosmic-glass-hover rounded-3xl p-5 sm:p-7 flex flex-col justify-between border border-border/80 relative overflow-hidden group"
                    >
                      {/* Top icon and title */}
                      <div>
                        <div className="flex items-center justify-between gap-3 mb-4">
                          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 text-accent flex items-center justify-center text-xl group-hover:scale-110 group-hover:bg-accent group-hover:text-black transition-all duration-300">
                            <Icon />
                          </div>
                          <span className="text-[11px] font-mono text-muted-foreground bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                            0{index + 1}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors font-mono mb-4">
                          {cluster.title}
                        </h3>

                        {/* Practical task points */}
                        <ul className="space-y-2.5 mb-6">
                          {cluster.points.map((point, pIdx) => (
                            <li
                              key={pIdx}
                              className="text-xs sm:text-sm text-muted-foreground font-mono flex items-start gap-2.5 leading-relaxed"
                            >
                              <span className="text-accent mt-1 shrink-0">
                                <FiCheck />
                              </span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech tags footer */}
                      <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5 mt-auto">
                        {cluster.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-secondary/50 text-cyan-200/80 border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Ambient bottom line */}
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              /* Quick Tech Icons Grid */
              <motion.div
                key="grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-5"
              >
                {skillsList.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={scaleUp}
                      whileHover={{ y: -6, transition: { duration: 0.2 } }}
                      className="cosmic-glass cosmic-glass-hover rounded-2xl p-4 sm:p-6 flex flex-col items-center text-center group cursor-default relative overflow-hidden"
                    >
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground/70 font-mono mb-3 sm:mb-4 px-2 py-0.5 rounded-full bg-white/5 border border-white/5">
                        {skill.category}
                      </div>

                      <div className="text-3xl sm:text-4xl md:text-5xl text-muted-foreground group-hover:text-accent group-hover:scale-110 transition-all duration-300 my-1 sm:my-2">
                        <Icon />
                      </div>

                      <h3 className="text-xs sm:text-sm font-semibold text-white mt-2 sm:mt-3 group-hover:text-accent transition-colors font-mono break-words">
                        {skill.name}
                      </h3>

                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Verification & Pragmatic Engineering Note */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 p-4 sm:p-5 rounded-2xl cosmic-glass border border-white/10 text-center max-w-3xl mx-auto"
          >
            <p className="text-xs text-muted-foreground font-mono leading-relaxed">
              💡 <span className="text-white font-medium">Pragmatic Tech Note:</span> Menghindari klaim keahlian berlebihan. Portfolio ini mengutamakan teknologi yang benar-benar aktif diimplementasikan dalam repositori produksi dan lingkungan server harian.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
