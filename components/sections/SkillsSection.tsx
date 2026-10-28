"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillsList } from "@/lib/data";
import { fadeInUp, staggerContainer, scaleUp } from "@/lib/animations";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 xl:py-28 relative scroll-mt-20">
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
              Capabilities
            </span>
            <h2 className="text-gradient">Technical Arsenal</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-purple-500 mx-auto mt-4 rounded-full" />
            <p className="text-muted-foreground text-sm sm:text-base mt-4 font-mono">
              Teknologi modern dan framework handal yang saya gunakan dalam membangun aplikasi web responsif, scalable, dan cerdas.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 max-w-5xl mx-auto"
          >
            {skillsList.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  variants={scaleUp}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="cosmic-glass cosmic-glass-hover rounded-2xl p-6 flex flex-col items-center text-center group cursor-default relative overflow-hidden"
                >
                  {/* Subtle top indicator */}
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground/70 font-mono mb-4 px-2 py-0.5 rounded-full bg-white/5 border border-white/5">
                    {skill.category}
                  </div>

                  {/* Icon */}
                  <div className="text-4xl sm:text-5xl text-muted-foreground group-hover:text-accent group-hover:scale-110 transition-all duration-300 my-2">
                    <Icon />
                  </div>

                  {/* Name */}
                  <h3 className="text-sm font-semibold text-white mt-3 group-hover:text-accent transition-colors font-mono">
                    {skill.name}
                  </h3>

                  {/* Ambient Bottom Edge Glow */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

