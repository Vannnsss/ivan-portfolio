import { FaJs, FaReact, FaNodeJs, FaLaravel } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiYii, SiBootstrap, SiPython, SiMysql } from "react-icons/si";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const personalInfo = {
  name: "Ivan Septa Adi Pratama",
  role: "Fullstack Developer",
  shortBio: "I am an IT graduate specializing in fullstack web development, with additional experience in machine learning.",
  aboutDescription: "Lulusan S1 & Mahasiswa S2 Informatika yang antusias membangun aplikasi web modern, menyukai tantangan teknis, arsitektur scalable, dan terus belajar teknologi terkini.",
  cvUrl: "/uploads/Resume.pdf",
  phone: "085230217420",
  email: "ivanseptaa@gmail.com",
  location: "DKI Jakarta, Indonesia",
  experienceYears: "2+ Years",
};

export const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    path: "https://www.linkedin.com/in/ivan-septa-adi-pratama-a25b00271/",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    path: "https://github.com/Vannnsss",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    path: "https://www.instagram.com/1_vannn/",
  },
];

export const stats = [
  {
    num: 12,
    suffix: "+",
    text: "Projects Completed",
  },
  {
    num: 8,
    suffix: "+",
    text: "Core Technologies",
  },
  {
    num: 2,
    suffix: "+",
    text: "Years Experience",
  },
  {
    num: 100,
    suffix: "%",
    text: "Dedication & Focus",
  },
];

export const skillsList = [
  { name: "Next.js", icon: SiNextdotjs, category: "Frontend" },
  { name: "React", icon: FaReact, category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend" },
  { name: "JavaScript", icon: FaJs, category: "Languages" },
  { name: "Python / ML", icon: SiPython, category: "Backend & AI" },
  { name: "Laravel", icon: FaLaravel, category: "Backend" },
  { name: "Yii Framework", icon: SiYii, category: "Backend" },
  { name: "Node.js", icon: FaNodeJs, category: "Backend" },
  { name: "MySQL", icon: SiMysql, category: "Database" },
  { name: "Bootstrap", icon: SiBootstrap, category: "Frontend" },
];

export const experienceData = [
  {
    company: "Indah Logistic",
    position: "Fullstack Developer",
    duration: "June 2025 - Present",
    description: "Berpengalaman menangani frontend & backend, arsitektur sistem, debugging, integrasi API enterprise, dan penerapan machine learning dalam lingkungan kerja profesional.",
    technologies: ["PHP", "Next.js", "MySQL", "API Integration"],
  },
];

export const educationData = [
  {
    institution: "Pamulang University",
    degree: "Master of Computer Science",
    duration: "2025 - On Going",
    detail: "Fokus riset komputasi lanjutan, machine learning, dan skalabilitas software.",
  },
  {
    institution: "Pamulang University",
    degree: "Bachelor of Computer Science",
    duration: "2021 - 2025",
    detail: "Lulusan S1 Informatika dengan fokus pengembangan web, struktur data, algoritma, dan proyek AI.",
  },
  {
    institution: "Online Course Certification",
    degree: "Machine Learning Specialization",
    duration: "2024",
    detail: "Praktik supervised learning, neural networks, data preprocessing, dan model evaluation.",
  },
  {
    institution: "Online Course Certification",
    degree: "Fullstack Web & Software Programming",
    duration: "2023",
    detail: "Mendalami arsitektur MVC, RESTful APIs, modern frontend, dan database design.",
  },
];

export const projects = [
  {
    num: "01",
    category: "Fullstack / Logistics",
    title: "Sistem Informasi Koperasi Desa",
    description:
      "Sistem Informasi Koperasi Desa/Kelurahan berbasis web yang dibangun menggunakan Yii Framework, Bootstrap, dan JavaScript. Menampilkan informasi layanan koperasi secara interaktif dan responsif, termasuk modul simpan pinjam, logistik, berita, dan transparansi.",
    stack: ["Yii PHP Framework", "JavaScript", "Bootstrap", "MySQL"],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/Vannnsss",
  },
  {
    num: "02",
    category: "Fullstack Web & AI",
    title: "Deteksi Gangguan Gastrointestinal (ML)",
    description:
      "Website cerdas untuk mendeteksi gangguan pencernaan seperti gastritis, GERD, dan tukak lambung. Mengintegrasikan backend PHP Native, Flask Python API, dan model Machine Learning agar pasien dapat melakukan self-check sebelum konsultasi medis.",
    stack: ["Flask Python", "Machine Learning", "PHP", "Responsive UI"],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/Vannnsss",
  },
  {
    num: "03",
    category: "Modern Web / Portfolio",
    title: "Personal Engineering Portfolio",
    description:
      "Portfolio interaktif bertema cosmic antarmuka modern, dibangun menggunakan Next.js App Router, Tailwind CSS, dan Framer Motion. Mengutamakan performa, animasi fluid 60fps, responsivitas, dan estetika dark cosmic visual.",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/assets/work/thumb3.png",
    live: "https://ivanseptaadipratama.vercel.app/",
    github: "https://github.com/Vannnsss",
  },
];

export const contactDetails = [
  {
    icon: FaEnvelope,
    title: "Email",
    value: "ivanseptaa@gmail.com",
    href: "mailto:ivanseptaa@gmail.com",
    label: "Fast Response",
  },
  {
    icon: FaPhoneAlt,
    title: "Phone / WhatsApp",
    value: "+62 852 3021 7420",
    href: "https://wa.me/6285230217420",
    label: "Available",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    value: "DKI Jakarta, Indonesia",
    href: "#",
    label: "Remote / On-site",
  },
];
