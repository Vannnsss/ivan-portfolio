"use client";

import { FaJs, FaReact, FaNodeJs, FaLaravel } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs ,SiYii, SiBootstrap} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea} from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const experience = {
  icon: "/assets/resume/badge.svg",
  title:"My Experience",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed totam officiis nostrum aspernatur in ullam laboriosam praesentium quasi eveniet velit?",
  items: [
    {
      company:"Indah Logistic",
      position: "Fullstack Developer",
      duration: "June 2025 - Present"
    },
    {
      company:"Indah Logistic",
      position: "Fullstack Developer",
      duration: "June 2025 - Present"
    },
    {
      company:"Indah Logistic",
      position: "Fullstack Developer",
      duration: "June 2025 - Present"
    },
    {
      company:"Indah Logistic",
      position: "Fullstack Developer",
      duration: "June 2025 - Present"
    },
    {
      company:"Indah Logistic",
      position: "Fullstack Developer",
      duration: "June 2025 - Present"
    },
    {
      company:"Indah Logistic",
      position: "Fullstack Developer",
      duration: "June 2025 - Present"
    },
    {
      company:"Indah Logistic",
      position: "Fullstack Developer",
      duration: "June 2025 - Present"
    },
    {
      company:"Indah Logistic",
      position: "Fullstack Developer",
      duration: "June 2025 - Present"
    },
  ]
};

const about = {
  title : " About me",
  description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est temporibus, commodi error nesciunt suscipit maxime ipsa fugiat rem accusamus?",
  info: [
    {
      fieldName : "Name", 
      fieldValue : "Ivan Septa Adi Pratama"
    },
    {
      fieldName : "Phone", 
      fieldValue : "085230217420"
    },
    {
      fieldName : "Experience", 
      fieldValue : "1 year of experience"
    },
    {
      fieldName : "Instagram", 
      fieldValue : "1_vannn"
    },
    {
      fieldName : "Linkedin", 
      fieldValue : "Ivan Septa Adi Pratama"
    },
    {
      fieldName : "email", 
      fieldValue : "ivanseptaa@gmail.com"
    },
  ]
};

const education = {
  icon: "/assets/resume/cap.svg",
  title:"My Education",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed totam officiis nostrum aspernatur in ullam laboriosam praesentium quasi eveniet velit?",
  items: [
    {
      institution:"Pamulang University",
      degree: "Bachelor of Computer Science",
      duration: "2021 - 2025"
    },
    {
      institution:"Online Course",
      degree: "Web Programming",
      duration: "2022"
    },
    {
      institution:"Online Course",
      degree: "Machine Learning",
      duration: "2024"
    },
    {
      institution:"Online Course",
      degree: "Programming",
      duration: "2023"
    },
  ]
};

const skills = {
  title: "My Skills",
  description: "ipsum dolor sit amet consectetur adipisicing elit. Harum eaque molestiae voluptatibus mollitia, esse amet accusamus libero perferendis minus dicta.",
  skillList: [
    {
      icon: <SiYii/>,
      name:"Yii Framework"
    },
    {
      icon: <SiBootstrap/>,
      name:"Bootstrap"
    },
    {
      icon: <FaJs/>,
      name:"JavaScript"
    },
    {
      icon: <FaReact/>,
      name:"React"
    },
    {
      icon: <FaLaravel/>,
      name:"Laravel"
    },
    {
      icon: <FaNodeJs/>,
      name:"Node.Js"
    },
    {
      icon: <SiTailwindcss/>,
      name:"Tailwind Css"
    },
    {
      icon: <SiNextdotjs/>,
      name:"Next.js"
    },
  ]
}

const Resume = () => {
  return (
    <motion.div
    initial={{ opacity:0 }}
    animate={ {
      opacity:1,
      transition: {delay: 2.4, duration: 0.4,  ease: "easeIn" },
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py:0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]">

          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">

            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return ( 
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flxe flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li> 
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return ( 
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flxe flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.institution}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.degree}</p>
                        </div>
                      </li> 
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skills, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skills.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-black capitalize">{skills.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[750px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-2 max-w-[870px] mx-auto xl:mx-0">{about.info.map((item, index)=> {
                  return (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60 ">{item.fieldName}</span>
                      <span className="text-xl text-accent">{item.fieldValue}</span>
                    </li>
                  );
                })}</ul>
              </div>
            </TabsContent>

          </div>

        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
