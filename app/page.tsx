import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Ivan Septa Adi Pratama | Fullstack Developer & Linux System Administrator",
  description:
    "Portofolio Profesional Ivan Septa Adi Pratama — Fullstack Developer & Linux System Administrator di PT Indah Logistik dengan fokus PHP, Yii2, MySQL, JavaScript, Linux, Proxmox, dan Machine Learning.",
  verification: {
    google: "mrcmxWAQHOBc70F_piZ40RGOCtut4qWXTaorFQG5Hh8",
  },
  keywords: [
    "Ivan Septa Adi Pratama",
    "Fullstack Developer",
    "Linux System Administrator",
    "PT Indah Logistik",
    "PHP Yii2",
    "MySQL",
    "Proxmox",
    "Python",
    "Machine Learning",
    "LiveKit",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Ivan Septa Adi Pratama | Fullstack Developer & Linux System Administrator",
    description:
      "Portofolio Profesional Ivan Septa Adi Pratama — Fullstack Developer & Linux System Administrator di PT Indah Logistik.",
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
    title: "Ivan Septa Adi Pratama | Fullstack Developer & Linux System Administrator",
    description:
      "Software Engineer di PT Indah Logistik yang fokus pada Fullstack Web (PHP/Yii2), Server Linux, Proxmox, dan AI.",
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
