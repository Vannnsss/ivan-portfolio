"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";
import { projects } from "@/lib/data";

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* LEFT CONTENT */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-5">
              <div className="text-8xl leading-none font-extrabold text-outline text-white/20 font-mono">
                {project.num}
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-accent">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-white transition-all duration-300">
                {project.title}
              </h2>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Stack tags */}
              <ul className="flex gap-2 flex-wrap pt-2">
                {project.stack.map((item, index) => (
                  <li
                    key={index}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-secondary/60 text-cyan-200 border border-white/5"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/10 my-2"></div>

              {/* Action buttons */}
              <div className="flex items-center gap-4">
                {project.live ? (
                  <Link href={project.live} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="w-[54px] h-[54px] rounded-full bg-accent text-black flex justify-center items-center group cursor-pointer hover:bg-cyan-300 transition-colors">
                            <BsArrowUpRight className="text-2xl" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="font-mono text-xs">Live System</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : (
                  <span className="text-xs font-mono text-muted-foreground bg-white/5 px-3 py-2 rounded-xl border border-white/5">
                    Production Internal
                  </span>
                )}

                {project.github && (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="w-[54px] h-[54px] rounded-full bg-secondary/40 border border-white/10 flex justify-center items-center group cursor-pointer hover:border-accent hover:text-accent transition-colors">
                            <BsGithub className="text-white text-2xl group-hover:text-accent" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="font-mono text-xs">GitHub Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT (SLIDER) */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[480px] mb-8"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[360px] sm:h-[440px] relative rounded-3xl overflow-hidden border border-border/80 bg-black/40">
                    <Image
                      src={item.image}
                      fill
                      className="object-cover object-top"
                      alt={item.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070814] via-transparent to-transparent opacity-80" />
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-4 z-20 justify-end"
                btnStyles="bg-secondary/80 hover:bg-accent text-white hover:text-black rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-colors border border-white/10"
                iconsStyles="text-lg"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
