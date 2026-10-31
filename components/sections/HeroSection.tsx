"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import { personalInfo, stats } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import CountUp from "react-countup";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] xl:min-h-screen flex flex-col justify-center pt-24 pb-12 xl:pt-28 xl:pb-14 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-8">
          {/* Left Text Intro */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center xl:text-left order-2 xl:order-none max-w-[580px]"
          >
            {/* Status Pill Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full border border-cyan-400/30 bg-cyan-950/30 text-cyan-300 text-[11px] sm:text-xs font-medium mb-4 max-w-full">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00d7ff] shrink-0" />
              <span className="truncate">Software Engineer & System Administrator</span>
            </motion.div>

            {/* Main Cosmic Headline */}
            <motion.h1 variants={fadeInUp} className="mb-3 break-words">
              Hello, I&apos;m <br />
              <span className="text-gradient">{personalInfo.name}</span>
            </motion.h1>

            <motion.div variants={fadeInUp} className="text-base sm:text-lg xl:text-xl font-semibold text-accent mb-4 leading-snug">
              {personalInfo.role}
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed mb-6 font-mono"
            >
              {personalInfo.shortBio}
            </motion.p>

            {/* CTAs & Socials */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-3.5 sm:gap-4 mb-6 sm:mb-8 w-full"
            >
              <a href={personalInfo.cvUrl} download className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-full bg-accent text-black font-semibold hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(0,215,255,0.5)] transition-all duration-300 gap-2 cursor-pointer h-11 text-xs sm:text-sm"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-base" />
                </Button>
              </a>

              <a href="#projects" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto rounded-full border-border/80 bg-secondary/30 text-foreground hover:border-accent hover:text-accent transition-all duration-300 gap-2 cursor-pointer h-11 text-xs sm:text-sm"
                >
                  <span>Explore Work</span>
                  <FiArrowRight />
                </Button>
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center xl:justify-start gap-4"
            >
              <span className="text-xs text-muted-foreground uppercase tracking-widest mr-2">
                Connect:
              </span>
              <Social />
            </motion.div>
          </motion.div>

          {/* Right Visual Photo with Cosmic Rings */}
          <div className="order-1 xl:order-none w-full xl:w-auto flex justify-center">
            <Photo />
          </div>
        </div>

        {/* Dynamic Metric Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-8 sm:mt-12 xl:mt-14 pt-6 sm:pt-8 border-t border-border/40 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
        >
          {stats.map((item, index) => (
            <div
              key={index}
              className="p-3 sm:p-4 rounded-xl cosmic-glass flex flex-col items-center xl:items-start text-center xl:text-left"
            >
              <div className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-white flex items-center mb-1">
                <CountUp end={item.num} duration={3} delay={0.5} />
                <span className="text-accent">{item.suffix}</span>
              </div>
              <p className="text-[11px] sm:text-xs text-muted-foreground font-mono leading-tight">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

