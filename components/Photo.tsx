"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
        }}
        className="relative flex items-center justify-center"
      >
        {/* Soft Cosmic Backlight Behind Photo */}
        <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] xl:w-[350px] xl:h-[350px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-blue-500/10 blur-3xl pointer-events-none" />

        {/* Orbiting Orbital Cosmic SVG Circles */}
        <motion.svg
          className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] xl:w-[390px] xl:h-[390px] pointer-events-none max-w-full"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Inner Accent Ring */}
          <motion.circle
            cx="253"
            cy="253"
            r="238"
            stroke="rgba(0, 215, 255, 0.45)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="20 180 60 80"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Outer Cosmic Orbit Ring */}
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="rgba(168, 85, 247, 0.5)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeDasharray="40 120 15 220"
            animate={{
              rotate: [360, 0],
            }}
            transition={{
              duration: 32,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.svg>

        {/* Original Personal Photo Container (src="/assets/ivan.jpeg") */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.8, duration: 0.8, ease: "easeInOut" },
          }}
          className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] xl:w-[330px] xl:h-[330px] absolute rounded-full overflow-hidden border border-cyan-400/30 shadow-[0_0_40px_rgba(0,215,255,0.2)] bg-gradient-to-b from-cyan-950/20 to-black/80"
        >
          <Image
            src="/assets/ivan.jpeg"
            priority
            quality={100}
            fill
            alt="Ivan Septa Adi Pratama, Fullstack Developer"
            className="object-cover object-center scale-105 select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
