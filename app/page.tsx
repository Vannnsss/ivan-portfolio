import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Ivan Septa Adi Pratama | Fullstack Developer",
  description:
    "Portofolio Pribadi Ivan Septa Adi Pratama — Fullstack Developer dengan keahlian Next.js, React, Laravel, Yii, Python, dan Machine Learning.",
  verification: {
    google: "mrcmxWAQHOBc70F_piZ40RGOCtut4qWXTaorFQG5Hh8",
  },
  keywords: [
    "Ivan Septa Adi Pratama",
    "Portofolio Web Developer",
    "Fullstack Developer",
    "Python",
    "Php Laravel",
    "Php Yii",
    "React Developer",
    "Next.js",
    "Machine Learning",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Ivan Septa Adi Pratama | Fullstack Developer",
    description:
      "Portofolio Pribadi Ivan Septa Adi Pratama — Fullstack Developer dengan keahlian Next.js, React, PHP Laravel, Yii, Python, dan Machine Learning.",
    url: "https://ivanseptaadipratama.vercel.app/",
    images: [
      {
        url: "/assets/ivan.jpeg",
        width: 1200,
        height: 630,
        alt: "Ivan Septa Adi Pratama",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivan Septa Adi Pratama | Fullstack Developer",
    description:
      "Fullstack Web Developer yang fokus pada Next.js, Yii, Laravel dan Machine Learning.",
    images: ["/assets/ivan.jpeg"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
