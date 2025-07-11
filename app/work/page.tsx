"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper"; // ✅ TYPE IMPORT
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

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Project 1",
    description:
      "Sistem Informasi Koperasi Desa/Kelurahan berbasis web yang dibangun menggunakan Yii Framework, Bootstrap, dan JavaScript. Menampilkan informasi layanan koperasi secara interaktif dan responsif, termasuk modul simpan pinjam, logistik, berita, dan laporan transparansi. Desain modern dan user-friendly memudahkan masyarakat dalam mengakses informasi dan layanan yang tersedia.",
    stack: [
      { name: "Yii PHP Framework" },
      { name: "JavaScript" },
      { name: "Bootstrap" },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/Vannnsss",
  },
  {
    num: "02",
    category: "Fullstack Web",
    title: "Project 2",
    description:
      "Website ini dirancang untuk mendeteksi gangguan gastrointestinal seperti gastritis, GERD, dan tukak lambung. Menggunakan PHP Native, Flask Python, dan Machine Learning, pengguna cukup memasukkan gejala untuk mendapatkan prediksi penyakit secara cepat. Cocok untuk deteksi awal sebelum konsultasi medis.",
    stack: [
      { name: "PHP Native" },
      { name: "Flask Python" },
      { name: "Machine Learning" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/Vannnsss",
  },
  {
    num: "03",
    category: "Portfolio",
    title: "Project 3",
    description:
      "Website ini merupakan portofolio pribadi yang menampilkan profil, pengalaman, dan proyek yang telah diselesaikan. Dibangun menggunakan Next.js, Tailwind CSS, dan Node.js, situs ini dirancang dengan antarmuka modern, ringan, dan responsif. Pengunjung dapat melihat informasi lengkap, mengunduh CV, serta menghubungi langsung melalui berbagai platform.",
    stack: [
      { name: "Next Js" },
      { name: "Tailwind CSS" },
      { name: "Node Js" },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "https://github.com/Vannnsss",
  },
];

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
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* LEFT CONTENT */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-outline text-dark">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-dark group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-dark">{project.description}</p>
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>

              <div className="flex items-center gap-10">
                <Link href={project.live} passHref>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="w-[70px] h-[70px] rounded-full bg-black/10 flex justify-center items-center group cursor-pointer">
                          <BsArrowUpRight className="text-dark text-3xl group-hover:text-accent" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github} passHref>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="w-[70px] h-[70px] rounded-full bg-black/10 flex justify-center items-center group cursor-pointer">
                          <BsGithub className="text-dark text-3xl group-hover:text-accent" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT (SLIDER) */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-fill"
                        alt={`Slide ${index + 1}`}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-[#27272c] hover:bg-accent text-white text-[22px] bg-dark rounded-full w-11 h-11 flex items-center justify-center cursor-pointer"
                iconsStyles="text-xl"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
