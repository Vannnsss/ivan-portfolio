"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/lib/data";
import { fadeInUp, staggerContainer, scaleUp } from "@/lib/animations";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { FiFolder } from "react-icons/fi";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 xl:py-28 relative scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-2">
              Portfolio & Engineering Showcase
            </span>
            <h2 className="text-gradient">Featured Projects & Systems</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-purple-500 mx-auto mt-4 rounded-full" />
            <p className="text-muted-foreground text-sm sm:text-base mt-4 font-mono">
              Eksplorasi sistem produksi nyata: ekosistem logistik nasional (Indah Logistik, Indah Expres, Josal), marketplace  (IndahMall), migrasi infrastruktur Linux & Proxmox, sistem presensi pengenalan wajah, serta arsitektur live commerce real-time.
            </p>
          </motion.div>

          {/* Projects Editorial Cosmic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((item, index) => (
              <motion.div
                key={index}
                variants={scaleUp}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="cosmic-glass cosmic-glass-hover rounded-3xl overflow-hidden flex flex-col justify-between border border-border/80 group"
              >
                {/* Project Image Container */}
                <div>
                  <div className="relative w-full h-[220px] sm:h-[240px] overflow-hidden bg-black/40 border-b border-border/50">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070814] via-transparent to-transparent opacity-80" />

                    {/* Project Number Badge */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 sm:px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-accent">
                      {item.num}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 max-w-[65%] sm:max-w-[70%] truncate px-2.5 sm:px-3 py-1 rounded-full bg-cyan-950/80 backdrop-blur-md border border-cyan-400/30 text-[10px] sm:text-[11px] font-mono text-cyan-300">
                      {item.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-accent transition-colors duration-200 mb-2 leading-snug">
                      {item.title}
                    </h3>

                    {/* Repositories Tagging */}
                    {item.repositories && item.repositories.length > 0 && (
                      <div className="flex items-center gap-1.5 flex-wrap mb-3">
                        <FiFolder className="text-xs text-accent shrink-0" />
                        <span className="text-[10px] sm:text-[11px] font-mono text-muted-foreground">Repos:</span>
                        {item.repositories.map((repo, rIdx) => (
                          <span
                            key={rIdx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-500/20"
                          >
                            {repo}
                          </span>
                        ))}
                      </div>
                    )}

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-mono line-clamp-4 mb-4">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer with Stack and Actions */}
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2 border-t border-white/5 mt-auto">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-5">
                    {item.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] sm:text-[11px] font-mono px-2 sm:px-2.5 py-0.5 rounded-md bg-secondary/60 text-muted-foreground border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action links */}
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    {item.live ? (
                      <a
                        href={item.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 rounded-xl bg-accent text-black font-semibold text-xs flex items-center justify-center gap-1.5 hover:bg-cyan-300 transition-colors"
                      >
                        <span>Live Demo</span>
                        <BsArrowUpRight />
                      </a>
                    ) : (
                      <div className="flex-1 py-2 px-3 rounded-xl bg-white/5 text-muted-foreground/60 text-xs text-center font-mono">
                        Internal Production
                      </div>
                    )}

                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl border border-border/80 bg-secondary/40 text-muted-foreground hover:text-white hover:border-accent hover:shadow-[0_0_12px_rgba(0,215,255,0.3)] transition-all"
                        aria-label="GitHub Repository"
                      >
                        <BsGithub className="text-base" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
