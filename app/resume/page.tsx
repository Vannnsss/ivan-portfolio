"use client";

import { FaJs, FaServer, FaTerminal } from "react-icons/fa";
import { SiPhp, SiYii, SiMysql, SiLinux, SiProxmox, SiNginx, SiGitlab, SiPython, SiFirebase } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "Pengalaman di lingkungan kerja produksi menangani aplikasi web end-to-end, integrasi API perbankan dan logistik, optimasi relasi database MySQL, serta administrasi server Linux dan Proxmox.",
  items: [
    {
      company: "PT Indah Logistik",
      position: "Software Engineer / Fullstack Developer",
      duration: "Juni 2025 - Present"
    }
  ]
};

const about = {
  title: "About Me",
  description: personalInfo.aboutDescription,
  info: [
    {
      fieldName: "Name", 
      fieldValue: personalInfo.name
    },
    {
      fieldName: "Role", 
      fieldValue: personalInfo.role
    },
    {
      fieldName: "Phone", 
      fieldValue: personalInfo.phone
    },
    {
      fieldName: "Experience", 
      fieldValue: personalInfo.experienceYears
    },
    {
      fieldName: "Instagram", 
      fieldValue: "1_vannn"
    },
    {
      fieldName: "LinkedIn", 
      fieldValue: "Ivan Septa Adi Pratama"
    },
    {
      fieldName: "Email", 
      fieldValue: personalInfo.email
    },
    {
      fieldName: "Location", 
      fieldValue: personalInfo.location
    },
  ]
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "Latar belakang pendidikan formal dan riset komputasi lanjutan, berfokus pada machine learning, arsitektur data, dan computer vision.",
  items: [
    {
      institution: "Universitas Pamulang",
      degree: "Magister Teknik Informatika (S2)",
      duration: "2025 - On Going",
      detail: "Penelitian tesis mengenai efektivitas vaksinasi dengan algoritma XGBoost."
    },
    {
      institution: "Universitas Pamulang",
      degree: "Sarjana Komputer - Teknik Informatika (S1)",
      duration: "2021 - 2025",
      detail: "Fokus rekayasa perangkat lunak, database relasional, dan computer vision deteksi wajah."
    },
  ]
};

const skills = {
  title: "My Skills & Tooling",
  description: "Kombinasi teknologi yang aktif digunakan dalam pekerjaan dan proyek produksi: PHP, Yii2, MySQL, JavaScript, Linux, Proxmox, Git/GitLab, Python, dan real-time stack.",
  skillList: [
    {
      icon: <SiPhp />,
      name: "PHP"
    },
    {
      icon: <SiYii />,
      name: "Yii2 Framework"
    },
    {
      icon: <SiMysql />,
      name: "MySQL & Relational Data"
    },
    {
      icon: <FaJs />,
      name: "JavaScript & jQuery"
    },
    {
      icon: <SiLinux />,
      name: "Linux Administration"
    },
    {
      icon: <SiProxmox />,
      name: "Proxmox VE"
    },
    {
      icon: <SiNginx />,
      name: "Nginx & PHP-FPM"
    },
    {
      icon: <SiGitlab />,
      name: "Git & GitLab"
    },
    {
      icon: <SiFirebase />,
      name: "Firebase / Firestore"
    },
    {
      icon: <SiPython />,
      name: "Python & Flask"
    },
    {
      icon: <FaTerminal />,
      name: "SSH & Networking"
    },
    {
      icon: <FaServer />,
      name: "REST API Integration"
    },
  ]
};

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-24"
    >
      <div className="container mx-auto px-4">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-8 sm:gap-12 xl:gap-[60px]"
        >
          <TabsList className="grid grid-cols-2 sm:flex sm:flex-row xl:flex-col w-full max-w-full xl:max-w-[380px] mx-auto xl:mx-0 gap-2.5 sm:gap-3 xl:gap-4">
            <TabsTrigger value="experience" className="text-xs sm:text-base py-2.5 sm:py-3">Experience</TabsTrigger>
            <TabsTrigger value="education" className="text-xs sm:text-base py-2.5 sm:py-3">Education</TabsTrigger>
            <TabsTrigger value="skills" className="text-xs sm:text-base py-2.5 sm:py-3">Skills & Tooling</TabsTrigger>
            <TabsTrigger value="about" className="text-xs sm:text-base py-2.5 sm:py-3">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-5 sm:gap-[30px] text-center xl:text-left">
                <h3 className="text-2xl sm:text-4xl font-bold text-white">{experience.title}</h3>
                <p className="max-w-[650px] text-muted-foreground mx-auto xl:mx-0 font-mono text-xs sm:text-sm leading-relaxed">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-4 sm:gap-[20px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-secondary/40 border border-white/10 p-4 sm:p-6 rounded-2xl flex flex-col justify-center items-center lg:items-start gap-2"
                      >
                        <span className="text-accent text-xs font-mono">{item.duration}</span>
                        <h4 className="text-lg sm:text-xl font-bold text-white text-center lg:text-left">
                          {item.position}
                        </h4>
                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                          <p className="text-muted-foreground font-mono text-xs sm:text-sm">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-5 sm:gap-[30px] text-center xl:text-left">
                <h3 className="text-2xl sm:text-4xl font-bold text-white">{education.title}</h3>
                <p className="max-w-[650px] text-muted-foreground mx-auto xl:mx-0 font-mono text-xs sm:text-sm leading-relaxed">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-4 sm:gap-[20px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-secondary/40 border border-white/10 p-4 sm:p-6 rounded-2xl flex flex-col justify-center items-center lg:items-start gap-2"
                      >
                        <span className="text-purple-400 text-xs font-mono">{item.duration}</span>
                        <h4 className="text-base sm:text-lg font-bold text-white text-center lg:text-left">
                          {item.degree}
                        </h4>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                          <p className="text-white/80 font-mono text-xs sm:text-sm">{item.institution}</p>
                        </div>
                        {item.detail && (
                          <p className="text-xs text-muted-foreground font-mono mt-1">{item.detail}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-5 sm:gap-[30px]">
                <div className="text-center xl:text-left">
                  <h3 className="text-2xl sm:text-4xl font-bold text-white">{skills.title}</h3>
                  <p className="max-w-[650px] text-muted-foreground mx-auto xl:mx-0 font-mono text-xs sm:text-sm leading-relaxed mt-2">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                    {skills.skillList.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[105px] sm:h-[120px] bg-secondary/30 rounded-2xl flex flex-col justify-center items-center group border border-white/5 hover:border-accent/40 transition-all p-2">
                              <div className="text-3xl sm:text-4xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                              <span className="text-[11px] sm:text-xs font-mono text-muted-foreground mt-2 group-hover:text-white text-center break-words px-1">
                                {skill.name}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize font-mono">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* About Me */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-5 sm:gap-[30px]">
                <h3 className="text-2xl sm:text-4xl font-bold text-white">{about.title}</h3>
                <p className="max-w-[650px] text-muted-foreground mx-auto xl:mx-0 font-mono text-xs sm:text-sm leading-relaxed">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-[650px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="bg-secondary/30 border border-white/5 p-3.5 sm:p-4 rounded-xl flex items-center gap-3 sm:gap-4"
                    >
                      <span className="text-muted-foreground text-xs font-mono min-w-[85px] sm:min-w-[90px]">
                        {item.fieldName}:
                      </span>
                      <span className="text-white text-xs sm:text-sm font-semibold break-words font-mono min-w-0">
                        {item.fieldValue}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
